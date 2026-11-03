#!/usr/bin/env python3
"""Translate Validation markdown, leaving code, math and keywords untouched."""

from __future__ import annotations

import json
import re
import sys
import time
from pathlib import Path

import ctranslate2
import sentencepiece as spm

ROOT = Path("/workspace")
FR = ROOT / "src/content/fr"
EN = ROOT / "src/content/en"
MODEL = Path("/root/.local/share/argos-translate/packages/translate-fr_en-1_9")
CACHE_PATH = Path("/tmp/v-mt-cache.json")

UNGLUE = re.compile(r"([A-Z][A-Z0-9_]{2,})([a-zàâäéèêëïîôùûüç])")
INLINE_CODE = re.compile(r"`[^`\n]*`")
INLINE_MATH = re.compile(r"\$(?:\\.|[^$\n])+\$")
LINK = re.compile(r"\[[^\]]*\]\([^)\s]+\)")
CAPS = re.compile(r"\b[A-Z][A-Z0-9_]{2,}\b")
DOCID = re.compile(r"\b[a-zA-Z]\d+\.\d+\.\d+\b")
QUOTED = re.compile(r"'(?:[A-Z0-9_]+)'")
KEEP = re.compile(
    r"\b(?:Poisson|Young|Lema[iî]tre|Weibull|Norton|Taheri|Terzaghi|Coulomb|Hooke|"
    r"Navier|Fourier|Laplace|Europlexus|Miss3D|MUMPS|JEVEUX|Salom[eé]|Homard|"
    r"code_aster|Code_Aster|AsterStudy|MED|HDF5|Point)\b",
    re.I,
)

# Longer phrases first. English is inserted as a protected token.
PHRASES: list[tuple[str, str]] = [
    ("grandeurs testées et résultats", "Tested quantities and results"),
    ("caractéristiques de la modélisation", "Modelling characteristics"),
    ("caractéristiques du maillage", "Mesh characteristics"),
    ("propriétés de matériaux", "Material properties"),
    ("propriétés du matériau", "Material properties"),
    ("références bibliographiques", "Bibliographical references"),
    ("problème de référence", "Reference problem"),
    ("solution de référence", "reference solution"),
    ("solution analytique", "analytical solution"),
    ("synthèse des résultats", "Summary of the results"),
    ("conditions aux limites", "boundary conditions"),
    ("condition aux limites", "boundary condition"),
    ("coefficient de poisson", "Poisson's ratio"),
    ("coefficient de coulomb", "Coulomb coefficient"),
    ("frottement de type coulomb", "Coulomb friction"),
    ("contact frottant", "frictional contact"),
    ("module d'young", "Young's modulus"),
    ("module d’young", "Young's modulus"),
    ("module de young", "Young's modulus"),
    ("degrés de liberté", "degrees of freedom"),
    ("degré de liberté", "degree of freedom"),
    ("taux de restitution de l'énergie", "energy release rate"),
    ("taux de restitution de l’énergie", "energy release rate"),
    ("élasticité linéaire", "linear elasticity"),
    ("thermique stationnaire", "steady-state thermal analysis"),
    ("thermique transitoire", "transient thermal analysis"),
    ("éléments de poutre droite", "straight beam elements"),
    ("élément de poutre droite", "straight beam element"),
    ("l’écart", "the difference"),
    ("l'écart", "the difference"),
    ("un temps fini", "a finite time"),
    ("modélisations", "modellings"),
    ("élément fini", "finite element"),
    ("appuis encastrés", "clamped supports"),
    ("appui encastré", "clamped support"),
    ("poutre élancée", "slender beam"),
    ("poutres élancées", "slender beams"),
    ("moment de flexion", "bending moment"),
    ("moments de flexion", "bending moments"),
    ("moment fléchissant", "bending moment"),
    ("réactions d'appuis", "support reactions"),
    ("réactions d’appuis", "support reactions"),
    ("réaction d'appui", "support reaction"),
    ("énergie de déformation", "strain energy"),
    ("loi de comportement", "constitutive law"),
    ("lois de comportement", "constitutive laws"),
    ("fichier de commandes", "command file"),
    ("mot-clé facteur", "factor keyword"),
    ("mot-clé", "keyword"),
    ("mots-clés", "keywords"),
    ("cas-test", "test case"),
    ("cas test", "test case"),
    ("pas de temps", "time step"),
    ("fichier de commandes", "command file"),
    ("temps fini", "finite time"),
    ("maillage", "mesh"),
    ("mailles", "mesh cells"),
    ("maille", "mesh cell"),
    ("nœuds", "nodes"),
    ("nœud", "node"),
    ("noeuds", "nodes"),
    ("noeud", "node"),
    ("éléments", "elements"),
    ("élément", "element"),
    ("encastrements", "clamped supports"),
    ("encastrement", "clamped support"),
    ("encastrées", "clamped"),
    ("encastrée", "clamped"),
    ("encastrés", "clamped"),
    ("encastré", "clamped"),
    ("axisymétriques", "axisymmetric"),
    ("axisymétrique", "axisymmetric"),
    ("grandeurs", "quantities"),
    ("grandeur", "quantity"),
    ("flèches", "deflections"),
    ("flèche", "deflection"),
    ("écarts", "differences"),
    ("écart", "difference"),
    ("raideur", "stiffness"),
    ("pesanteur", "gravity"),
    ("liaisons", "restraints"),
    ("liaison", "restraint"),
    ("patin frottant", "frictional slider"),
    ("patin", "slider"),
    ("effort tranchant", "shear force"),
    ("efforts tranchants", "shear forces"),
    ("raideur du ressort", "spring stiffness"),
    ("poutres droites", "straight beams"),
    ("poutre droite", "straight beam"),
    ("grandeur et unité", "quantity and unit"),
    ("groupe de mailles", "mesh-cell group"),
    ("groupe de nœuds", "node group"),
    ("groupe de noeuds", "node group"),
    ("post-traitement", "post-processing"),
    ("post-traitements", "post-processings"),
    ("non-régression", "non-regression"),
    ("non régression", "non-regression"),
]

