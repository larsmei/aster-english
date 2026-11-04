import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CATALOG, docById } from "@/content/catalog";
import { docTitle, loadDocument, tocOf, type TocItem } from "@/content/docs";
import { ManualShell } from "@/components/manual-shell";
import { MarkdownView } from "@/components/markdown-view";
import { useManual } from "@/lib/manual-store";
import { notifyContentReady } from "@/lib/reading-place";
import type { Lang } from "@/content/catalog";

export const Route = createFileRoute("/doc/$id")({
  component: DocPage,
});

const memory = new Map<string, { md: string; lang: Lang }>();

function remember(key: string, value: { md: string; lang: Lang }) {
  if (memory.has(key)) memory.delete(key);
  memory.set(key, value);
  while (memory.size > 24) {
    const oldest = memory.keys().next().value;
    if (!oldest) break;
    memory.delete(oldest);
  }
}

function DocPage() {
  const { id } = Route.useParams();
  const lang = useManual((s) => s.lang);
  const meta = docById(id);
  const fr = lang === "fr";
  const key = `${id}:${lang}`;
  const [body, setBody] = useState<{ key: string; md: string; lang: Lang } | null>(() => {
    const hit = memory.get(key);
    return hit ? { key, ...hit } : null;
  });

  if (meta && body && body.key !== key) {
    const hit = memory.get(key);
    const sameDoc = body.key.startsWith(`${id}:`);
    if (hit) setBody({ key, ...hit });
    else if (!sameDoc) setBody(null);
  }

  const ready = body?.key === key ? body : null;

  useEffect(() => {
    if (!meta) return;
    if (body?.key === key) return;
    let cancel = false;
    const keepScroll = body?.key.startsWith(`${meta.id}:`) ? window.scrollY : null;
    loadDocument(meta.id, lang)
      .then((result) => {
        if (cancel) return;
        const entry = { md: result.md, lang: result.lang };
        remember(key, entry);
        setBody({ key, ...entry });
        if (keepScroll != null) {
          requestAnimationFrame(() => window.scrollTo(0, keepScroll));
        }
      })
      .catch(() => {
        if (!cancel) setBody({ key, md: "", lang });
      });
    return () => {
      cancel = true;
    };
  }, [body, key, lang, meta]);

  useEffect(() => {
    if (!ready?.md) return;
    notifyContentReady();
    const root = document.querySelector("article .manual");
    if (!root) return;
    const pending = Array.from(root.querySelectorAll("img")).filter((img) => !img.complete);
    if (pending.length === 0) return;
    let left = pending.length;
    const done = () => {
      left -= 1;
      if (left <= 0) notifyContentReady();
    };
    pending.forEach((img) => {
      img.addEventListener("load", done, { once: true });
      img.addEventListener("error", done, { once: true });
    });
  }, [ready]);

  if (!meta) {
    return (
      <ManualShell>
        <div className="px-5 py-16 sm:px-8">
          <h1 className="font-serif text-3xl">{fr ? "Document introuvable" : "Document not found"}</h1>
          <p className="mt-3 text-muted">{id}</p>
          <Link to="/" className="mt-6 inline-flex h-11 items-center font-sans text-sm font-semibold text-accent">
            {fr ? "Retour à la bibliothèque" : "Back to the library"}
          </Link>
        </div>
      </ManualShell>
    );
  }

  const shown = body?.lang ?? lang;
  const title = docTitle(meta.id, shown);
  const index = CATALOG.findIndex((doc) => doc.id === meta.id);
  const prev = index > 0 ? CATALOG[index - 1] : undefined;
  const next = index < CATALOG.length - 1 ? CATALOG[index + 1] : undefined;
  const toc: TocItem[] = body ? tocOf(body.md) : [];

  return (
    <ManualShell toc={toc}>
      <article className="px-5 py-8 sm:px-8 sm:py-10">
        <p className="font-mono text-xs tracking-wide text-copper uppercase">
          {meta.part} · {meta.id}
          {shown === "en" ? " · English" : " · Français"}
        </p>
        <div className="mt-2 mb-6 flex flex-wrap gap-x-4 gap-y-1 font-sans text-sm">
          <a className="text-accent underline" href={meta.sourceUrl} target="_blank" rel="noreferrer">
            {fr ? "Texte français d’origine" : "Original French page"}
          </a>
          {shown === "fr" && lang === "en" ? (
            <span className="text-copper">{fr ? "Traduction pas encore disponible" : "English text not ready — showing French"}</span>
          ) : null}
        </div>
        {body ? (
          body.md ? (
            <MarkdownView markdown={body.md} />
          ) : (
            <p className="font-serif text-lg text-muted">{fr ? "Le texte n’a pas pu être chargé." : "The text could not be loaded."}</p>
          )
        ) : (
          <>
            <h1 className="font-serif text-3xl leading-tight text-ink sm:text-4xl">{title}</h1>
            <p className="mt-4 font-serif text-lg text-muted">{fr ? "Chargement du texte…" : "Loading the text…"}</p>
          </>
        )}
        <nav className="mt-12 grid gap-3 border-t border-line pt-6 sm:grid-cols-2">
          {prev ? (
            <Link
              to="/doc/$id"
              params={{ id: prev.id }}
              className="rounded-md border border-line bg-paper px-4 py-3 hover:border-accent"
            >
              <span className="block font-sans text-xs tracking-widest text-muted uppercase">
                {fr ? "Précédent" : "Previous"}
              </span>
              <span className="mt-1 block font-mono text-xs text-copper">{prev.id}</span>
              <span className="mt-1 block font-serif text-lg leading-snug">{docTitle(prev.id, lang)}</span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              to="/doc/$id"
              params={{ id: next.id }}
              className="rounded-md border border-line bg-paper px-4 py-3 text-right hover:border-accent"
            >
              <span className="block font-sans text-xs tracking-widest text-muted uppercase">
                {fr ? "Suivant" : "Next"}
              </span>
              <span className="mt-1 block font-mono text-xs text-copper">{next.id}</span>
              <span className="mt-1 block font-serif text-lg leading-snug">{docTitle(next.id, lang)}</span>
            </Link>
          ) : null}
        </nav>
        <p className="mt-8 font-sans text-xs text-muted">
          {title} — {fr ? "édition de lecture, non officielle." : "unofficial reading edition."}
        </p>
      </article>
    </ManualShell>
  );
}
