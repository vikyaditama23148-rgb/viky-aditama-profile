-- ============================================================================
-- Migration: Add resume_entries table
-- Run this in the Supabase SQL editor
-- ============================================================================

create table if not exists resume_entries (
  id uuid primary key default uuid_generate_v4(),
  section text not null, -- e.g. 'Executive Leadership', 'Academic Credentials'
  title text not null, -- e.g. 'Chief Executive Officer'
  organization text, -- e.g. 'KEMUT Foundation'
  date_range text, -- e.g. '2024 - PRESENT'
  description text,
  sort_order int not null default 0,
  status text not null default 'published' check (status in ('draft', 'published')),
  created_at timestamptz not null default now()
);

alter table resume_entries enable row level security;
create policy "public read published resume" on resume_entries for select using (status = 'published');

-- Seed data matching the original design
insert into resume_entries (section, title, organization, date_range, description, sort_order)
values 
('Executive Leadership', 'Chief Executive Officer', 'KEMUT Foundation (Yayasan Kemut Indonesia)', '2024 – PRESENT', 'Steering institutional governance, civic education programs, and philanthropic digital transformation initiatives across regional Madura. Orchestrating cross-functional teams spanning 4 municipal districts to establish localized open-access knowledge networks.', 1),
('Diplomatic & Cultural Mandates', 'Duta Budaya Madura', 'MANDATE 01', '2024 – 2026', 'Official Cultural Ambassador appointed for the preservation, contemporary articulation, and archival curation of indigenous Madurese heritage and oral linguistic frameworks.', 2),
('Academic Credentials', 'Bachelor of Education (S.Pd.)', 'Universitas PGRI Sumenep', 'Graduated with Highest Honors (Summa Cum Laude)', 'Specialized in Pedagogical Epistemology, Educational Media Computation, and Dialectical Vernacular Curricula. Recognized as Valedictorian Candidate.', 3);
