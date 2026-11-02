#!/usr/bin/env python3
"""Fetch DocAster U2–U7 RST sources and write one Markdown file per document."""

from __future__ import annotations

import re
import sys
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

from docutils import nodes
from docutils.core import publish_doctree
from docutils.parsers.rst import Directive, directives, roles
from docutils.parsers.rst.directives.body import CodeBlock

ROOT = Path("/workspace")
OUT = ROOT / "src/content/fr"
FIG = ROOT / "public/figures"
BASE = "https://codeaster.gitlab.io/doc/docaster/manuals/man_u"
UA = {"User-Agent": "Mozilla/5.0"}


class AnySpec(dict):
    def __contains__(self, key):
        return True

    def __getitem__(self, key):
        return lambda value: value


class GenericDirective(Directive):
    has_content = True
    optional_arguments = 30
    final_argument_whitespace = True
    option_spec = AnySpec()

    def run(self):
        if self.name in {"toctree", "highlight", "tabularcolumns", "sectnum", "contents"}:
            return []
        text = "\n".join(self.content).strip()
        if not text:
            return []
        if self.name in {"math"}:
            block = nodes.math_block(text, text)
            return [block]
        if self.name in {"note", "warning", "attention", "important", "tip", "caution", "hint", "admonition"}:
            body = nodes.paragraph()
            body += nodes.Text(text)
            return [nodes.admonition("", body, classes=[self.name])]
        block = nodes.literal_block(text, text)
        return [block]


def _ref_role(role, rawtext, text, lineno, inliner, options=None, content=None):
    label = text.strip()
    target = label
    match = re.match(r"^(.*?)<\s*([^>]+)\s*>$", label)
    if match:
        label = match.group(1).strip() or match.group(2).strip()
        target = match.group(2).strip()
    doc = target.lower()
    node = nodes.reference(rawtext, "")
    node += nodes.Text(label)
    if re.fullmatch(r"[a-z]\d+(?:\.\d+)+", doc):
        node["refuri"] = f"doc:{doc}"
    return [node], []


def _math_role(role, rawtext, text, lineno, inliner, options=None, content=None):
    # Interpreted text turns each backslash into a NUL, and astext() then drops it.
    # The raw role text still has the original LaTeX.
    body = text.replace("\x00", "")
    match = re.match(r"^:math:`(.*)`$", rawtext, re.DOTALL)
    if match:
        body = match.group(1)
    node = nodes.math(rawtext, body)
    return [node], []


def _install_rst():
    for name in ("ref", "external:ref", "numref", "doc", "term"):
        roles.register_local_role(name, _ref_role)
    roles.register_local_role("math", _math_role)
    directives.register_directive("code-block", CodeBlock)
    directives.register_directive("math", GenericDirective)
    original = directives.directive

    def directive(name, language_module, document):
        found, messages = original(name, language_module, document)
        if found is None:
            return GenericDirective, messages
        return found, messages

    directives.directive = directive


_install_rst()


def fetch(url: str) -> str:
    request = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(request, timeout=60) as response:
        return response.read().decode("utf-8", "replace")


def fetch_bytes(url: str) -> bytes | None:
    try:
        request = urllib.request.Request(url, headers=UA)
        with urllib.request.urlopen(request, timeout=60) as response:
            data = response.read()
            ctype = response.headers.get("content-type", "")
        if data[:15].lower().startswith(b"<!doctype") or "html" in ctype:
            return None
        return data
    except Exception:
        return None


def child_pages(index_html: str) -> list[str]:
    pages = []
    for href in re.findall(r'href="([^"/]+\.html)"', index_html):
        if href in {"genindex.html", "search.html"}:
            continue
        if href not in pages:
            pages.append(href)
    return pages


def source_of(page_html: str) -> str | None:
    found = re.findall(r'href="(_sources/[^"]+\.rst\.txt)"', page_html)
    return found[0] if found else None


