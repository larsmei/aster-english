#!/usr/bin/env python3
"""Rebuild catalog.ts from the DocAster list plus local Markdown titles."""

from __future__ import annotations

import re
import urllib.request
from pathlib import Path

ROOT = Path("/workspace")
FR = ROOT / "src/content/fr"
EN = ROOT / "src/content/en"
LIST = "https://codeaster.gitlab.io/doc/docaster/manuals/man_u/other_pages/list/index.html"

PARTS = [
    ("U0", "How to read the manual", "Guide de lecture"),
    ("U1", "Getting started", "Prise en main"),
    ("U2", "Methodology", "Méthodologie"),
    ("U3", "Data files", "Fichiers de données"),
    ("U4", "Commands", "Commandes"),
    ("U7", "External interfaces", "Interfaces externes"),
]

KEEP = {
    "u0.00.01": (
        "How the U, R, D, V and A manuals are organised, and where to look before a first study.",
        "Organisation des manuels U, R, D, V et A, et par où commencer une première étude.",
    ),
    "u1.02.00": (
        "What code_aster is for: phenomena, finite elements, solvers, and the tools around a mechanical study.",
        "À quoi sert code_aster : phénomènes, éléments finis, solveurs et outils d’une étude mécanique.",
    ),
    "u1.03.00": (
        "Mesh, command file, supervisor, and the main stages of an analysis.",
        "Maillage, fichier de commandes, superviseur et grandes étapes d’une étude.",
    ),
    "u1.03.01": (
        "How the supervisor runs a command file, and the syntax of the command language.",
        "Rôle du superviseur et syntaxe du langage de commande.",
    ),
    "u1.03.02": (
        "Python methods that read tables, functions, meshes and results from the command file.",
        "Méthodes Python pour lire tables, fonctions, maillages et résultats depuis le fichier de commandes.",
    ),
    "u1.03.03": (
        "How to read the time and memory figures of a run, including JEVEUX and MUMPS.",
        "Lire les indicateurs de temps et de mémoire, y compris JEVEUX et MUMPS.",
    ),
    "u1.04.00": (
        "AsterStudy, astk, run_aster, run_sbatch and run_ctest — how a study is actually launched.",
        "AsterStudy, astk, run_aster, run_sbatch et run_ctest : lancer une étude.",
    ),
    "u1.05.00": (
        "The FORMA00 thin tank under hydrostatic pressure, command by command.",
        "Le réservoir mince FORMA00 sous pression hydrostatique, commande par commande.",
    ),
}


def fetch_list() -> list[tuple[str, str]]:
    html = urllib.request.urlopen(
        urllib.request.Request(LIST, headers={"User-Agent": "Mozilla/5.0"}), timeout=60
    ).read().decode("utf-8", "replace")
    rows = re.findall(
        r"/man_u/(u[0-7])/(u[0-7]\.\d+\.\d+)/index\.html\">\s*u[0-7]\.\d+\.\d+:\s*(.*?)\s*</a>",
        html,
        re.S,
    )
    seen = []
    out = []
    for _part, docid, title in rows:
        if docid in seen:
            continue
        seen.append(docid)
        title = re.sub(r"\s+", " ", title).strip()
        out.append((docid, title))
    return out


def blurb_from(path: Path) -> str:
    if not path.exists():
        return ""
    text = path.read_text()
    lines = [ln.strip() for ln in text.splitlines()]
    picked = []
    started = False
    for line in lines:
        if line.startswith("#"):
            if started:
                break
            continue
        if not line or line.startswith("```") or line.startswith("|") or line.startswith("!["):
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
    return sentence


def js(value: str) -> str:
    return value.replace("\\", "\\\\").replace('"', '\\"')


def main():
    docs = fetch_list()
    parts_present = []
    for part, en, fr in PARTS:
        if any(docid.startswith(part.lower()) for docid, _ in docs):
            parts_present.append((part, en, fr))
    body = []
    body.append('export type Lang = "en" | "fr";\n')
    body.append("\nexport type DocMeta = {\n")
    body.append("  id: string;\n")
    union = " | ".join(f'"{part}"' for part, _, _ in parts_present)
    body.append(f"  part: {union};\n")
    body.append("  sourceUrl: string;\n")
    body.append("  blurb: Record<Lang, string>;\n")
    body.append("};\n\n")
    body.append("export const PARTS: { id: " + union + "; en: string; fr: string }[] = [\n")
    for part, en, fr in parts_present:
        body.append(f'  {{ id: "{part}", en: "{js(en)}", fr: "{js(fr)}" }},\n')
    body.append("];\n\nexport const CATALOG: DocMeta[] = [\n")
    for docid, title in docs:
        part = docid[:2].upper()
        en_b, fr_b = KEEP.get(docid, ("", ""))
        if not fr_b:
            fr_b = blurb_from(FR / f"{docid}.md") or title
        if not en_b:
            en_b = blurb_from(EN / f"{docid}.md") or fr_b
        url = f"https://codeaster.gitlab.io/doc/docaster/manuals/man_u/{docid[:2]}/{docid}/index.html"
        body.append("  {\n")
        body.append(f'    id: "{docid}",\n')
        body.append(f'    part: "{part}",\n')
        body.append(f'    sourceUrl: "{url}",\n')
        body.append("    blurb: {\n")
        body.append(f'      en: "{js(en_b)}",\n')
        body.append(f'      fr: "{js(fr_b)}",\n')
        body.append("    },\n")
        body.append("  },\n")
    body.append("];\n\n")
    body.append("export function docById(id: string): DocMeta | undefined {\n")
    body.append("  return CATALOG.find((d) => d.id === id);\n")
    body.append("}\n")
    (ROOT / "src/content/catalog.ts").write_text("".join(body))
    print(f"catalog {len(docs)} docs")


if __name__ == "__main__":
    main()
