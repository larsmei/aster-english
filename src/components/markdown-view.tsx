import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import { slug } from "@/content/docs";

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
  const prepared = markdown.replace(/\]\(doc:([a-z0-9.]+)\)/g, "](/doc/$1)");
  return (
    <div className="manual">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
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
            const mark = alt === "icon" || /\/Shape\d+\.gif(?:$|\?)/.test(src ?? "");
            return (
              <img
                src={src}
                alt={alt ?? ""}
                className={mark ? "manual-mark" : "manual-figure"}
              />
            );
          },
          a: ({ href, children }) => {
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
