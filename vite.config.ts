import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  build: { outDir: "dist" },

  base: "/Bangin-Gear/",

  plugins: [react()],
  resolve: { alias: { "@": path.resolve(__dirname, ".") } },
  server: { port: 5173, open: true },
});