#!/usr/bin/env python3
"""Build public/fulltext-fr.json and public/fulltext-en.json for in-browser search.

Nested *.json files are not served by the dev server, so the indexes live at
the public root. Text keeps command names, underscores and code, drops images
and markup, and collapses whitespace.
"""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"

IMG = re.compile(r"!\[[^\]]*\]\([^)]*\)")
LINK = re.compile(r"\[([^\]]*)\]\([^)]*\)")
HTML = re.compile(r"<[^>]+>")
WS = re.compile(r"\s+")
HEADING = re.compile(r"^#{1,6}\s+")


def plain(md: str) -> str:
    lines: list[str] = []
    in_fence = False
    for line in md.splitlines():
        stripped = line.strip()
        if stripped.startswith("```"):
            in_fence = not in_fence
            continue
        if stripped.startswith("<!--") or stripped.startswith("!["):
            continue
        if "![" in line:
            line = IMG.sub(" ", line)
        if "](" in line:
            line = LINK.sub(r"\1", line)
        if not in_fence:
            line = HEADING.sub("", line)
        line = line.replace("**", " ").replace("`", " ").replace("$", " ").replace("*", " ")
        lines.append(line)
    text = HTML.sub(" ", " ".join(lines))
    return WS.sub(" ", text).strip()


def title_of(md: str, docid: str) -> str:
    for line in md.splitlines():
        if not line.startswith("# "):
            continue
        raw = line[2:].strip().replace("**", "").replace("`", "").strip()
        if raw.lower().startswith(docid.lower()):
            raw = raw[len(docid) :].strip(" -—:")
        return WS.sub(" ", raw).strip() or docid
    return docid


def build(lang: str) -> None:
    folder = ROOT / "src" / "content" / lang
    ids: list[str] = []
    titles: list[str] = []
    texts: list[str] = []
    for path in sorted(folder.glob("*.md")):
        docid = path.stem
        md = path.read_text(encoding="utf-8", errors="replace")
        title = title_of(md, docid)
        body = plain(md)
        ids.append(docid)
        titles.append(title)
        texts.append(f"{docid} {title} {body}")
    PUBLIC.mkdir(parents=True, exist_ok=True)
    dest = PUBLIC / f"fulltext-{lang}.json"
    dest.write_text(
        json.dumps({"ids": ids, "titles": titles, "text": texts}, ensure_ascii=False, separators=(",", ":")),
        encoding="utf-8",
    )
    chars = sum(len(item) for item in texts)
    print(f"{lang}: {len(ids)} docs, {chars / 1e6:.1f}M chars, {dest.stat().st_size / 1e6:.1f} MB")


if __name__ == "__main__":
    build("fr")
    build("en")
