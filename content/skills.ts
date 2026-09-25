export function getSkillsHtml(skills: any[]) {
  // Group skills by category
  const grouped = skills.reduce((acc, s) => {
    if (!acc[s.category]) acc[s.category] = [];
    acc[s.category].push(s);
    return acc;
  }, {} as Record<string, any[]>);

  const renderItem = (skill: any) => `
<div class="bg-surface-raised p-space-md rounded-lg flex flex-col justify-between hover:bg-surface-elevated transition-colors duration-200 group">
<div>
<div class="flex items-center justify-between">
<span class="font-label-code text-label-code text-primary">PROFICIENCY</span>
<span class="font-label-caps text-label-caps text-secondary bg-surface-elevated px-2 py-0.5 rounded">${skill.proficiency}%</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-text-primary mt-space-xs">${skill.name}</h3>
</div>
<div class="mt-space-md pt-space-xs flex items-center justify-between">
<div class="w-full bg-surface-elevated rounded-full h-1.5 overflow-hidden">
  <div class="bg-primary h-1.5 rounded-full" style="width: ${skill.proficiency}%"></div>
</div>
</div>
</div>`;

  return `<div class="flex flex-col w-full">
<!-- Atmospheric Glow Backdrop -->
<div class="relative w-full overflow-hidden">
<div class="absolute -top-32 left-1/4 w-[700px] h-[340px] pointer-events-none opacity-20 blur-[130px] rounded-full bg-gradient-to-r from-primary-container via-secondary to-transparent"></div>
<div class="absolute top-96 right-10 w-[500px] h-[280px] pointer-events-none opacity-15 blur-[120px] rounded-full bg-gradient-to-b from-secondary-container to-transparent"></div>
<!-- Editorial Header Section -->
<section class="w-full px-gutter lg:px-margin pt-space-lg pb-space-xl">
<div class="flex flex-col gap-space-sm max-w-5xl">
<div class="flex items-center gap-space-xs">
<span class="inline-block w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span class="font-label-caps text-label-caps uppercase text-primary tracking-widest">
            COMPETENCY INDEX // ARCHITECTURE &amp; PRAXIS
          </span>
</div>
<h1 class="font-headline-lg text-headline-lg text-text-primary tracking-tight">
          Multi-Disciplinary Engineering &amp; Thought Systems
        </h1>
<p class="font-body-lg text-body-lg text-text-secondary max-w-3xl pt-space-xs">
          A structured taxonomy of technical craft, empirical research methodology, pedagogical frameworks, and cultural leadership.
        </p>
<!-- Core Philosophy Epigram -->
<div class="mt-space-md p-space-md sm:p-space-lg rounded-xl bg-surface-raised relative overflow-hidden shadow-lg">
<div class="absolute top-0 left-0 w-1 h-full bg-primary"></div>
<div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-space-sm">
<div class="flex items-start gap-space-sm">
<span class="material-symbols-outlined text-primary text-[20px] mt-0.5">verified</span>
<div>
<span class="font-label-code text-label-code uppercase tracking-wider text-primary block">Methodological Axiom</span>
<p class="font-body-md text-body-md text-text-primary italic mt-1 max-w-2xl">
                  “Skills should not use meaningless percentage bars. Instead, categorized by capability domain, operational depth, architecture tiers, and verified production deployments.”
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<!-- Main Categorized Skills Matrix -->
<section class="w-full px-gutter lg:px-margin pb-space-lg flex flex-col gap-space-xl" id="skills-catalog">
${Object.entries(grouped).map(([category, items], idx) => `
<article class="domain-card flex flex-col gap-space-md" data-domain="${category.toLowerCase()}">
<div class="flex flex-col md:flex-row md:items-end justify-between gap-space-xs pb-space-xs">
<div>
<div class="flex items-center gap-space-xs">
<span class="font-label-code text-label-code text-secondary font-bold">DOMAIN // 0${idx + 1}</span>
</div>
<h2 class="font-headline-md text-headline-md text-text-primary mt-1">${category}</h2>
</div>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
${(items as any[]).map((s: any) => renderItem(s)).join('')}
</div>
</article>
`).join('')}
</section>
</div>`;
}
