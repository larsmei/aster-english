"""Insert display equations and missing figures from the DocAster HTML.

French markdown is aligned to the official pages. The same insertions are
copied into the English file when the two files still share a block skeleton.
"""

from __future__ import annotations

import html
import re
import sys
import time
import urllib.error
import urllib.request
from collections import Counter
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
FR = ROOT / "src/content/fr"
EN = ROOT / "src/content/en"
FIG = ROOT / "public/figures"
CACHE = Path("/tmp/aster-html")
UA = "aster-english-restore/1.0"


def norm_text(raw: str) -> str:
    raw = re.sub(r"<a\b[^>]*>.*?</a>", " ", raw, flags=re.S)
    raw = re.sub(r"<[^>]+>", " ", raw)
    raw = html.unescape(raw)
    raw = re.sub(r"\\\(.+?\\\)", " ", raw)
    raw = re.sub(r"\$[^$]+\$", " ", raw)
    raw = raw.replace("\xa0", " ").replace("’", "'").replace("‘", "'")
    raw = raw.replace("“", '"').replace("”", '"').replace("«", '"').replace("»", '"')
    raw = re.sub(r"[#*_`]", "", raw)
    raw = re.sub(r"\s+", " ", raw).strip().lower()
    raw = re.sub(r"^\d+(?:\.\d+)*\.?\s*", "", raw)
    return raw


def similar(left: str, right: str) -> bool:
    if not left or not right:
        return False
    a, b = left[:48], right[:48]
    if a == b:
        return True
    return len(a) >= 24 and (a in right or b in left)


def split_blocks(text: str) -> list[dict]:
    lines = text.splitlines()
    blocks: list[dict] = []
    i = 0
    while i < len(lines):
        if not lines[i].strip():
            i += 1
            continue
        start = i
        line = lines[i]
        if line.startswith("$$"):
            i += 1
            while i < len(lines) and lines[i].strip() != "$$":
                i += 1
            i = min(i + 1, len(lines))
            raw = "\n".join(lines[start:i])
            body = re.sub(r"^\$\$\s*|\s*\$\$$", "", raw).strip()
            blocks.append({"kind": "math", "raw": raw, "key": re.sub(r"\s+", "", body), "text": ""})
            continue
        if line.startswith("```"):
            i += 1
            while i < len(lines) and not lines[i].startswith("```"):
                i += 1
            i = min(i + 1, len(lines))
            blocks.append({"kind": "code", "raw": "\n".join(lines[start:i]), "text": ""})
            continue
        if line.startswith("#"):
            blocks.append({"kind": "h", "raw": line, "text": norm_text(line.lstrip("#"))})
            i += 1
            continue
        if line.startswith("!["):
            name = line.split("/")[-1].rstrip(")")
            blocks.append({"kind": "img", "raw": line, "text": name})
            i += 1
            continue
        if re.match(r"^(\s*[-*]|\s*\d+\.)\s", line):
            buf = [line]
            i += 1
            while i < len(lines) and lines[i].strip() and (
                re.match(r"^(\s*[-*]|\s*\d+\.)\s", lines[i]) or lines[i].startswith("  ")
            ):
                buf.append(lines[i])
                i += 1
            raw = "\n".join(buf)
            blocks.append({"kind": "list", "raw": raw, "text": norm_text(re.sub(r"(?m)^(\s*[-*]|\s*\d+\.)\s", "", raw))})
            continue
        buf = [line]
        i += 1
        while i < len(lines) and lines[i].strip() and not lines[i].startswith(("#", "$$", "```", "![")) and not re.match(
            r"^(\s*[-*]|\s*\d+\.)\s", lines[i]
        ):
            buf.append(lines[i])
            i += 1
        raw = "\n".join(buf)
        blocks.append({"kind": "p", "raw": raw, "text": norm_text(raw)})
    return blocks


def join_blocks(blocks: list[dict]) -> str:
    parts = [block["raw"].rstrip() for block in blocks]
    return "\n\n".join(parts).rstrip() + "\n"


