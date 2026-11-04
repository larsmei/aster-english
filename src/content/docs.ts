import type { Lang } from "./catalog";
import { HEADS } from "./heads";

const frLoaders = import.meta.glob("./fr/*.md", {
  query: "?raw",
  import: "default",
}) as Record<string, () => Promise<string>>;

const enLoaders = import.meta.glob("./en/*.md", {
  query: "?raw",
  import: "default",
}) as Record<string, () => Promise<string>>;

function indexLoaders(mods: Record<string, () => Promise<string>>): Record<string, () => Promise<string>> {
  const out: Record<string, () => Promise<string>> = {};
  for (const [path, load] of Object.entries(mods)) {
    const id = path.split("/").pop()?.replace(/\.md$/, "");
    if (id) out[id] = load;
  }
  return out;
}

const FR = indexLoaders(frLoaders);
const EN = indexLoaders(enLoaders);

export function hasEnglish(id: string): boolean {
  return Boolean(EN[id]);
}

export async function loadDocument(id: string, lang: Lang): Promise<{ md: string; lang: Lang }> {
  if (lang === "en" && EN[id]) return { md: await EN[id](), lang: "en" };
  if (lang === "fr" && FR[id]) return { md: await FR[id](), lang: "fr" };
  if (EN[id]) return { md: await EN[id](), lang: "en" };
  if (FR[id]) return { md: await FR[id](), lang: "fr" };
  return { md: "", lang };
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

export function docTitle(id: string, lang: Lang): string {
  const head = HEADS[id];
  if (!head) return id;
  if (lang === "en") return head.enTitle || head.frTitle || id;
  return head.frTitle || head.enTitle || id;
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
