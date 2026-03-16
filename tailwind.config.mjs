/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Light theme palette (keeps existing class names) */
        navy: "#f8fafc",       /* page background */
        "navy-mid": "#ffffff", /* cards/sections */
        cream: "#0f172a",      /* main text */
        "cream-dim": "#334155",/* secondary text */
        gold: "#c9a84c",
      },
      letterSpacing: {
        w2: "0.18em",
        w3: "0.22em",
      },
    },
  },
  plugins: [],
};
