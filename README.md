# Bangin-Gear

React + Vite + Tailwind project configured for **GitHub Pages** deployment via **GitHub Actions**.

## Local Setup

```bash
# 1) Install dependencies
npm install

# 2) Run dev server
npm run dev

# 3) Build and preview production bundle
npm run build && npm run preview
```

## GitHub Pages Deployment (Actions)

This repo is preconfigured to deploy to **GitHub Pages** using GitHub Actions.

1. Ensure `vite.config.ts` has `base: "/Bangin-Gear/"` and `build.outDir = "dist"` (already set).
2. Push to `main`. The workflow will:
   - Use Node 20
   - Install dependencies (`npm ci` if `package-lock.json` exists, else `npm install`)
   - Build with `--outDir dist --emptyOutDir`
   - Create `dist/404.html` (SPA fallback)
   - Upload and deploy via `actions/deploy-pages@v4`
3. In GitHub, go to **Settings → Pages** and set **Build and deployment** to **GitHub Actions** (if not already).

> **Note:** Always commit `package-lock.json` so CI can run `npm ci` for reproducible builds.

## Scripts

- `npm run dev` — Vite dev server
- `npm run build` — production build
- `npm run preview` — preview the production build locally

---

**Repository Base Path**: This site will be served at `https://CodeStar86.github.io/Bangin-Gear/`, so Vite's `base` is set accordingly.
