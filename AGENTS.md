# AGENTS.md

This file provides guidance to AI coding agents when working in this repository.

## Commands

```bash
pnpm dev        # Start dev server at localhost:4321
pnpm build      # Production build (outputs to dist/)
pnpm preview    # Preview the production build
pnpm astro      # Passthrough to Astro CLI
```

- **No linter or formatter** — the project has no ESLint, Prettier, Biome, or similar.
- **No test framework** — there are no tests, no test runner config, and no test scripts.
- **Package manager**: `pnpm` (use `pnpm add` / `pnpm remove`). There's a stale `package-lock.json` that should NOT be used.
- **Node engine**: `>=22.12.0`.

## Stack

- **Astro 6** — SSG, file-based routing (`src/pages/`), `.astro` component syntax with frontmatter fence (`---`).
- **Tailwind CSS v4** — integrated via `@tailwindcss/vite` plugin; config in `tailwind.config.mjs` loaded via `@config` directive in CSS.
- **TypeScript** — strict mode (`astro/tsconfigs/strict`), no path aliases configured.
- **Fonts** — Roboto (sans), Cormorant Garamond (serif), JetBrains Mono (mono) via Google Fonts.
- **No client-side framework** — no React, Vue, Svelte, or Astro islands (`client:*` directives). Zero JS runtime. Inline `<script>` modules only.

## Architecture

- **Single page**: `src/pages/index.astro` → route `/`.
- **Layout pattern**: `src/layouts/BaseLayout.astro` provides HTML shell (`<html>`, `<head>`, `<body>`, `<slot />`, global scroll-reveal script). Not a nested layout — one level only.
- **Component structure**:
  - `src/components/ui/` — reusable UI pieces (Header, Footer, SocialSidebar, Icon, BrandMarquee)
  - `src/sections/` — full-width page sections, composed in this order in `index.astro`:
    - Hero → About → Services → Work (Valor) → Stack → Contact
- **Styling**: `src/styles/global.css` imported in `BaseLayout.astro` via `import '../styles/global.css'` (NOT a `<link>` tag — avoids 404 in production). Custom `@layer base` and `@layer components` utilities. No Astro scoped `<style>` blocks.
- **UI language**: Spanish.
- **Contact form**: POSTs to formcarry.com via client-side `fetch`. No server-side form handling.

## Code style

### Imports

- **All imports are relative** (`../`). No path aliases or absolute imports.
- **Single group** — no separation between external/internal imports.
- **Column alignment** — imports are padded with spaces to align the module paths:

```astro
import BaseLayout   from '../layouts/BaseLayout.astro'
import Header       from '../components/ui/Header.astro'
import Hero         from '../sections/Hero.astro'
```

### Formatting

| Rule | Standard |
|------|----------|
| Quotes | Double (`"`) — consistently everywhere |
| Semicolons | Always |
| Trailing commas | Always on multiline arrays, objects, imports |
| Indentation | 2 spaces |
| Line endings | Files end with newline |

### Naming

| Context | Convention | Examples |
|---------|-----------|----------|
| Component files | PascalCase | `Hero.astro`, `SocialSidebar.astro` |
| Directories | lowercase | `components/ui/`, `sections/` |
| Variables | camelCase | `navLinks`, `menuOpen`, `formSuccess` |
| Interfaces | PascalCase (always `Props`) | `interface Props` |
| Union types | PascalCase | `type IconName = 'github' \| 'linkedin'` |
| CSS classes | kebab-case | `.btn-primary`, `.skill-pill` |

### TypeScript

- **No `any`** — strict mode is active. Use proper types everywhere.
- **`interface`** for Props, **`type`** for unions.
- **Optional props** marked with `?` (e.g. `title?: string`).
- **Destructure with defaults**: `const { title = 'default' } = Astro.props`
- **DOM element casting**: prefer `as HTMLFormElement` over `!` non-null assertion:

```ts
// Preferred:
const form = document.getElementById('contactForm') as HTMLFormElement

// Avoid:
const btn = document.getElementById('menuBtn')!   // exists in codebase, but prefer `as` for new code
```

### Error handling

- **try/catch/finally** for async operations (form submission, fetch). The `catch` clause can omit the error parameter when unused.
- **No error boundaries**, no `Astro.error()`, no error logging.
- **Client-side form validation** using `validateField()` returning `boolean` and updating `aria-invalid`.

```ts
try {
  const res = await fetch(url, options)
  if (res.ok) { /* success */ }
  else { /* server error */ }
} catch {
  /* network error */
} finally {
  submitBtn.disabled = false
}
```

### Accessibility

- Always use semantic HTML with ARIA attributes: `aria-label`, `aria-hidden`, `aria-expanded`, `aria-controls`, `aria-invalid`, `aria-required`, `aria-describedby`, `role="banner"`, `role="navigation"`, `role="alert"`, `role="button"`.
- Error messages in forms use `role="alert"`.
- Decorative elements get `aria-hidden="true"`.

### Component conventions

- **Astro components**: frontmatter `---` for JS/TS (imports, data, props, logic), then HTML template, then optional `<script>` for client-side JS.
- **Props**: typed via `interface Props` inside frontmatter, destructured with defaults.
- **Iteration**: use `.map()` expressions directly in templates.
- **No `export default`** — Astro treats every `.astro` file as a component implicitly.
- **Scripts**: `<script>` tags render as ES modules. Use TypeScript syntax inside them (type annotations, etc.).

### CSS

- **Tailwind utility classes** for all styling. Follow the established pattern of long string concatenations.
- **Custom CSS** goes in `src/styles/global.css`, organized by `@layer base` and `@layer components`.
- **No CSS modules**, CSS-in-JS, or Astro scoped `<style>`.
- **Animations**: `@keyframes` in `global.css`. Entrance animations use `.animate-fade-up[-N]` classes. Scroll reveal uses `.reveal` + `.is-visible` + `.reveal-delay-N` classes triggered by Intersection Observer.

## Conventions

- **Comments**: Use `//` in frontmatter for component descriptions and section markers. Avoid inline comments in templates. Keep comments minimal and purposeful.
- **Prefer `const` over `let`** — only use `let` for state that changes (menu toggle, etc.).
- **HTML structure**: consistent use of `id` + `aria-label` on sections matching navigation targets.
- **Color palette**: `bg-navy` / `bg-navy-mid` (backgrounds), `text-cream` / `text-cream-dim` (text), `text-gold` / `border-gold-*` (accents).
