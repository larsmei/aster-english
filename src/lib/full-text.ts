import type { Lang } from "@/content/catalog";

export type Hit = {
  id: string;
  title: string;
  snippet: string;
};

export type SearchResult = {
  hits: Hit[];
  total: number;
};

type RawCorpus = {
  ids: string[];
  titles: string[];
  text: string[];
};

type Corpus = RawCorpus & {
  folded: string[];
  titlesFold: string[];
};

const cache = new Map<Lang, Corpus>();
const loading = new Map<Lang, Promise<Corpus>>();

function fold(value: string): string {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function searchUrl(lang: Lang): string {
  const base = import.meta.env.BASE_URL || "/";
  const prefix = base.endsWith("/") ? base : `${base}/`;
  // Indexes live at the public root; nested JSON is not served.
  return `${prefix}fulltext-${lang}.json`;
}

function termsOf(query: string): string[] {
  return fold(query)
    .split(/\s+/)
    .map((term) => term.replace(/^[^\p{L}\p{N}_]+|[^\p{L}\p{N}_]+$/gu, ""))
    .filter((term) => term.length >= 2);
}

async function prepare(raw: RawCorpus): Promise<Corpus> {
  const folded = new Array<string>(raw.text.length);
  for (let i = 0; i < raw.text.length; i++) {
    folded[i] = fold(raw.text[i]);
    if ((i & 127) === 0) await new Promise((resolve) => setTimeout(resolve, 0));
  }
  return { ...raw, folded, titlesFold: raw.titles.map(fold) };
}

export function preloadSearch(lang: Lang): Promise<void> {
  return loadCorpus(lang).then(() => undefined);
}

function loadCorpus(lang: Lang): Promise<Corpus> {
  const ready = cache.get(lang);
  if (ready) return Promise.resolve(ready);
  const pending = loading.get(lang);
  if (pending) return pending;
  const task = fetch(searchUrl(lang))
    .then((response) => {
      if (!response.ok) throw new Error("search index");
      return response.json() as Promise<RawCorpus>;
    })
    .then(prepare)
    .then((corpus) => {
      cache.set(lang, corpus);
      loading.delete(lang);
      return corpus;
    })
    .catch((error) => {
      loading.delete(lang);
      throw error;
    });
  loading.set(lang, task);
  return task;
}

function snippetAt(text: string, at: number, queryLength: number): string {
  const start = Math.max(0, at - 70);
  const end = Math.min(text.length, at + Math.max(queryLength, 12) + 90);
  const slice = text.slice(start, end).trim();
  return `${start > 0 ? "…" : ""}${slice}${end < text.length ? "…" : ""}`;
}

export async function searchDocs(query: string, lang: Lang): Promise<SearchResult> {
  const phrase = fold(query.trim());
  const terms = termsOf(query);
  if (phrase.length < 2 || terms.length === 0) return { hits: [], total: 0 };
  const corpus = await loadCorpus(lang);
  const scored: { index: number; score: number; at: number }[] = [];
  for (let i = 0; i < corpus.folded.length; i++) {
    const hay = corpus.folded[i];
    let earliest = -1;
    let ok = true;
    for (const term of terms) {
      const foundAt = hay.indexOf(term);
      if (foundAt < 0) {
        ok = false;
        break;
      }
      if (earliest < 0 || foundAt < earliest) earliest = foundAt;
    }
    if (!ok) continue;
    const phraseAt = phrase.includes(" ") ? hay.indexOf(phrase) : -1;
    const longest = terms.reduce((best, term) => (term.length > best.length ? term : best), terms[0]);
    const at = phraseAt >= 0 ? phraseAt : hay.indexOf(longest);
    const title = corpus.titlesFold[i];
    const id = corpus.ids[i].toLowerCase();
    let score = Math.max(0, 24 - earliest / 5000);
    if (id.includes(phrase)) score += 140;
    else if (terms.every((term) => id.includes(term))) score += 90;
    if (title.includes(phrase)) score += 80;
    else if (terms.some((term) => title.includes(term))) score += 36;
    if (phrase.includes(" ") && hay.includes(phrase)) score += 28;
    scored.push({ index: i, score, at });
  }
  scored.sort((a, b) => b.score - a.score || corpus.ids[a.index].localeCompare(corpus.ids[b.index]));
  const hits = scored.slice(0, 40).map((item) => {
    const original = corpus.text[item.index];
    const foldedText = corpus.folded[item.index];
    const source = original.length === foldedText.length ? original : foldedText;
    return {
      id: corpus.ids[item.index],
      title: corpus.titles[item.index] || corpus.ids[item.index],
      snippet: item.at >= 0 ? snippetAt(source, item.at, phrase.length) : corpus.titles[item.index],
    };
  });
  return { hits, total: scored.length };
}
