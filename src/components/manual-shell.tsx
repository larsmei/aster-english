import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Search, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { CATALOG, PARTS, type Lang } from "@/content/catalog";
import { docTitle, familyOf, searchDocs, type TocItem } from "@/content/docs";
import { useManual } from "@/lib/manual-store";

function useLangHydration() {
  const setLang = useManual((s) => s.setLang);
  useEffect(() => {
    const stored = window.localStorage.getItem("aster-lang");
    if (stored === "fr" || stored === "en") setLang(stored);
  }, [setLang]);
}

export function ManualShell({
  children,
  toc,
}: {
  children: ReactNode;
  toc?: TocItem[];
}) {
  useLangHydration();
  const lang = useManual((s) => s.lang);
  const setLang = useManual((s) => s.setLang);
  const query = useManual((s) => s.query);
  const setQuery = useManual((s) => s.setQuery);
  const navOpen = useManual((s) => s.navOpen);
  const setNavOpen = useManual((s) => s.setNavOpen);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const hits = useMemo(() => searchDocs(query, lang), [query, lang]);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setNavOpen(false);
  }, [pathname, setNavOpen]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setQuery("");
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setQuery]);

  return (
    <div className="min-h-screen bg-bg text-ink">
      <header className="sticky top-0 z-30 border-b border-line bg-bg">
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line bg-paper lg:hidden"
            aria-label={lang === "fr" ? "Ouvrir le sommaire" : "Open contents"}
            onClick={() => setNavOpen(true)}
          >
            <Menu className="size-5" />
          </button>
          <Link to="/" className="min-w-0 shrink-0 leading-tight">
            <span className="block font-sans text-xs font-semibold tracking-widest text-copper uppercase">
              Code_Aster
            </span>
            <span className="block font-serif text-lg leading-none text-ink">Aster English</span>
          </Link>
          <div ref={searchRef} className="relative mx-auto hidden w-full max-w-md sm:block">
            <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={lang === "fr" ? "Chercher une commande, un mot…" : "Search a command or a term…"}
              className="h-11 w-full rounded-md border border-line bg-paper pr-3 pl-10 font-sans text-sm text-ink outline-none placeholder:text-muted focus:border-accent"
              aria-label={lang === "fr" ? "Recherche" : "Search"}
            />
            {query.trim().length >= 2 && (
              <SearchResults hits={hits} lang={lang} onPick={() => setQuery("")} />
            )}
          </div>
          <LangSwitch lang={lang} setLang={setLang} />
        </div>
        <div className="border-t border-line px-4 py-2 sm:hidden">
          <div className="relative">
            <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={lang === "fr" ? "Chercher…" : "Search…"}
              className="h-11 w-full rounded-md border border-line bg-paper pr-3 pl-10 font-sans text-sm outline-none placeholder:text-muted focus:border-accent"
              aria-label={lang === "fr" ? "Recherche" : "Search"}
            />
            {query.trim().length >= 2 && (
              <SearchResults hits={hits} lang={lang} onPick={() => setQuery("")} />
            )}
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl lg:grid-cols-[15rem_minmax(0,1fr)] xl:grid-cols-[15rem_minmax(0,1fr)_13rem]">
        <aside className="hidden border-r border-line lg:block">
          <div className="sticky top-16 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <DocNav lang={lang} pathname={pathname} />
          </div>
        </aside>
        <main className="min-w-0">{children}</main>
        <aside className="hidden xl:block">
          {toc && toc.length > 0 ? <PageToc toc={toc} lang={lang} /> : null}
        </aside>
      </div>

      {navOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-ink/40"
            aria-label={lang === "fr" ? "Fermer" : "Close"}
            onClick={() => setNavOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 flex w-80 max-w-[85%] flex-col bg-paper shadow-xl">
            <div className="flex h-16 items-center justify-between border-b border-line px-4">
              <span className="font-serif text-lg">Contents</span>
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center"
                onClick={() => setNavOpen(false)}
                aria-label={lang === "fr" ? "Fermer" : "Close"}
              >
                <X className="size-5" />
              </button>
            </div>
            <div className="overflow-y-auto">
              <DocNav lang={lang} pathname={pathname} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function LangSwitch({ lang, setLang }: { lang: Lang; setLang: (lang: Lang) => void }) {
  return (
    <div className="flex h-11 shrink-0 items-center rounded-md border border-line bg-paper p-1 font-sans text-sm">
      {(["en", "fr"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          className={
            "h-9 rounded px-3 font-semibold tracking-wide uppercase " +
            (lang === code ? "bg-accent text-paper" : "text-muted")
          }
          aria-pressed={lang === code}
        >
          {code}
        </button>
      ))}
    </div>
  );
}

function SearchResults({
  hits,
  lang,
  onPick,
}: {
  hits: { id: string; title: string; snippet: string }[];
  lang: Lang;
  onPick: () => void;
}) {
  return (
    <div className="absolute top-12 right-0 left-0 z-40 max-h-96 overflow-y-auto rounded-md border border-line bg-paper shadow-lg">
      {hits.length === 0 ? (
        <p className="px-4 py-3 font-sans text-sm text-muted">
          {lang === "fr" ? "Aucun passage." : "No passage matches."}
        </p>
      ) : (
        <ul>
          {hits.map((hit) => (
            <li key={hit.id} className="border-b border-line last:border-b-0">
              <Link
                to="/doc/$id"
                params={{ id: hit.id }}
                onClick={onPick}
                className="block px-4 py-3 hover:bg-accent-soft"
              >
                <span className="font-mono text-xs text-copper">{hit.id}</span>
                <span className="mt-0.5 block font-sans text-sm font-semibold text-ink">{hit.title}</span>
                <span className="mt-1 block font-sans text-xs leading-relaxed text-muted">{hit.snippet}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function PageToc({ toc, lang }: { toc: TocItem[]; lang: Lang }) {
  const chapters = toc.filter((item) => item.level === 2);
  const long = toc.length > 14 && chapters.length > 0;
  const [all, setAll] = useState(false);
  const shown = long && !all ? chapters : toc;
  return (
    <nav
      className="sticky top-16 max-h-[calc(100vh-4rem)] overflow-y-auto px-4 py-8"
      aria-label={lang === "fr" ? "Dans ce document" : "On this page"}
    >
      <p className="mb-3 font-sans text-xs font-semibold tracking-widest text-muted uppercase">
        {lang === "fr" ? "Dans ce document" : "On this page"}
      </p>
      <ul className="space-y-1">
        {shown.map((item) => (
          <li key={`${item.level}-${item.id}`} className={item.level === 2 ? "" : item.level === 3 ? "pl-3" : "pl-6"}>
            <a href={`#${item.id}`} className="block py-1 font-sans text-sm leading-snug text-muted hover:text-accent">
              {item.text}
            </a>
          </li>
        ))}
      </ul>
      {long ? (
        <button
          type="button"
          onClick={() => setAll((value) => !value)}
          className="mt-3 font-sans text-xs font-semibold text-accent"
        >
          {all
            ? lang === "fr"
              ? "Seulement les chapitres"
              : "Chapters only"
            : lang === "fr"
              ? `Toutes les rubriques (${toc.length})`
              : `All headings (${toc.length})`}
        </button>
      ) : null}
    </nav>
  );
}

function families(partId: string) {
  const docs = CATALOG.filter((doc) => doc.part === partId);
  const order: string[] = [];
  const map = new Map<string, typeof docs>();
  for (const doc of docs) {
    const family = familyOf(doc.id);
    if (!map.has(family)) {
      map.set(family, []);
      order.push(family);
    }
    map.get(family)?.push(doc);
  }
  return { docs, groups: order.map((id) => ({ id, docs: map.get(id) ?? [] })) };
}

function DocNav({ lang, pathname }: { lang: Lang; pathname: string }) {
  const currentId = pathname.startsWith("/doc/") ? pathname.slice("/doc/".length) : "";
  const current = CATALOG.find((doc) => doc.id === currentId);
  const [part, setPart] = useState(current?.part ?? null);
  const [family, setFamily] = useState(current ? familyOf(current.id) : null);

  useEffect(() => {
    if (!current) return;
    setPart(current.part);
    setFamily(familyOf(current.id));
  }, [current]);

  return (
    <nav className="px-3 py-6" aria-label={lang === "fr" ? "Documents" : "Documents"}>
      <Link
        to="/"
        className={
          "mb-4 block rounded-md px-3 py-2 font-sans text-sm font-semibold " +
          (pathname === "/" ? "bg-accent-soft text-accent" : "text-ink hover:bg-accent-soft")
        }
      >
        {lang === "fr" ? "Bibliothèque" : "Library"}
      </Link>
      {(["U", "R"] as const).map((book) => (
        <div key={book} className="mb-3">
          <p className="px-3 pt-2 pb-1 font-sans text-[11px] font-semibold tracking-widest text-copper uppercase">
            {book === "U" ? (lang === "fr" ? "Utilisation" : "User’s manual") : lang === "fr" ? "Référence" : "Reference"}
          </p>
          {PARTS.filter((item) => item.book === book).map((item) => {
        const open = part === item.id;
        const { docs, groups } = families(item.id);
        const flat = docs.length <= 8;
        return (
          <div key={item.id} className="mb-1">
            <button
              type="button"
              aria-expanded={open}
              onClick={() => setPart(open ? null : item.id)}
              className="flex w-full items-baseline justify-between gap-2 rounded-md px-3 py-2 text-left hover:bg-accent-soft"
            >
              <span className="font-sans text-xs font-semibold tracking-widest text-muted uppercase">
                {item.id}
                <span className="mt-0.5 block font-normal tracking-normal normal-case text-ink">
                  {lang === "fr" ? item.fr : item.en}
                </span>
              </span>
              <span className="font-mono text-xs text-muted">{docs.length}</span>
            </button>
            {open ? (
              flat ? (
                <DocLinks docs={docs} lang={lang} currentId={currentId} />
              ) : (
                <ul className="mb-2">
                  {groups.map((group) => {
                    const groupOpen = family === group.id;
                    const hint = docTitle(group.docs[0].id, lang);
                    return (
                      <li key={group.id}>
                        <button
                          type="button"
                          aria-expanded={groupOpen}
                          onClick={() => setFamily(groupOpen ? null : group.id)}
                          className="flex w-full items-baseline gap-2 rounded-md px-3 py-1.5 text-left hover:bg-accent-soft"
                        >
                          <span className="shrink-0 font-mono text-xs text-copper">{group.id}</span>
                          <span className="min-w-0 flex-1 truncate font-sans text-sm text-ink">{hint}</span>
                          <span className="font-mono text-xs text-muted">{group.docs.length}</span>
                        </button>
                        {groupOpen ? <DocLinks docs={group.docs} lang={lang} currentId={currentId} /> : null}
                      </li>
                    );
                  })}
                </ul>
              )
            ) : null}
          </div>
        );
          })}
        </div>
      ))}
    </nav>
  );
}

function DocLinks({
  docs,
  lang,
  currentId,
}: {
  docs: (typeof CATALOG)[number][];
  lang: Lang;
  currentId: string;
}) {
  return (
    <ul className="mb-2 ml-3 border-l border-line">
      {docs.map((doc) => {
        const active = doc.id === currentId;
        return (
          <li key={doc.id}>
            <Link
              to="/doc/$id"
              params={{ id: doc.id }}
              title={docTitle(doc.id, lang)}
              className={
                "block rounded-r-md px-3 py-1.5 " +
                (active ? "bg-accent-soft text-accent" : "text-ink hover:bg-accent-soft")
              }
            >
              <span className="font-mono text-xs text-copper">{doc.id}</span>
              <span className="block truncate font-sans text-sm leading-snug">{docTitle(doc.id, lang)}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
