# Copilot Instructions for Pathways

## Project snapshot

- This is a **Next.js 15 App Router** site (React 19) focused on mostly static content pages for FPDI.
- Styling is done with **Tailwind CSS v4** via [src/app/globals.css](src/app/globals.css) (`@import "tailwindcss";`).
- Main app shell is in [src/app/layout.jsx](src/app/layout.jsx): global `Header` + page content + `Footer`.

## Architecture and boundaries

- Routes live under [src/app](src/app): e.g. [src/app/about/page.jsx](src/app/about/page.jsx), [src/app/career/page.jsx](src/app/career/page.jsx), [src/app/contact/page.jsx](src/app/contact/page.jsx), and `works/*` pages.
- Reusable UI is colocated in [src/app/components](src/app/components) (not in a separate `src/components` root).
- Homepage sections are split into focused components in [src/app/components/Homepage](src/app/components/Homepage): `brands`, `vision`, `leadership`, `theory`.
- Cross-page reusable blocks are in [src/app/components/reusable](src/app/components/reusable): `header`, `footer`, `projectcard`, `teamcard`, `imageslider`.

## Data flow patterns used here

- Content is currently hardcoded in component/page files; there is no API or server data layer.
- Repeated cards are built from in-file arrays, then mapped to reusable components (see [src/app/works/programs/page.jsx](src/app/works/programs/page.jsx) and [src/app/works/events/page.jsx](src/app/works/events/page.jsx)).
- Navigation state for mobile menu/dropdowns is local component state in [src/app/components/reusable/header.jsx](src/app/components/reusable/header.jsx).

## Conventions to follow when editing

- Keep route pages as `page.jsx` under App Router folders.
- Preserve current visual language: Tailwind utility classes + gradient buttons + rounded card layouts.
- Use `next/image` for local images; most assets are imported from [src/app/assets/image](src/app/assets/image).
- Use `next/link` for internal routes; external links use `<a target="_blank" rel="noopener noreferrer">` when already following that pattern.
- Path alias `@/*` is configured in [jsconfig.json](jsconfig.json); both alias and relative imports are used in this repo.
- Many pages are explicitly client components (`"use client"`) even when mostly static—do not remove it unless you verify no client-only behavior is needed.

## Developer workflow

- Install deps: `npm install`
- Dev server (Turbopack): `npm run dev`
- Production build: `npm run build`
- Start production server: `npm run start`
- Lint: `npm run lint` (ESLint flat config in [eslint.config.mjs](eslint.config.mjs), extending `next/core-web-vitals`).
- There is currently **no test suite** configured in `package.json`.

## Integration points and gotchas

- External integrations are link-based (Google Drive brochure, Google Form, social profiles) in header/footer/career pages.
- Verify route consistency when adding links: `Header` currently links to `/works` and `/works/publication`, but those routes are not present in [src/app/works](src/app/works).
- Some route files are placeholders/empty (e.g. blog/policies/impactreport under `works`); keep UX coherent if you implement them.
