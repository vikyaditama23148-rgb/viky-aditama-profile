export function getResearchHtml(research: any[]) {
  return `<div class="flex flex-col w-full">
<!-- Radial Ambient Lighting Backdrops -->
<div class="relative w-full overflow-hidden">
<div class="absolute -top-40 left-1/4 w-[800px] h-[500px] bg-gradient-to-br from-primary-container/20 via-transparent to-transparent rounded-full blur-[140px] pointer-events-none"></div>
<div class="absolute top-1/2 right-0 w-[600px] h-[400px] bg-gradient-to-l from-secondary/10 via-transparent to-transparent rounded-full blur-[120px] pointer-events-none"></div>
<!-- Editorial Header Section -->
<section class="w-full px-gutter lg:px-margin pt-12 pb-16 relative z-10">
<div class="flex flex-col gap-6 max-w-5xl">
<div class="flex items-center gap-3">
<span class="inline-block w-2 h-2 rounded-full bg-primary"></span>
<span class="font-label-caps text-label-caps uppercase text-primary tracking-widest">
            EMPIRICAL INDEX &amp; SCHOLARSHIP
          </span>
</div>
<h1 class="font-headline-lg text-headline-lg text-text-primary tracking-tight leading-tight">
          Literature &amp; Computational Peer-Reviewed Architecture
        </h1>
<p class="font-body-lg text-body-lg text-text-secondary max-w-3xl pt-2 leading-relaxed">
          The following index catalogs academic manuscripts, quantitative empirical analyses, and architectural case studies investigating the intersections of WebGL spatial learning, underrepresented vernacular linguistics, and decentralized civic pedagogy.
        </p>
</div>
</section>
<!-- Main Academic Catalog -->
<section class="w-full px-gutter lg:px-margin pb-16 relative z-10">
<div class="max-w-6xl flex flex-col gap-12">
<div class="flex flex-col md:flex-row md:items-end justify-between border-b border-border-hairline pb-4 gap-4">
<div>
<span class="font-label-caps text-label-caps uppercase text-secondary tracking-widest">Primary Manuscripts</span>
<h2 class="font-headline-md text-headline-md text-text-primary">Peer-Reviewed Registry</h2>
</div>
<div class="flex items-center gap-space-xs text-text-secondary font-label-code text-label-code">
<span>SORT: RECENCY (DESC)</span>
</div>
</div>
<!-- Publications List -->
<div class="flex flex-col gap-space-lg">
${research.map((r, i) => `
<article class="group relative rounded-xl bg-surface-raised p-space-lg shadow-xl transition-all duration-300 hover:bg-surface-elevated">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-space-md items-start">
<!-- Metadata Column -->
<div class="lg:col-span-3 flex flex-col gap-space-xs font-label-code text-label-code text-text-secondary">
<span class="font-headline-sm text-headline-sm ${i % 2 === 0 ? 'text-primary' : 'text-secondary'} font-bold">PAPER 0${i+1}</span>
<div class="flex flex-col gap-1 pt-space-xs">
<span class="text-text-primary uppercase tracking-wider">Release Matrix</span>
<span>${r.publication_date || 'N/A'}</span>
</div>
<div class="flex flex-col gap-1 pt-space-xs">
<span class="text-text-primary uppercase tracking-wider">DOI Identifier</span>
<span>${r.doi || '—'}</span>
</div>
</div>
<!-- Abstract & Manuscript Main Content -->
<div class="lg:col-span-9 flex flex-col gap-space-sm">
<div class="flex flex-wrap items-center gap-space-xs">
<span class="font-label-code text-label-code px-2 py-0.5 rounded bg-surface-base text-text-secondary">
                ${r.journal}
              </span>
</div>
<h3 class="font-headline-sm text-headline-sm text-text-primary group-hover:text-primary transition-colors">
              ${r.title}
            </h3>
<div class="flex items-center gap-space-sm text-body-sm font-body-sm text-secondary">
<span class="material-symbols-outlined text-[16px]">group</span>
<span><strong>Authors:</strong> ${r.authors}</span>
</div>
<p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              ${r.abstract}
            </p>
<!-- Action Cluster -->
<div class="flex flex-wrap items-center gap-space-sm pt-space-sm">
${r.external_url ? `
<a class="inline-flex items-center gap-space-xs px-space-md py-space-xs rounded bg-primary-container text-surface-base font-button-text text-button-text hover:bg-primary transition-all shadow-md" href="${r.external_url}" target="_blank">
<span class="material-symbols-outlined text-[16px]">visibility</span>
<span>Read Publication</span>
</a>
` : ''}
</div>
</div>
</div>
</article>
`).join('')}
</div>
</div>
</section>
</div>
</div>`;
}
