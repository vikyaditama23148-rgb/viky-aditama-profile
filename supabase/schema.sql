-- ============================================================================
-- Viky Aditama Platform — Supabase schema
-- Run this once in the Supabase SQL editor (or via `supabase db push`).
-- ============================================================================

create extension if not exists "uuid-ossp";

-- ---------------------------------------------------------------------------
-- PROFILE (singleton) — editable identity block used across the site
-- ---------------------------------------------------------------------------
create table if not exists profile (
  id uuid primary key default uuid_generate_v4(),
  full_name text not null default 'Viky Aditama',
  tagline text,
  bio text,
  location text,
  email text,
  resume_url text,
  avatar_url text,
  social_links jsonb default '{}'::jsonb, -- { github, linkedin, scholar, researchgate, instagram }
  updated_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- PROJECTS — Work / Case studies (Madulingo, Astrova, future work)
-- ---------------------------------------------------------------------------
create table if not exists projects (
  id uuid primary key default uuid_generate_v4(),
  slug text unique not null,
  title text not null,
  summary text,
  description text,
  cover_image_url text,
  gallery jsonb default '[]'::jsonb,       -- array of image URLs
  tags text[] default '{}',
  role text,
  year text,
  tech_stack text[] default '{}',
  external_url text,
  featured boolean not null default false,
  sort_order int not null default 0,
  status text not null default 'published' check (status in ('draft', 'published')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- RESEARCH — Academic publications
-- ---------------------------------------------------------------------------
create table if not exists research_publications (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  abstract text,
  authors text,
  journal text,
  publication_date date,
  doi text,
  pdf_url text,
  external_url text,
  category text,
  featured boolean not null default false,
  sort_order int not null default 0,
  status text not null default 'published' check (status in ('draft', 'published')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- ACHIEVEMENTS / HONORS
-- ---------------------------------------------------------------------------
create table if not exists achievements (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  issuer text,
  description text,
  date date,
  category text, -- e.g. 'Cultural', 'Academic', 'Leadership', 'Technology'
  icon text,
  sort_order int not null default 0,
  status text not null default 'published' check (status in ('draft', 'published')),
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- JOURNEY / TIMELINE
-- ---------------------------------------------------------------------------
create table if not exists journey_entries (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  organization text,
  description text,
  start_date date,
  end_date date,
  category text,
  sort_order int not null default 0,
  status text not null default 'published' check (status in ('draft', 'published')),
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- SKILLS
-- ---------------------------------------------------------------------------
create table if not exists skills (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  category text not null, -- e.g. 'Engineering', 'Design', 'Languages', 'Research'
  proficiency int check (proficiency between 0 and 100),
  sort_order int not null default 0
);

-- ---------------------------------------------------------------------------
-- CONTACT MESSAGES — submitted via the public contact form
-- ---------------------------------------------------------------------------
create table if not exists messages (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  email text not null,
  subject text,
  message text not null,
  category text, -- 'Collaboration', 'Research', 'Press', 'General'
  status text not null default 'new' check (status in ('new', 'read', 'replied', 'archived')),
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- AI KNOWLEDGE BASE — grounding context for the "Ask Viky AI" assistant
-- ---------------------------------------------------------------------------
create table if not exists ai_knowledge_base (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  content text not null,
  source_type text, -- 'bio' | 'project' | 'research' | 'faq'
  created_at timestamptz not null default now()
);

create table if not exists ai_chat_logs (
  id uuid primary key default uuid_generate_v4(),
  session_id text,
  question text not null,
  answer text,
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- Row Level Security
-- Public (anon) can READ published content and INSERT contact messages.
-- All writes/updates require the service role key (used only in server routes).
-- ---------------------------------------------------------------------------
alter table profile enable row level security;
alter table projects enable row level security;
alter table research_publications enable row level security;
alter table achievements enable row level security;
alter table journey_entries enable row level security;
alter table skills enable row level security;
alter table messages enable row level security;
alter table ai_knowledge_base enable row level security;
alter table ai_chat_logs enable row level security;

create policy "public read profile" on profile for select using (true);
create policy "public read published projects" on projects for select using (status = 'published');
create policy "public read published research" on research_publications for select using (status = 'published');
create policy "public read published achievements" on achievements for select using (status = 'published');
create policy "public read published journey" on journey_entries for select using (status = 'published');
create policy "public read skills" on skills for select using (true);

create policy "public can submit messages" on messages for insert with check (true);
-- No public select policy on messages -> only readable via service role (admin API).

create policy "public read ai knowledge" on ai_knowledge_base for select using (true);
create policy "public can log ai chats" on ai_chat_logs for insert with check (true);

-- Writes (insert/update/delete) to content tables are intentionally left with
-- NO anon policy, so they can only be performed using the Supabase service
-- role key from the /api/admin/* server routes (never exposed to the client).

-- ---------------------------------------------------------------------------
-- Seed: profile singleton
-- ---------------------------------------------------------------------------
insert into profile (full_name, tagline, bio, location, email, social_links)
values (
  'Viky Aditama',
  'Educator • Researcher • Technologist • Cultural Advocate',
  'Building meaningful experiences where culture, pedagogy, scientific inquiry, and scalable digital engineering converge into living digital architecture.',
  'Sumenep, East Java, Indonesia',
  'contact@vikyaditama.com',
  '{"github": "#", "linkedin": "#", "scholar": "#", "researchgate": "#"}'
)
on conflict do nothing;