def fetch(url: str, dest: Path) -> str:
    if dest.exists() and dest.stat().st_size > 0:
        return dest.read_text(encoding="utf-8", errors="replace")
    dest.parent.mkdir(parents=True, exist_ok=True)
    request = urllib.request.Request(url, headers={"User-Agent": UA})
    last = None
    for attempt in range(3):
        try:
            with urllib.request.urlopen(request, timeout=40) as response:
                data = response.read()
            dest.write_bytes(data)
            return data.decode("utf-8", errors="replace")
        except (urllib.error.URLError, TimeoutError) as error:
            last = error
            time.sleep(0.4 * (attempt + 1))
    raise last  # type: ignore[misc]


def article(text: str) -> str:
    match = re.search(r"<article\b[^>]*>(.*)</article>", text, re.S)
    return match.group(1) if match else ""


def content_pages(index_url: str, index_html: str, cache: Path) -> list[tuple[str, str]]:
    pages: list[tuple[str, str]] = []
    body = article(index_html)
    if body.count('class="math') or len(re.findall(r"<p[ >]", body)) > 4:
        pages.append((index_url, index_html))
    seen = set()
    for href in re.findall(r'href="([^"]+\.html)"', index_html):
        if href.startswith(("http", "..", "#")) or "search" in href or "genindex" in href:
            continue
        name = href.split("?")[0]
        if name in seen or name == "index.html":
            continue
        seen.add(name)
        url = index_url.rsplit("/", 1)[0] + "/" + name
        try:
            html_text = fetch(url, cache / name.replace("/", "_"))
        except Exception:
            continue
        pages.append((url, html_text))
    return pages


def events_of(pages: list[tuple[str, str]]) -> list[tuple]:
    found = []
    for page_url, text in pages:
        body = article(text)
        pattern = re.compile(
            r"<h([1-6])\b[^>]*>(.*?)</h\1>|<p\b[^>]*>(.*?)</p>|"
            r'<div class="math[^"]*">\s*\\\[(.*?)\\\]\s*</div>|'
            r'<img\b[^>]+src="([^"]+)"|<li\b[^>]*>(.*?)</li>',
            re.S,
        )
        for match in pattern.finditer(body):
            if match.group(1):
                text_value = norm_text(match.group(2))
                if text_value:
                    found.append(("h", text_value))
            elif match.group(3) is not None:
                text_value = norm_text(match.group(3))
                if text_value:
                    found.append(("p", text_value))
            elif match.group(4) is not None:
                math = html.unescape(match.group(4)).strip()
                if "\\newcommand" in math[:80] or math.count("\\newcommand") > 2:
                    continue
                found.append(("math", math))
            elif match.group(5):
                src = match.group(5)
                if "_static" in src or "logo" in src:
                    continue
                name = src.split("/")[-1].split("?")[0]
                found.append(("img", name, page_url, src))
            elif match.group(6) is not None:
                text_value = norm_text(match.group(6))
                if text_value:
                    found.append(("li", text_value))
    return found


def locate(blocks: list[dict], kind: str, value: str, start: int) -> int | None:
    limit = min(len(blocks), start + (30 if kind == "p" else 15))
    for index in range(start, limit):
        block = blocks[index]
        if kind == "p" and block["kind"] == "p" and similar(value, block["text"]):
            return index
        if kind == "h" and block["kind"] == "h" and similar(value, block["text"]):
            return index
        if kind == "img" and block["kind"] == "img" and value in block["raw"]:
            return index
        if kind == "li" and block["kind"] == "list" and similar(value[:80], block["text"][:80]):
            return index
    return None


