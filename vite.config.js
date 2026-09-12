import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";

function inlineCriticalCss() {
  return {
    name: "inline-critical-css",
    apply: "build",
    enforce: "post",
    writeBundle(options, bundle) {
      const outDir = options.dir;
      const htmlPath = path.join(outDir, "index.html");
      let html = fs.readFileSync(htmlPath, "utf-8");

      for (const fileName in bundle) {
        if (fileName.endsWith(".css")) {
          const cssPath = path.join(outDir, fileName);
          const cssContent = fs.readFileSync(cssPath, "utf-8");

          const linkRegex = new RegExp(
            `<link[^>]*href="[^"]*${fileName}"[^>]*>`,
          );
          html = html.replace(linkRegex, `<style>${cssContent}</style>`);
        }
      }

      fs.writeFileSync(htmlPath, html);
    },
  };
}

export default defineConfig({
  plugins: [react(), inlineCriticalCss()],
  build: {
    cssCodeSplit: false,
  },
  server: {
    host: true,
  },
});
