# AGENTS.md

This file provides guidance to agents when working with code in this repository.

## Quick Reference

**Stack**: Next.js 15 + React 19 + TypeScript + Tailwind + Framer Motion + Shadcn/UI

## Non-Obvious Patterns

### Client-Side Safety Utilities
- `lib/client-util.ts` provides `isBrowser()` guard to safely check for `window` in SSR context
- Always use `isBrowser()` or `typeof window !== 'undefined'` before accessing browser APIs
- All page components use `"use client"` directive (Client Components by design)

### Contact Form Implementation
- Form doesn't submit to backend - uses `mailto:` links to open user's email client
- Includes honeypot field `_honeypot` (hidden from UI, catches bots)
- Sanitizes inputs with regex to prevent XSS: removes `<>` and script tags
- Zod schema validates length limits (name: 2-50, email: max 100, message: 10-1000 chars)

### Security Headers
- CSP meta tag in `app/layout.tsx` allows `'unsafe-inline'` and `'unsafe-eval'` (needed for Framer Motion)
- All inputs sanitized twice: Zod validation + explicit regex replacement

### Terminal Animations
- Terminal component in `app/components/terminal.tsx` uses custom `IntersectionObserver` to lazy-load animation only when visible
- Complex mobile detection includes Xiaomi-specific checks (`MI\s|Redmi|MIUI|XIAOMI`)
- Desktop: animated typing effect with character-by-character delays; Mobile: shows static content immediately
- Timer cleanup critical for preventing memory leaks (all timers tracked in `timersRef`)

### Canvas Particle System
- Hero section uses raw Canvas API (no three.js) with 100 particles
- Particles wrap around edges (toroidal space)
- Canvas resizes on window resize event listener
- Uses `requestAnimationFrame` for smooth 60fps animation

### Easter Eggs
- **Konami Code**: ↑↑↓↓←→←→BA triggers HTTP status cheat sheet (5 sec display)
- **Backend Console**: Press `>` key to toggle console overlay with commands:
  - `help` - list commands
  - `clear` - clear console
  - `error` - trigger stack trace display
  - `about` - show developer info
  - `curses` - list courses (typo in command name is intentional)
  - `exit` - close console
- Console output supports ANSI color codes (e.g., `\x1b[31m` for red)
- Click logo 5 times triggers admin access popup (3 sec display)

### Component Architecture
- Projects data hardcoded as `works[]` array in `portfolio.tsx` (not API)
- Portfolio uses Tabs component from Shadcn for project details (description/endpoints)
- Terminal displays simulated commands output - not real shell execution

### Import Paths
- Path alias `@/*` maps to project root (not `src/`)
- Example: `@/components/ui/button` resolves to `components/ui/button.tsx`

## Common Gotchas

1. Mobile detection in terminal is strict - multiple checks required for reliability
2. Form submission opens email client - no backend validation/storage
3. Canvas animations don't animate on mobile (detected early, shows static content)
4. Framer Motion requires `'unsafe-eval'` in CSP (needed for layout animations)
5. All components must check `typeof window !== 'undefined'` before browser API access
6. Never import hooks at module level in server components - always use `"use client"`
