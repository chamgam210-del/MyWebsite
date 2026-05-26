# Chamath — Portfolio

A modern, responsive personal portfolio built with **Next.js (App Router) + TypeScript + Tailwind CSS**.

Showcases featured projects as visual product case studies (Tailwind/React mockups — no screenshot dependency), with a clean dark UI, project filtering, and dynamic case study pages.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Build & start

```bash
npm run build
npm start
```

## Project structure

```
app/
  layout.tsx
  page.tsx              # Home
  about/page.tsx
  contact/page.tsx
  projects/page.tsx     # All projects
  projects/[slug]/page.tsx
  not-found.tsx
components/
  Navbar.tsx
  Footer.tsx
  ProjectCard.tsx
  ProjectHero.tsx
  ProjectVisual.tsx
  PhoneMockup.tsx
  FlowDiagram.tsx
  FeatureGrid.tsx
  TechBadge.tsx
  SectionHeading.tsx
  ButtonLink.tsx
  VisualMockups.tsx     # All per-project visual mockups
lib/
  projects.ts           # Edit this to update project content
  cn.ts
public/
  resume.pdf            # Placeholder — replace with the real resume
  og-image.svg
```

## Editing content

All project content (titles, descriptions, problem/solution, features, architecture, challenges, outcome, privacy notes, tech stack, highlights) lives in [`lib/projects.ts`](lib/projects.ts).

Add a new project by appending an object to the `projects` array. The route at `/projects/[slug]` and the project card on the home/projects pages are generated automatically.

To create a new visual mockup for a new project, add a `visualType` value and extend:
- `components/VisualMockups.tsx` (the actual mockup components + thumbnail)
- `components/ProjectHero.tsx` (which phone visual to show)
- `components/ProjectVisual.tsx` (the walkthrough section)

## Replace placeholders

- `public/resume.pdf` — a minimal placeholder PDF. Replace with your real resume.
- `public/og-image.svg` — preview OG image. For best social-media support, generate a 1200×630 PNG version.
- Contact channels in `app/contact/page.tsx` and `components/Footer.tsx` — update email, GitHub, LinkedIn.
- `metadataBase` URL in `app/layout.tsx` — set to your real domain.

## Deploy to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Accept defaults — Vercel detects Next.js automatically.
4. Click **Deploy**.
5. Add a custom domain later in **Project Settings → Domains**.

No environment variables required for v1.

## Notes

- Tummy Tracker insights are exploratory and **not medical advice**.
- WrenchDesk and Casper are described as private/experimental prototypes, not public products.
- Only free/open-source packages are used: `next`, `react`, `tailwindcss`, `lucide-react`.
