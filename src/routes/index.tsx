import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CATALOG, PARTS } from "@/content/catalog";
import { docTitle, familyOf } from "@/content/docs";
import { ManualShell } from "@/components/manual-shell";
import { useManual } from "@/lib/manual-store";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const lang = useManual((s) => s.lang);
  const fr = lang === "fr";
  const [part, setPart] = useState<(typeof PARTS)[number]["id"] | null>(null);
  const selected = PARTS.find((item) => item.id === part);

  return (
    <ManualShell>
      <div className="px-5 py-10 sm:px-8">
        <p className="font-sans text-xs font-semibold tracking-widest text-copper uppercase">
          {fr ? "Manuels d’utilisation et de référence" : "User’s and Reference manuals"}
        </p>
        <h1 className="mt-3 max-w-2xl font-serif text-4xl leading-tight text-ink sm:text-5xl">
          {fr ? "Utilisation et référence, en français et en anglais." : "The User’s manual and the Reference manual."}
        </h1>
        <p className="mt-4 max-w-2xl font-serif text-lg leading-relaxed text-muted">
          {fr
            ? "Les fascicules U0 à U4 et U7 du manuel d’utilisation, et les documents de référence R0, R3 à R7, en français et en anglais. U5, U6, R1 et R2 ne font pas partie de cette édition."
            : "Booklets U0 to U4 and U7 of the User’s manual, and Reference documents R0 and R3 to R7, in French and in English. U5, U6, R1 and R2 are not part of this edition."}
        </p>
        <p className="mt-3 max-w-2xl font-sans text-sm leading-relaxed text-muted">
          {fr
            ? "Traduction non officielle. Les noms de commandes, mots-clés et types de concepts restent dans leur forme d’origine. Les textes suivent l’édition DocAster du 22 octobre 2026."
            : "Unofficial translation. Command names, keywords and concept types stay in their original form. The texts follow the DocAster edition of 22 October 2026."}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/doc/$id"
            params={{ id: "u0.00.01" }}
            className="inline-flex h-11 items-center rounded-md bg-accent px-4 font-sans text-sm font-semibold text-paper"
          >
            {fr ? "Commencer par le guide de lecture" : "Start with the reading guide"}
          </Link>
          <Link
            to="/doc/$id"
            params={{ id: "u1.05.00" }}
            className="inline-flex h-11 items-center rounded-md border border-line bg-paper px-4 font-sans text-sm font-semibold text-ink"
          >
            {fr ? "Voir l’exemple simple" : "Read the simple example"}
          </Link>
        </div>

        <div className="mt-10 space-y-8">
          {(["U", "R"] as const).map((book) => (
            <div key={book}>
              <h2 className="font-sans text-xs font-semibold tracking-widest text-muted uppercase">
                {book === "U"
                  ? fr
                    ? "Manuel d’utilisation"
                    : "User’s manual"
                  : fr
                    ? "Manuel de référence"
                    : "Reference manual"}
              </h2>
              <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {PARTS.filter((item) => item.book === book).map((item) => {
                  const count = CATALOG.filter((doc) => doc.part === item.id).length;
                  const active = part === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      aria-pressed={active}
                      onClick={() => setPart(active ? null : item.id)}
                      className={
                        "rounded-md border px-4 py-4 text-left " +
                        (active ? "border-accent bg-accent-soft" : "border-line bg-paper hover:border-accent")
                      }
                    >
                      <span className="font-mono text-xs text-copper">{item.id}</span>
                      <span className="mt-1 block font-serif text-2xl leading-tight text-ink">
                        {fr ? item.fr : item.en}
                      </span>
                      <span className="mt-2 block font-sans text-sm text-muted">
                        {count} {fr ? "documents" : "documents"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {selected ? <PartList part={selected.id} fr={fr} lang={lang} label={fr ? selected.fr : selected.en} /> : null}

        <footer className="mt-12 border-t border-line pt-6 font-sans text-sm leading-relaxed text-muted">
          <p>
            {fr
              ? "Source officielle en français : documentation Code_Aster, manuels U et R, édition DocAster. Cette lecture n’est pas une publication EDF."
              : "Official French source: the Code_Aster User’s and Reference manuals, DocAster edition. This reading edition is not an EDF publication."}
          </p>
          <p className="mt-2">
            <a className="text-accent underline" href="https://codeaster.gitlab.io/doc/docaster/manuals/man_u/other_pages/list/index.html">
              {fr ? "Liste des documents d’utilisation" : "List of User documents"}
            </a>
            <a className="ml-4 text-accent underline" href="https://code-aster.org/doc/v17/manuals/man_r/other_pages/list/index.html">
              {fr ? "Liste des documents de référence" : "List of Reference documents"}
            </a>
          </p>
        </footer>
      </div>
    </ManualShell>
  );
}

function PartList({
  part,
  fr,
  lang,
  label,
}: {
  part: (typeof PARTS)[number]["id"];
  fr: boolean;
  lang: "en" | "fr";
  label: string;
}) {
  const docs = CATALOG.filter((doc) => doc.part === part);
  const groups = new Map<string, typeof docs>();
  for (const doc of docs) {
    const family = familyOf(doc.id);
    const list = groups.get(family);
    if (list) list.push(doc);
    else groups.set(family, [doc]);
  }
  const grouped = docs.length > 8;

  return (
    <section className="mt-10">
      <h2 className="font-sans text-xs font-semibold tracking-widest text-muted uppercase">
        {part}
        <span className="ml-2 font-serif text-xl font-medium tracking-normal text-ink normal-case">{label}</span>
      </h2>
      {grouped ? (
        <div className="mt-4 divide-y divide-line border-y border-line">
          {[...groups.entries()].map(([family, items]) => (
            <details key={family} className="group">
              <summary className="flex cursor-pointer list-none items-baseline gap-3 py-3">
                <span className="font-mono text-sm text-copper">{family}</span>
                <span className="min-w-0 flex-1 truncate font-serif text-lg text-ink">{docTitle(items[0].id, lang)}</span>
                <span className="font-sans text-sm text-muted">{items.length}</span>
              </summary>
              <ul className="mb-3 divide-y divide-line border-t border-line">
                {items.map((doc) => (
                  <DocRow key={doc.id} id={doc.id} lang={lang} />
                ))}
              </ul>
            </details>
          ))}
        </div>
      ) : (
        <ul className="mt-4 divide-y divide-line border-y border-line">
          {docs.map((doc) => (
            <DocRow key={doc.id} id={doc.id} lang={lang} />
          ))}
        </ul>
      )}
      <p className="mt-3 font-sans text-sm text-muted">
        {fr ? "Ouvrir un bloc pour voir ses documents. La recherche en haut couvre tout le manuel." : "Open a block to see its documents. The search above covers the whole manual."}
      </p>
    </section>
  );
}

function DocRow({ id, lang }: { id: string; lang: "en" | "fr" }) {
  return (
    <li>
      <Link
        to="/doc/$id"
        params={{ id }}
        className="grid gap-1 py-3 sm:grid-cols-[7.5rem_minmax(0,1fr)] sm:gap-4"
      >
        <span className="font-mono text-sm text-copper">{id}</span>
        <span className="font-serif text-lg leading-snug text-ink hover:text-accent">{docTitle(id, lang)}</span>
      </Link>
    </li>
  );
}