def parse_rst(text: str):
    return publish_doctree(
        text,
        settings_overrides={
            "halt_level": 5,
            "report_level": 5,
            "warning_stream": None,
            "syntax_highlight": "none",
            "input_encoding": "utf-8",
            "file_insertion_enabled": False,
            "raw_enabled": False,
        },
    )


def inline(node) -> str:
    parts: list[str] = []
    for child in node.children:
        if isinstance(child, nodes.Text):
            parts.append(child.astext())
        elif isinstance(child, nodes.emphasis):
            parts.append(f"*{inline(child)}*")
        elif isinstance(child, nodes.strong):
            parts.append(f"**{inline(child)}**")
        elif isinstance(child, nodes.literal):
            parts.append(f"`{child.astext()}`")
        elif isinstance(child, nodes.math):
            parts.append(f"${child.astext()}$")
        elif isinstance(child, nodes.reference):
            label = inline(child) or child.astext()
            uri = child.get("refuri") or ""
            if uri.startswith("doc:") or uri.startswith("http"):
                parts.append(f"[{label}]({uri})")
            else:
                parts.append(label)
        elif isinstance(child, nodes.subscript):
            parts.append(f"_{{{inline(child)}}}")
        elif isinstance(child, nodes.superscript):
            parts.append(f"^{{{inline(child)}}}")
        elif isinstance(child, (nodes.problematic, nodes.system_message)):
            continue
        elif isinstance(child, nodes.image):
            parts.append(image_md(child))
        else:
            parts.append(inline(child) if child.children else child.astext())
    return "".join(parts)


def image_md(node, docid: str | None = None) -> str:
    uri = node.get("uri") or ""
    alt = node.get("alt") or "Figure"
    name = uri.split("/")[-1]
    if docid and name:
        return f"![{alt}](/figures/{docid}/{name})"
    return f"![{alt}]({uri})"


