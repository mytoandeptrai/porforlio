<div align="center">

# 🚀 Interactive Developer Portfolio

**Modern portfolio website with terminal-inspired design aesthetic — powered by Next.js 15, React 19, and TypeScript**

[![Deploy Status](https://img.shields.io/netlify/your-site-id?label=deploy&logo=netlify&logoColor=white)](https://porforlio-jacob.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)

<br />

### [**🌐 Live Demo**](https://porforlio-jacob.vercel.app) · [**📝 Report Bug**](https://github.com/jacob-projects/myPortfolio/issues/new?template=bug_report.md) · [**💡 Request Feature**](https://github.com/jacob-projects/myPortfolio/issues/new?template=feature_request.md)

</div>

---

## 📖 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Getting Started](#-getting-started)
- [Development](#-development)
- [Deployment](#-deployment)
- [Security](#-security)
- [Performance](#-performance)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🎯 About

A modern, interactive portfolio website designed for developers who appreciate clean, terminal-inspired aesthetics. Built as a single-page application with a focus on performance, accessibility, and user experience. Features include particle animations, an interactive terminal simulator, hidden easter eggs, and a code-editor styled contact form.

**Design Philosophy:** Combining the elegance of code editors with smooth animations to create an engaging user experience while maintaining professional presentation.

---

## ✨ Features

### 🎨 **Visual & Interactive**
- **Particle Animation Hero** — 100+ animated particles with toroidal wrap-around on canvas
- **Interactive Terminal** — Simulates a real Unix terminal with commands like `whoami`, `cat`, `ls`
- **Smooth Animations** — Framer Motion powered transitions with scroll-based reveals
- **Responsive Design** — Mobile-first approach with adaptive layouts for all screen sizes

### 💼 **Portfolio Sections**
- **Work Experience Timeline** — Professional experience displayed in chronological order
- **Project Showcase** — Projects styled as JSON objects with category filtering
- **Tech Stack Grid** — Filterable skills organized by categories (Frontend, Backend, DevOps)
- **Code-Editor Contact Form** — Contact section designed to look like VS Code with syntax highlighting

### 🎮 **Easter Eggs & Secrets**
- **Konami Code** (`↑↑↓↓←→←→BA`) — Unlocks HTTP status codes cheat sheet
- **Backend Console** (Press `>`) — Hidden developer console with custom commands
- **Logo Easter Egg** — Click the logo 5 times for admin access popup

### 🔒 **Security & Performance**
- **CSP Headers** — Content Security Policy for XSS protection
- **Input Sanitization** — Zod validation with regex-based sanitization
- **Honeypot Protection** — Bot detection in contact forms
- **Performance Optimized** — Lighthouse score 95+ across all metrics

---

## 🛠 Tech Stack

### **Core Framework**
| Technology | Version | Why We Chose It |
|------------|---------|-----------------|
| [Next.js](https://nextjs.org/) | 15 | App Router for file-based routing, built-in optimization, and SSR/SSG support |
| [React](https://react.dev/) | 19 | Latest features including Server Components and improved hooks |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Type safety, better DX, and compile-time error catching |

### **Styling & UI**
| Technology | Purpose |
|------------|---------|
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS framework for rapid UI development |
| [Shadcn/UI](https://ui.shadcn.com/) | Accessible, customizable components built on Radix UI |
| [Framer Motion](https://motion.dev/) | Production-ready animation library for React |
| [Lucide React](https://lucide.dev/) | Beautiful, consistent icon set |

### **Form & Validation**
| Technology | Purpose |
|------------|---------|
| [React Hook Form](https://react-hook-form.com/) | Performant form management with minimal re-renders |
| [Zod](https://zod.dev/) | TypeScript-first schema validation |
| [@hookform/resolvers](https://github.com/react-hook-form/resolvers) | Zod integration for React Hook Form |

### **Additional Libraries**
- **class-variance-authority** — Type-safe variant styling
- **clsx** & **tailwind-merge** — Conditional className merging
- **react-scroll** — Smooth scrolling navigation

---

## 🏗 Architecture

### **Project Structure**

```
porforlio/
├── app/
│   ├── components/              # Portfolio section components
│   │   ├── hero.tsx            # Canvas particle system + intro
│   │   ├── work-experience.tsx # Timeline with work history
│   │   ├── portfolio.tsx       # Project cards (JSON style)
│   │   ├── tech-stack.tsx      # Filterable tech skills grid
│   │   ├── terminal.tsx        # Interactive Unix terminal
│   │   ├── contact.tsx         # Code-editor styled contact form
│   │   ├── easter-eggs.tsx     # Konami code & hidden console
│   │   ├── construction-terminal.tsx # WIP section indicator
│   │   └── footer.tsx          # Site footer
│   ├── layout.tsx              # Root layout + security headers
│   ├── page.tsx                # Main page composition
│   ├── globals.css             # Global styles + CSS variables
│   ├── sitemap.ts              # Sitemap generation
│   └── robots.txt              # SEO crawling rules
├── components/ui/              # Shadcn/UI component library
├── hooks/                      # Custom React hooks
│   ├── use-mobile.tsx         # Mobile device detection
│   └── use-toast.tsx          # Toast notification system
├── lib/
│   ├── utils.ts               # cn() utility for class merging
│   └── client-util.ts         # isBrowser() SSR safety check
├── public/                     # Static assets (images, fonts)
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
├── components.json            # Shadcn/UI configuration
├── CLAUDE.md                  # AI assistant context
├── CONTRIBUTING.md            # Contribution guidelines
└── package.json               # Dependencies & scripts
```

### **Component Architecture**

- **Client-Side Rendering** — All components use `"use client"` directive
- **Single-Page Application** — No routing, all sections rendered in sequence on `app/page.tsx`
- **No Backend** — Static site with hardcoded data (projects, experience)
- **Shadcn/UI Pattern** — Composable, accessible UI components in `components/ui/`

### **Key Technical Patterns**

#### **SSR/Client Safety**
```typescript
import { isBrowser } from "@/lib/client-util"

if (isBrowser()) {
  // Safe to use window, document, localStorage
}
```

#### **Animation Pattern**
```typescript
const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={variants}
>
```

#### **Canvas Cleanup**
```typescript
useEffect(() => {
  const animationId = requestAnimationFrame(animate)
  return () => cancelAnimationFrame(animationId)
}, [])
```

---

## 🚀 Getting Started

### **Prerequisites**

- **Node.js** 18.17 or higher
- **npm** 9.x or higher (or pnpm/yarn)
- **Git** for version control

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/jacob-projects/myPortfolio.git
   cd myPortfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### **Environment Setup**

This project doesn't require environment variables for basic functionality. The contact form uses `mailto:` links instead of a backend API.

---

## 💻 Development

### **Available Scripts**

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Create production build in `.next/` |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality |

### **Development Workflow**

1. **Create a feature branch**
   ```bash
   git checkout -b feat/my-feature
   ```

2. **Make your changes**
   - Follow TypeScript strict mode
   - Use semantic commit messages (`feat:`, `fix:`, `refactor:`, `docs:`, `chore:`)
   - Test on multiple screen sizes

3. **Run linter**
   ```bash
   npm run lint
   ```

4. **Build locally**
   ```bash
   npm run build
   ```

5. **Submit Pull Request**
   - See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines

### **Code Style**

- **TypeScript** — Strict mode enabled, no `any` types
- **Component Structure** — One component per file, functional components only
- **Styling** — Tailwind utility classes, use `cn()` for conditional styling
- **Naming** — PascalCase for components, camelCase for functions/variables
- **Imports** — Use path aliases (`@/components`, `@/lib`)

### **Adding Shadcn/UI Components**

```bash
npx shadcn@latest add <component-name>
```

Components are auto-configured with path aliases from `components.json`.

---

## 🌐 Deployment

### **Vercel (Recommended)**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/jacob-projects/myPortfolio)

1. Push your code to GitHub
2. Import project in [Vercel Dashboard](https://vercel.com/new)
3. Vercel auto-detects Next.js and configures build settings
4. Deploy! 🎉

### **Netlify**

1. Build command: `npm run build`
2. Publish directory: `.next`
3. Add `next.config.js` with `output: 'export'` for static export (optional)

### **Docker**

```dockerfile
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

---

## 🔒 Security

### **Implemented Security Measures**

| Feature | Implementation |
|---------|---------------|
| **Content Security Policy** | CSP headers in `app/layout.tsx` (allows `unsafe-inline`/`unsafe-eval` for Framer Motion) |
| **XSS Protection** | X-XSS-Protection header enabled |
| **Input Sanitization** | Zod validation + regex removal of `<>` and script tags |
| **Honeypot Field** | `_honeypot` hidden input in contact form |
| **MIME Sniffing** | X-Content-Type-Options: nosniff |
| **Referrer Policy** | Strict origin when cross-origin |
| **Permissions Policy** | Disabled geolocation, camera, microphone |

### **Security Best Practices**

- No user authentication (static site)
- No cookies or local storage for sensitive data
- All external links use `rel="noopener noreferrer"`
- Dependencies regularly updated via Dependabot

### **Reporting Security Issues**

Please report security vulnerabilities to: **mytoandn@gmail.com**

---

## ⚡ Performance

### **Optimization Techniques**

- **Image Optimization** — Next.js Image component with lazy loading
- **Code Splitting** — Automatic route-based code splitting
- **Tree Shaking** — Unused code eliminated in production
- **Minification** — CSS/JS minified in production builds
- **Canvas Performance** — RequestAnimationFrame for 60fps animations
- **Intersection Observer** — Animations triggered only when visible

### **Performance Metrics**

Target Lighthouse scores:
- **Performance:** 95+
- **Accessibility:** 100
- **Best Practices:** 95+
- **SEO:** 100

### **Performance Tips**

```typescript
// Debounce expensive operations
const debouncedResize = useMemo(
  () => debounce(() => handleResize(), 250),
  []
)

// Cleanup timers to prevent memory leaks
useEffect(() => {
  const timers = []
  // ... add timers
  return () => timers.forEach(clearTimeout)
}, [])
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

### **How to Contribute**

1. **Fork the repository**
2. **Create your feature branch** (`git checkout -b feat/amazing-feature`)
3. **Commit your changes** (`git commit -m 'feat: add amazing feature'`)
4. **Push to the branch** (`git push origin feat/amazing-feature`)
5. **Open a Pull Request**

### **Code of Conduct**

Please be respectful and constructive in all interactions. See our [Code of Conduct](./CODE_OF_CONDUCT.md).

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](./LICENSE) file for details.

You are free to:
- ✅ Use this project for personal or commercial purposes
- ✅ Modify and distribute the code
- ✅ Use it as a template for your own portfolio

**Attribution appreciated but not required!**

---

## 📬 Contact

| Platform | Link |
|----------|------|
| 📧 **Email** | [mytoandn@gmail.com](mailto:mytoandn@gmail.com) |
| 💼 **LinkedIn** | [Tran Phuoc My Toan](https://www.linkedin.com/in/tran-phuoc-my-toan-613971199/) |
| 🐙 **GitHub** | [@jacob-projects](https://github.com/jacob-projects) |
| 🌐 **Website** | [porforlio-jacob.vercel.app](https://porforlio-jacob.vercel.app) |

---

## 🙏 Acknowledgments

- **Shadcn/UI** — For beautiful, accessible components
- **Vercel** — For seamless deployment and hosting
- **Radix UI** — For unstyled, accessible primitives
- **Framer Motion** — For powerful animation capabilities
- **The Open Source Community** — For countless hours of free tools and libraries

---

<div align="center">

### ⭐ If this project helped you, please consider giving it a star!

**Made with ❤️ by [Jacob](https://github.com/jacob-projects)**

</div>