EXACT = {
    "résumé": "Summary",
    "résumé:": "Summary:",
    "résumé :": "Summary:",
    "avertissement": "Warning",
    "remarque": "Note",
    "tableau": "Table",
    "figure": "Figure",
    "géométrie": "Geometry",
    "chargement": "Loading",
    "résultats": "Results",
    "introduction": "Introduction",
    "objectif": "Purpose",
    "objectifs": "Purposes",
    "conclusion": "Conclusion",
    "bibliographie": "Bibliography",
    "références": "References",
    "matériau": "Material",
    "matériaux": "Materials",
    "maillage": "Mesh",
    "modélisation": "Modelling",
    "limites": "Limits",
    "observations": "Observations",
    "liaisons": "Restraints",
    "liaison": "Restraint",
}

POST = [
    (re.compile(r"\bFish\b"), "Poisson"),
    (re.compile(r"\bYoung(?:'s)? module\b", re.I), "Young's modulus"),
    (re.compile(r"\bmodule of Young\b", re.I), "Young's modulus"),
    (re.compile(r"\bPoisson coefficient\b", re.I), "Poisson's ratio"),
    (re.compile(r"\bcoefficient of Poisson\b", re.I), "Poisson's ratio"),
    (re.compile(r"\brecessed support\b", re.I), "clamped support"),
    (re.compile(r"\brecessed\b", re.I), "clamped"),
    (re.compile(r"\b[Mm]odeling\b"), "Modelling"),
    (re.compile(r"\bknots\b"), "nodes"),
    (re.compile(r"\bknot\b"), "node"),
    (re.compile(r"\bwrinkler\b", re.I), "stiffness"),
    (re.compile(r"Code Aster"), "Code_Aster"),
    (re.compile(r"code aster"), "code_aster"),
]


def load_cache() -> dict[str, str]:
    if CACHE_PATH.exists():
        try:
            return json.loads(CACHE_PATH.read_text())
        except json.JSONDecodeError:
            return {}
    return {}


class Engine:
    def __init__(self) -> None:
        self.sp = spm.SentencePieceProcessor(model_file=str(MODEL / "sentencepiece.model"))
        self.translator = ctranslate2.Translator(
            str(MODEL / "model"),
            device="cpu",
            inter_threads=2,
            compute_type="int8",
        )
        self.cache = load_cache()
        self.pending: list[str] = []
        self.seen: set[str] = set()

    def queue(self, text: str) -> None:
        if text in self.cache or text in self.seen:
            return
        self.seen.add(text)
        self.pending.append(text)

    def flush(self) -> None:
        batch = self.pending
        self.pending = []
        step = 64
        total = len(batch)
        for start in range(0, total, step):
            chunk = batch[start : start + step]
            tokens = [self.sp.encode(item, out_type=str) or ["▁"] for item in chunk]
            results = self.translator.translate_batch(
                tokens,
                beam_size=1,
                max_batch_size=64,
                replace_unknowns=True,
            )
            for item, result in zip(chunk, results):
                pieces = result.hypotheses[0]
                text = self.sp.decode_pieces(pieces).replace("\u2581", " ").strip()
                self.cache[item] = text
            if start and start % 640 == 0:
                CACHE_PATH.write_text(json.dumps(self.cache, ensure_ascii=False))
                print(f"translated {start}/{total}", flush=True)
        CACHE_PATH.write_text(json.dumps(self.cache, ensure_ascii=False))

    def lookup(self, text: str) -> str:
        return self.cache.get(text, text)


