#!/usr/bin/env python3
"""Copy restored LaTeX from the French manuals into the English ones.

Inline math was stored without backslashes. The French files are regenerated
from the RST sources; an English formula is the same LaTeX, so it can be
replaced wherever the texts still line up once backslashes are ignored.
"""

from __future__ import annotations

import re
from pathlib import Path

ROOT = Path("/workspace/src/content")
MATH = re.compile(r"\$\$(.+?)\$\$|(?<!\$)\$(?!\$)(.+?)(?<!\$)\$(?!\$)", re.S)


def norm(value: str) -> str:
    return re.sub(r"\s+", "", value.replace("\\", "").replace("$", ""))


def segments(text: str) -> list[tuple[str, str]]:
    out: list[tuple[str, str]] = []
    buf: list[str] = []
    mode: str | None = None

    def flush() -> None:
        nonlocal buf, mode
        if mode is None:
            return
        if mode == "table" or any(line.strip() for line in buf):
            out.append((mode, "\n".join(buf)))
        buf = []
        mode = None

    for line in text.split("\n"):
        kind = "table" if line.startswith("|") else "prose"
        if kind != mode:
            flush()
            mode = kind
        buf.append(line)
    flush()
    return out


def replace_math(english: str, french: str) -> tuple[str, bool]:
    en_spans = list(MATH.finditer(english))
    fr_spans = list(MATH.finditer(french))
    if len(en_spans) != len(fr_spans):
        return english, False
    pairs = []
    for en, fr in zip(en_spans, fr_spans):
        en_body = en.group(1) if en.group(1) is not None else en.group(2)
        fr_body = fr.group(1) if fr.group(1) is not None else fr.group(2)
        if norm(en_body or "") != norm(fr_body or ""):
            return english, False
        pairs.append((en, fr_body or ""))
    out = english
    for en, fr_body in reversed(pairs):
        group = 1 if en.group(1) is not None else 2
        out = out[: en.start(group)] + fr_body + out[en.end(group) :]
    return out, True


def cells(line: str) -> list[str]:
    body = line.strip()
    if body.startswith("|"):
        body = body[1:]
    if body.endswith("|"):
        body = body[:-1]
    parts: list[str] = []
    current: list[str] = []
    index = 0
    while index < len(body):
        char = body[index]
        if char == "\\" and index + 1 < len(body):
            current.append(body[index : index + 2])
            index += 2
            continue
        if char == "|":
            parts.append("".join(current).strip())
            current = []
            index += 1
            continue
        current.append(char)
        index += 1
    parts.append("".join(current).strip())
    return parts


def join_cells(row: list[str]) -> str:
    return "| " + " | ".join(row) + " |"


def is_rule(row: list[str]) -> bool:
    return bool(row) and all(re.fullmatch(r":?-{3,}:?", cell) for cell in row)


def sync_table(english: str, french: str) -> tuple[str, int]:
    en_lines = english.split("\n")
    fr_lines = french.split("\n")
    if len(en_lines) != len(fr_lines):
        return english, 0
    changed = 0
    out = []
    for en_line, fr_line in zip(en_lines, fr_lines):
        en_cells = cells(en_line)
        fr_cells = cells(fr_line)
        if len(en_cells) != len(fr_cells) or is_rule(en_cells):
            out.append(en_line)
            continue
        row = []
        for en_cell, fr_cell in zip(en_cells, fr_cells):
            if ("$" in fr_cell or "\\" in fr_cell) and norm(en_cell) == norm(fr_cell) and en_cell != fr_cell:
                row.append(fr_cell)
                changed += 1
                continue
            synced, ok = replace_math(en_cell, fr_cell)
            if ok and synced != en_cell:
                changed += 1
            row.append(synced if ok else en_cell)
        out.append(join_cells(row))
    return "\n".join(out), changed


def sync(english: str, french: str) -> tuple[str, str]:
    en_segs = segments(english)
    fr_segs = segments(french)
    if [kind for kind, _ in en_segs] != [kind for kind, _ in fr_segs]:
        synced, ok = replace_math(english, french)
        return (synced if ok else english), "whole" if ok else "skipped"
    pieces = []
    prose_ok = True
    for (kind, en), (_, fr) in zip(en_segs, fr_segs):
        if kind == "prose":
            synced, ok = replace_math(en, fr)
            pieces.append(synced if ok else en)
            prose_ok = prose_ok and ok
        else:
            synced, _changed = sync_table(en, fr)
            pieces.append(synced)
    return "\n".join(pieces), "segments" if prose_ok else "partial"


def bodies(text: str) -> list[str]:
    found = []
    for match in MATH.finditer(text):
        found.append(match.group(1) if match.group(1) is not None else match.group(2) or "")
    return found


