# CLAUDE_CONTEXT.md

This file is the working project brief for Claude and Manus on the Artifact Mfg. website. It should stay current whenever the stack, deployment, domains, workflow, or known issues change.

## Stack — framework, libraries, deployment setup

Artifact Mfg. is a **Vite + React + TypeScript** single-page application. The Vite root is `client/`, and production builds output to `dist/public`.

| Area | Current setup |
|---|---|
| Framework | React `^19.2.1` with TypeScript and Vite `^7.1.7` |
| Router | `wouter` for client-side routing |
| Styling | Tailwind CSS v4 via `@tailwindcss/vite`, plus a custom CSS design system in `client/src/index.css` |
| UI primitives | Radix UI packages and shadcn-style components under `client/src/components/ui/` |
| Icons / motion / utilities | `lucide-react`, `framer-motion`, `clsx`, `class-variance-authority`, `tailwind-merge`, `sonner` |
| Forms | `react-hook-form`, `@hookform/resolvers`, and `zod` are available; the current contact form is still handled locally in the React component |
| Build command | `npm run build`, which runs exactly `vite build` |
| Local dev command | `npm run dev`, which runs `vite --host` |
| Preview command | `npm run preview`, which runs `vite preview --host` |
| Type check | `npm run check`, which runs `tsc --noEmit` |
| Deployment target | Vercel, configured as a Vite static deployment with output directory `dist/public` |
| SPA routing support | `vercel.json` rewrites all paths to `/index.html` |

The README also documents an optional Netlify Drop workflow for testing by dragging `dist/public` into Netlify Drop, but the connected production domain is currently serving through **Vercel**.

## Repo — GitHub URL, branch

| Item | Value |
|---|---|
| GitHub repository | `https://github.com/artifactmfg/artifact-mfg.git` |
| Working branch | `master` |
| Current pushed HEAD before this brief | `611fee11` — `Fix navbar centering - remove translateX` |
| Recent relevant commits | `611fee11` removed the desktop navbar `translateX`; `a4a07dd2` previously nudged the header navigation right and is now superseded by the later centering fix |

All pushes should go to `origin/master` unless the owner explicitly requests a feature branch.

## Domains — all connected domains and their status

| Domain / URL | Status | Notes |
|---|---|---|
| `https://www.artifactmfg.us/` | Live, HTTP 200 | Primary production URL. Current HTTP headers identify the server as Vercel and show `x-vercel-cache: HIT`. |
| `https://artifactmfg.us/` | Connected, redirects to primary | Redirects once to `https://www.artifactmfg.us/` and resolves successfully. |
| `http://artifactmfg.us/` | Connected, redirects to HTTPS primary | Redirects through HTTPS to `https://www.artifactmfg.us/`. |
| `http://www.artifactmfg.us/` | Connected, redirects to HTTPS primary | Redirects to `https://www.artifactmfg.us/`. |

Public-facing contact and social endpoints in the codebase are `jason@artifactmfg.us`, `937.266.4123`, `https://www.facebook.com/ArtifactMfg`, and `https://www.instagram.com/artifact_mfg/`.

## File structure — key files and what they do

| Path | Purpose |
|---|---|
| `package.json` | Defines the project package metadata, scripts, runtime dependencies, dev dependencies, and pnpm settings. The production build script must remain `vite build`. |
| `vite.config.ts` | Configures Vite with React and Tailwind plugins, sets `client/` as the app root, maps aliases such as `@`, `@shared`, and `@assets`, and outputs production files to `dist/public`. |
| `vercel.json` | Provides the SPA rewrite rule so all routes resolve to `/index.html` on Vercel. |
| `README.md` | Documents deployment options, image placement conventions, and owner contact information. |
| `client/index.html` | HTML entry shell. It loads Google Fonts for Cormorant Garamond, Montserrat, and Lato. |
| `client/src/main.tsx` | React entry point. It renders `<App />` into the `#root` element and imports the global stylesheet. |
| `client/src/App.tsx` | Top-level app composition. It wraps the site with `ErrorBoundary`, dark `ThemeProvider`, tooltip provider, toaster, `Layout`, and the `wouter` route map. |
| `client/src/components/Layout.tsx` | Global layout, header, navigation, mobile menu, and footer. The desktop nav style should remain `display: "flex"`, `gap: "1.75rem"`, and `alignItems: "center"` with **no `transform`**. |
| `client/src/index.css` | Primary design-system file. It defines color tokens, type scale conventions, shared buttons, layout utilities, reveal animations, mobile nav toggles, and responsive fixes. |
| `client/src/contexts/ThemeContext.tsx` | Theme context and dark/light class management. The app currently uses `defaultTheme="dark"`. |
| `client/src/pages/` | First-class page components for Home, Fireplaces, Countertops, Sinks, Commercial, Panels, Products, For Builders, Process, Manifesto, Contact, Furniture, and NotFound. |
| `client/src/components/ui/` | shadcn/Radix-style reusable UI primitives. Many are scaffolded and available even if not every component is currently used. |
| `client/public/images/` | Static image assets referenced in code as `/images/filename`. Vite copies these into the production output. |
| `components.json` | shadcn-style configuration, including aliases and CSS variable settings. |
| `tsconfig.json` / `tsconfig.node.json` | TypeScript configuration for app and Node/Vite tooling. |

