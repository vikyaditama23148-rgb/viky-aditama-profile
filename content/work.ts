export function getWorkHtml(projects: any[]) {
  return `<div class="flex flex-col w-full">
<!-- Top Ambient Glow -->
<div class="relative w-full overflow-hidden">
<div class="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none"></div>
<div class="absolute -top-20 right-1/4 w-[450px] h-[450px] bg-secondary-container/20 rounded-full blur-[160px] pointer-events-none"></div>
<!-- Editorial Header Section -->
<section class="relative w-full px-gutter lg:px-margin pt-12 pb-16">
<div class="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-border-hairline pb-12">
<div class="flex flex-col max-w-3xl">
<div class="flex items-center gap-3 mb-4">
<span class="inline-block w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span class="font-label-caps text-label-caps uppercase text-primary tracking-widest">PORTFOLIO &amp; PRODUCTS</span>
</div>
<h1 class="font-display-hero text-headline-lg lg:text-display-hero text-text-primary tracking-tight leading-none mb-6">
            Engineered for Purpose,<br/>
<span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-fixed-dim to-text-secondary">Designed for Culture.</span>
</h1>
<p class="font-body-lg text-body-lg text-text-secondary max-w-2xl leading-relaxed">
            Bridging foundational engineering systems with living heritage. A precision index of high-fidelity spatial experiences, computational linguistics engines, and public education infrastructures.
          </p>
</div>
<!-- Metric Counter Panel -->
<div class="grid grid-cols-2 gap-4 shrink-0 bg-surface-raised p-6 rounded-xl border border-border-hairline">
<div>
<span class="font-label-caps text-label-caps text-text-secondary uppercase">Shipped Deployments</span>
<p class="font-headline-sm text-headline-sm text-primary mt-1">\${projects.length}<span class="text-sm font-label-code text-text-secondary ml-1">LIVE</span></p>
</div>
<div>
<span class="font-label-caps text-label-caps text-text-secondary uppercase">Active Learners</span>
<p class="font-headline-sm text-headline-sm text-text-primary mt-1">42.8<span class="text-sm font-label-code text-text-secondary ml-1">K</span></p>
</div>
<div class="col-span-2 pt-3 border-t border-border-hairline/60 flex items-center justify-between">
<span class="font-label-code text-label-code text-text-secondary">Avg. Lighthouse Score</span>
<span class="font-label-code text-label-code text-secondary font-semibold">99.4% Across Nodes</span>
</div>
</div>
</div>
</section>
</div>
<!-- Signature Featured Projects -->
<section class="w-full px-gutter lg:px-margin py-8 flex flex-col gap-16">
<div class="flex items-center justify-between">
<div class="flex items-center gap-3">
<span class="font-label-code text-label-code text-primary bg-primary/10 px-2.5 py-1 rounded">01 // FLAGSHIP ARCHIVES</span>
<span class="text-text-secondary font-label-caps text-label-caps uppercase tracking-wider">Production Deployments</span>
</div>
<span class="font-label-code text-label-code text-text-secondary hidden sm:inline-block">SORT: RELEVANCE &amp; IMPACT</span>
</div>
${projects.map((p, i) => `
<article class="project-card relative rounded-2xl bg-surface-raised border border-border-hairline hover:border-primary/50 transition-all duration-500 overflow-hidden group shadow-xl">
<div class="absolute -top-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none group-hover:bg-primary/20 transition-all duration-700"></div>
<div class="grid grid-cols-1 lg:grid-cols-12 gap-0 relative z-10">
<!-- Visual Column -->
<div class="lg:col-span-7 relative min-h-[380px] lg:min-h-[520px] overflow-hidden bg-surface-container-lowest flex items-center justify-center p-6 lg:p-10 border-b lg:border-b-0 lg:border-r border-border-hairline">
<img class="w-full h-full object-cover rounded-xl shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]" src="${p.cover_image_url || 'https://via.placeholder.com/800x600'}"/>
<div class="absolute top-6 left-6 flex items-center gap-2 bg-surface-base/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-border-hairline">
<span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
<span class="font-label-code text-label-code text-text-primary">${p.year}</span>
</div>
</div>
<!-- Info Column -->
<div class="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between">
<div>
<!-- Header Badges -->
<div class="flex flex-wrap items-center gap-2 mb-6">
<span class="font-label-caps text-label-caps uppercase text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded">
                ${p.role}
              </span>
</div>
<!-- Title & Subtitle -->
<h2 class="font-headline-lg text-headline-md lg:text-headline-lg text-text-primary tracking-tight mb-2">
              ${p.title}
            </h2>
<h3 class="font-body-lg text-body-md text-primary font-medium mb-6">
              ${p.summary}
            </h3>
<p class="font-body-md text-body-md text-text-secondary leading-relaxed mb-8">
              ${p.description}
            </p>
</div>
<!-- Action Buttons -->
<div class="pt-6 border-t border-border-hairline flex flex-wrap items-center gap-4">
${p.external_url ? `<a class="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary hover:bg-primary-fixed text-surface-base font-button-text text-button-text font-semibold transition-all duration-200 transform hover:-translate-y-0.5" href="${p.external_url}" target="_blank">
  <span class="material-symbols-outlined text-[20px]">open_in_new</span> Launch Platform
</a>` : ''}
</div>
</div>
</div>
</article>
`).join('')}
</section>
</div>`;
}
