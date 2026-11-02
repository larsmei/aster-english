#!/usr/bin/env python3
"""Insert Reference-manual entries into catalog.ts from local Markdown."""

from __future__ import annotations

import re
from pathlib import Path

ROOT = Path("/workspace")
CATALOG = ROOT / "src/content/catalog.ts"
FR = ROOT / "src/content/fr"


def blurb(path: Path) -> str:
    picked: list[str] = []
    started = False
    for line in path.read_text(encoding="utf-8").splitlines():
        line = line.strip()
        if line.startswith("#") or line.startswith("```") or line.startswith("|") or line.startswith("!["):
            if started and picked:
                break
            continue
        if not line or line in {"> **Table des matières**", "> **Résumé:**", "**Résumé:**"}:
            if started and picked:
                break
            continue
        started = True
        picked.append(line.lstrip("> ").replace("**", ""))
        if len(" ".join(picked)) > 160:
            break
    sentence = re.sub(r"\s+", " ", " ".join(picked)).strip()
    sentence = re.sub(r"\[([^\]]+)\]\([^)]*\)", r"\1", sentence)
    if len(sentence) > 180:
        sentence = sentence[:177].rsplit(" ", 1)[0] + "…"
    return sentence or path.stem


def js(value: str) -> str:
    return value.replace("\\", "\\\\").replace('"', '\\"')


def main() -> None:
    text = CATALOG.read_text(encoding="utf-8")
    present = set(re.findall(r'id: "(r\d+\.\d+\.\d+)"', text))
    docs = sorted(p.stem for p in FR.glob("r*.md"))
    fresh = [docid for docid in docs if docid not in present]
    if not fresh:
        print(f"catalog already has {len(present)} reference documents")
        return
    blocks = []
    for docid in fresh:
        part = docid[:2].upper()
        url = f"https://codeaster.gitlab.io/doc/docaster/manuals/man_r/{docid[:2]}/{docid}/index.html"
        sentence = js(blurb(FR / f"{docid}.md"))
        blocks.append(
            "  {\n"
            f'    id: "{docid}",\n'
            f'    part: "{part}",\n'
            f'    sourceUrl: "{url}",\n'
            "    blurb: {\n"
            f'      en: "{sentence}",\n'
            f'      fr: "{sentence}",\n'
            "    },\n"
            "  },\n"
        )
    marker = "];\n\nexport function docById"
    if marker not in text:
        raise SystemExit("catalog marker missing")
    text = text.replace(marker, "".join(blocks) + marker, 1)
    CATALOG.write_text(text, encoding="utf-8")
    print(f"added {len(fresh)} reference documents")


if __name__ == "__main__":
    main()
