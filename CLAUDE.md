# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start dev server (localhost:4321)
pnpm build      # Production build (outputs to dist/)
pnpm preview    # Preview the production build
```

## Stack

- **Astro 6** — file-based routing, `.astro` components with frontmatter fence (`---`)
- **Tailwind CSS v4** — integrated via `@tailwindcss/vite` plugin (no config file needed)
- **Roboto** — loaded via Google Fonts in `Layout.astro`

## Architecture

**Routing:** `src/pages/` maps directly to URL routes. Currently a single-page portfolio (`index.astro`).

**Layout pattern:** All pages use `<BaseLayout title="..." description="...">` from `src/layouts/BaseLayout.astro`, which sets up the HTML shell (lang, meta, fonts). Page-level components (`Header`, `Footer`, `SocialSidebar`, sections) are composed directly in `index.astro`, not inside the layout.

**Component structure:**
- `src/components/ui/` — reusable UI pieces (`Header`, `Footer`, `SocialSidebar`)
- `src/sections/` — full-width page sections composed in `index.astro` order: `Hero → About → Services → Work → Stack → Contact`

**Styling approach:** Global styles and Tailwind live in `src/styles/global.css`, imported in `BaseLayout.astro` via `import '../styles/global.css'` (not a `<link>` tag — avoids 404 in production). Base theme uses `bg-navy` / `text-cream` custom colors. The `.md-ripple` utility class adds a CSS-only ripple effect on click.

**Language:** UI content is in Spanish.
