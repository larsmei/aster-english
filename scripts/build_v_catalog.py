#!/usr/bin/env python3
"""Insert Validation documents into catalog.ts and heads.ts."""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path("/workspace")
FR = ROOT / "src/content/fr"
EN = ROOT / "src/content/en"
INDEX = Path("/tmp/aster-v/index.html")
V_TS = ROOT / "src/content/catalog-v.ts"
CATALOG = ROOT / "src/content/catalog.ts"
HEADS = ROOT / "src/content/heads.ts"
BASE = "https://codeaster.gitlab.io/doc/docaster/manuals/man_v"


def titles_from_index() -> dict[str, str]:
    html = INDEX.read_text(errors="replace")
    rows = re.findall(
        r"/man_v/v\d+/(v\d+\.\d+\.\d+)/index\.html\">\s*v\d+\.\d+\.\d+:\s*(.*?)\s*</a>",
        html,
        re.S,
    )
    out = {}
    for docid, title in rows:
        out[docid] = re.sub(r"\s+", " ", title).strip()
    return out


def heading(md: str, docid: str) -> str:
    for line in md.splitlines():
        if line.startswith("# "):
            raw = line[2:].strip()
            raw = re.sub(r"^\d+\s+", "", raw)
            raw = re.sub(rf"\*\*{re.escape(docid)}\*\*", "", raw, flags=re.I)
            raw = re.sub(rf"^{re.escape(docid)}\s+", "", raw, flags=re.I)
            raw = re.sub(r"\s+", " ", raw).strip(" -–")
            return raw.strip()
    return docid


def lead(md: str, limit: int = 420) -> str:
    text = re.sub(r"```.*?```", " ", md, flags=re.S)
    text = re.sub(r"\$\$.*?\$\$", " ", text, flags=re.S)
    text = re.sub(r"\$[^$\n]+\$", " ", text)
    text = re.sub(r"!\[[^\]]*\]\([^)]*\)", " ", text)
    text = re.sub(r"[#>*`|]", " ", text)
    text = re.sub(r"\s+", " ", text).strip()
    return text[:limit].rstrip()


def js(value: str) -> str:
    return json.dumps(value, ensure_ascii=False)


def write_v_catalog(docs: list[tuple[str, str, str]]) -> None:
    payload = []
    for docid, fr, en in docs:
        payload.append(
            {
                "id": docid,
                "part": "V" + docid[1],
                "sourceUrl": f"{BASE}/{docid[:2]}/{docid}/index.html",
                "blurb": {"en": en, "fr": fr},
            }
        )
    body = json.dumps(payload, ensure_ascii=False, indent=2)
    V_TS.write_text(
        'import type { DocMeta } from "./catalog";\n\n'
        "export const V_CATALOG = JSON.parse(`"
        + body.replace("\\", "\\\\").replace("`", "\\`").replace("${", "\\${")
        + "`) as DocMeta[];\n"
    )


def catalog_block() -> str:
    return "  // @v-catalog\n  ...V_CATALOG,\n  // @v-catalog-end"


def heads_block(rows: list[dict[str, str]]) -> str:
    parts = ["  // @v-heads"]
    for row in rows:
        parts.append(
            f"  {js(row['id'])}: {{\n"
            f"    \"frTitle\": {js(row['frTitle'])},\n"
            f"    \"frLead\": {js(row['frLead'])},\n"
            f"    \"enTitle\": {js(row['enTitle'])},\n"
            f"    \"enLead\": {js(row['enLead'])},\n"
            "  },"
        )
    parts.append("  // @v-heads-end")
    return "\n".join(parts)


def replace_span(text: str, start: str, end: str, block: str, fallback_before: str) -> str:
    pattern = re.compile(re.escape(start) + r".*?" + re.escape(end), re.S)
    if pattern.search(text):
        return pattern.sub(block, text, count=1)
    index = text.rfind(fallback_before)
    if index < 0:
        raise SystemExit(f"anchor missing: {fallback_before[:40]}")
    return text[:index] + block + "\n" + text[index:]


def main() -> None:
    index_titles = titles_from_index()
    ids = sorted(path.stem for path in FR.glob("v*.md"))
    catalog_rows = []
    head_rows = []
    for docid in ids:
        fr_md = (FR / f"{docid}.md").read_text()
        en_path = EN / f"{docid}.md"
        en_md = en_path.read_text() if en_path.exists() else ""
        fr_title = heading(fr_md, docid) or index_titles.get(docid, docid)
        en_title = heading(en_md, docid) if en_md else fr_title
        fr_blurb = index_titles.get(docid, fr_title)
        en_blurb = en_title if en_md else fr_blurb
        catalog_rows.append((docid, fr_blurb, en_blurb))
        head_rows.append(
            {
                "id": docid,
                "frTitle": fr_title,
                "enTitle": en_title,
                "frLead": lead(fr_md),
                "enLead": lead(en_md) if en_md else lead(fr_md),
            }
        )
    write_v_catalog(catalog_rows)
    catalog = CATALOG.read_text()
    if 'from "./catalog-v"' not in catalog:
        catalog = 'import { V_CATALOG } from "./catalog-v";\n' + catalog
    catalog = replace_span(
        catalog,
        "  // @v-catalog",
        "  // @v-catalog-end",
        catalog_block(),
        "];\n\nexport function docById",
    )
    CATALOG.write_text(catalog)
    heads = HEADS.read_text()
    heads = replace_span(
        heads,
        "  // @v-heads",
        "  // @v-heads-end",
        heads_block(head_rows),
        "};\n",
    )
    HEADS.write_text(heads)
    print(f"catalog {len(catalog_rows)} heads {len(head_rows)}")


if __name__ == "__main__":
    main()