class Writer:
    def __init__(self, docid: str):
        self.docid = docid
        self.lines: list[str] = []
        self.images: set[str] = set()

    def add(self, text: str = ""):
        self.lines.append(text.rstrip())

    def blank(self):
        if self.lines and self.lines[-1] != "":
            self.lines.append("")

    def emit(self, node, level: int, number: str | None):
        if isinstance(node, nodes.section):
            self.section(node, level, number)
        elif isinstance(node, nodes.paragraph):
            text = inline(node).strip()
            if text and text not in {"Table des matières", "Table des matieres"}:
                self.blank()
                self.add(text)
                self.blank()
        elif isinstance(node, nodes.literal_block):
            lang = ""
            classes = node.get("classes") or []
            for item in classes:
                if item not in {"code", "literal-block"}:
                    lang = item
                    break
            self.blank()
            self.add(f"```{lang}".rstrip())
            self.lines.append(node.astext().rstrip("\n"))
            self.add("```")
            self.blank()
        elif isinstance(node, nodes.math_block):
            self.blank()
            self.add("$$")
            self.lines.append(node.astext().strip())
            self.add("$$")
            self.blank()
        elif isinstance(node, (nodes.bullet_list, nodes.enumerated_list)):
            self.list(node, 0, enumerated=isinstance(node, nodes.enumerated_list))
            self.blank()
        elif isinstance(node, nodes.definition_list):
            for item in node.traverse(nodes.definition_list_item, include_self=False, descend=False, siblings=True):
                pass
            for item in node:
                if not isinstance(item, nodes.definition_list_item):
                    continue
                term = ""
                body = []
                for part in item:
                    if isinstance(part, nodes.term):
                        term = inline(part).strip()
                    elif isinstance(part, nodes.definition):
                        for sub in part:
                            if isinstance(sub, nodes.paragraph):
                                body.append(inline(sub).strip())
                            else:
                                self.emit(sub, level, None)
                self.blank()
                self.add(f"**{term}**")
                self.blank()
                for paragraph in body:
                    self.add(paragraph)
                    self.blank()
        elif isinstance(node, nodes.block_quote):
            self.blank()
            for child in node:
                if isinstance(child, nodes.paragraph):
                    self.add("> " + inline(child).strip())
                else:
                    self.emit(child, level, None)
            self.blank()
        elif isinstance(node, nodes.admonition):
            kind = (node.get("classes") or ["note"])[0]
            label = {"warning": "Avertissement", "note": "Remarque"}.get(kind, kind.capitalize())
            self.blank()
            self.add(f"> **{label}.**")
            self.add(">")
            for child in node:
                if isinstance(child, nodes.title):
                    continue
                if isinstance(child, nodes.paragraph):
                    self.add("> " + inline(child).strip())
                else:
                    text = child.astext().strip()
                    if text:
                        self.add("> " + text)
            self.blank()
        elif isinstance(node, nodes.figure):
            self.blank()
            for child in node:
                if isinstance(child, nodes.image):
                    self.note_image(child)
                    self.add(image_md(child, self.docid))
                elif isinstance(child, nodes.caption):
                    self.add("")
                    self.add("*" + inline(child).strip() + "*")
            self.blank()
        elif isinstance(node, nodes.image):
            self.note_image(node)
            self.blank()
            self.add(image_md(node, self.docid))
            self.blank()
        elif isinstance(node, nodes.table):
            self.table(node)
        elif isinstance(node, (nodes.comment, nodes.system_message, nodes.target, nodes.substitution_definition, nodes.pending)):
            return
        elif isinstance(node, nodes.Text):
            return
        else:
            for child in getattr(node, "children", []):
                self.emit(child, level, None)

    def note_image(self, node):
        uri = node.get("uri") or ""
        name = uri.split("/")[-1]
        if name:
            self.images.add(name)

    def list(self, node, indent: int, enumerated: bool):
        self.blank()
        index = 1
        pad = " " * indent
        for item in node:
            if not isinstance(item, nodes.list_item):
                continue
            marker = f"{index}." if enumerated else "-"
            index += 1
            first = True
            for child in item:
                if isinstance(child, nodes.paragraph):
                    text = inline(child).strip()
                    if first:
                        self.add(f"{pad}{marker} {text}")
                        first = False
                    else:
                        self.add(f"{pad}  {text}")
                elif isinstance(child, (nodes.bullet_list, nodes.enumerated_list)):
                    self.list(child, indent + 2, isinstance(child, nodes.enumerated_list))
                elif isinstance(child, nodes.literal_block):
                    self.add("")
                    self.add("```")
                    self.lines.append(child.astext().rstrip("\n"))
                    self.add("```")
                else:
                    self.emit(child, 3, None)

    def table(self, node):
        rows = []
        for row in node.traverse(nodes.row):
            cells = []
            for entry in row.traverse(nodes.entry, include_self=False, descend=False, siblings=True):
                pass
            for entry in row:
                if isinstance(entry, nodes.entry):
                    cells.append(re.sub(r"\s+", " ", inline(entry)).strip().replace("|", "\\|"))
            if cells:
                rows.append(cells)
        if not rows:
            return
        width = max(len(row) for row in rows)
        rows = [row + [""] * (width - len(row)) for row in rows]
        self.blank()
        self.add("| " + " | ".join(rows[0]) + " |")
        self.add("| " + " | ".join("---" for _ in rows[0]) + " |")
        for row in rows[1:]:
            self.add("| " + " | ".join(row) + " |")
        self.blank()

    def section(self, node, level: int, number: str | None):
        title = ""
        rest = []
        for child in node:
            if isinstance(child, nodes.title) and not title:
                title = inline(child).strip()
            else:
                rest.append(child)
        hashes = "#" * min(max(level, 1), 6)
        prefix = f"{number} " if number else ""
        self.blank()
        self.add(f"{hashes} {prefix}{title}".rstrip())
        self.blank()
        sub = 0
        for child in rest:
            if isinstance(child, nodes.section):
                sub += 1
                child_number = f"{number}.{sub}" if number else str(sub)
                self.section(child, level + 1, child_number)
            else:
                self.emit(child, level + 1, None)

    def document(self, doctree, level: int, number: str | None):
        title = None
        rest = []
        for child in doctree:
            if title is None and isinstance(child, nodes.title):
                title = child.astext().strip()
            else:
                rest.append(child)
        if title:
            hashes = "#" * min(max(level, 1), 6)
            prefix = f"{number} " if number else ""
            self.blank()
            self.add(f"{hashes} {prefix}{title}".rstrip())
            self.blank()
        sub = 0
        next_level = level + 1 if title else level
        for child in rest:
            if isinstance(child, nodes.section):
                sub += 1
                child_number = f"{number}.{sub}" if number else str(sub)
                self.section(child, next_level, child_number)
            else:
                self.emit(child, next_level, None)

    def text(self) -> str:
        raw = "\n".join(self.lines)
        raw = re.sub(r"\n{3,}", "\n\n", raw).strip() + "\n"
        raw = re.sub(r"\[\[([^\]]+)\]\((doc:[^)]+)\)\]", r"[\1](\2)", raw)
        return raw


