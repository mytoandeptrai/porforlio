<div align="center">

# `> jacob.dev`

**Interactive portfolio with terminal design — built with Next.js 15, React 19, and TypeScript.**

[![Deploy Status](https://img.shields.io/netlify/your-site-id?label=deploy&logo=netlify&logoColor=white)](https://mytoandeptrai.online)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)

<br />

[**Live Demo**](https://mytoandeptrai.online) · [**Report Bug**](https://github.com/jacob-projects/myPortfolio/issues/new?template=bug_report.md) · [**Suggest Feature**](https://github.com/jacob-projects/myPortfolio/issues/new?template=feature_request.md)

</div>

---

## Features

- **Hero with Particles** — canvas animation with interactive particle effects
- **Professional Timeline** — work experience in interactive timeline format
- **Projects in JSON** — project cards styled as JSON objects with category filters
- **Filterable Tech Stack** — technical skills organized and filterable by category
- **Interactive Terminal** — simulates a real terminal with commands (`whoami`, `cat`, `ls`)
- **Code-Editor Contact Form** — contact styled as code editor with Zod validation
- **Easter Eggs** — Konami Code and secret backend console (press `>` key)
- **Dark Theme** — design inspired by terminals and code editors
- **Security** — CSP, honeypot, input sanitization, and security headers
- **Responsive** — adapted for all screen resolutions

---

## Quick Start

```bash
git clone https://github.com/jacob-projects/myPortfolio.git
cd myPortfolio
npm install
npm run dev
```

Open [localhost:3000](http://localhost:3000).

---

## Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org/) | 15 | React framework with App Router |
| [React](https://react.dev/) | 19 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Static typing |
| [Tailwind CSS](https://tailwindcss.com/) | 3.4 | Utility-first styling |
| [Framer Motion](https://motion.dev/) | latest | Animations and transitions |
| [Shadcn/UI](https://ui.shadcn.com/) | — | Accessible components (Radix UI) |
| [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) | latest | Form management and validation |
| [Lucide React](https://lucide.dev/) | — | Icons |

---

## Project Structure

```
app/
├── components/          # Portfolio sections
│   ├── hero.tsx         # Particles + introduction
│   ├── work-experience.tsx  # Professional timeline
│   ├── portfolio.tsx    # Projects in JSON
│   ├── tech-stack.tsx   # Filterable skills
│   ├── terminal.tsx     # Interactive terminal
│   ├── contact.tsx      # Styled contact form
│   ├── easter-eggs.tsx  # Hidden features
│   └── footer.tsx
├── layout.tsx           # Layout + security headers
├── page.tsx             # Main page
└── globals.css
components/ui/           # Shadcn/UI components
hooks/                   # Custom hooks
lib/                     # Utilities
public/                  # Static assets
```

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Production server |
| `npm run lint` | Linter |

---

## Security

- **Content-Security-Policy (CSP)** — XSS and script injection prevention
- **Zod Validation** — schema validation on forms
- **Honeypot** — bot detection in contact form
- **Sanitization** — protection against malicious characters
- **Headers** — X-XSS-Protection, X-Content-Type-Options, Referrer-Policy, Permissions-Policy

---

## Contributing

Contributions are welcome! Read the [contribution guide](./CONTRIBUTING.md) to get started.

---

## Contact

| Channel | Link |
|---------|------|
| Email | contact@mytoandeptrai.online |
| LinkedIn | [jacob](https://mytoandeptrai.online/linkedin) |
| GitHub | [jacob](https://mytoandeptrai.online/github) |

---

## License

Distributed under the MIT License. See [LICENSE](./LICENSE) for more details.

---

<div align="center">

If this project was helpful, please consider giving it a **star**!

</div>
