# Muhammad Talha — Portfolio

Personal portfolio site for Muhammad Talha, Senior Flutter Developer. Built as a
dark-first, animated, accessible single-page site showcasing experience, skills,
and 22+ shipped mobile projects.

## Tech Stack

- **React 19 + Vite + TypeScript** (strict mode)
- **Tailwind CSS 3** with CSS-variable-driven theming (light/dark)
- **Framer Motion** for scroll reveals, magnetic buttons, tilt cards, typing effect,
  animated counters/skill bars, and an aurora hero background
- **lucide-react** for icons
- Contact form via **Formspree** with a `mailto:` fallback when no form ID is configured
- Native React 19 document metadata (no `react-helmet`)

## Getting Started

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env` and set `VITE_FORMSPREE_FORM_ID` to enable the
Formspree-backed contact form. Without it, the form falls back to opening a
pre-filled `mailto:` link.

## Scripts

| Script            | Description                                   |
| ------------------ | ---------------------------------------------- |
| `npm run dev`       | Start the Vite dev server                      |
| `npm run build`     | Type-check (`tsc -b`) and build for production  |
| `npm run typecheck` | Type-check only, no emit                        |
| `npm run lint`      | Run ESLint over the project                     |
| `npm run preview`   | Preview the production build locally            |

## Project Structure

```
src/
  data/portfolio.ts        # Single source of truth for all site content
  components/
    ui/                     # Reusable primitives (Section, Badge, TiltCard, ...)
    layout/                 # Navbar, Footer, ScrollProgress, ThemeToggle, ...
    sections/                # One file per page section (Hero, About, Projects, ...)
  hooks/                    # useTheme, useActiveSection, useTypingEffect, ...
  lib/                      # Motion variants + small utilities (cn, isValidEmail, ...)
```

Below-the-fold sections are lazy-loaded via `React.lazy` + `Suspense` for
smaller initial bundles.

## Content

All CV-derived content (profile, experience, skills, projects, education,
certifications) lives in `src/data/portfolio.ts`, fully typed. A few sections
(languages, testimonials) contain clearly marked `"Replace with actual content"`
placeholders where the source CV had no equivalent data — search that file for
`placeholder: true` to find and replace them.

## Deployment

Before deploying, replace the placeholder domain (`https://example.com`) in
`index.html`, `public/robots.txt`, and `public/sitemap.xml` with the real
production domain.

Build output is emitted to `dist/` and is ready to deploy to any static host
(Vercel, Netlify, GitHub Pages, etc.).
