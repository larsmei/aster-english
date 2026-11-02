import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

/**
 * Client-only build for a plain webspace. No Nitro, no Node server.
 * `base: "./"` keeps scripts, styles and copied files working in a subfolder.
 */
export default defineConfig({
  base: "./",
  appType: "spa",
  publicDir: "public",
  build: {
    outDir: "dist-static",
    emptyOutDir: true,
    chunkSizeWarningLimit: 20000,
    rollupOptions: {
      input: "static/index.html",
    },
  },
  resolve: {
    tsconfigPaths: true,
    alias: {
      "@/lib/static-site": fileURLToPath(new URL("./src/lib/static-site.on.ts", import.meta.url)),
    },
  },
  plugins: [tailwindcss(), viteReact()],
});