def apply_phrases(text: str, slots: list[str]) -> str:
    for french, english in sorted(PHRASES, key=lambda item: len(item[0]), reverse=True):
        pattern = re.compile(r"\b" + re.escape(french) + r"\b", re.I)

        def repl(_match: re.Match[str], english: str = english) -> str:
            slots.append(english)
            return f"Xk{len(slots) - 1}X"

        text = pattern.sub(repl, text)
    return text


def protect(text: str) -> tuple[str, list[str]]:
    slots: list[str] = []
    text = apply_phrases(text, slots)

    def take(match: re.Match[str]) -> str:
        slots.append(match.group(0))
        return f"Xk{len(slots) - 1}X"

    text = INLINE_CODE.sub(take, text)
    text = INLINE_MATH.sub(take, text)
    text = LINK.sub(take, text)
    text = QUOTED.sub(take, text)
    text = KEEP.sub(take, text)
    text = CAPS.sub(take, text)
    text = DOCID.sub(take, text)
    return text, slots


def restore(text: str, slots: list[str]) -> str | None:
    def repl(match: re.Match[str]) -> str:
        index = int(match.group(1))
        if index < 0 or index >= len(slots):
            return match.group(0)
        return slots[index]

    text = re.sub(r"Xk\s*(\d+)\s*X", repl, text, flags=re.I)
    if re.search(r"Xk\s*\d+\s*X", text, flags=re.I):
        return None
    for pattern, value in POST:
        text = pattern.sub(value, text)
    return text


def prepare(text: str) -> str | None:
    """Return the protected string to translate, or None if no translation is needed."""
    stripped = text.strip()
    if not stripped:
        return None
    modelling = re.fullmatch(r"mod[eé]lisation\s+([A-Z])", stripped, re.I)
    if modelling:
        return None
    if stripped.lower() in EXACT:
        return None
    if not re.search(r"[A-Za-zÀ-ÿ]{3}", stripped):
        return None
    protected, slots = protect(stripped)
    bare = re.sub(r"Xk\d+X", " ", protected)
    if not re.search(r"[A-Za-zÀ-ÿ]{3}", bare):
        return None
    if restore(protected, slots) is None:
        return None
    return protected


def local_translation(text: str) -> str | None:
    stripped = text.strip()
    labelled = re.fullmatch(r"(Tableau|Figure)(\s+.*)?", stripped, re.I)
    if labelled:
        word = "Table" if labelled.group(1).lower() == "tableau" else "Figure"
        return word + (labelled.group(2) or "")
    modelling = re.fullmatch(r"mod[eé]lisation\s+([A-Z])", stripped, re.I)
    if modelling:
        return re.sub(r"mod[eé]lisation", "Modelling", stripped, count=1, flags=re.I)
    exact = EXACT.get(stripped.lower())
    if exact:
        return exact
    if not stripped or not re.search(r"[A-Za-zÀ-ÿ]{3}", stripped):
        return text
    protected, slots = protect(stripped)
    bare = re.sub(r"Xk\d+X", " ", protected)
    if not re.search(r"[A-Za-zÀ-ÿ]{3}", bare):
        return restore(protected, slots) or text
    return None


def translate_prepared(engine: Engine, text: str) -> str:
    local = local_translation(text)
    if local is not None:
        return local
    protected, slots = protect(text.strip())
    translated = engine.lookup(protected)
    back = restore(translated, slots)
    if back is None:
        return text
    if text[:1].isupper() and back[:1].islower():
        back = back[0].upper() + back[1:]
    return back


