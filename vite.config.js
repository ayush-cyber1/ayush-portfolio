import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vercel needs base: "/" (its own root domain).
// GitHub Pages needs base: "/ayush-portfolio/" (a sub-folder path).
// Automatically switches based on which build command you run.
export default defineConfig({
  plugins: [react()],
  base: process.env.DEPLOY_TARGET === "ghpages" ? "/ayush-portfolio/" : "/",
  server: { port: 5173, open: true },
  build: { outDir: "dist", sourcemap: false },
});