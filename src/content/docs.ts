import { CATALOG, type Lang } from "./catalog";

const frModules = import.meta.glob("./fr/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const enModules = import.meta.glob("./en/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function indexModules(mods: Record<string, string>): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [path, text] of Object.entries(mods)) {
    const id = path.split("/").pop()?.replace(/\.md$/, "");
    if (id) out[id] = text;
  }
  return out;
}

const FR = indexModules(frModules);
const EN = indexModules(enModules);

export function hasEnglish(id: string): boolean {
  return Boolean(EN[id]);
}

export function documentMarkdown(id: string, lang: Lang): { md: string; lang: Lang } {
  if (lang === "en" && EN[id]) return { md: EN[id], lang: "en" };
  if (lang === "fr" && FR[id]) return { md: FR[id], lang: "fr" };
  if (EN[id]) return { md: EN[id], lang: "en" };
  return { md: FR[id] ?? "", lang: "fr" };
}

export function titleOf(md: string, fallback: string): string {
  const line = md.split("\n", 40).find((l) => l.startsWith("# "));
  if (!line) return fallback;
  return cleanTitle(line.slice(2).trim(), fallback);
}

function cleanTitle(raw: string, id: string): string {
  const escaped = id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const stripped = raw.replace(new RegExp(`^${escaped}\\s+`, "i"), "").trim();
  return stripped || raw;
}

const titleCache = new Map<string, string>();

export function docTitle(id: string, lang: Lang): string {
  const shown: Lang = lang === "en" && EN[id] ? "en" : FR[id] ? "fr" : "en";
  const key = `${id}:${shown}`;
  const cached = titleCache.get(key);
  if (cached) return cached;
  const md = shown === "en" ? (EN[id] ?? "") : (FR[id] ?? EN[id] ?? "");
  const title = titleOf(md, id);
  titleCache.set(key, title);
  return title;
}

export function familyOf(id: string): string {
  const parts = id.split(".");
  return parts.length >= 2 ? `${parts[0]}.${parts[1]}` : id;
}

export function slug(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export type TocItem = { level: number; text: string; id: string };

export function tocOf(md: string): TocItem[] {
  const items: TocItem[] = [];
  for (const match of md.matchAll(/^(#{2,4}) +(.+)$/gm)) {
    const text = match[2].trim();
    items.push({ level: match[1].length, text, id: slug(text) });
  }
  return items;
}

function plain(md: string): string {
  return md
    .replace(/```[\s\S]*?```/g, (block) => " " + block.replace(/```\w*/g, " ") + " ")
    .replace(/!\[[^\]]*]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)]\([^)]*\)/g, "$1")
    .replace(/[$`>#*_]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export type Hit = {
  id: string;
  title: string;
  snippet: string;
};

export function searchDocs(query: string, lang: Lang): Hit[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];
  const hits: Hit[] = [];
  for (const meta of CATALOG) {
    const { md } = documentMarkdown(meta.id, lang);
    const title = titleOf(md, meta.id);
    const text = `${title} ${plain(md)}`;
    const at = text.toLowerCase().indexOf(q);
    if (at < 0 && !meta.id.includes(q) && !title.toLowerCase().includes(q)) continue;
    const pos = at < 0 ? 0 : at;
    const start = Math.max(0, pos - 70);
    const snippet = (start > 0 ? "…" : "") + text.slice(start, pos + q.length + 90).trim() + "…";
    hits.push({ id: meta.id, title, snippet });
  }
  return hits;
}