The current client routes are `/`, `/fireplaces`, `/countertops`, `/sinks`, `/commercial`, `/panels`, `/products`, `/for-builders`, `/process`, `/manifesto`, `/contact`, `/furniture`, `/404`, and a final catch-all `NotFound` route.

## Design system — fonts, colors, spacing conventions

The visual direction is **Architectural Editorial / Dark Prestige**. The brand relies on a dark charcoal base, warm cream typography, muted gold accents, editorial serif headlines, uppercase tracked labels, generous whitespace, restrained borders, and image-led layouts.

| Token / convention | Value / usage |
|---|---|
| Background charcoal | `#111010`, used as the primary site background |
| Alternate section charcoal | `#1A1918`, used for slightly lighter dark sections and form option backgrounds |
| Warm cream text | `#F0EDE8`, used for primary foreground text and headings |
| Muted gold accent | `#C9A96E`, used for CTAs, hover states, label text, gold rules, focus states, and brand accents |
| Muted text | `#8A8480`, used for secondary copy, helper text, nav copy, and labels where appropriate |
| Subtle border | `rgba(255,255,255,0.08)` or nearby variants for low-contrast dividers and form fields |
| Display font | `Cormorant Garamond`, often light or italic for emotional editorial headlines |
| Label / nav font | `Montserrat`, uppercase, semibold, tracked around `0.15em` to `0.18em` |
| Body font | `Lato`, generally `16px` / `1.75` or close variants for readable body copy |
| Border radius | Very restrained, with root radius around `0.125rem` |
| Container widths | Main layout maxes around `1440px`; desktop horizontal page padding commonly uses `4rem` |
| Mobile horizontal padding | Shared utilities commonly reduce horizontal padding to `1rem` to `1.5rem`, with additional responsive overrides in `index.css` |
| Grid behavior | Intro and product grids collapse from two columns to one column under mobile breakpoints; gallery grids collapse to one column and become two columns from roughly `600px` upward |
| CTA style | `.btn-gold` uses a gold outline and gold text, then inverts to gold background with charcoal text on hover; `.btn-ghost` uses a subtle cream border and gold hover state |

Claude should prefer the established classes and tokens in `client/src/index.css` before introducing new one-off inline styles. Inline styles already exist throughout the pages, so targeted edits should preserve the surrounding style approach unless the owner asks for a broader refactor.

## Current issues — known bugs or in-progress fixes

| Issue / area | Status | Notes |
|---|---|---|
| Desktop navbar centering | Fixed and pushed | The desktop nav no longer uses `transform: "translateX(0.875rem)"`. Keep it removed unless the owner requests a new alignment approach. |
| Contact form submission | Known incomplete behavior | The form currently prevents default submission and shows a local thank-you state. It does **not** yet POST to a backend, email service, CRM, or form endpoint. |
| Mobile responsiveness | Ongoing maintenance area | `client/src/index.css` contains several explicit mobile fixes for first-section header overlap, grid collapse, hero overlay padding, product page padding, gallery-card readability, and section padding. Test mobile after any layout change. |
| Deployment script sensitivity | Watch item | The build script must remain exactly `"build": "vite build"` because prior deployment handoffs depended on this exact script. |
| Generated/debug assets | Watch item | `client/public/__manus__/` appears in the working tree as generated/debug support. Do not expand or depend on it for production features unless explicitly requested. |

When in doubt, run `npm run build` before committing UI or routing changes. For small text-only documentation updates, a build is not required unless code changed in the same commit.

## How we work — Claude writes all code changes, Manus executes and pushes to GitHub

Claude is responsible for writing and specifying all code changes. Manus is responsible for applying those changes in the working repository, verifying the result, committing with the requested message when provided, and pushing to GitHub.

The preferred workflow is:

| Step | Owner | Standard practice |
|---|---|---|
| 1. Define change | Claude / Owner | Claude provides exact code edits, file paths, or implementation instructions. |
| 2. Apply change | Manus | Manus edits the local repository exactly as requested and avoids unrelated refactors. |
| 3. Verify | Manus | Manus checks the diff, runs targeted validation, and runs `npm run build` when code changes warrant it. |
| 4. Commit | Manus | Manus commits with the owner-requested message when supplied; otherwise uses a concise descriptive message. |
| 5. Push | Manus | Manus pushes to `origin/master` and verifies the remote hash matches local `HEAD`. |
| 6. Report | Manus | Manus reports the commit hash, branch, push status, working tree status, and any important follow-up notes. |

Manus should not invent broad design or architecture changes. If a requested edit could affect layout, deployment, forms, SEO, or routing beyond the stated scope, Manus should pause and ask for confirmation before proceeding.
