export function getAchievementsHtml(achievements: any[]) {
  return `<div class="flex flex-col w-full">
<!-- Atmospheric Glow Backdrop -->
<div class="relative w-full overflow-hidden px-gutter lg:px-margin py-space-lg lg:py-space-xl">
<div class="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px]"></div>
<div class="pointer-events-none absolute top-1/3 -right-20 h-96 w-96 rounded-full bg-secondary/10 blur-[130px]"></div>
<!-- Header Section -->
<div class="relative flex flex-col gap-space-sm max-w-4xl">
<div class="flex items-center gap-space-xs">
<span class="inline-block h-1.5 w-1.5 rounded-full bg-primary"></span>
<span class="font-label-caps text-label-caps uppercase tracking-widest text-primary">HONORS &amp; RECOGNITION</span>
</div>
<h1 class="font-headline-lg text-headline-lg text-text-primary tracking-tight">
        Distinctions, Mandates &amp; Civic Honors
      </h1>
<p class="font-body-lg text-body-lg text-text-secondary max-w-2xl pt-space-xs leading-relaxed">
        A verified record of regional cultural ambassadorships, institutional representations, scholarly citations, and civic leadership milestones.
      </p>
</div>

<!-- Category Filter Controls -->
<div class="mt-space-xl flex flex-wrap items-center gap-space-xs">
<button class="filter-tab px-space-md py-space-xs rounded-full bg-primary text-on-primary font-button-text text-button-text transition-all duration-200" id="btn-all" onclick="filterAchievements('all')">
        All Distinctions
      </button>
<button class="filter-tab px-space-md py-space-xs rounded-full bg-surface-raised text-text-secondary hover:text-text-primary hover:bg-surface-elevated font-button-text text-button-text transition-all duration-200" onclick="filterAchievements('cultural')">Cultural</button>
<button class="filter-tab px-space-md py-space-xs rounded-full bg-surface-raised text-text-secondary hover:text-text-primary hover:bg-surface-elevated font-button-text text-button-text transition-all duration-200" onclick="filterAchievements('academic')">Academic</button>
<button class="filter-tab px-space-md py-space-xs rounded-full bg-surface-raised text-text-secondary hover:text-text-primary hover:bg-surface-elevated font-button-text text-button-text transition-all duration-200" onclick="filterAchievements('leadership')">Leadership</button>
<button class="filter-tab px-space-md py-space-xs rounded-full bg-surface-raised text-text-secondary hover:text-text-primary hover:bg-surface-elevated font-button-text text-button-text transition-all duration-200" onclick="filterAchievements('technology')">Technology</button>
</div>
<!-- Achievements Mosaic Grid -->
${achievements.map((a, i) => `
<article class="achievement-card lg:col-span-${i % 3 === 0 ? '8' : (i % 3 === 1 ? '4' : '6')} flex flex-col justify-between rounded-xl bg-surface-raised p-space-lg relative overflow-hidden transition-all duration-300 hover:bg-surface-elevated" data-category="${a.category?.toLowerCase() || ''}">
${i % 3 === 0 ? '<div class="pointer-events-none absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>' : ''}
<div class="flex flex-col gap-space-md relative z-10">
<div class="flex flex-wrap items-center justify-between gap-space-xs">
<span class="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-primary/10 text-primary font-label-caps text-label-caps uppercase">
<span class="material-symbols-outlined text-[14px]">${a.icon || 'workspace_premium'}</span>
              ${a.category}
            </span>
<span class="font-label-code text-label-code text-text-secondary">${a.date}</span>
</div>
<div class="flex flex-col gap-space-xs">
<h2 class="font-headline-sm text-headline-sm text-text-primary">${a.title}</h2>
<span class="font-label-code text-label-code text-primary">${a.issuer}</span>
<p class="font-body-md text-body-md text-text-secondary pt-space-xs leading-relaxed">
              ${a.description}
            </p>
</div>
</div>
</article>
`).join('')}
</div>
<!-- Institutional Verification Banner -->
<div class="mt-space-xl p-space-lg rounded-xl bg-surface-raised flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg">
<div class="flex items-start gap-space-md max-w-2xl">
<div class="p-space-sm rounded-lg bg-surface-elevated text-primary shrink-0">
<span class="material-symbols-outlined text-[28px]" style="font-variation-settings: 'FILL' 1;">workspace_premium</span>
</div>
<div class="flex flex-col gap-space-xs">
<span class="font-label-caps text-label-caps uppercase tracking-wider text-primary">Institutional Protocol Guarantee</span>
<h3 class="font-headline-sm text-headline-sm text-text-primary">Immutable Verification &amp; Registry Protocol</h3>
<p class="font-body-sm text-body-sm text-text-secondary">
            All accolades listed within this archive are validated by provincial government gazettes, university rectorate decrees, open DOIs, and certified civic registries.
          </p>
</div>
</div>
</div>
</div>
</div>
`;
}
