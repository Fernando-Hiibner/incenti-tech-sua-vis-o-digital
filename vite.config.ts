import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const deferModuleScripts = () => ({
  name: "defer-module-scripts",
  transformIndexHtml: {
    order: "post" as const,
    handler(html: string) {
      return html.replace(
        /<script type="module" crossorigin src="([^"]+)"><\/script>/g,
        '<script type="module" crossorigin defer src="$1"></script>',
      );
    },
  },
});

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), deferModuleScripts(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        ptBr: path.resolve(__dirname, "pt-br/index.html"),
        en: path.resolve(__dirname, "en/index.html"),
      },
    },
  },
}));