def place(blocks: list[dict], events: list[tuple], docid: str) -> tuple[list[dict], dict]:
    existing = Counter(block["key"] for block in blocks if block["kind"] == "math")
    known_images = {block["text"] for block in blocks if block["kind"] == "img"}
    cursor = 0
    pending: list[dict] = []
    stats = {"math": 0, "img": 0, "dropped": 0, "matched": 0, "miss_p": 0}
    out: list[dict] = []
    emitted = 0

    def flush_until(index: int):
        nonlocal emitted
        while emitted < index:
            out.append(blocks[emitted])
            emitted += 1
        for item in pending:
            out.append(item)
            if item["kind"] == "math":
                stats["math"] += 1
            else:
                stats["img"] += 1
        pending.clear()

    for event in events:
        kind = event[0]
        if kind == "math":
            key = re.sub(r"\s+", "", event[1])
            if existing[key] > 0:
                existing[key] -= 1
                continue
            pending.append({"kind": "math", "raw": "$$\n" + event[1] + "\n$$", "key": key, "text": ""})
            continue
        if kind == "img":
            name, page_url, src = event[1], event[2], event[3]
            if name in known_images:
                continue
            dest = FIG / docid / name
            if not dest.exists():
                try:
                    fetch(urllib_join(page_url, src), dest)
                except Exception:
                    stats["dropped"] += 1
                    continue
            if dest.exists():
                known_images.add(name)
                pending.append({"kind": "img", "raw": f"![Figure](/figures/{docid}/{name})", "text": name})
            continue
        found = locate(blocks, kind, event[1], cursor)
        if found is None:
            if kind == "p":
                stats["miss_p"] += 1
                stats["dropped"] += sum(1 for item in pending if item["kind"] == "math")
                pending.clear()
            continue
        stats["matched"] += 1
        flush_until(found)
        cursor = found + 1
    while emitted < len(blocks):
        out.append(blocks[emitted])
        emitted += 1
    stats["dropped"] += sum(1 for item in pending if item["kind"] == "math")
    return out, stats


def urllib_join(base: str, src: str) -> str:
    if src.startswith("http"):
        return src
    return base.rsplit("/", 1)[0] + "/" + src.lstrip("./")


def skeleton(blocks: list[dict]) -> list[str]:
    return [block["kind"] for block in blocks if block["kind"] != "math"]


def apply_same_insertions(original: list[dict], updated: list[dict], target: list[dict]) -> list[dict] | None:
    if skeleton(original) != skeleton(target):
        return None
    before: list[list[dict]] = [[] for _ in range(len(original) + 1)]
    index = 0
    extras: list[dict] = []
    for block in updated:
        if index < len(original) and block["kind"] == original[index]["kind"] and block["raw"] == original[index]["raw"]:
            before[index] = extras
            extras = []
            index += 1
        else:
            extras.append(block)
    if index != len(original):
        return None
    before[len(original)] = extras
    out: list[dict] = []
    for index, block in enumerate(target):
        out.extend(before[index])
        out.append(block)
    out.extend(before[len(target)])
    return out


def catalog() -> list[tuple[str, str]]:
    text = (ROOT / "src/content/catalog.ts").read_text(encoding="utf-8")
    return re.findall(r'id: "([^"]+)",\n\s+part: "[^"]+",\n\s+sourceUrl: "([^"]+)"', text)


def restore_one(docid: str, url: str) -> str:
    cache = CACHE / docid
    try:
        index_html = fetch(url, cache / "index.html")
    except Exception as error:
        return f"{docid} fetch-failed {error}"
    pages = content_pages(url, index_html, cache)
    events = events_of(pages)
    math_count = sum(1 for event in events if event[0] == "math")
    image_count = sum(1 for event in events if event[0] == "img")
    if math_count == 0 and image_count == 0:
        return f"{docid} no-display"
    fr_path = FR / f"{docid}.md"
    en_path = EN / f"{docid}.md"
    if not fr_path.exists():
        return f"{docid} missing-fr"
    original = fr_path.read_text(encoding="utf-8")
    original_blocks = split_blocks(original)
    updated, stats = place(original_blocks, events, docid)
    changed = join_blocks(updated) != original
    en_note = "en-same"
    if changed:
        fr_path.write_text(join_blocks(updated), encoding="utf-8")
        if en_path.exists():
            copied = apply_same_insertions(original_blocks, updated, split_blocks(en_path.read_text(encoding="utf-8")))
            if copied is None:
                en_note = "en-skipped"
            else:
                en_path.write_text(join_blocks(copied), encoding="utf-8")
                en_note = "en-updated"
    return (
        f"{docid} html-math={math_count} html-img={image_count} "
        f"inserted={stats['math']} images={stats['img']} dropped={stats['dropped']} "
        f"miss_p={stats['miss_p']} {en_note}"
    )