def download_images(docid: str, names: set[str]):
    if not names:
        return
    dest_dir = FIG / docid
    dest_dir.mkdir(parents=True, exist_ok=True)
    for name in names:
        dest = dest_dir / name
        if dest.exists() and dest.stat().st_size > 0:
            continue
        url = f"{BASE}/{docid[:2]}/{docid}/_images/{urllib.parse.quote(name)}"
        data = fetch_bytes(url)
        if data:
            dest.write_bytes(data)


import urllib.parse


def build_doc(docid: str) -> tuple[str, int, int]:
    part = docid[:2]
    page = f"{BASE}/{part}/{docid}/"
    index_html = fetch(page + "index.html")
    index_rst = fetch(page + "_sources/index.rst.txt")
    writer = Writer(docid)
    writer.document(parse_rst(index_rst), 1, None)
    count = 0
    for href in child_pages(index_html):
        html = fetch(page + href)
        src = source_of(html)
        if not src:
            continue
        count += 1
        writer.document(parse_rst(fetch(page + src)), 2, str(count))
    download_images(docid, writer.images)
    text = writer.text()
    OUT.mkdir(parents=True, exist_ok=True)
    (OUT / f"{docid}.md").write_text(text)
    return docid, len(text.split()), len(writer.images)


def doc_ids(manual: str = "u") -> list[str]:
    if manual == "r":
        html = fetch(f"{BASE}/other_pages/list/index.html")
        ids = re.findall(r"/man_r/r\d+/(r\d+\.\d+\.\d+)/index\.html", html)
    else:
        html = fetch(f"{BASE}/other_pages/list/index.html")
        ids = re.findall(r"/man_u/u[2-7]/(u[2-7]\.\d+\.\d+)/index\.html", html)
    seen = []
    for docid in ids:
        if docid not in seen:
            seen.append(docid)
    return seen


def main():
    global BASE
    args = sys.argv[1:]
    manual = "u"
    if args[:1] == ["--manual"]:
        manual = args[1]
        args = args[2:]
    if manual == "r":
        BASE = "https://codeaster.gitlab.io/doc/docaster/manuals/man_r"
    ids = args or doc_ids(manual)
    print(f"documents {len(ids)}", flush=True)
    ok = 0
    failed = []
    with ThreadPoolExecutor(max_workers=8) as pool:
        futures = {pool.submit(build_doc, docid): docid for docid in ids}
        for future in as_completed(futures):
            docid = futures[future]
            try:
                name, words, images = future.result()
                ok += 1
                print(f"OK {name} {words}w img={images}", flush=True)
            except Exception as exc:
                failed.append((docid, str(exc)))
                print(f"FAIL {docid} {exc}", flush=True)
    print(f"done ok={ok} fail={len(failed)}", flush=True)
    if failed:
        Path("/tmp/fetch_fail.txt").write_text("\n".join(f"{a}\t{b}" for a, b in failed))
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
