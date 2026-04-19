# CLAUDE.md

Instructions and context for Claude Code working in this repository.

## 1. Project Overview

Modern marketing website for **CLIX**, an Israeli Hyper-Automation agency.

The build process is **reference-driven**: the user sends URLs of landing pages they like, we analyze them, and rebuild the layout in Next.js with CLIX copy and branding swapped in. Do not copy proprietary assets (images, logos, fonts) from references — structure and feel only.

First reference: **https://www.bigneurons.com/**.

## 2. About CLIX (Brand Source of Truth)

Use these facts as the single source of truth for all website copy. Never invent new claims about CLIX.

- **Company**: Israeli-based Hyper-Automation agency. Bridges the gap between manual business processes and fully autonomous AI systems.
- **Team**: Founders and developers from **IDF Unit 8200** (Israel's elite cyber-intelligence unit) and graduates of the **Technion**.
- **Mission**: Eliminate human-dependent bottlenecks in sales, logistics, and operations by deploying AI agents that work 24/7 without fatigue or errors.
- **Philosophy — "Hyper-Automation"**: not a single tool or chatbot. A connected ecosystem where multiple AI models talk to each other and to the business's existing software.

### Core Services
1. **AI Voice Solutions** — realistic, conversational voice bots that can answer phones and make sales calls in **30+ languages**, with human-like latency.
2. **Business Architecture** — map manual workflows and replace them with automated data pathways using **Make.com, n8n, and Python**.
3. **Corporate Training & Lectures** — workshops and organizational consulting to help traditional companies transition into the AI-First era.

### Key Capabilities
- **Autonomous AI Agents**: lead qualification on WhatsApp and Instagram (vet leads, only book qualified ones); reasoning agents (e.g. car diagnostics that ask follow-up questions based on symptoms).
- **Voice & Comms**: minimal lag, feels like a real person; seamless language switching for global firms.
- **Integrations**: Salesforce, HubSpot, Monday.com, ClickUp, WhatsApp, Slack, plus custom API "bridges" for software that doesn't usually talk to AI.

### Industry Templates
- **Logistics** — automatic invoice collection from email, daily mileage/route sync.
- **Healthcare / Therapy** — ticket management, AI agents for patient intake.
- **Content Creators** — automated "factories" that turn one idea into daily LinkedIn, Facebook, and Instagram posts.

## 3. Voice & Tone

- Authoritative, technical but accessible, outcome-focused: ROI, hours saved, errors eliminated.
- Proof-led: lean on 8200/Technion pedigree, 24/7 operation, 30+ languages, custom-coded (not templated).
- No generic AI hype. CLIX sells engineering, not buzzwords.
- Short, confident sentences. A little irreverent — "no-bullshit" register.
- English only.

## 4. Tech Stack

Locked decisions — do not re-debate unless the user explicitly asks.

- **Framework**: Next.js 15+ (App Router) with TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui primitives
- **Icons**: Lucide
- **Fonts**: `next/font` with Geist or Inter
- **Deploy**: Vercel

## 5. Coding Guidelines

- Mobile-first responsive, LTR layout.
- Accessibility baseline: semantic HTML, alt text on all images, keyboard navigation, WCAG AA contrast.
- Performance: use `next/image`, lazy-load below-the-fold sections, minimize `"use client"` components.
- Reusable section components under `/components/sections/`.
- Page copy lives in typed data files under `/content/*.ts`, not hardcoded in JSX, so the user can edit copy without touching markup.
- Default to writing no comments. Only add one when the WHY is non-obvious.
- Don't add features, flags, or abstractions beyond what's asked.

## 6. Asset Handling

- **CLIX-specific** (logo, team photos, product screenshots, case studies, testimonials): use placeholder components or gray boxes with sizing notes until the user supplies real assets.
- **Generic scenes** (tech, networks, offices, abstract visuals): pull royalty-free from **Unsplash** or **Pexels**. Include attribution where required.
- **Icons**: Lucide only. Don't hand-roll SVGs unless Lucide is missing a specific icon.
- **Never** copy proprietary images, fonts, or logos from reference landing pages. Structure and layout only.

## 7. Design Direction (from bigneurons.com reference)

- **Palette**: white background, near-black text, one cool accent (teal or electric blue) for links and active states. Minimal, high-contrast.
- **Typography**: modern sans-serif (Inter or Geist). Hero headlines very large and tight; body ~16px, light-to-regular weight. No serifs.
- **Mood**: minimalist, airy, confident. Generous whitespace. Video accents. Small deliberate details (sound toggle, sticker-style badges).
- **Patterns to reproduce**:
  - Video background on hero
  - Horizontal-scroll portfolio/solutions grid
  - Big-quote founder block with decorative quote marks
  - 3-column team cards
  - "New product" promo card with feature bullets and sample carousel
  - FAQ list
  - Keyword tag cloud for values
  - 4-column footer

## 8. Section Mapping: bigneurons → CLIX

Section order and copy strategy for the first build pass.

1. **Nav** — logo left; links: Services, Solutions, Team, Case Studies, About, Contact; primary CTA "Book a Demo" right-aligned. No language toggle.
2. **Hero** — video background (abstract AI / data viz / automation b-roll).
   - Headline: **"Hyper-Automation for Operators."**
   - Sub: **"We don't start building until we understand your business as well as you do."**
   - CTAs: primary "Book a Demo", secondary "See Case Studies".
3. **Solutions Grid** (replaces "Big Prods") — horizontal-scroll cards: AI Voice Agents, Lead Qualification Bots, Logistics Automation, Healthcare Intake, Content Factory, Custom Integrations. Each card: thumbnail + name + 2–3 service tags.
4. **Social Proof** — metric block. Placeholder until real numbers: "+X businesses automated" and/or "X,XXX hours saved per month".
5. **Founder Block** — long-form quote leaning on the 8200/Technion angle. Draft: *"We come from 8200 and the Technion — not from agency world. We ship systems, not slide decks."* Portrait placeholder, LinkedIn link, sticker-style badge ("Engineer-Led" or "Unit 8200 Alumni").
6. **Team Cards** — 3 cards, portrait placeholders, name, role, LinkedIn.
7. **Flagship Product Promo** (replaces "Big Flux") — feature **AI Voice Agents**. Badge "New". Bullets: 30+ languages, human-like latency, 24/7 operation, cancel anytime. Carousel of sample call transcripts or use-case cards.
8. **FAQ** — 6 questions:
   - What is Hyper-Automation?
   - How is this different from a chatbot?
   - What tools do you integrate with?
   - How long does a typical build take?
   - Do you train our team?
   - What industries do you specialize in?
9. **Values Tag Cloud** — Hyper-Automation, 24/7, 30+ Languages, 8200-Built, No-Bullshit, ROI-First, Custom-Coded, Integration-Deep, Engineer-Led.
10. **Footer** — 4 columns:
    - **Brand**: logo, `hello@clix.ai` (placeholder), social icons
    - **Services**: Voice, Agents, Integrations, Training
    - **Company**: About, Team, Case Studies, Contact
    - **Resources**: Blog, Playbooks (placeholders)
    - Legal row: © 2026 CLIX.

## 9. Scrape-and-Clone Workflow

Repeatable process whenever the user sends a new reference URL.

1. User provides a landing page URL.
2. `WebFetch` the URL. Extract: section order, layout, palette, typography feel, CTA patterns, animations, notable design patterns.
3. Write a section-by-section breakdown **before** building (the way section 8 does for bigneurons).
4. Rebuild in Next.js + Tailwind + shadcn/ui, substituting CLIX copy from section 2.
5. Swap assets per section 6 (placeholders for CLIX-specific, stock for generic, Lucide for icons).
6. Run `npm run dev`, verify mobile and desktop breakpoints, then report done.

## 10. Commands

To be filled in after `create-next-app` bootstraps the project.

- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run lint` — lint check

## 11. Open Items (user to provide)

- Domain name
- Logo files (SVG preferred)
- Final brand color palette, if one exists
- Team photos and bios
- Real case studies, metrics, testimonials
- Contact info: email, phone, calendar booking link