def recover_one(docid: str, url: str) -> str:
    cache = CACHE / docid
    index_path = cache / "index.html"
    if not index_path.exists():
        return f"{docid} no-cache"
    fr_path = FR / f"{docid}.md"
    en_path = EN / f"{docid}.md"
    if not fr_path.exists():
        return f"{docid} missing-fr"
    original = fr_path.read_text(encoding="utf-8")
    blocks = split_blocks(original)
    have = {block["key"] for block in blocks if block["kind"] == "math"}
    events = events_of(content_pages(url, index_path.read_text(encoding="utf-8", errors="replace"), cache))
    items: list[tuple] = []
    pending: list[str] = []
    for event in events:
        if event[0] == "math":
            key = re.sub(r"\s+", "", event[1])
            if key not in have:
                pending.append(event[1])
            continue
        if event[0] in {"p", "h", "li"}:
            items.append((event[0], event[1], pending))
            pending = []
    text_blocks = [(index, block) for index, block in enumerate(blocks) if block["kind"] in {"p", "h", "list"}]

    def hits_for(kind: str, anchor: str) -> list[int]:
        found = []
        for index, (_block_index, block) in enumerate(text_blocks):
            if kind == "p" and block["kind"] == "p" and similar(anchor, block["text"]):
                found.append(index)
            elif kind == "h" and block["kind"] == "h" and similar(anchor, block["text"]):
                found.append(index)
            elif kind == "li" and block["kind"] == "list" and similar(anchor[:80], block["text"][:80]):
                found.append(index)
        return found

    before: dict[int, list[dict]] = {}
    placed = 0
    for number, (kind, anchor, maths) in enumerate(items):
        if not maths:
            continue
        hits = hits_for(kind, anchor)
        if len(hits) != 1 and number:
            prev_kind, prev_anchor, _previous = items[number - 1]
            narrowed = []
            for hit in hits:
                if hit == 0:
                    continue
                prev_index, prev_block = text_blocks[hit - 1]
                if prev_kind == "p" and prev_block["kind"] == "p" and similar(prev_anchor, prev_block["text"]):
                    narrowed.append(hit)
                elif prev_kind == "h" and prev_block["kind"] == "h" and similar(prev_anchor, prev_block["text"]):
                    narrowed.append(hit)
                elif prev_kind == "li" and prev_block["kind"] == "list" and similar(prev_anchor[:80], prev_block["text"][:80]):
                    narrowed.append(hit)
            hits = narrowed
        if len(hits) != 1:
            continue
        insert_at = text_blocks[hits[0]][0]
        bucket = before.setdefault(insert_at, [])
        for math in maths:
            bucket.append({"kind": "math", "raw": "$$\n" + math + "\n$$", "key": re.sub(r"\s+", "", math), "text": ""})
            placed += 1
    if not placed:
        return f"{docid} recover=0"
    updated: list[dict] = []
    for index, block in enumerate(blocks):
        updated.extend(before.get(index, []))
        updated.append(block)
    updated.extend(before.get(len(blocks), []))
    fr_path.write_text(join_blocks(updated), encoding="utf-8")
    note = "en-missing"
    if en_path.exists():
        copied = apply_same_insertions(blocks, updated, split_blocks(en_path.read_text(encoding="utf-8")))
        if copied is None:
            note = "en-skipped"
        else:
            en_path.write_text(join_blocks(copied), encoding="utf-8")
            note = "en-updated"
    return f"{docid} recover={placed} {note}"


def main() -> None:
    if len(sys.argv) > 1 and sys.argv[1] == "--recover":
        only = sys.argv[2] if len(sys.argv) > 2 else ""
        docs = [(docid, url) for docid, url in catalog() if not only or docid == only]
        for docid, url in docs:
            line = recover_one(docid, url)
            if not line.endswith("recover=0") and "no-cache" not in line:
                print(line, flush=True)
        return
    only = sys.argv[1] if len(sys.argv) > 1 else ""
    docs = [(docid, url) for docid, url in catalog() if not only or docid == only]
    print(f"docs {len(docs)}", flush=True)
    if only:
        print(restore_one(*docs[0]), flush=True)
        return
    with ThreadPoolExecutor(max_workers=6) as pool:
        futures = [pool.submit(restore_one, docid, url) for docid, url in docs]
        for future in as_completed(futures):
            print(future.result(), flush=True)


if __name__ == "__main__":
    main()
