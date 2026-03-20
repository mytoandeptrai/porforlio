# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Interactive portfolio website with terminal/code-editor design aesthetic. Built as a single-page application with client-side rendering, featuring particle animations, interactive terminal, easter eggs, and a contact form that uses mailto links.

**Stack**: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, Framer Motion, Shadcn/UI (Radix UI)

## Development Commands

```bash
npm run dev    # Start development server on localhost:3000
npm run build  # Production build
npm run start  # Start production server
npm run lint   # Run ESLint
```

**Package Manager**: Uses npm (has both package-lock.json and pnpm-lock.yaml, but npm is primary based on scripts)

## Architecture

### Directory Structure

```
app/
├── components/          # Main portfolio section components
│   ├── hero.tsx            # Canvas particle animation + intro
│   ├── work-experience.tsx # Timeline component
│   ├── portfolio.tsx       # Project cards with JSON styling
│   ├── tech-stack.tsx      # Filterable skills grid
│   ├── terminal.tsx        # Interactive simulated terminal
│   ├── contact.tsx         # Code-editor styled form
│   ├── easter-eggs.tsx     # Konami code & hidden features
│   └── construction-terminal.tsx
├── layout.tsx           # Root layout with security headers
└── page.tsx             # Main page - imports all section components

components/ui/           # Shadcn/UI components (Radix UI wrappers)
hooks/                   # Custom React hooks (use-toast, use-mobile)
lib/
├── utils.ts            # cn() utility for Tailwind class merging
└── client-util.ts      # isBrowser() SSR safety guard
```

### Component Architecture

- **All components are Client Components** - every section uses `"use client"` directive
- **Single-page layout** - `app/page.tsx` imports and renders all section components in sequence
- **No API routes** - all data is hardcoded in components (projects array in portfolio.tsx)
- **Shadcn/UI pattern** - UI components in `components/ui/` are Radix UI wrappers configured via `components.json`

### Path Aliases

`@/*` maps to project root (configured in tsconfig.json):
- `@/components/ui/button` → `components/ui/button.tsx`
- `@/lib/utils` → `lib/utils.ts`
- `@/app/components/hero` → `app/components/hero.tsx`

### Styling System

- **Tailwind CSS** with custom theme extending default palette
- **CSS Variables** - colors defined as HSL variables in globals.css, referenced via `hsl(var(--color-name))`
- **cn() utility** - use `cn()` from `@/lib/utils` for conditional className merging
- **Dark theme by default** - no theme switching, fixed dark mode

## Key Technical Patterns

### SSR/Client Safety

Always check for browser environment before accessing browser APIs:

```typescript
import { isBrowser } from "@/lib/client-util"

if (isBrowser()) {
  // Safe to use window, document, localStorage, etc.
}
```

Or use inline check: `typeof window !== 'undefined'`

### Canvas Particle System (Hero)

- Raw Canvas API (no three.js) with 100 particles
- Particles wrap at screen edges (toroidal topology)
- Uses `requestAnimationFrame` for 60fps animation
- Cleanup pattern: return cleanup function from useEffect to cancel animation frame

### Interactive Terminal

- Desktop: character-by-character typing animation with delays
- Mobile: static content (no animation) - detected via strict mobile checks
- Uses IntersectionObserver to trigger animation only when visible
- **Critical**: all timers must be tracked in `timersRef` and cleared on unmount to prevent memory leaks
- Simulates commands (`whoami`, `cat`, `ls`) - not real shell execution

### Contact Form

- **No backend** - uses `mailto:` links to open user's email client
- **Honeypot field**: `_honeypot` hidden input catches bots
- **Zod validation**: name (2-50 chars), email (max 100), message (10-1000 chars)
- **Input sanitization**: regex removes `<>` and script tags before submission
- Uses React Hook Form + Zod via `@hookform/resolvers`

### Security Implementation

Security headers defined in `app/layout.tsx` as meta tags:
- Content-Security-Policy with `'unsafe-inline'` and `'unsafe-eval'` (required by Framer Motion)
- X-XSS-Protection, X-Content-Type-Options, Referrer-Policy, Permissions-Policy

All user inputs sanitized twice: Zod schema validation + explicit regex replacement.

## Easter Eggs

See `app/components/easter-eggs.tsx`:
1. **Konami Code** (↑↑↓↓←→←→BA): Displays HTTP status code cheat sheet (5 sec)
2. **Backend Console** (`>` key): Toggles console overlay with commands (help, clear, error, about, curses, exit)
3. **Logo clicks**: Click logo 5 times for admin access popup (3 sec)

Console supports ANSI color codes (e.g., `\x1b[31m` for red).

## Component Conventions

### Framer Motion Animations

Use declarative variants pattern:

```typescript
const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={variants}
>
```

### Responsive Design

- Desktop-first approach with responsive breakpoints
- Mobile detection for terminal uses regex: `/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|MI\s|Redmi|MIUI|XIAOMI/i`
- Use `use-mobile` hook from `@/hooks/use-mobile.tsx` for consistent mobile detection

## Shadcn/UI Components

Configured in `components.json`:
- Style: default
- Base color: neutral
- CSS variables: enabled
- Icon library: lucide-react

To add new Shadcn components:
```bash
npx shadcn@latest add <component-name>
```

Components are auto-configured with path aliases from components.json.

## Git Workflow

- **Main branch**: `master`
- **Commit convention**: Semantic commits in English (`feat:`, `fix:`, `refactor:`, `docs:`, `chore:`)
- **PR guidelines**: See CONTRIBUTING.md

## Common Gotchas

1. **Framer Motion CSP**: Requires `'unsafe-eval'` in Content-Security-Policy
2. **Mobile terminal**: Multiple strict checks required for reliable mobile detection
3. **Client Components**: Must use `"use client"` before importing hooks or browser APIs
4. **Canvas cleanup**: Always return cleanup function from useEffect to cancel animations
5. **Timer cleanup**: Track all timers in refs and clear on unmount to prevent memory leaks
6. **Form submission**: Opens email client via mailto - no backend API to connect to

## Additional Documentation

- **AGENTS.md**: Detailed implementation notes on non-obvious patterns (canvas system, easter eggs, terminal animations)
- **CONTRIBUTING.md**: Contribution guidelines and project standards
- **README.md**: Feature overview and setup instructions
