import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { isStaticSite } from "@/lib/static-site";
import appCss from "../styles.css?url";

const APP_NAME = "Aster English";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "Unofficial English reading edition of the Code_Aster User's and Reference manuals.",
      },
      { name: "theme-color", content: "#0e4c5c" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Newsreader:ital,opsz,wght@0,6..72,480;0,6..72,600;1,6..72,480&family=Source+Sans+3:ital,wght@0,400;0,600;0,700;1,400&display=swap",
      },
    ],
  }),
  component: () =>
    isStaticSite ? (
      <>
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
      </>
    ) : (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
    ),
});
