# Jerin Johnson — Portfolio

Built with Next.js (App Router), TypeScript and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Contact form (sends real email)

The form posts to `src/app/api/contact/route.ts`, a server-side API route that sends mail
with `nodemailer`. It never runs in the browser, so no credentials are exposed.

1. Copy `.env.example` to `.env.local`
2. Fill in your SMTP credentials (Gmail App Password works well — see comments in the file)
3. Restart the dev server

Without these env vars set, the form shows a friendly "not configured yet" error instead of
failing silently. When you deploy (e.g. to Vercel), add the same four variables in your
project's Environment Variables settings.

## Adding a new project

Everything project-related lives in one array: `src/data/projects.ts`. To add a project,
push a new object into the `projects` array:

```ts
{
  id: "my-new-project",
  category: "lab", // "featured" | "selected" | "lab"
  index: "L4",
  name: "Project Name",
  tagline: "One-line description",
  description: "Longer description.",
  tech: ["Tech", "Stack"],
  highlights: ["Engineering highlight one", "Engineering highlight two"],
  links: { live: "https://...", github: "https://..." },
}
```

- `category: "featured"` → the big case-study section with the architecture playground
  (only one at a time — swap `IrowzCure` if you want a different flagship project)
- `category: "selected"` → a two-column case study card
- `category: "lab"` → a small card in the Engineering Lab grid

Only the `featured` project supports the interactive click-to-explore architecture diagram
(the `architecture` field with `nodes`/`edges`). Add that field to any project to enable it there too.

## Swapping in the resume PDF

Replace `public/Jerin_Johnson_Resume.pdf` with your latest export — the filename is what's
linked from the nav, hero and command palette, so keep the name or update the references in
`NavBar.tsx`, `Hero.tsx` and `CommandPalette.tsx`.

## Fonts

This build ships with a curated **system font stack** (no external font requests), since it
was built in a sandboxed environment without access to Google Fonts. If you'd like the
original type direction — Space Grotesk (display), Inter (body), JetBrains Mono (labels/data)
— it's a five-minute swap once you're in an environment with normal internet access:

```tsx
// src/app/layout.tsx
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ variable: "--font-space-grotesk", subsets: ["latin"], weight: ["500","600","700"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["400","500","600"] });
const jetbrainsMono = JetBrains_Mono({ variable: "--font-jetbrains-mono", subsets: ["latin"], weight: ["400","500"] });
```

Add the three `.variable` classes to `<body>`, then in `globals.css` point `--font-display`
/ `--font-body` / `--font-mono` at `var(--font-space-grotesk)`, etc.

## Command palette

Press `⌘K` / `Ctrl K` anywhere to jump to a section, open the resume, or open GitHub.

## Deploying

Push to GitHub and import into Vercel, or run `npm run build && npm start`. Don't forget the
four SMTP env vars from `.env.example` in your hosting provider's dashboard.
