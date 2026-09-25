export function getHomeHtml(profile: any, projects: any[] = [], research: any[] = [], achievements: any[] = []) {
  const firstName = profile?.full_name?.split(" ")[0] || "VIKY";
  const lastName = profile?.full_name?.split(" ").slice(1).join(" ") || "ADITAMA";
  const tagline = profile?.tagline || "Educator • Researcher • Technologist • Cultural Advocate";
  const bio = profile?.bio || "Building meaningful experiences where culture, pedagogy, scientific inquiry, and scalable digital engineering converge into living digital architecture.";
  const location = profile?.location || "Madura • ID";
  const avatar = profile?.avatar_url || "https://lh3.googleusercontent.com/aida-public/AB6AXuA9f4gVh7q3bvt34dyUemdlWR04xtiQOrYpH8GKk52Hh13xxHTk93aElGYvMfQ80drbOmw-xvf53Lb2DO8p93a6BLTSPOJ61kZ17CGT8zhj3XxNcdvUgnoISvbfQEQTMcTIjH63d4_eSNig6HEnyWN70b4oiJ5AhE-DTRxIHvVekjra-i1_wz9tH5wcMFBy7ZsYDjCoHGPPCGf2DYuVyymT737yK24SOmPtLh_IwvdXk1lIFh2CypJPUA";

  return `<div class="flex flex-col w-full">
<!-- SECTION 1: HERO SECTION -->
<section class="relative w-full px-gutter lg:px-margin pt-12 pb-24 overflow-hidden">
<!-- Atmospheric Ambient Backlights -->
<div class="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full pointer-events-none opacity-40 blur-[130px] bg-gradient-to-br from-primary/10 via-transparent to-transparent"></div>
<div class="absolute -top-24 left-10 w-[500px] h-[500px] rounded-full pointer-events-none opacity-30 blur-[140px] bg-gradient-to-tr from-secondary/15 via-transparent to-transparent"></div>
<div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
<!-- Left Column: Typography & Intent -->
<div class="lg:col-span-7 flex flex-col items-start space-y-space-md">
<!-- Eyebrow Ribbon -->
<div class="inline-flex items-center gap-space-xs px-3 py-1.5 rounded-full bg-surface-elevated shadow-sm">
<span class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
<span class="font-label-caps text-label-caps uppercase text-primary tracking-widest">DIGITAL IDENTITY &amp; ARCHIVE 2024–2026</span>
<span class="text-text-secondary text-xs">/</span>
<span class="font-label-code text-label-code text-text-secondary">VOL. IV</span>
</div>
<!-- Editorial Name & Tagline -->
<div class="flex flex-col space-y-space-xs">
<h1 class="font-display-hero text-display-hero text-text-primary tracking-tighter uppercase font-bold leading-none select-none">
            ${firstName}<br/>
<span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-fixed to-secondary-fixed-dim">${lastName}</span>
</h1>
<p class="font-label-code text-label-code text-primary uppercase tracking-[0.2em] pt-2">
            ${tagline}
          </p>
</div>
<!-- Positioning Statement -->
<p class="font-body-lg text-body-lg text-text-secondary max-w-xl">
          ${bio}
        </p>
<!-- Meta Indices -->
<div class="grid grid-cols-3 gap-space-md py-space-sm w-full max-w-lg">
<div class="flex flex-col">
<span class="font-label-code text-label-code text-text-secondary uppercase">Territory</span>
<span class="font-headline-sm text-headline-sm text-text-primary">${location.split(',')[0] || location}</span>
</div>
<div class="flex flex-col">
<span class="font-label-code text-label-code text-text-secondary uppercase">Initiatives</span>
<span class="font-headline-sm text-headline-sm text-primary">KEMUT &amp; Co.</span>
</div>
<div class="flex flex-col">
<span class="font-label-code text-label-code text-text-secondary uppercase">Focus</span>
<span class="font-headline-sm text-headline-sm text-text-primary">Interactive 3D</span>
</div>
</div>
<!-- Action CTAs -->
<div class="flex flex-wrap items-center gap-space-md pt-2">
<a class="inline-flex items-center gap-space-xs px-6 py-3.5 rounded-lg bg-primary text-surface-base font-button-text text-button-text font-semibold hover:bg-primary-fixed transition-all duration-200 shadow-[0_4px_20px_rgba(200,169,107,0.25)] hover:-translate-y-0.5" href="#selected-works">
<span>Explore My Work</span>
<span class="material-symbols-outlined text-[18px]">arrow_downward</span>
</a>
<a class="inline-flex items-center gap-space-xs px-6 py-3.5 rounded-lg bg-surface-raised text-text-primary font-button-text text-button-text hover:bg-surface-elevated transition-all duration-200 shadow-sm" href="#identity-pillars">
<span>About Profile</span>
<span class="material-symbols-outlined text-[18px] text-text-secondary">arrow_forward</span>
</a>
<button class="inline-flex items-center gap-space-xs px-4 py-3 rounded-lg bg-surface-elevated text-secondary font-label-code text-label-code hover:bg-surface-container-high transition-colors" onclick="document.querySelector('#ai-interface').scrollIntoView({behavior: 'smooth'})" type="button">
<span class="material-symbols-outlined text-[16px] text-secondary">auto_awesome</span>
<span>Ask Viky AI</span>
</button>
</div>
</div>
<!-- Right Column: Visual Portrait with Cinematic Framing -->
<div class="lg:col-span-5 relative flex justify-center items-center">
<!-- Structural Backdrop Elements -->
<div class="absolute -inset-4 bg-gradient-to-b from-primary/10 via-surface-elevated/40 to-transparent rounded-2xl blur-xl"></div>
<div class="relative w-full max-w-md bg-surface-raised rounded-xl p-space-sm shadow-2xl">
<div class="relative w-full aspect-[4/5] rounded-lg overflow-hidden bg-surface-base">
<img class="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700" data-alt="Cinematic fine-art black and amber-lit portrait of Viky Aditama, an Indonesian intellectual educator and cultural advocate wearing refined modern traditional attire, soft directional champagne light illuminating facial features against a deep dark obsidian backdrop with subtle holographic geometric runes, high-fashion editorial styling, 8k resolution, Leica 85mm look" src="${avatar}"/>
<div class="absolute inset-0 bg-gradient-to-t from-surface-base via-transparent to-transparent opacity-80"></div>
<!-- Floating Holographic Data Widget -->
<div class="absolute bottom-4 left-4 right-4 p-space-sm rounded-lg bg-surface-raised/90 backdrop-blur-md flex items-center justify-between shadow-lg">
<div class="flex items-center gap-space-xs">
<span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
<span class="font-label-code text-label-code text-text-primary">Status: Active Research</span>
</div>
<span class="font-label-caps text-label-caps uppercase text-primary">Sumenep • 2025</span>
</div>
</div>
<!-- Bottom Meta Strip -->
<div class="flex justify-between items-center px-space-sm pt-space-xs">
<span class="font-label-code text-label-code text-text-secondary">ARCHIVE REF: VA-24-99</span>
<span class="font-label-code text-label-code text-secondary">OBSIDIAN V4.2</span>
</div>
</div>
</div>
</div>
</section>
<!-- SECTION 2: IDENTITY PILLARS -->
<section class="w-full px-gutter lg:px-margin py-20 bg-surface-raised" id="identity-pillars">
<div class="flex flex-col space-y-space-lg">
<!-- Section Header -->
<div class="flex flex-col md:flex-row md:items-end justify-between gap-space-sm pb-space-md">
<div>
<span class="font-label-caps text-label-caps uppercase text-primary tracking-widest">FOUNDATIONAL QUADRANT</span>
<h2 class="font-headline-lg text-headline-lg text-text-primary tracking-tight font-bold mt-1">IDENTITY PILLARS</h2>
</div>
<p class="font-body-sm text-body-sm text-text-secondary max-w-sm">
          A four-way nexus orchestrating cultural safeguarding, pedagogy, software architecture, and social enterprise.
        </p>
</div>
<!-- Bento Grid Quad -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
<!-- Pillar 01: Culture -->
<div class="group flex flex-col justify-between p-space-lg rounded-xl bg-surface-elevated hover:bg-surface-container-high transition-all duration-300 shadow-md">
<div class="flex flex-col space-y-space-md">
<div class="flex items-center justify-between">
<span class="font-label-code text-label-code text-primary">01 // CULTURE</span>
<span class="material-symbols-outlined text-[24px] text-primary">account_balance</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-text-primary group-hover:text-primary transition-colors">Duta Budaya Madura</h3>
<p class="font-body-md text-body-md text-text-secondary">
              Elected cultural ambassador (2024–2026). Preserving ancestral Island heritage, philology, and folklore via contemporary interactive mediums and digital preservation pipelines.
            </p>
</div>
<div class="pt-space-md mt-space-md flex items-center justify-between text-text-secondary">
<span class="font-label-caps text-label-caps uppercase">Sumenep Mandate</span>
<span class="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>
<!-- Pillar 02: Education -->
<div class="group flex flex-col justify-between p-space-lg rounded-xl bg-surface-elevated hover:bg-surface-container-high transition-all duration-300 shadow-md">
<div class="flex flex-col space-y-space-md">
<div class="flex items-center justify-between">
<span class="font-label-code text-label-code text-secondary">02 // EDUCATION</span>
<span class="material-symbols-outlined text-[24px] text-secondary">school</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-text-primary group-hover:text-secondary transition-colors">Pedagogical Practice</h3>
<p class="font-body-md text-body-md text-text-secondary">
              Active educator and educational practitioner. Re-engineering student cognitive engagement through spatial computing, gamified linguistics, and adaptive syllabus frameworks.
            </p>
</div>
<div class="pt-space-md mt-space-md flex items-center justify-between text-text-secondary">
<span class="font-label-caps text-label-caps uppercase">PGRI Academic Field</span>
<span class="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>
<!-- Pillar 03: Technology -->
<div class="group flex flex-col justify-between p-space-lg rounded-xl bg-surface-elevated hover:bg-surface-container-high transition-all duration-300 shadow-md">
<div class="flex flex-col space-y-space-md">
<div class="flex items-center justify-between">
<span class="font-label-code text-label-code text-tertiary">03 // TECHNOLOGY</span>
<span class="material-symbols-outlined text-[24px] text-tertiary">terminal</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-text-primary group-hover:text-tertiary transition-colors">Full-Stack &amp; 3D</h3>
<p class="font-body-md text-body-md text-text-secondary">
              Architecting reactive web ecosystems, real-time WebGL graphics, dynamic state-machines, and high-performance serverless backbones with micro-frontend precision.
            </p>
</div>
<div class="pt-space-md mt-space-md flex items-center justify-between text-text-secondary">
<span class="font-label-caps text-label-caps uppercase">Three.js / React / Go</span>
<span class="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>
<!-- Pillar 04: Leadership -->
<div class="group flex flex-col justify-between p-space-lg rounded-xl bg-surface-elevated hover:bg-surface-container-high transition-all duration-300 shadow-md">
<div class="flex flex-col space-y-space-md">
<div class="flex items-center justify-between">
<span class="font-label-code text-label-code text-primary">04 // LEADERSHIP</span>
<span class="material-symbols-outlined text-[24px] text-primary">token</span>
</div>
<h3 class="font-headline-sm text-headline-sm text-text-primary group-hover:text-primary transition-colors">KEMUT Foundation</h3>
<p class="font-body-md text-body-md text-text-secondary">
              Chief Executive Officer @ KEMUT Foundation &amp; Editor-in-Chief @ KEMUT News. Mobilizing regional initiatives across youth literacy, civic media, and community resilience.
            </p>
</div>
<div class="pt-space-md mt-space-md flex items-center justify-between text-text-secondary">
<span class="font-label-caps text-label-caps uppercase">NGO &amp; Journalism</span>
<span class="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</div>
</div>
</div>
</div>
</section>
<!-- SECTION 3: SIGNATURE EDITORIAL STATEMENT -->
<section class="relative w-full px-gutter lg:px-margin py-28 overflow-hidden bg-surface-base">
<div class="max-w-4xl mx-auto flex flex-col items-center text-center space-y-space-md relative z-10">
<div class="inline-flex items-center gap-space-xs font-label-caps text-label-caps uppercase tracking-widest text-secondary">
<span>Culture</span>
<span class="text-primary font-bold">×</span>
<span>Education</span>
<span class="text-primary font-bold">×</span>
<span>Technology</span>
</div>
<blockquote class="font-headline-md lg:font-headline-lg text-headline-md lg:text-headline-lg text-text-primary tracking-tight font-medium leading-snug">
        “Technology can become a medium for education, culture, research, and meaningful human experiences.”
      </blockquote>
<div class="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent my-space-xs"></div>
<div class="flex flex-col items-center">
<span class="font-label-code text-label-code text-text-primary uppercase tracking-widest">VIKY ADITAMA</span>
<span class="font-body-sm text-body-sm text-text-secondary">Sumenep, East Java • Strategic Creed</span>
</div>
</div>
<!-- Editorial Accent Decors -->
<div class="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:block font-label-code text-label-code text-text-secondary/40 [writing-mode:vertical-rl] tracking-widest">
      KEMUT ARCHIVE 2024 • MANIFESTO RECORD
    </div>
<div class="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block font-label-code text-label-code text-text-secondary/40 [writing-mode:vertical-rl] tracking-widest">
      COMPUTATIONAL HUMANITIES // V4.2
    </div>
</section>
<!-- SECTION 4: SELECTED WORKS (CINEMATIC SHOWCASE) -->
<section class="w-full px-gutter lg:px-margin py-24 bg-surface-raised" id="selected-works">
<div class="flex flex-col space-y-space-xl">
<!-- Section Title Header -->
<div class="flex flex-col md:flex-row md:items-end justify-between gap-space-sm pb-space-sm">
<div class="flex flex-col">
<span class="font-label-caps text-label-caps uppercase text-primary tracking-widest">FLAGSHIP INITIATIVES</span>
<h2 class="font-headline-lg text-headline-lg text-text-primary font-bold mt-1 tracking-tight">SELECTED WORKS</h2>
</div>
<a class="inline-flex items-center gap-space-xs font-button-text text-button-text text-text-secondary hover:text-primary transition-colors" href="#">
<span>View Complete Portfolio Index</span>
<span class="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
${projects.map((p, i) => {
  const isEven = i % 2 !== 0;
  return `
<!-- Case ${i + 1}: ${p.title} -->
<div class="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center rounded-2xl bg-surface-elevated p-space-lg shadow-xl">
${!isEven ? `
<div class="lg:col-span-7 relative group rounded-xl overflow-hidden aspect-[16/10] bg-surface-base">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="${p.title}" src="${p.cover_image_url || ''}"/>
<div class="absolute inset-0 bg-gradient-to-t from-surface-base/80 via-transparent to-transparent"></div>
<div class="absolute top-4 left-4 px-3 py-1 rounded bg-surface-raised/90 backdrop-blur-md">
<span class="font-label-caps text-label-caps text-primary tracking-wider uppercase">${(p.tags || [])[0] || 'Project'}</span>
</div>
</div>
<div class="lg:col-span-5 flex flex-col space-y-space-md">
` : `
<div class="lg:col-span-5 order-2 lg:order-1 flex flex-col space-y-space-md">
`}
<div class="flex items-center gap-space-sm">
<span class="font-label-code text-label-code ${isEven ? 'text-secondary' : 'text-primary'}">CASE STUDY // 0${i + 1}</span>
<span class="w-1.5 h-1.5 rounded-full bg-text-secondary"></span>
<span class="font-label-code text-label-code text-text-secondary">${p.year || ''}</span>
</div>
<h3 class="font-headline-md text-headline-md text-text-primary font-bold">${p.title}</h3>
<p class="font-body-md text-body-md text-text-secondary">
  ${p.summary || p.description || ''}
</p>
<div class="flex flex-col space-y-space-xs text-sm">
<div class="flex items-center justify-between py-1.5">
<span class="font-label-code text-label-code text-text-secondary">Role</span>
<span class="font-button-text text-button-text text-text-primary">${p.role || '-'}</span>
</div>
<div class="flex items-center justify-between py-1.5">
<span class="font-label-code text-label-code text-text-secondary">Tech Stack</span>
<span class="font-label-code text-label-code ${isEven ? 'text-secondary' : 'text-primary'}">${(p.tech_stack || []).join(' • ')}</span>
</div>
</div>
<div class="flex items-center gap-space-md pt-2">
<a class="inline-flex items-center gap-space-xs px-5 py-2.5 rounded-lg ${isEven ? 'bg-secondary hover:bg-secondary-fixed' : 'bg-primary hover:bg-primary-fixed'} text-surface-base font-button-text text-button-text font-semibold transition-colors" href="/work/${p.slug}">
<span>View Case Study</span>
<span class="material-symbols-outlined text-[16px]">visibility</span>
</a>
${p.external_url ? `
<a class="inline-flex items-center gap-space-xs px-5 py-2.5 rounded-lg bg-surface-raised text-text-primary font-button-text text-button-text hover:bg-surface-container-high transition-colors" href="${p.external_url}" target="_blank">
<span>Visit Project</span>
<span class="material-symbols-outlined text-[16px] text-text-secondary">open_in_new</span>
</a>
` : ''}
</div>
</div>
${isEven ? `
<div class="lg:col-span-7 order-1 lg:order-2 relative group rounded-xl overflow-hidden aspect-[16/10] bg-surface-base">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="${p.title}" src="${p.cover_image_url || ''}"/>
<div class="absolute inset-0 bg-gradient-to-t from-surface-base/80 via-transparent to-transparent"></div>
<div class="absolute top-4 right-4 px-3 py-1 rounded bg-surface-raised/90 backdrop-blur-md">
<span class="font-label-caps text-label-caps text-secondary tracking-wider uppercase">${(p.tags || [])[0] || 'Project'}</span>
</div>
</div>
` : ''}
</div>
`;
}).join('\n')}
</div>
</section>
<!-- SECTION 5: JOURNEY PREVIEW & RESEARCH HIGHLIGHTS -->
<section class="w-full px-gutter lg:px-margin py-24 bg-surface-base">
<div class="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
<!-- Left: Timeline Journey Preview -->
<div class="lg:col-span-6 flex flex-col space-y-space-lg">
<div class="flex flex-col space-y-space-xs">
<span class="font-label-caps text-label-caps uppercase text-primary tracking-widest">RECORD OF EXCELLENCE</span>
<h2 class="font-headline-md text-headline-md text-text-primary font-bold">LEADERSHIP &amp; HONORS</h2>
<p class="font-body-md text-body-md text-text-secondary">
            Continuous milestones across public service, academic honors, and community mobilization.
          </p>
</div>
<div class="flex flex-col space-y-space-md">
${achievements.map((a, i) => `
<div class="p-space-md rounded-xl bg-surface-raised shadow-md hover:bg-surface-elevated transition-colors flex items-start gap-space-md">
<div class="p-2.5 rounded-lg ${i % 2 === 0 ? 'bg-primary/10 text-primary' : 'bg-secondary/15 text-secondary'} shrink-0 mt-0.5">
<span class="material-symbols-outlined text-[20px]">${a.icon || 'military_tech'}</span>
</div>
<div class="flex flex-col space-y-1">
<div class="flex items-center gap-2">
<span class="font-label-code text-label-code ${i % 2 === 0 ? 'text-primary' : 'text-secondary'} font-semibold">${a.date ? new Date(a.date).getFullYear() : ''}</span>
<span class="font-label-caps text-label-caps uppercase text-text-secondary">• ${a.category || 'HONOR'}</span>
</div>
<h4 class="font-headline-sm text-headline-sm text-text-primary">${a.title}</h4>
<p class="font-body-sm text-body-sm text-text-secondary">
                ${a.description || ''}
              </p>
</div>
</div>
`).join('\n')}
</div>
</div>
<!-- Right: Research Publications & Scholarly Papers -->
<div class="lg:col-span-6 flex flex-col space-y-space-lg">
<div class="flex flex-col space-y-space-xs">
<span class="font-label-caps text-label-caps uppercase text-secondary tracking-widest">SCHOLARLY INQUIRY</span>
<h2 class="font-headline-md text-headline-md text-text-primary font-bold">RESEARCH HIGHLIGHTS</h2>
<p class="font-body-md text-body-md text-text-secondary">
            Peer-reviewed empirical studies addressing pedagogical tech integration, cognitive resonance, and digital heritage.
          </p>
</div>
<div class="flex flex-col space-y-space-md">
${research.map((r, i) => `
<div class="p-space-lg rounded-xl bg-surface-raised shadow-md hover:bg-surface-elevated transition-colors flex flex-col space-y-space-sm">
<div class="flex items-center justify-between">
<span class="font-label-code text-label-code text-secondary">${r.doi ? 'DOI: ' + r.doi : r.category || 'Research'}</span>
<span class="px-2 py-0.5 rounded bg-surface-container-high font-label-caps text-label-caps text-text-secondary uppercase">${r.category || 'Publication'}</span>
</div>
<h4 class="font-headline-sm text-headline-sm text-text-primary hover:text-primary transition-colors cursor-pointer">
              ${r.title}
            </h4>
<p class="font-body-sm text-body-sm text-text-secondary">
              ${r.abstract || ''}
            </p>
<div class="flex items-center justify-between pt-2">
<span class="font-label-code text-label-code text-text-secondary">${r.journal || ''} • ${r.publication_date ? r.publication_date.split('-')[0] : ''}</span>
${r.pdf_url ? `
<a class="inline-flex items-center gap-1 font-label-code text-label-code text-primary hover:underline" href="${r.pdf_url}" target="_blank">
<span>Read PDF</span>
<span class="material-symbols-outlined text-[14px]">picture_as_pdf</span>
</a>
` : r.external_url ? `
<a class="inline-flex items-center gap-1 font-label-code text-label-code text-primary hover:underline" href="${r.external_url}" target="_blank">
<span>Read Online</span>
<span class="material-symbols-outlined text-[14px]">open_in_new</span>
</a>
` : ''}
</div>
</div>
`).join('\n')}
</div>
</div>
</div>
</section>
<!-- SECTION 6: ASK VIKY AI INTERACTIVE BANNER -->
<section class="w-full px-gutter lg:px-margin py-20 bg-surface-raised" id="ai-interface">
<div class="relative rounded-2xl overflow-hidden bg-surface-elevated p-space-lg lg:p-space-xl shadow-2xl">
<!-- Ambient photonic glow behind AI block -->
<div class="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-secondary/10 blur-[100px] pointer-events-none"></div>
<div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
<div class="lg:col-span-7 flex flex-col space-y-space-md">
<div class="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-secondary/10 text-secondary w-fit">
<span class="material-symbols-outlined text-[16px]">psychology</span>
<span class="font-label-caps text-label-caps uppercase tracking-wider">Semantic Knowledge Base</span>
</div>
<h2 class="font-headline-md text-headline-md text-text-primary font-bold">
            Curious about Viky's work, research, projects, or journey?
          </h2>
<p class="font-body-md text-body-md text-text-secondary max-w-xl">
            Ask Viky AI directly. Trained on Viky Aditama's academic papers, cultural initiatives, open-source repositories, and pedagogical philosophy.
          </p>
<!-- Prompt Suggestions -->
<div class="flex flex-wrap gap-2 pt-1">
<button class="px-3 py-1.5 rounded-lg bg-surface-raised text-text-secondary font-label-code text-label-code hover:text-text-primary hover:bg-surface-container-high transition-colors" onclick="document.querySelector('#ai-query').value = this.innerText.replace(/[“”]/g, '')" type="button">
              “Tell me about Madulingo”
            </button>
<button class="px-3 py-1.5 rounded-lg bg-surface-raised text-text-secondary font-label-code text-label-code hover:text-text-primary hover:bg-surface-container-high transition-colors" onclick="document.querySelector('#ai-query').value = this.innerText.replace(/[“”]/g, '')" type="button">
              “What is Viky's vision?”
            </button>
<button class="px-3 py-1.5 rounded-lg bg-surface-raised text-text-secondary font-label-code text-label-code hover:text-text-primary hover:bg-surface-container-high transition-colors" onclick="document.querySelector('#ai-query').value = this.innerText.replace(/[“”]/g, '')" type="button">
              “How does Astrova utilize WebGL?”
            </button>
</div>
<!-- Interactive Input Mockup -->
<div class="flex flex-col sm:flex-row items-center gap-space-xs pt-2">
<div class="relative w-full">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary text-[20px]">search</span>
<input class="w-full bg-surface-raised text-text-primary pl-10 pr-4 py-3 rounded-lg font-body-md text-body-md placeholder:text-text-secondary/60 focus:outline-none focus:ring-1 focus:ring-secondary transition-all" id="ai-query" placeholder="Inquire about research methods, tech stack, or cultural work..." type="text"/>
</div>
<button class="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-6 py-3 rounded-lg bg-secondary text-surface-base font-button-text text-button-text font-semibold hover:bg-secondary-fixed transition-colors shrink-0 shadow-[0_0_20px_rgba(124,122,255,0.25)]" onclick="handleAiInquiry()" type="button">
<span>Ask Viky AI</span>
<span class="material-symbols-outlined text-[18px]">bolt</span>
</button>
</div>
<div class="hidden text-secondary font-label-code text-label-code" id="ai-status-msg">
            Synthesizing intelligence from Viky's 2024-2026 Archive...
          </div>
</div>
<div class="lg:col-span-5 flex justify-center">
<div class="w-full max-w-sm p-space-md rounded-xl bg-surface-raised shadow-inner flex flex-col space-y-space-sm">
<div class="flex items-center justify-between">
<div class="flex items-center gap-2">
<span class="w-2 h-2 rounded-full bg-secondary"></span>
<span class="font-label-code text-label-code text-text-primary">SYSTEM TELEMETRY</span>
</div>
<span class="font-label-caps text-label-caps text-secondary">ACTIVE MODEL</span>
</div>
<div class="p-3 rounded bg-surface-base flex flex-col space-y-1 font-label-code text-label-code text-text-secondary">
<span class="text-primary">&gt; Core Model: Neural-LLM-Identity v4</span>
<span class="text-text-secondary">&gt; Knowledge Sources: 14 Papers • 6 Repos</span>
<span class="text-text-secondary">&gt; Semantic Accuracy: 99.4%</span>
<span class="text-secondary">&gt; Response Latency: 120ms</span>
</div>
<p class="font-body-sm text-body-sm text-text-secondary italic">
              “Ask me about the architecture behind Madulingo or how Viky preserves Madurese phonemes.”
            </p>
</div>
</div>
</div>
</div>
</section>
<!-- SECTION 7: FINAL CINEMATIC CTA -->
<section class="w-full px-gutter lg:px-margin py-32 bg-surface-base relative overflow-hidden">
<div class="max-w-4xl mx-auto flex flex-col items-center text-center space-y-space-md">
<span class="font-label-caps text-label-caps uppercase text-primary tracking-widest">NEXT HORIZON</span>
<h2 class="font-display-hero-mobile lg:font-display-hero text-display-hero-mobile lg:text-display-hero text-text-primary tracking-tighter uppercase font-bold leading-tight">
        LET’S BUILD SOMETHING MEANINGFUL.
      </h2>
<p class="font-body-lg text-body-lg text-text-secondary max-w-xl">
        Available for research collaborations, cultural consulting, enterprise technical architecture, and guest pedagogical lecturing.
      </p>
<div class="flex flex-wrap items-center justify-center gap-space-md pt-4">
<a class="inline-flex items-center gap-space-xs px-8 py-4 rounded-lg bg-primary text-surface-base font-button-text text-button-text font-bold hover:bg-primary-fixed transition-all duration-200 shadow-[0_4px_24px_rgba(200,169,107,0.3)] hover:-translate-y-0.5" href="mailto:contact@vikyaditama.com">
<span>Get in Touch</span>
<span class="material-symbols-outlined text-[18px]">send</span>
</a>
<a class="inline-flex items-center gap-space-xs px-8 py-4 rounded-lg bg-surface-raised text-text-primary font-button-text text-button-text hover:bg-surface-elevated transition-colors" href="#">
<span>Download Curriculum Vitae</span>
<span class="material-symbols-outlined text-[18px] text-text-secondary">download</span>
</a>
</div>
<!-- Geolocation Coordinates Signature -->
<div class="pt-space-lg flex items-center gap-space-xs font-label-code text-label-code text-text-secondary">
<span class="material-symbols-outlined text-[16px] text-primary">location_on</span>
<span>SUMENEP • 7.0084° S, 113.8640° E • EAST JAVA, INDONESIA</span>
</div>
</div>
</section>
<!-- Interactive script for inline micro-interactions -->

</div>`;
}
