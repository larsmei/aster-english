import { Link, useRouter } from "@tanstack/react-router";
import type { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import { slug } from "@/content/docs";
import { ASTER_MACROS } from "@/lib/aster-macros";
import { isStaticSite } from "@/lib/static-site";

function safeHash(value: string): string {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function assetSrc(src: string | undefined): string | undefined {
  if (!src || !isStaticSite || !src.startsWith("/") || src.startsWith("//")) return src;
  const base = import.meta.env.BASE_URL || "./";
  const prefix = base.endsWith("/") ? base : `${base}/`;
  return prefix + src.slice(1);
}

function nodeText(node: ReactNode): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(nodeText).join("");
  if (typeof node === "object" && "props" in node) {
    const props = (node as { props?: { children?: ReactNode } }).props;
    return nodeText(props?.children);
  }
  return "";
}

function Heading(level: 2 | 3 | 4) {
  return function HeadingTag({ children }: { children?: ReactNode }) {
    const text = nodeText(children);
    const id = slug(text);
    const Tag = level === 2 ? "h2" : level === 3 ? "h3" : "h4";
    return <Tag id={id}>{children}</Tag>;
  };
}

export function MarkdownView({ markdown }: { markdown: string }) {
  const router = useRouter();
  const prepared = markdown.replace(/\]\(doc:([a-z0-9.]+)\)/g, "](/doc/$1)");
  return (
    <div className="manual">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[[rehypeKatex, { macros: ASTER_MACROS, throwOnError: false, strict: "ignore" }]]}
        components={{
          h2: Heading(2),
          h3: Heading(3),
          h4: Heading(4),
          table: ({ children }) => (
            <div className="table-scroll">
              <table>{children}</table>
            </div>
          ),
          img: ({ src, alt }) => {
            const resolved = assetSrc(src);
            const mark = alt === "icon" || /\/Shape\d+\.gif(?:$|\?)/.test(resolved ?? "");
            return (
              <img
                src={resolved}
                alt={alt ?? ""}
                className={mark ? "manual-mark" : "manual-figure"}
              />
            );
          },
          a: ({ href, children }) => {
            if (href?.startsWith("#")) {
              const id = safeHash(href.slice(1));
              return (
                <a
                  href={href}
                  onClick={(event) => {
                    event.preventDefault();
                    void router.navigate({ hash: id });
                  }}
                >
                  {children}
                </a>
              );
            }
            if (href?.startsWith("/doc/")) {
              const id = href.slice("/doc/".length);
              return (
                <Link to="/doc/$id" params={{ id }}>
                  {children}
                </Link>
              );
            }
            const external = Boolean(href?.startsWith("http"));
            return (
              <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
                {children}
              </a>
            );
          },
        }}
      >
        {prepared}
      </ReactMarkdown>
    </div>
  );
}
