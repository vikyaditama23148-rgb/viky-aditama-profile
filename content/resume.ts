export function getResumeHtml(profile: any) {
  const name = profile?.full_name || "Viky Aditama, S.Pd.";
  const tagline = profile?.tagline || "Technologist, Researcher, Educator & Cultural Ambassador";
  const bio = profile?.bio || "Official dossier covering institutional executive leadership, empirical educational inquiry, and high-performance software artifacts.";
  const location = profile?.location || "Sumenep, East Java, Indonesia";
  const avatar = profile?.avatar_url || "https://lh3.googleusercontent.com/aida-public/AB6AXuDy9t5OULS5mRJCVxdVv9ndwunRIy7Cy2N3N21hJmqlJaH_Er4zYsRRLQyXK3ixWmbDhX4pCp6h9n7QAYYN4PT9fH-8zX8J5Jd_bcsrC1qCOQ7laGzgYDldXpUj6YnuT3axELafsD5xr5E8J5YheUC2sJB8W4gR6cBocfPyExJqOlpxuxjSxDEj6SYIaZAIVzHSaiAGUADMR2LgqiJ0bfH_OfigwXJMDVVDKPx8fXakyyPpJeiLSl08Nw";

  return `<div class="flex flex-col w-full">
<!-- Subtle Top Atmospheric Radial Aura -->
<div class="relative w-full">
<div class="absolute top-0 left-1/2 -translate-x-1/2 w-[840px] h-[360px] bg-gradient-to-b from-primary/10 via-secondary/5 to-transparent blur-3xl pointer-events-none -z-10"></div>
<div class="w-full px-gutter lg:px-margin py-space-md sm:py-space-lg flex flex-col gap-space-lg">
<!-- Top Action Ribbon -->
<section class="w-full bg-surface-raised rounded-xl p-space-md sm:p-space-lg shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
<div class="flex flex-col gap-space-xs">
<div class="flex items-center gap-space-xs">
<span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span class="font-label-caps text-label-caps uppercase text-primary tracking-widest">Document Registry // Form: VA-CV</span>
</div>
<h1 class="font-headline-sm text-headline-sm text-text-primary tracking-tight">Curriculum Vitae <span class="text-text-secondary font-light">//</span> ${name}</h1>
<p class="font-body-sm text-body-sm text-text-secondary">Official dossier covering institutional executive leadership, empirical educational inquiry, and high-performance software artifacts.</p>
</div>
<div class="flex flex-wrap items-center gap-space-sm pt-space-xs lg:pt-0">
<button class="group inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-elevated text-text-primary hover:bg-surface-container-high transition-all duration-200" onclick="window.print()">
<span class="material-symbols-outlined text-[18px] text-text-secondary group-hover:text-primary transition-colors">print</span>
<span class="font-button-text text-button-text">Print Dossier</span>
</button>
<a class="inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container text-on-surface hover:text-primary transition-colors" href="#json-dialog" onclick="document.getElementById('modal-json').classList.remove('hidden')">
<span class="material-symbols-outlined text-[18px]">data_object</span>
<span class="font-label-code text-label-code">Plain Text / JSON</span>
</a>
<button class="inline-flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-primary-container text-on-primary font-button-text text-button-text hover:bg-primary transition-all duration-200 shadow-md" id="downloadPdfBtn">
<span class="material-symbols-outlined text-[18px]">download</span>
<span>Download Formal CV (PDF)</span>
</button>
</div>
</section>
<!-- Profile Header Summary Card -->
<section class="w-full bg-surface-raised rounded-xl p-space-lg sm:p-space-xl shadow-md relative overflow-hidden">
<div class="absolute right-0 top-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
<div class="flex flex-col lg:flex-row items-start justify-between gap-space-lg relative z-10">
<div class="flex flex-col sm:flex-row gap-space-lg items-start">
<div class="relative shrink-0">
<img class="w-28 h-28 sm:w-32 sm:h-32 rounded-xl object-cover shadow-xl bg-surface-elevated" src="${avatar}"/>
<div class="absolute -bottom-2 -right-2 px-space-xs py-0.5 rounded bg-surface-elevated text-primary font-label-code text-[10px] tracking-wider uppercase shadow-sm">
                Verified
              </div>
</div>
<div class="flex flex-col gap-space-xs">
<div class="flex flex-wrap items-center gap-space-xs">
<span class="font-headline-md text-headline-md text-text-primary">${name}</span>
<span class="px-space-xs py-0.5 rounded bg-surface-elevated text-secondary font-label-code text-label-code">ID: 3529-IND-EDU</span>
</div>
<p class="font-body-lg text-body-lg text-primary font-medium">${tagline}</p>
<div class="flex flex-wrap items-center gap-y-1 gap-x-space-md text-text-secondary font-body-sm text-body-sm pt-space-xs">
<span class="inline-flex items-center gap-1.5">
<span class="material-symbols-outlined text-[16px] text-text-secondary">location_on</span>
                  ${location}
                </span>
<span class="text-text-secondary hidden sm:inline">•</span>
<span class="inline-flex items-center gap-1.5">
<span class="material-symbols-outlined text-[16px] text-text-secondary">verified_user</span>
                  East Java Accreditation Board
                </span>
</div>
<div class="pt-space-sm max-w-3xl">
<p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  ${bio}
                </p>
</div>
</div>
</div>
</div>
</section>
<!-- Two-Column Executive Resume Grid -->
<section class="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
<!-- LEFT COLUMN: Timeline, Leadership, & Engineering (7 Cols) -->
<div class="lg:col-span-7 flex flex-col gap-space-lg">
<!-- Section: Executive Leadership -->
<div class="bg-surface-raised rounded-xl p-space-lg sm:p-space-xl flex flex-col gap-space-md">
<div class="flex items-center justify-between">
<div class="flex items-center gap-space-sm">
<div class="w-8 h-8 rounded-lg bg-surface-elevated flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-[20px]">corporate_fare</span>
</div>
<h2 class="font-headline-sm text-headline-sm text-text-primary tracking-tight">Executive Leadership</h2>
</div>
<span class="font-label-caps text-label-caps uppercase text-primary">Governance</span>
</div>
<div class="flex flex-col gap-space-lg pt-space-xs">
<!-- Job 1 -->
<div class="flex flex-col gap-space-xs pl-space-md relative">
<div class="absolute left-0 top-1.5 bottom-0 w-0.5 bg-primary/40 rounded-full"></div>
<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
<span class="font-body-lg text-body-lg text-text-primary font-semibold">Chief Executive Officer</span>
<span class="font-label-code text-label-code text-primary bg-primary/10 px-2 py-0.5 rounded w-fit">2024 – PRESENT</span>
</div>
<span class="font-body-md text-body-md text-text-secondary">KEMUT Foundation (Yayasan Kemut Indonesia)</span>
<p class="font-body-sm text-body-sm text-on-surface-variant pt-1 leading-relaxed">
                  Steering institutional governance, civic education programs, and philanthropic digital transformation initiatives across regional Madura. Orchestrating cross-functional teams spanning 4 municipal districts to establish localized open-access knowledge networks.
                </p>
</div>
</div>
</div>
<!-- Section: Diplomatic & Cultural Mandates -->
<div class="bg-surface-raised rounded-xl p-space-lg sm:p-space-xl flex flex-col gap-space-md">
<div class="flex items-center justify-between">
<div class="flex items-center gap-space-sm">
<div class="w-8 h-8 rounded-lg bg-surface-elevated flex items-center justify-center text-secondary">
<span class="material-symbols-outlined text-[20px]">public</span>
</div>
<h2 class="font-headline-sm text-headline-sm text-text-primary tracking-tight">Diplomatic &amp; Cultural Mandates</h2>
</div>
<span class="font-label-caps text-label-caps uppercase text-secondary">Honors</span>
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs">
<div class="p-space-md rounded-lg bg-surface-elevated flex flex-col gap-space-xs">
<div class="flex items-center justify-between">
<span class="font-label-code text-label-code text-primary">MANDATE 01</span>
<span class="font-label-code text-[11px] text-text-secondary">2024 – 2026</span>
</div>
<h3 class="font-body-lg text-body-lg text-text-primary font-semibold">Duta Budaya Madura</h3>
<p class="font-body-sm text-body-sm text-text-secondary">
                  Official Cultural Ambassador appointed for the preservation, contemporary articulation, and archival curation of indigenous Madurese heritage and oral linguistic frameworks.
                </p>
</div>
</div>
</div>
</div>
<!-- RIGHT COLUMN -->
<div class="lg:col-span-5 flex flex-col gap-space-lg">
<!-- Section: Education & Academic Credentials -->
<div class="bg-surface-raised rounded-xl p-space-lg flex flex-col gap-space-md">
<div class="flex items-center justify-between">
<div class="flex items-center gap-space-sm">
<div class="w-8 h-8 rounded-lg bg-surface-elevated flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-[20px]">school</span>
</div>
<h2 class="font-headline-sm text-headline-sm text-text-primary tracking-tight">Academic Credentials</h2>
</div>
</div>
<div class="p-space-md rounded-lg bg-surface-elevated flex flex-col gap-space-xs">
<div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
<span class="font-body-lg text-body-lg text-text-primary font-semibold">Bachelor of Education (S.Pd.)</span>
<span class="font-label-code text-label-code text-primary bg-primary/10 px-2 py-0.5 rounded w-fit">Graduated with Highest Honors (Summa Cum Laude)</span>
</div>
<span class="font-body-md text-body-md text-text-secondary">Universitas PGRI Sumenep</span>
<p class="font-body-sm text-body-sm text-on-surface-variant pt-1 leading-relaxed">
                Specialized in Pedagogical Epistemology, Educational Media Computation, and Dialectical Vernacular Curricula. Recognized as Valedictorian Candidate.
              </p>
</div>
</div>
</div>
</section>
</div>
</div>
<!-- Accessible JSON Dossier Modal Window -->
<dialog class="hidden fixed inset-0 z-50 w-full h-full bg-surface-base/80 backdrop-blur-sm p-4 flex items-center justify-center" id="modal-json">
<div class="bg-surface-raised w-full max-w-3xl rounded-xl shadow-2xl border border-border-hairline overflow-hidden flex flex-col max-h-[90vh]">
<div class="p-4 border-b border-border-hairline flex items-center justify-between bg-surface-elevated">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-text-secondary">data_object</span>
<span class="font-label-code text-label-code text-text-primary">VA-CV-2025.json</span>
</div>
<button class="text-text-secondary hover:text-primary transition-colors" onclick="document.getElementById('modal-json').classList.add('hidden')" type="button">
<span class="material-symbols-outlined">close</span>
</button>
</div>
<div class="p-4 overflow-y-auto font-mono text-[13px] text-text-secondary leading-relaxed whitespace-pre-wrap select-all">
{
  "identity": {
    "name": "\${name}",
    "title": "\${tagline}",
    "id": "3529-IND-EDU"
  }
}
        </div>
</div>
</dialog>
`;
}
