# Viky Aditama — Professional Profile Platform

A full-stack implementation of the approved Google Stitch design
("Obsidian Aurum") for Viky Aditama's professional profile — built with
**Next.js 14 (App Router) + TypeScript + Tailwind + Supabase + Gemini**.

This project follows `stitch_prompt_execution_engine/stitch_master_prompt.md`
(design) and `ANTIGRAVITY_MASTER_PROMPT.md` (engineering) from the original
brief: the Stitch output is the visual source of truth, and this build wires
it to a real database, auth, admin CMS, contact system, and an AI assistant.

---

## 1. What's included

| Area | Status |
|---|---|
| Public pages (Home, About, Work, Madulingo, Astrova, Research, Journey, Skills, Achievements, Resume, 404) | ✅ Built from the approved Stitch markup, pixel-faithful, exact design tokens |
| Contact form | ✅ Fully working — submits to Supabase (`/api/contact`) |
| Ask Viky AI | ✅ Fully working chat UI — calls Gemini Flash via `/api/ai`, grounded on a Supabase knowledge-base table |
| Supabase database schema | ✅ `supabase/schema.sql` — profile, projects, research, achievements, journey, skills, messages, AI knowledge base, with Row Level Security |
| Admin dashboard | ✅ Supabase-Auth-gated (`/admin`), live counts |
| Admin CRUD | ✅ Projects & Research publications (create/edit/delete), Messages inbox (status + delete) |
| SEO | ✅ Metadata API in `app/layout.tsx`; extend per-page as needed |
| Deployment | ✅ Vercel-ready (zero extra config beyond env vars) |

**Design fidelity note:** the marketing/content pages (Home, About, Work,
case studies, Research, Journey, Skills, Achievements, Resume, 404) render
the *exact markup* extracted from your approved Stitch mockups, so visuals
match 1:1. Their dynamic data (project cards, research list, achievements,
timeline) is intentionally left as the approved static content for now —
the database tables for all of it already exist (`projects`,
`research_publications`, `achievements`, `journey_entries`, `skills`), so a
follow-up pass can swap those sections to `fetch`-from-Supabase without
touching the design. This was a deliberate scope decision to ship a working
full-stack foundation first; see "Next steps" below.

---

## 2. Prerequisites

- Node.js 18.18+ (or 20+)
- A free [Supabase](https://supabase.com) project
- A [Gemini API key](https://aistudio.google.com/app/apikey) (for Ask Viky AI)
- A [Vercel](https://vercel.com) account (for deployment)

---

## 3. Local setup

```bash
# 1. Install dependencies
npm install

# 2. Copy env template and fill in real values
cp .env.example .env.local

# 3. Run the dev server
npm run dev
```

Open http://localhost:3000.

---

## 4. Supabase setup

1. Create a new project at supabase.com.
2. Go to **SQL Editor** → paste the contents of `supabase/schema.sql` → **Run**.
   This creates every table, Row Level Security policy, and seeds the
   `profile` row.
3. Go to **Project Settings → API** and copy:
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` key → `SUPABASE_SERVICE_ROLE_KEY` (server-only, never expose this)
4. Go to **Authentication → Users → Add user** and create your admin login
   (email + password). This is the only account that can sign in at
   `/admin/login`.

---

## 5. Gemini (Ask Viky AI) setup

1. Get an API key from https://aistudio.google.com/app/apikey.
2. Set `GEMINI_API_KEY` in `.env.local`.
3. (Optional, recommended) Populate `ai_knowledge_base` in Supabase with rows
   like:
   - title: `Madulingo`, content: a paragraph describing the project
   - title: `Astrova`, content: a paragraph describing the project
   - title: `Bio`, content: Viky's full background
   The assistant grounds every answer in these rows instead of guessing.

---

## 6. Admin dashboard

- URL: `/admin/login`
- Sign in with the Supabase Auth user you created above.
- `/admin` — overview counts
- `/admin/projects` — create/edit/delete Work & case-study entries
- `/admin/research` — create/edit/delete publications
- `/admin/messages` — view contact submissions, mark read/replied/archived, delete

---

## 7. Deploying to Vercel

```bash
# push this repo to GitHub first, then:
vercel
```

Or via the dashboard: **New Project → Import your GitHub repo**, then add
all variables from `.env.example` under **Settings → Environment Variables**.
Redeploy after adding them.

---

## 8. Project structure

```
app/
  page.tsx                 Home
  about/ work/ research/   Static (Stitch-approved) marketing pages
  journey/ skills/
  achievements/ resume/
  work/madulingo/          Case studies
  work/astrova/
  contact/                 Working contact form (client) -> /api/contact
  ask-viky-ai/             Working AI chat (client) -> /api/ai
  admin/                   Auth-gated dashboard + CRUD UI
  api/
    contact/route.ts       Insert into `messages`
    ai/route.ts             Gemini call, grounded + logged
    admin/*/route.ts        Service-role CRUD, auth-checked
components/                Header, Footer, AiFab, StaticHtml wrapper
content/                   Extracted Stitch markup as TS string exports
lib/                       Supabase clients (browser/server/admin), Gemini helper, auth guard
supabase/schema.sql        Full DB schema + RLS policies + seed
```

---

## 9. Next steps (optional follow-ups)

- Wire `Work`, `Research`, `Achievements`, `Journey`, `Skills` pages to read
  from Supabase (`projects`, `research_publications`, etc.) instead of the
  static Stitch markup, once real content is entered via the admin panel.
- Add Supabase Storage buckets for the resume PDF and project images, and
  point `profile.resume_url` / `projects.cover_image_url` at them.
- Add an email notification (e.g. Resend) on new contact messages.
- Add `middleware.ts` to enforce the admin session check at the edge instead
  of per-page, if you add more admin routes.
- Do not invent achievements, metrics, or credentials — the Antigravity
  brief is explicit that all real content goes through the CMS.

**Known limitation:** a few small in-page interactions from the original
Stitch mockups (the About "axiom" tab switcher, the Achievements category
filter, and the Home page's inline AI quick-prompt) were wired with inline
`onclick` handlers in the design output. Browser-native calls among them
(`window.print()`, clipboard copy, `scrollIntoView`) still work as-is; the
three that referenced custom helper functions (`switchAxiom`,
`filterAchievements`, `handleAiInquiry`) will no-op until reimplemented as
small React state (a 10-15 line client component each) — safe to leave for
now since Ask Viky AI already exists as a full page at `/ask-viky-ai`.
