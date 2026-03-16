# Portfolio 3.0

Web personal y carta de presentación digital: portfolio de proyectos, experiencia y servicios como desarrollador fullstack. Diseñada para ser clara, moderna y fácil de navegar.

---

## Con qué está construido

| Tecnología | Uso |
|------------|-----|
| **Astro 6** | Framework estático: enrutado por archivos, componentes `.astro` y generación de HTML en build. |
| **Vite** | Bundler y servidor de desarrollo (integrado en Astro). |
| **Tailwind CSS v4** | Estilos mediante el plugin `@tailwindcss/vite` y un `tailwind.config.mjs` con paleta y tipografía propias. |
| **Node.js** | Entorno de ejecución (requiere `>=22.12.0`). |

**Fuentes:** Cormorant Garamond (títulos), Didact Gothic (cuerpo), JetBrains Mono (eyebrows y código), cargadas desde Google Fonts en `src/styles/global.css`.

---

## Cómo funciona el proyecto

### Estructura principal

```
portfolio_3.0/
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro    # Layout raíz: HTML, meta, CSS global, <slot /> para el contenido
│   ├── pages/
│   │   └── index.astro         # Página principal (una sola ruta)
│   ├── components/
│   │   └── ui/                 # Header, Footer, SocialSidebar
│   ├── sections/               # Bloques de la home
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Services.astro
│   │   ├── Work.astro
│   │   ├── Stack.astro
│   │   └── Contact.astro
│   └── styles/
│       └── global.css          # Tailwind + variables y clases reutilizables
├── astro.config.mjs            # Astro + plugin Tailwind
├── tailwind.config.mjs         # Colores (navy, cream, gold), letter-spacing
└── package.json
```

### Enrutado

- **Astro** usa **file-based routing**: lo que está en `src/pages/` se convierte en rutas.
- Este proyecto tiene una sola página: `src/pages/index.astro` → `/`.

### Layout y páginas

- Todas las páginas usan **`BaseLayout.astro`**, que define:
  - `lang="es"`, meta description, título.
  - Enlace al CSS global y favicon.
  - Clases base del body (fondo, texto, tipografía).
- El contenido de cada página se inyecta mediante **`<slot />`**.

En `index.astro` se compone la home así:

1. **Header** (navegación).
2. **SocialSidebar** (enlaces laterales).
3. **Contenido principal** (`<main>`): Hero → About → Services → Work → Stack → Contact.
4. **Footer**.

### Estilos

- **`src/styles/global.css`**:
  - Importa Tailwind con `@import "tailwindcss"` y `@config` al `tailwind.config.mjs`.
  - Define capas `@layer base` (scroll, body, enlaces, scrollbar) y `@layer components` (`.section-container`, `.divider-gold`, `.eyebrow`, `.heading-xl`, `.nav-link`, `.btn-primary`, `.btn-outline`, etc.).
- **Tailwind**: paleta (navy, cream, gold), espaciado de letras y clases de utilidad en los componentes.

### Idiomas y tema

- La interfaz está en **español**.
- Tema **claro** por defecto (fondo claro, texto oscuro, acentos en dorado).

---

## Comandos

Asegúrate de tener **Node.js ≥ 22.12** y **pnpm** instalados.

```bash
# Instalar dependencias
pnpm install

# Servidor de desarrollo (recarga en vivo)
pnpm dev
# → http://localhost:4321

# Build de producción (salida en dist/)
pnpm build

# Vista previa del build de producción
pnpm preview
```

---

## Resumen

- **Una sola página** con secciones: Hero, Sobre mí, Servicios, Trabajos, Stack y Contacto.
- **Astro** genera HTML estático en build; **Tailwind** da el diseño y las utilidades.
- **BaseLayout** envuelve todo; los bloques de la home viven en `sections/` y la UI común en `components/ui/`.

Si quieres cambiar textos, enlaces o estilos, los archivos clave son `src/pages/index.astro`, los `.astro` en `src/sections/` y `src/styles/global.css`.
