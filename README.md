# Zooft Technologies Website

The official website for **Zooft Technologies** — a technology company based in Nakawa-Kampala, Uganda, providing custom software development, cybersecurity, cloud infrastructure, and IT consulting services across East Africa.

**Live site:** [zoofttechnologies.com](https://zoofttechnologies.com)

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router, SSR/SSG)
- **Language:** TypeScript
- **UI Library:** React 18
- **Styling:** Tailwind CSS 3.4
- **Components:** [shadcn/ui](https://ui.shadcn.com/) (Radix UI primitives)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** Firebase App Hosting

## Project Structure

```
website-frontend/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout (Navbar, Footer, global metadata)
│   │   ├── page.tsx            # Homepage
│   │   ├── globals.css         # Global styles & Tailwind
│   │   ├── sitemap.ts          # Dynamic sitemap generation
│   │   ├── robots.ts           # Dynamic robots.txt
│   │   ├── error.tsx           # Error boundary
│   │   ├── not-found.tsx       # 404 page
│   │   ├── about/
│   │   │   ├── page.tsx
│   │   │   └── AboutPageContent.tsx
│   │   ├── services/
│   │   │   ├── page.tsx
│   │   │   ├── ServicesPageContent.tsx
│   │   │   └── [slug]/
│   │   │       ├── page.tsx
│   │   │       └── ServiceDetailContent.tsx
│   │   ├── careers/
│   │   │   ├── page.tsx
│   │   │   ├── CareersPageContent.tsx
│   │   │   ├── roles-data.ts   # Career roles data
│   │   │   └── [slug]/
│   │   │       ├── page.tsx
│   │   │       └── RoleDetailContent.tsx
│   │   ├── contact/
│   │   │   ├── page.tsx
│   │   │   └── ContactPageContent.tsx
│   │   └── api/
│   │       └── send-email/
│   │           └── route.ts    # Contact form API endpoint
│   ├── components/             # Reusable components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── SolutionsSection.tsx
│   │   ├── TechLogos.tsx       # Technology stack logos
│   │   ├── ImageWithFallback.tsx
│   │   └── ui/                 # shadcn/ui components
│   │       ├── accordion.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       ├── textarea.tsx
│   │       ├── toast.tsx
│   │       └── toaster.tsx
│   ├── data/
│   │   └── content.ts          # Static company content data
│   ├── hooks/
│   │   └── use-toast.ts        # Toast notification hook
│   ├── lib/
│   │   ├── animations.ts       # Framer Motion animations
│   │   └── utils.ts            # Utility functions
│   ├── services/
│   │   └── emailService.ts     # Email service layer
│   ├── types/
│   │   └── index.ts            # TypeScript type definitions
│   └── utils/
│       └── validation.ts       # Form validation helpers
├── public/                     # Static assets
│   └── images/
│       ├── zooft logo.png      # Brand logo (optimized)
│       ├── projects/           # Project images
│       └── team/               # Team member photos
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── components.json             # shadcn/ui config
├── postcss.config.mjs
├── firebase.json               # Firebase hosting config
└── apphosting.yaml             # Firebase App Hosting config
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18.17 or later
- npm (comes with Node.js)

### Installation

```bash
cd website-frontend
npm install
```

### Development

```bash
npm run dev
```

Opens the development server at [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Assets & Images

### Logo

The Zooft Technologies logo is stored as an optimized PNG image at:
```
public/images/zooft logo.png
```

The logo is used throughout the application in:
- **Navbar** (`src/components/Navbar.tsx`) - Primary navigation
- **Footer** (`src/components/Footer.tsx`) - Site footer
- **Schema Markup** - JSON-LD structured data for SEO

The logo is served using Next.js Image component for automatic optimization, including:
- Responsive sizing
- Modern image format conversion (WebP when supported)
- Lazy loading (except in Navbar where `priority` is set for above-the-fold rendering)
- Automatic CDN caching

## SEO

Every page exports server-side metadata using the Next.js Metadata API, including:

- Page-specific titles and descriptions
- Open Graph tags for social sharing
- Twitter card metadata
- Structured `robots` directives
- Dynamic `sitemap.xml` and `robots.txt` generated at build time

All pages are server-rendered (SSR/SSG), so search engine crawlers receive fully rendered HTML.

## Deployment

The site is deployed via **Firebase App Hosting**, which auto-detects Next.js and handles SSR. The hosting config is in `firebase.json` with the backend region set to `europe-west1`.

```bash
firebase deploy
```

## Scripts

| Command         | Description                        |
|-----------------|------------------------------------|
| `npm run dev`   | Start development server           |
| `npm run build` | Create optimized production build  |
| `npm start`     | Start production server            |
| `npm run lint`  | Run Next.js linting                |
