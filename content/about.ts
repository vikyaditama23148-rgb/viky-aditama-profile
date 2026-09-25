export function getAboutHtml(profile: any) {
  const headline = profile?.about_headline || 'At the Intersection of <span class="text-primary italic">Heritage</span> and <span class="text-secondary font-light">Innovation</span>.';
  const imageUrl = profile?.about_image_url || 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUvJcsmDy9UbhQn59Wj2wJxhQ9KQxOoudyCqtJV-sJPARuozRSmXWz_KiWLLYwphNMxZfXXHnFZGmtalZ8Xao5DY3gSTgdlfwcNeI8iYjdC7B7uYdZdPthBw_VTaLbw2uGOBv272S4Vs54WAqSk9QSVT9spMReQsvwHcGvpGJ9sn1DFaLGH8tp2TsFs-sQt3D8usA0tZCnGFJhk8dbCiIQt_HXmyQECJjzv4KBTC6TygLb9TYNGjs34g';
  const quote = profile?.about_quote || '"Code is not culturally neutral. If our ancestral idioms are absent from computational models, we surrender our future narrative to systems that do not know us."';
  
  // Format biography string into paragraphs
  const rawBiography = profile?.about_biography || `Born and raised amidst the windswept coastal landscapes of Sumenep, Madura...`;
  const biographyHtml = rawBiography
    .split('\n')
    .filter((p: string) => p.trim() !== '')
    .map((p: string) => `<p>${p.trim()}</p>`)
    .join('\n');

  return `<div class="flex flex-col w-full">
<!-- SECTION 1: HEADER & PHILOSOPHICAL OVERTURE -->
<section class="relative w-full px-gutter lg:px-margin py-space-xl overflow-hidden">
<!-- Atmospheric Ambient Photonic Radiance -->
<div class="absolute -top-32 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none"></div>
<div class="absolute top-1/2 -left-20 w-[420px] h-[420px] bg-secondary/10 rounded-full blur-[160px] pointer-events-none"></div>
<div class="relative z-10 max-w-7xl mx-auto flex flex-col gap-space-lg">
<div class="flex flex-wrap items-center justify-between gap-space-sm pb-space-sm">
<div class="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-elevated text-primary font-label-caps text-label-caps uppercase tracking-widest shadow-sm">
<span class="material-symbols-outlined text-[14px]">auto_stories</span>
<span>Archive Reference: BIO-02 // PHILOSOPHY</span>
</div>
<div class="flex items-center gap-space-sm font-label-code text-label-code text-text-secondary">
<span>SUMENEP, MADURA</span>
<span class="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
<span>SYNCHRONIZED // 2025</span>
</div>
</div>
<div class="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end">
<div class="lg:col-span-8 flex flex-col gap-space-md">
<span class="font-label-caps text-label-caps text-secondary uppercase tracking-[0.25em]">Biography &amp; Philosophy</span>
<h1 class="font-headline-lg text-headline-lg text-text-primary tracking-tight text-balance">
            ${headline}
          </h1>
</div>
<div class="lg:col-span-4 flex flex-col gap-space-xs lg:pl-space-md">
<p class="font-body-lg text-body-lg text-on-surface-variant font-normal leading-relaxed">
            Educator, researcher, full-stack engineer, and cultural ambassador dedicated to meaningful human-centered technology.
          </p>
</div>
</div>
</div>
</section>
<!-- SECTION 2: ASYMMETRIC TWO-COLUMN PORTRAIT & BIOGRAPHICAL NARRATIVE -->
<section class="relative w-full px-gutter lg:px-margin py-space-xl bg-surface-raised">
<div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
<!-- Visual Column: Cinematic Portrait Presentation -->
<div class="lg:col-span-5 flex flex-col gap-space-md lg:sticky lg:top-28">
<div class="relative group rounded-xl overflow-hidden bg-surface-elevated shadow-xl">
<div class="relative aspect-[4/5] w-full overflow-hidden">
<img class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" data-alt="Viky Aditama Portrait" src="${imageUrl}"/>
<div class="absolute inset-0 bg-gradient-to-t from-surface-base via-surface-base/30 to-transparent"></div>
<!-- Live Cultural Status Inset -->
<div class="absolute top-4 left-4 right-4 flex justify-between items-center">
<span class="px-space-xs py-1 rounded bg-surface-base/80 backdrop-blur-md font-label-caps text-label-caps text-primary tracking-wider uppercase">
                HONORARY EMISSARY
              </span>
<span class="px-space-xs py-1 rounded bg-surface-elevated/80 backdrop-blur-md font-label-code text-label-code text-text-primary">
                INDEX: VA-ID-01
              </span>
</div>
<!-- Credentials Overlay Badge Block -->
<div class="absolute bottom-4 left-4 right-4 flex flex-col gap-space-xs p-space-md rounded-lg bg-surface-elevated/90 backdrop-blur-md shadow-lg">
<div class="flex items-center gap-space-xs">
<span class="material-symbols-outlined text-primary text-[18px]">verified</span>
<span class="font-headline-sm text-[16px] text-text-primary">Viky Aditama, S.Pd.</span>
</div>
<div class="flex flex-col gap-1 text-on-surface-variant font-body-sm text-body-sm">
<span class="flex items-center gap-1.5">
<span class="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Duta Budaya Madura (2024–2026)
                </span>
<span class="flex items-center gap-1.5">
<span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  Duta Kampus Universitas PGRI Sumenep (2024–2026)
                </span>
</div>
</div>
</div>
</div>
<!-- Archival Metric Callout -->
<div class="grid grid-cols-2 gap-space-sm">
<div class="p-space-md rounded-lg bg-surface-elevated flex flex-col justify-between">
<span class="font-label-caps text-label-caps text-text-secondary uppercase">Territorial Focus</span>
<span class="font-headline-sm text-headline-sm text-primary mt-1">Madura</span>
<span class="font-body-sm text-body-sm text-text-secondary mt-1">Linguistic Heritage</span>
</div>
<div class="p-space-md rounded-lg bg-surface-elevated flex flex-col justify-between">
<span class="font-label-caps text-label-caps text-text-secondary uppercase">Systems Developed</span>
<span class="font-headline-sm text-headline-sm text-secondary mt-1">14+ Tools</span>
<span class="font-body-sm text-body-sm text-text-secondary mt-1">Vernacular EdTech</span>
</div>
</div>
</div>
<!-- Narrative Text Column -->
<div class="lg:col-span-7 flex flex-col gap-space-lg">
<div class="flex flex-col gap-space-sm">
<span class="font-label-caps text-label-caps text-primary tracking-widest uppercase">The Genesis</span>
<h2 class="font-headline-md text-headline-md text-text-primary">
            Rooted in Maritime Soil, Forging Computational Futures.
          </h2>
</div>
<div class="flex flex-col gap-space-md font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
${biographyHtml}
</div>
<!-- Pull Quote Block -->
<div class="relative p-space-lg rounded-xl bg-surface-elevated overflow-hidden shadow-lg">
<div class="absolute -right-8 -bottom-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
<span class="material-symbols-outlined text-primary/40 text-[48px] block mb-2">format_quote</span>
<p class="font-headline-sm text-headline-sm text-text-primary italic leading-snug">
            ${quote}
          </p>
<div class="mt-space-md flex items-center justify-between font-label-code text-label-code text-text-secondary">
<span>KEYNOTE ADDRESS, SUMENEP CULTURAL SYMPOSIUM</span>
<span class="text-primary">2024</span>
</div>
</div>
<!-- Interactive Quote Switcher / Principle Tabs -->
<div class="p-space-md rounded-xl bg-surface-container flex flex-col gap-space-sm" id="principles-module">
<div class="flex items-center justify-between pb-space-xs">
<span class="font-label-caps text-label-caps text-secondary uppercase tracking-widest">Guiding Axioms</span>
<div class="flex gap-1" id="axiom-dots">
<span class="w-2 h-2 rounded-full bg-primary cursor-pointer" onclick="switchAxiom(0)"></span>
<span class="w-2 h-2 rounded-full bg-surface-container-high cursor-pointer" onclick="switchAxiom(1)"></span>
<span class="w-2 h-2 rounded-full bg-surface-container-high cursor-pointer" onclick="switchAxiom(2)"></span>
</div>
</div>
<div class="min-h-[70px] flex items-center">
<p class="font-body-md text-body-md text-text-primary transition-opacity duration-300" id="axiom-text">
              "1. Vernacular First: Design architectural systems that respect regional semantic integrity before globalization."
            </p>
</div>
</div>
</div>
</div>
</section>
<!-- SECTION 3: THE FOUR DIMENSIONS -->
<section class="relative w-full px-gutter lg:px-margin py-space-xl overflow-hidden">
<div class="max-w-7xl mx-auto flex flex-col gap-space-xl">
<div class="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div class="flex flex-col gap-space-xs max-w-2xl">
<div class="inline-flex items-center gap-space-xs font-label-caps text-label-caps text-secondary uppercase tracking-widest">
<span class="material-symbols-outlined text-[16px]">widgets</span>
<span>Multidisciplinary Matrix</span>
</div>
<h2 class="font-headline-lg text-headline-lg text-text-primary">
            The Four Dimensions of Practice
          </h2>
</div>
<p class="font-body-md text-body-md text-text-secondary max-w-sm">
          A coherent synthesis of heritage preservation, empirical learning methods, software craft, and academic inquiry.
        </p>
</div>
<!-- Bento Grid Layout for 4 Dimensions -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-md">
<!-- Dimension 01: Cultural Advocacy -->
<div class="lg:col-span-7 p-space-lg rounded-xl bg-surface-raised flex flex-col justify-between group hover:bg-surface-elevated transition-all duration-300 shadow-md">
<div class="flex flex-col gap-space-md">
<div class="flex items-center justify-between">
<span class="font-label-code text-label-code text-primary px-space-xs py-1 rounded bg-primary/10">01 // HERITAGE PRESERVATION</span>
<span class="material-symbols-outlined text-primary text-[28px] group-hover:scale-110 transition-transform">temple_buddhist</span>
</div>
<h3 class="font-headline-md text-headline-md text-text-primary">Cultural Advocacy &amp; Linguistic Immersion</h3>
<p class="font-body-md text-body-md text-on-surface-variant">
              Targeted revitalization of the endangered Madurese regional lexicon, syntactic structures, and ancestral folklore through interactive digital archives, youth cultural mobilization, and digital field recordings across Madura's regal districts.
            </p>
</div>
<div class="pt-space-lg flex flex-wrap gap-2">
<span class="font-label-caps text-label-caps px-space-xs py-1 rounded bg-surface-container text-text-secondary">Madurese Orthography</span>
<span class="font-label-caps text-label-caps px-space-xs py-1 rounded bg-surface-container text-text-secondary">Folklore Soundscapes</span>
<span class="font-label-caps text-label-caps px-space-xs py-1 rounded bg-surface-container text-text-secondary">Youth Emissary Network</span>
</div>
</div>
<!-- Dimension 02: Pedagogical Philosophy -->
<div class="lg:col-span-5 p-space-lg rounded-xl bg-surface-raised flex flex-col justify-between group hover:bg-surface-elevated transition-all duration-300 shadow-md">
<div class="flex flex-col gap-space-md">
<div class="flex items-center justify-between">
<span class="font-label-code text-label-code text-secondary px-space-xs py-1 rounded bg-secondary/10">02 // PEDAGOGY</span>
<span class="material-symbols-outlined text-secondary text-[28px] group-hover:scale-110 transition-transform">school</span>
</div>
<h3 class="font-headline-md text-headline-md text-text-primary">Pedagogical Philosophy</h3>
<p class="font-body-md text-body-md text-on-surface-variant">
              Re-conceptualizing classrooms as open technological laboratories. Designing accessible, low-bandwidth instructional frameworks that grant equal pedagogical agency to rural pupils.
            </p>
</div>
<div class="pt-space-lg flex flex-wrap gap-2">
<span class="font-label-caps text-label-caps px-space-xs py-1 rounded bg-surface-container text-text-secondary">Low-Bandwidth Learning</span>
<span class="font-label-caps text-label-caps px-space-xs py-1 rounded bg-surface-container text-text-secondary">Interactive Simulation</span>
</div>
</div>
<!-- Dimension 03: Technological Craft -->
<div class="lg:col-span-5 p-space-lg rounded-xl bg-surface-raised flex flex-col justify-between group hover:bg-surface-elevated transition-all duration-300 shadow-md">
<div class="flex flex-col gap-space-md">
<div class="flex items-center justify-between">
<span class="font-label-code text-label-code text-secondary px-space-xs py-1 rounded bg-secondary/10">03 // COMPUTING</span>
<span class="material-symbols-outlined text-secondary text-[28px] group-hover:scale-110 transition-transform">terminal</span>
</div>
<h3 class="font-headline-md text-headline-md text-text-primary">Technological Craft</h3>
<p class="font-body-md text-body-md text-on-surface-variant">
              Relentless pursuit of architectural discipline: Clean decoupled architectures, interactive WebGL/3D environments, robust multi-tenant backends, and strict WCAG accessibility protocols.
            </p>
</div>
<div class="pt-space-lg flex flex-wrap gap-2">
<span class="font-label-caps text-label-caps px-space-xs py-1 rounded bg-surface-container text-text-secondary">Distributed Systems</span>
<span class="font-label-caps text-label-caps px-space-xs py-1 rounded bg-surface-container text-text-secondary">TypeScript / Go</span>
<span class="font-label-caps text-label-caps px-space-xs py-1 rounded bg-surface-container text-text-secondary">WebGL Graphic Pipelines</span>
</div>
</div>
<!-- Dimension 04: Academic Rigor -->
<div class="lg:col-span-7 p-space-lg rounded-xl bg-surface-raised flex flex-col justify-between group hover:bg-surface-elevated transition-all duration-300 shadow-md">
<div class="flex flex-col gap-space-md">
<div class="flex items-center justify-between">
<span class="font-label-code text-label-code text-primary px-space-xs py-1 rounded bg-primary/10">04 // RESEARCH INQUIRY</span>
<span class="material-symbols-outlined text-primary text-[28px] group-hover:scale-110 transition-transform">science</span>
</div>
<h3 class="font-headline-md text-headline-md text-text-primary">Research &amp; Academic Rigor</h3>
<p class="font-body-md text-body-md text-on-surface-variant">
              Empirical exploration into student retention through gamified vernacular micro-learning modules. Published scientific inquiries analyzing the structural preservation of regional Austronesian dialects through AI transformer architectures.
            </p>
</div>
<div class="pt-space-lg flex flex-wrap gap-2">
<span class="font-label-caps text-label-caps px-space-xs py-1 rounded bg-surface-container text-text-secondary">Linguistic NLP</span>
<span class="font-label-caps text-label-caps px-space-xs py-1 rounded bg-surface-container text-text-secondary">Cognitive Retention Metrics</span>
<span class="font-label-caps text-label-caps px-space-xs py-1 rounded bg-surface-container text-text-secondary">Empirical Peer-Reviewed Trials</span>
</div>
</div>
</div>
</div>
</section>
<!-- SECTION 4: LEADERSHIP & INSTITUTIONAL INITIATIVES -->
<section class="relative w-full px-gutter lg:px-margin py-space-xl bg-surface-raised">
<div class="max-w-7xl mx-auto flex flex-col gap-space-xl">
<div class="flex flex-col gap-space-xs">
<span class="font-label-caps text-label-caps text-primary uppercase tracking-widest">Civic Ecosystem</span>
<h2 class="font-headline-lg text-headline-lg text-text-primary">
          Leadership &amp; Institutional Initiatives
        </h2>
<p class="font-body-lg text-body-lg text-text-secondary max-w-2xl">
          Directing foundational initiatives engineered to democratize civic literacy and accelerate youth agency across regional Indonesia.
        </p>
</div>
<div class="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
<!-- Initiative Card 1: KEMUT Foundation -->
<div class="rounded-xl bg-surface-elevated p-space-lg flex flex-col justify-between shadow-xl relative overflow-hidden group">
<div class="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/10 transition-all duration-500"></div>
<div class="flex flex-col gap-space-md relative z-10">
<div class="flex items-center justify-between">
<div class="flex items-center gap-space-xs">
<span class="w-2.5 h-2.5 rounded-full bg-primary animate-ping"></span>
<span class="font-label-caps text-label-caps text-primary uppercase tracking-widest">FOUNDATION EXECUTIVE</span>
</div>
<span class="font-label-code text-label-code text-text-secondary">EST. 2023 // SUMENEP</span>
</div>
<div class="flex flex-col gap-space-xs">
<h3 class="font-headline-md text-headline-md text-text-primary">KEMUT Foundation</h3>
<p class="font-label-caps text-label-caps text-secondary uppercase tracking-wider">Chief Executive Officer (CEO)</p>
</div>
<p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Leading a grassroots non-profit apparatus centered on regional talent cultivation, vernacular micro-scholarships, and rural technological literacy. Overseeing curriculum transformation across multi-village learning pods in Eastern Java and Madura.
            </p>
<!-- Foundation Visual Accent / Metrics -->
<div class="p-space-md rounded-lg bg-surface-container flex items-center justify-between mt-space-sm">
<div class="flex flex-col">
<span class="font-headline-sm text-headline-sm text-text-primary">1,200+</span>
<span class="font-label-code text-label-code text-text-secondary">Youth Mentored</span>
</div>
<div class="h-8 w-px bg-surface-container-high"></div>
<div class="flex flex-col">
<span class="font-headline-sm text-headline-sm text-text-primary">18</span>
<span class="font-label-code text-label-code text-text-secondary">Learning Pods</span>
</div>
<div class="h-8 w-px bg-surface-container-high"></div>
<div class="flex flex-col">
<span class="font-headline-sm text-headline-sm text-primary">100%</span>
<span class="font-label-code text-label-code text-text-secondary">Free Access</span>
</div>
</div>
</div>
<div class="pt-space-lg flex items-center justify-between relative z-10">
<span class="font-label-code text-label-code text-text-secondary">Community Education &amp; Youth Empowerment</span>
<div class="flex items-center gap-1 text-primary font-button-text text-button-text">
<span>Foundation Ledger</span>
<span class="material-symbols-outlined text-[16px]">arrow_forward</span>
</div>
</div>
</div>
<!-- Initiative Card 2: KEMUT News -->
<div class="rounded-xl bg-surface-elevated p-space-lg flex flex-col justify-between shadow-xl relative overflow-hidden group">
<div class="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl pointer-events-none group-hover:bg-secondary/10 transition-all duration-500"></div>
<div class="flex flex-col gap-space-md relative z-10">
<div class="flex items-center justify-between">
<div class="flex items-center gap-space-xs">
<span class="w-2.5 h-2.5 rounded-full bg-secondary"></span>
<span class="font-label-caps text-label-caps text-secondary uppercase tracking-widest">EDITORIAL LEADERSHIP</span>
</div>
<span class="font-label-code text-label-code text-text-secondary">INDEPENDENT PRESS // PUBLISHING</span>
</div>
<div class="flex flex-col gap-space-xs">
<h3 class="font-headline-md text-headline-md text-text-primary">KEMUT News</h3>
<p class="font-label-caps text-label-caps text-primary uppercase tracking-wider">Editor-in-Chief (Pemimpin Redaktur)</p>
</div>
<p class="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Directing editorial policy, investigative integrity, and computational journalism across digital channels. Mentoring young student journalists to report with rigour, champion factual accountability, and articulate community narratives with fearless clarity.
            </p>
<!-- News Visual Accent / Coverage Metrics -->
<div class="p-space-md rounded-lg bg-surface-container flex items-center justify-between mt-space-sm">
<div class="flex flex-col">
<span class="font-headline-sm text-headline-sm text-text-primary">340+</span>
<span class="font-label-code text-label-code text-text-secondary">Essays &amp; Articles</span>
</div>
<div class="h-8 w-px bg-surface-container-high"></div>
<div class="flex flex-col">
<span class="font-headline-sm text-headline-sm text-text-primary">45</span>
<span class="font-label-code text-label-code text-text-secondary">Active Writers</span>
</div>
<div class="h-8 w-px bg-surface-container-high"></div>
<div class="flex flex-col">
<span class="font-headline-sm text-headline-sm text-secondary">Zero-Ad</span>
<span class="font-label-code text-label-code text-text-secondary">Press Integrity</span>
</div>
</div>
</div>
<div class="pt-space-lg flex items-center justify-between relative z-10">
<span class="font-label-code text-label-code text-text-secondary">Youth Journalism &amp; Critical Literacy</span>
<div class="flex items-center gap-1 text-secondary font-button-text text-button-text">
<span>Editorial Desk</span>
<span class="material-symbols-outlined text-[16px]">arrow_forward</span>
</div>
</div>
</div>
</div>
<!-- Supporting Image Mosaic / On-Ground Documentary -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-space-md pt-space-md">
<div class="relative rounded-lg overflow-hidden h-52 group">
<img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Documentary photography of a modern youth education workshop in Madura with students gathered around low-cost digital terminals and laptops. Deep shadows, ambient warm indoor incandescent lighting, thoughtful concentrated expressions." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCr_NpfRYo3wR_yt4ZQfWKwUx7oIPYrs6X7yc1Mh72-3NBBEGy0qhlB9OqavyFXuqhHmv_c-a79EHutLaq3I4MNI8-3DD2nHzO-pNhNMqmr1JpaqKEfAD1nIflnZ0b65bDGK2_1l_WMvRjMT__DQMvzzDQeUcDOmXmXBuf324tkm4Ak3rLf-lDuF_JlQi8esDRc5CJUv_NbvVTra36cSFjCtMT9SUn20fs8KlE8DLtqICQGNxf70OyNhg"/>
<div class="absolute inset-0 bg-gradient-to-t from-surface-base via-surface-base/20 to-transparent"></div>
<span class="absolute bottom-3 left-3 font-label-caps text-label-caps text-text-primary uppercase tracking-wider">FIELD REPORT: SUMENEP POD</span>
</div>
<div class="relative rounded-lg overflow-hidden h-52 group">
<img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Editorial close up of a cultural ambassador lecture in an academic hall in East Java. Traditional wooden lectern, archival scrolls, soft cinematic lighting, gold and obsidian color grade." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQjVMuEedw4XlKsQ1-Ax6E9bShjrwzJXEq9GLFfasQ_owBqnN5Ei0LVids_VHUM-phso9WjbNF4_X1FjIn1wuKvxvM8bcriyVYjnz1Dizy--b2iyvp6E_mhOSvvLpw8zvGTmpYutpvwqupZ0SDvOQtiGV1XAwql_Hl1ZYHPJWfVaFUZDLvci4-5VZ5xIYDq4vvT87dP6DyhZgRn4vwhI0iYiumSInpFMTzSo3EKYkku2lX14w-3w0Bqw"/>
<div class="absolute inset-0 bg-gradient-to-t from-surface-base via-surface-base/20 to-transparent"></div>
<span class="absolute bottom-3 left-3 font-label-caps text-label-caps text-text-primary uppercase tracking-wider">CULTURAL DISCOURSE: 2024</span>
</div>
<div class="relative rounded-lg overflow-hidden h-52 group">
<img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Close-up architectural photograph of hands working over technical manuscripts and code terminals showing language parser logic. Subtle cyan and amber backlights, refined editorial composition." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwxAtuMW7N8bBxdmKOXtAj5rCZA4-T7qkfm7749qICpsS_U3EUQyh7zOVQ8P7PrfPh-03nCLPRfkAd3DIgab-HmKk_wNJPkOnnC7HPch34v206oDCcziz0cm6oNo9OaGg6K7lePVmDMYB3tEL1bWBRQETA9Z8axd7fouJ1mglIL2kwvin3Y0-OvCQtkhI1WIABZx0M2B6eWWAbzdI4rcWf3Mks5qu_N9PItrs9Y306OkQ-192FgHpeYA"/>
<div class="absolute inset-0 bg-gradient-to-t from-surface-base via-surface-base/20 to-transparent"></div>
<span class="absolute bottom-3 left-3 font-label-caps text-label-caps text-text-primary uppercase tracking-wider">LINGUISTIC RESEARCH LAB</span>
</div>
</div>
</div>
</section>
<!-- SECTION 5: VISION STATEMENT & CLOSING CTA -->
<section class="relative w-full px-gutter lg:px-margin py-space-xl overflow-hidden">
<!-- Concentrated Golden-Indigo Atmospheric Backlight -->
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-full blur-[140px] pointer-events-none"></div>
<div class="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center gap-space-lg">
<div class="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-elevated text-primary font-label-caps text-label-caps uppercase tracking-widest shadow-sm">
<span class="material-symbols-outlined text-[16px]">public</span>
<span>The Generational Horizon</span>
</div>
<h2 class="font-headline-lg text-headline-lg md:text-[54px] md:leading-[64px] text-text-primary tracking-tight max-w-4xl text-balance">
        "Creating generational impact across digital and physical borders."
      </h2>
<p class="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
        Whether designing sovereign linguistic archives, engineering high-throughput learning platforms, or stewarding community education, the goal remains uncompromising: tools that dignify human culture.
      </p>
<!-- Primary Action Cluster -->
<div class="flex flex-col sm:flex-row items-center gap-space-md pt-space-sm w-full sm:w-auto">
<a class="w-full sm:w-auto px-space-lg py-space-md rounded-lg bg-primary text-surface-base font-button-text text-button-text flex items-center justify-center gap-space-xs hover:bg-[#D8BE8A] hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-primary/20" data-path="work" href="#">
<span>View Selected Works</span>
<span class="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
<a class="w-full sm:w-auto px-space-lg py-space-md rounded-lg bg-surface-elevated text-text-primary font-button-text text-button-text flex items-center justify-center gap-space-xs hover:bg-surface-container-high transition-all duration-300 shadow-md" data-path="resume" href="#">
<span class="material-symbols-outlined text-[18px] text-secondary">description</span>
<span>Download Curriculum Vitae</span>
</a>
</div>
<!-- Live Archival Stamp -->
<div class="pt-space-xl flex flex-wrap items-center justify-center gap-space-md font-label-code text-label-code text-text-secondary">
<span class="flex items-center gap-1.5">
<span class="w-2 h-2 rounded-full bg-primary"></span>
          AUTH: VIKY ADITAMA
        </span>
<span class="text-surface-variant">•</span>
<span>STAMP: REV_2025.04</span>
<span class="text-surface-variant">•</span>
<span>LOCATION: 7.0075° S, 113.8617° E (SUMENEP)</span>
</div>
</div>
</section>
<!-- Inline Micro-interaction Script for Axiom Switcher -->

</div>`;

}