def sync_spans(english: str, french_bodies: dict[str, list[str]]) -> str:
    matches = list(MATH.finditer(english))
    # Consume French formulas in reading order, so repeated formulas stay aligned.
    pools = {key: list(values) for key, values in french_bodies.items()}
    chosen: list[str | None] = []
    for match in matches:
        body = match.group(1) if match.group(1) is not None else match.group(2) or ""
        pool = pools.get(norm(body))
        if pool:
            chosen.append(pool.pop(0))
        else:
            chosen.append(None)
    out = english
    for match, replacement in zip(reversed(matches), reversed(chosen)):
        if replacement is None:
            continue
        group = 1 if match.group(1) is not None else 2
        out = out[: match.start(group)] + replacement + out[match.end(group) :]
    return out


def sync_bare_cells(english: str, french_cells: dict[str, str]) -> str:
    lines = []
    for line in english.split("\n"):
        if not line.startswith("|"):
            lines.append(line)
            continue
        row = cells(line)
        if is_rule(row):
            lines.append(line)
            continue
        changed = False
        out_row = []
        for cell in row:
            if "$" not in cell and any(token in cell for token in ("{", "}", "_", "^", "frac", "math")):
                replacement = french_cells.get(norm(cell))
                if replacement and replacement != cell:
                    out_row.append(replacement)
                    changed = True
                    continue
            out_row.append(cell)
        lines.append(join_cells(out_row) if changed else line)
    return "\n".join(lines)


def protected_spans(text: str) -> list[tuple[int, int]]:
    spans = [match.span() for match in re.finditer(r"```[\s\S]*?```", text)]

    def inside(start: int) -> bool:
        return any(a <= start < b for a, b in spans)

    for match in re.finditer(r"`[^`\n]+`", text):
        if not inside(match.start()):
            spans.append(match.span())
    for match in MATH.finditer(text):
        if not inside(match.start()):
            spans.append(match.span())
    return spans


def overlaps(spans: list[tuple[int, int]], start: int, end: int) -> bool:
    return any(start < b and end > a for a, b in spans)


def flex_pattern(key: str) -> re.Pattern[str]:
    parts = [re.escape(char) for char in key]
    return re.compile(r"(?<![A-Za-z\\$])" + r"\\?\s*".join(parts) + r"(?![A-Za-z])")


def weave_bare_formulas(english: str, french_bodies: list[str]) -> str:
    occupied = protected_spans(english)
    replacements: list[tuple[int, int, str]] = []
    seen: set[str] = set()
    ordered = sorted(french_bodies, key=lambda body: len(norm(body)), reverse=True)
    for body in ordered:
        key = norm(body)
        if key in seen or len(key) < 4:
            continue
        if not re.search(r"[{_^]|frac|math|sigma|epsilon|partial|begin|left|Delta|alpha", key):
            continue
        seen.add(key)
        pattern = flex_pattern(key)
        for match in pattern.finditer(english):
            if overlaps(occupied, match.start(), match.end()):
                continue
            occupied.append(match.span())
            replacements.append((match.start(), match.end(), f"${body}$"))
    out = english
    for start, end, value in sorted(replacements, reverse=True):
        out = out[:start] + value + out[end:]
    return out


def repair_nested(english: str, by_norm: dict[str, str]) -> str:
    """Fix a formula that was wrapped in the middle, leaving the command outside."""
    pattern = re.compile(
        r"(?<![A-Za-z\\])(?:frac|dfrac|tfrac|sqrt|mathit|mathrm|mathbf|operatorname|text|left|right|begin|dot|hat|bar|vec|partial|sigma|varepsilon|epsilon|Delta)"
        r"\{(?:[^{}]|\{[^{}]*\})*\}(?:\{(?:[^{}]|\{[^{}]*\})*\})*"
        r"|\{+\$[^$\n]+\$\}+(?:\^\{[^{}\n]*\}|_[^{}\n\s]*)?"
    )
    replacements: list[tuple[int, int, str]] = []
    for match in pattern.finditer(english):
        key = norm(match.group(0))
        body = by_norm.get(key)
        if not body:
            continue
        wrapped = f"${body}$"
        if match.group(0) != wrapped:
            replacements.append((match.start(), match.end(), wrapped))
    out = english
    for start, end, value in reversed(replacements):
        out = out[:start] + value + out[end:]
    return out


def main() -> None:
    changed_files = 0
    for en_path in sorted((ROOT / "en").glob("*.md")):
        fr_path = ROOT / "fr" / en_path.name
        if not fr_path.exists():
            continue
        french = fr_path.read_text()
        pools: dict[str, list[str]] = {}
        for body in bodies(french):
            pools.setdefault(norm(body), []).append(body)
        cell_pools: dict[str, str] = {}
        for line in french.split("\n"):
            if not line.startswith("|"):
                continue
            for cell in cells(line):
                if "$" in cell or "\\" in cell:
                    cell_pools.setdefault(norm(cell), cell)
        original = en_path.read_text()
        by_norm = {key: group[0] for key, group in pools.items()}
        updated = repair_nested(
            weave_bare_formulas(
                sync_bare_cells(sync_spans(original, pools), cell_pools),
                [body for group in pools.values() for body in group],
            ),
            by_norm,
        )
        if updated != original:
            en_path.write_text(updated)
            changed_files += 1
    print(f"updated {changed_files}")


if __name__ == "__main__":
    main()
