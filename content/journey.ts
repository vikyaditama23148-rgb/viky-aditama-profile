export function getJourneyHtml(journey: any[]) {
  return `<div class="flex flex-col w-full">
<!-- Radial Ambient Lighting Backdrops -->
<div class="relative w-full overflow-hidden">
<div class="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-primary-container/10 via-transparent to-transparent rounded-full blur-3xl pointer-events-none"></div>
<div class="absolute top-1/2 right-10 w-[500px] h-[500px] bg-gradient-to-br from-secondary/10 via-transparent to-transparent rounded-full blur-3xl pointer-events-none"></div>
<!-- Page Header & Intellectual Statement -->
<section class="w-full px-gutter lg:px-margin pt-12 pb-16 relative z-10">
<div class="max-w-6xl mx-auto flex flex-col gap-6">
<div class="flex flex-wrap items-center gap-3">
<div class="flex items-center gap-2 px-3 py-1 rounded-full bg-surface-elevated">
<span class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
<span class="font-label-caps text-label-caps uppercase tracking-widest text-primary">CHRONOLOGY &amp; MILESTONES</span>
</div>
</div>
<!-- Hero Editorial Headline -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
<div class="lg:col-span-8 flex flex-col gap-4">
<h1 class="font-headline-lg text-headline-lg text-text-primary tracking-tight">
              A Trajectory Across <span class="text-primary italic">Culture</span>, <span class="text-secondary">Education</span> &amp; Technology
            </h1>
<p class="font-body-lg text-body-lg text-text-secondary max-w-2xl">
              An evolving journey chronicling the fusion of regional heritage advocacy, empirical pedagogical research, high-performance software engineering, and civic foundation leadership.
            </p>
</div>
</div>
</div>
</section>
<!-- Main Editorial Chronology Stream -->
<section class="w-full px-gutter lg:px-margin py-8 relative z-10">
<div class="max-w-6xl mx-auto flex flex-col gap-12">
${journey.map((j, i) => `
<article class="milestone-card relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-start p-8 rounded-xl bg-surface-raised transition-all duration-300 group hover:bg-surface-elevated" data-category="${j.category?.toLowerCase() || ''}">
<div class="lg:col-span-4 flex flex-col gap-2">
<div class="flex items-center gap-2 font-label-caps text-label-caps uppercase ${i % 2 === 0 ? 'text-primary' : 'text-secondary'}">
<span class="w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-primary' : 'bg-secondary'}"></span>
<span>${j.start_date} — ${j.end_date || 'PRESENT'}</span>
</div>
<div class="font-headline-md text-headline-md text-text-primary tracking-tight">
              ${j.title}
            </div>
<div class="flex flex-wrap gap-1.5 mt-2">
<span class="px-2.5 py-0.5 rounded-full font-label-code text-label-code bg-surface-elevated text-text-secondary">${j.organization}</span>
</div>
</div>
<div class="lg:col-span-8 flex flex-col gap-4">
<span class="font-label-caps text-label-caps uppercase tracking-wider ${i % 2 === 0 ? 'text-secondary' : 'text-primary'}">${j.category}</span>
<p class="font-body-md text-body-md text-text-secondary leading-relaxed">
              ${j.description}
            </p>
</div>
</article>
`).join('')}
</div>
</section>
</div>
</div>`;
}
