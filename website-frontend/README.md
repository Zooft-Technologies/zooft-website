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
│   │   ├── not-found.tsx       # 404 page
│   │   ├── about/page.tsx
│   │   ├── services/page.tsx
│   │   ├── projects/page.tsx
│   │   ├── blog/page.tsx
│   │   ├── contact/page.tsx
│   │   └── api/
│   │       └── send-email/route.ts   # Contact form API endpoint
│   ├── components/             # Reusable components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── ui/                 # shadcn/ui components
│   ├── data/                   # Static content data
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utility functions
│   ├── services/               # API service layer
│   ├── types/                  # TypeScript type definitions
│   └── utils/                  # Validation and helpers
├── public/                     # Static assets (images, fonts)
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── firebase.json               # Firebase hosting config
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
