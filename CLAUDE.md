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

**Routing:** `src/pages/` maps directly to URL routes.

**Layout pattern:** All pages use `<Layout title="...">` from `src/layouts/Layout.astro`, which renders the `<Navbar />` and a `<slot />` for page content.

**Styling approach:** Global styles and component classes live in `src/styles/global.css`, imported via `@import "tailwindcss"`. Navbar uses BEM class naming (`.navbar`, `.navbar__container`, etc.) with a dark Material Design-inspired theme. The `.md-ripple` utility class adds a CSS-only ripple effect on click.

**Language:** UI content is in Spanish.

## Current sections

- `Navbar` — sticky, dark gradient app bar with brand logo ("M") and links to `#sobre-mi` and `#servicios`
