# FMA Software Labs

> **AI-Native Micro-SaaS & Micro-GaaS Ecosystem Landing Page**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06b6d4?style=flat&logo=tailwindcss)](https://tailwindcss.com)
[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-latest-black?style=flat)](https://ui.shadcn.com)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169e1?style=flat&logo=postgresql)](https://www.postgresql.org)
[![Drizzle ORM](https://img.shields.io/badge/Drizzle-ORM-c5f74f?style=flat)](https://orm.drizzle.team)

---

A premium, futuristic landing page for **FMA Software Labs** — an AI-native software lab building the next generation of micro-SaaS and micro-GaaS products.

Showcases two flagship products: **DebtWar** (Social Chaos Economy MMO) and **JatuhTempo** (AI-Powered Debt Management Assistant), both available on Telegram.

![Preview](./public/assets/company-logo.png)

## ✨ Features

- **Cinematic Hero** — Typing animation, mouse-tracked spotlight, bold gradient typography
- **Product Ecosystem** — Animated spotlight cards for DebtWar & JatuhTempo
- **Terminal Boot Sequence** — Live animated deploy log with hacker aesthetic
- **Engineering Philosophy** — 6 core principles of the lab
- **Product Roadmap** — Timeline with shipped/in-progress/planned states
- **Newsletter Subscription** — Zod-validated form with API endpoint
- **Contact System** — Form with server action + social links
- **Dark / Light Mode** — Dark-first identity, seamless toggle via `next-themes`
- **Responsive Design** — Mobile-first, adaptive layouts across all breakpoints
- **SEO Optimized** — Open Graph, Twitter cards, semantic HTML, structured metadata
- **Accessible** — ARIA labels, keyboard navigation, focus states, reduced motion support
- **Polished Animations** — Framer Motion ready, CSS keyframes for glow/spotlight/scanlines

## 🏗️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript 5.7 |
| **Styling** | Tailwind CSS 3.4 + `tailwindcss-animate` |
| **UI Library** | shadcn/ui (customized with terminal/futuristic variants) |
| **Icons** | Lucide React |
| **Database** | PostgreSQL via Drizzle ORM |
| **Database Driver** | @neondatabase/serverless + postgres |
| **Forms** | react-hook-form + zod |
| **Theme** | next-themes |
| **Animation** | CSS keyframes + Framer Motion ready |
| **Infrastructure** | Railway-ready |

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── contact/route.ts      # Contact form endpoint
│   │   └── newsletter/route.ts   # Newsletter subscription endpoint
│   ├── globals.css                # Global styles & design tokens
│   ├── layout.tsx                 # Root layout with SEO, navbar, footer
│   └── page.tsx                   # Main page composing all sections
├── components/
│   ├── sections/
│   │   ├── Hero.tsx               # Cinematic hero with typing effect
│   │   ├── ProductsSection.tsx    # Product spotlight cards
│   │   ├── TerminalSection.tsx    # Animated deploy log
│   │   ├── Philosophy.tsx         # Engineering principles
│   │   ├── Roadmap.tsx            # Product timeline
│   │   ├── Newsletter.tsx         # Email subscription
│   │   ├── Contact.tsx            # Contact form + social
│   │   └── Footer.tsx             # Site footer
│   ├── ui/                        # shadcn/ui components (button, badge, card, input, etc.)
│   └── theme-provider.tsx         # Theme context wrapper
├── lib/
│   ├── constants.ts               # Products, roadmap, company data
│   ├── utils.ts                   # Utility functions
│   └── db/
│       ├── schema.ts              # PostgreSQL schema (Drizzle)
│       └── index.ts               # Database connection
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL (optional for production)

### Installation

```bash
# Clone the repository
git clone https://github.com/FMATheNomad/fma-software-labs-landing-page.git
cd fma-software-labs-landing-page

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

### Database Setup (Optional)

```bash
# Copy environment file
cp .env.example .env

# Edit .env with your PostgreSQL connection string
# DATABASE_URL="postgresql://user:password@host:5432/fma_landing"

# Generate and push schema
npm run db:generate
npm run db:migrate
```

## 🎨 Design System

- **Primary**: Black, Zinc, Slate, Deep Gray
- **Accent**: Neon Green (`#00ff41`), Emerald, Cyan, Subtle Purple Glow
- **Typography**: Inter (sans-serif) + JetBrains Mono (monospace for terminal sections)
- **Aesthetic**: Dark hacker lab, minimalist premium, futuristic SaaS, subtle cyberpunk

## 📦 Products Showcased

| Product | Description | Status | Link |
|---------|-------------|--------|------|
| **DebtWar** | Social Chaos Economy MMO — Telegram game about debt, traps, gangs, and underground economy | Live | [t.me/DebtWarBot](https://t.me/DebtWarBot) |
| **JatuhTempo** | AI-Powered Debt Management — OCR bill parsing, automated reminders, monthly summaries | Live | [t.me/JatuhTempo_bot](https://t.me/JatuhTempo_bot) |

## 🗺️ Roadmap

- [x] Q4 2025 — Platform Launch (DebtWar & JatuhTempo)
- [ ] Q1 2026 — Web Dashboard Beta
- [ ] Q2 2026 — Mobile Apps (iOS & Android)
- [ ] Q3 2026 — Public API Platform
- [ ] Q4 2026 — Cross-Product AI Ecosystem

## 📄 License

MIT © [FMATheNomad](https://github.com/FMATheNomad)

---

<div align="center">
  <sub>Built with ❤️ by <a href="https://github.com/FMATheNomad">FMATheNomad</a></sub>
</div>
