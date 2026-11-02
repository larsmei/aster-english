import { createFileRoute, Link } from "@tanstack/react-router";
import { CATALOG, docById } from "@/content/catalog";
import { documentMarkdown, titleOf, tocOf } from "@/content/docs";
import { ManualShell } from "@/components/manual-shell";
import { MarkdownView } from "@/components/markdown-view";
import { useManual } from "@/lib/manual-store";

export const Route = createFileRoute("/doc/$id")({
  component: DocPage,
});

function DocPage() {
  const { id } = Route.useParams();
  const lang = useManual((s) => s.lang);
  const meta = docById(id);
  const fr = lang === "fr";

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

  const { md, lang: shown } = documentMarkdown(meta.id, lang);
  const title = titleOf(md, meta.id);
  const index = CATALOG.findIndex((doc) => doc.id === meta.id);
  const prev = index > 0 ? CATALOG[index - 1] : undefined;
  const next = index < CATALOG.length - 1 ? CATALOG[index + 1] : undefined;
  const toc = tocOf(md);

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
        <MarkdownView markdown={md} />
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
              <span className="mt-1 block font-serif text-lg leading-snug">
                {titleOf(documentMarkdown(prev.id, lang).md, prev.id)}
              </span>
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
              <span className="mt-1 block font-serif text-lg leading-snug">
                {titleOf(documentMarkdown(next.id, lang).md, next.id)}
              </span>
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
