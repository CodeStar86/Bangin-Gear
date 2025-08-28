# Documentation

## Quick Start

```bash
npm install
npm run dev
# optional
npm run build
npm run preview
```

## Project Scripts

- **dev** — `vite`
- **build** — `tsc -b && vite build`
- **preview** — `vite preview`

## Development
- Uses Vite + React (TypeScript).
- Source code is under `src/`.
- If imports use `@/`, ensure `vite.config` and `tsconfig.json` define the alias.

## Build
- `npm run build` produces a production bundle in `dist/`.
- `npm run preview` serves the built assets locally.

## Deployment
- Static hosting (Netlify, Vercel, GitHub Pages) or any static file server can serve the `dist/` folder.
- Ensure correct base path if deploying to a subdirectory (set `base` in `vite.config`).

## Compliance & Licenses
- Included **LICENSE** (MIT) for this project scaffold/code.
- See **Attributions.md** for third‑party packages, icons, and fonts.
- Verify licensing for any demo/stock images before commercial use.

## Troubleshooting
- Remove unsupported UI props (e.g., `size` on some `Switch` components).
- Fix stray quotes in imports (e.g., `react-dom/client`).
- Align Tailwind/PostCSS configs; do not use Tailwind PostCSS plugin if CSS is prebuilt.
