# Skill Registry — portfolio_3.0

Generated: 2026-03-22

## Project Conventions

| File | Purpose |
|------|---------|
| `CLAUDE.md` | Project-level instructions: stack, architecture, commands, styling approach |
| `~/.claude/CLAUDE.md` | Global user instructions: personality, language, behavior, SDD workflow |

## Available Skills

No project-level skills detected (`~/.claude/skills/` is empty).

To add a skill: create `~/.claude/skills/{skill-name}/SKILL.md` and re-run `/sdd-init` or `/skill-registry`.

## Stack Summary

- **Framework**: Astro 6 (file-based routing, `.astro` components)
- **Styling**: Tailwind CSS v4 via `@tailwindcss/vite` (no config file)
- **Package manager**: pnpm
- **Node**: >=22.12.0
- **IDE**: VSCode + Astro extension

## Component Map

| Path | Role |
|------|------|
| `src/layouts/BaseLayout.astro` | HTML shell, meta, fonts (Roboto via Google Fonts) |
| `src/pages/index.astro` | Single-page portfolio, composes all sections |
| `src/components/ui/` | Reusable UI: Header, Footer, SocialSidebar, BrandMarquee |
| `src/sections/` | Full-width sections: Hero, About, Services, Work, Stack, Contact |
| `src/styles/global.css` | Global styles + Tailwind, custom colors (bg-navy, text-cream) |
