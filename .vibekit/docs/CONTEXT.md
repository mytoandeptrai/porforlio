# Project context

> Shared glossary and map for this repository (the porforlio portfolio site), so any
> agent navigates it with less back-and-forth.
> Keep it current and terse - definitions, not prose.

## Domain glossary

- **Section component** - one page block in `app/components/` (hero, work-experience, portfolio, tech-stack, terminal, contact, footer).
- **Easter egg** - hidden feature in `app/components/easter-eggs.tsx`: Konami code, backend console (`>` key), logo clicks.
- **Konami code** - key sequence that shows an HTTP status cheat sheet for 5 seconds.
- **Backend console** - overlay opened with `>`; commands: help, clear, error, about, curses, exit. The `curses` typo is intentional.
- **Terminal** - simulated shell in `terminal.tsx`; typing animation on desktop, static text on mobile. Not a real shell.
- **works[]** - hardcoded project array in `portfolio.tsx`.
- **Honeypot** - hidden `_honeypot` field in the contact form that catches bots.
- **mailto form** - contact form with no backend; opens the visitor's email client.
- **timersRef** - ref that tracks every terminal timer so unmount can clear them.

## Key areas

- Entry point(s): `app/page.tsx`, `app/layout.tsx`
- Core domain logic: `app/components/*.tsx`
- Configuration: `next.config.mjs`, `tailwind.config.ts`, `components.json`, `vercel.json`
- SEO surfaces: `app/layout.tsx` (metadata), `app/sitemap.ts`, `app/manifest.ts`, `app/opengraph-image.tsx`
- Tests: none
- Build/deploy: `pnpm build`; hosted on Vercel

## Conventions in use

- Naming: kebab-case files, PascalCase components, camelCase functions.
- Architecture / folder layout: Next.js App Router; sections in `app/components/`, Shadcn in `components/ui/`.
- Shared resources: `public/` for assets; no registry. Class merging via `cn()` from `@/lib/utils`.
- User-facing copy / localization: hardcoded in components; no i18n.

## External systems & integrations

- Vercel hosting and `@vercel/analytics`.
- Credentials/secrets location (names only, never values): none.

## Gotchas

- CSP meta tag in `app/layout.tsx` needs `'unsafe-inline'` and `'unsafe-eval'` for Framer Motion.
- Mobile detection in the terminal uses strict multi-check logic, including Xiaomi checks.
- Guard browser APIs with `isBrowser()` from `lib/client-util.ts`.
- Both `package-lock.json` and `pnpm-lock.yaml` exist; pnpm is the chosen manager.

---

Related: `.vibekit/docs/PRD.md` (intent and focus) and `backbone.yml` (project map, commands,
protected paths).