def translate_line(engine: Engine, line: str, queue: bool) -> str:
    heading = re.match(r"^(#{1,6}\s+(?:\d+(?:\.\d+)*\s+)?)(.*)$", line)
    quote = re.match(r"^(>\s*)(.*)$", line)
    bullet = re.match(r"^(\s*(?:[-*]|\d+\.)\s+)(.*)$", line)
    if heading and heading.group(2).strip():
        prefix, body = heading.group(1), heading.group(2).strip()
    elif quote and quote.group(2).strip():
        prefix, body = quote.group(1), quote.group(2)
    elif bullet and bullet.group(2).strip():
        prefix, body = bullet.group(1), bullet.group(2)
    else:
        prefix, body = "", line
    if queue:
        prepared = prepare(body) if body.strip() else None
        if prepared:
            engine.queue(prepared)
        return line
    if not body.strip():
        return line
    return f"{prefix}{translate_prepared(engine, body)}"


def translate_table(engine: Engine, block: str, queue: bool) -> str:
    out = []
    for line in block.split("\n"):
        if not line.startswith("|") or set(line.replace("|", "").replace(":", "").strip()) <= {"-", " "}:
            out.append(line)
            continue
        cells = line.split("|")
        done = []
        for index, cell in enumerate(cells):
            if index in {0, len(cells) - 1}:
                done.append(cell)
                continue
            stripped = cell.strip()
            if not stripped or stripped == "---":
                done.append(cell)
                continue
            if queue:
                prepared = prepare(stripped)
                if prepared:
                    engine.queue(prepared)
                done.append(cell)
            else:
                done.append(" " + translate_prepared(engine, stripped) + " ")
        out.append("|".join(done))
    return "\n".join(out)


def iter_blocks(text: str):
    lines = text.splitlines()
    index = 0
    while index < len(lines):
        line = lines[index]
        if line.startswith("```"):
            buf = [line]
            index += 1
            while index < len(lines) and not lines[index].startswith("```"):
                buf.append(lines[index])
                index += 1
            if index < len(lines):
                buf.append(lines[index])
                index += 1
            yield "keep", "\n".join(buf)
            continue
        if line.startswith("$$"):
            buf = [line]
            index += 1
            while index < len(lines) and lines[index].strip() != "$$":
                buf.append(lines[index])
                index += 1
            if index < len(lines):
                buf.append(lines[index])
                index += 1
            yield "keep", "\n".join(buf)
            continue
        if line.startswith("![") or line.strip() == "":
            yield "keep", line
            index += 1
            continue
        if line.startswith("|"):
            buf = [line]
            index += 1
            while index < len(lines) and lines[index].startswith("|"):
                buf.append(lines[index])
                index += 1
            yield "table", "\n".join(buf)
            continue
        buf = [line]
        index += 1
        while index < len(lines) and lines[index].strip() and not lines[index].startswith(("```", "$$", "|", "![")):
            buf.append(lines[index])
            index += 1
        yield "text", "\n".join(buf)


def unglue_text(text: str) -> str:
    pieces = []
    for kind, block in iter_blocks(text):
        pieces.append(block if kind == "keep" else UNGLUE.sub(r"\1 \2", block))
    return "\n".join(pieces).rstrip() + "\n"


def walk(engine: Engine, text: str, queue: bool) -> str:
    pieces = []
    for kind, block in iter_blocks(text):
        if kind == "keep":
            pieces.append(block)
        elif kind == "table":
            pieces.append(translate_table(engine, block, queue))
        else:
            pieces.append("\n".join(translate_line(engine, line, queue) for line in block.split("\n")))
    return "\n".join(pieces).rstrip() + "\n"


def main() -> int:
    engine = Engine()
    ids = [arg for arg in sys.argv[1:] if not arg.startswith("-")]
    paths = [FR / f"{docid}.md" for docid in ids] if ids else sorted(FR.glob("v*.md"))
    print(f"documents {len(paths)} cache {len(engine.cache)}", flush=True)
    started = time.time()
    repaired: list[tuple[Path, str]] = []
    for path in paths:
        source = path.read_text()
        text = unglue_text(source)
        if text != source:
            path.write_text(text)
        repaired.append((path, text))
        walk(engine, text, queue=True)
    print(f"queued {len(engine.pending)} new strings in {time.time() - started:.0f}s", flush=True)
    engine.flush()
    print(f"model done {time.time() - started:.0f}s", flush=True)
    for index, (path, text) in enumerate(repaired, 1):
        (EN / path.name).write_text(walk(engine, text, queue=False))
        if index % 100 == 0 or index == len(repaired):
            print(f"wrote {index}/{len(repaired)}", flush=True)
    print(f"finished {time.time() - started:.0f}s", flush=True)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
