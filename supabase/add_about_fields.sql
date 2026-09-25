-- Jalankan SQL ini di Supabase SQL Editor untuk menambah kolom khusus halaman About di tabel Profile

ALTER TABLE profile
ADD COLUMN IF NOT EXISTS about_image_url text,
ADD COLUMN IF NOT EXISTS about_headline text,
ADD COLUMN IF NOT EXISTS about_quote text,
ADD COLUMN IF NOT EXISTS about_biography text;

-- Isi dengan data default dari template sebelumnya jika masih kosong
UPDATE profile
SET 
  about_image_url = COALESCE(about_image_url, 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUvJcsmDy9UbhQn59Wj2wJxhQ9KQxOoudyCqtJV-sJPARuozRSmXWz_KiWLLYwphNMxZfXXHnFZGmtalZ8Xao5DY3gSTgdlfwcNeI8iYjdC7B7uYdZdPthBw_VTaLbw2uGOBv272S4Vs54WAqSk9QSVT9spMReQsvwHcGvpGJ9sn1DFaLGH8tp2TsFs-sQt3D8usA0tZCnGFJhk8dbCiIQt_HXmyQECJjzv4KBTC6TygLb9TYNGjs34g'),
  about_headline = COALESCE(about_headline, 'At the Intersection of Heritage and Innovation.'),
  about_quote = COALESCE(about_quote, '"Code is not culturally neutral. If our ancestral idioms are absent from computational models, we surrender our future narrative to systems that do not know us."'),
  about_biography = COALESCE(about_biography, 'Born and raised amidst the windswept coastal landscapes of Sumenep, Madura, Viky Aditama’s intellectual orientation was shaped by the ancient cadence of Madurese poetry, seafaring fortitude, and the vibrant oral histories preserved through local folklore. Sumenep—famed for its centuries-old palace and profound literary customs—instilled in him a fierce devotion to memory and cultural continuity.

Recognizing early that regional tongues and ancestral narratives risk obsolescence within modern algorithmic paradigms, he deliberately shifted his attention toward engineering. Rather than treating computer science as merely commercial infrastructure, he approached it as a canvas for linguistic preservation and pedagogical uplift.

His academic journey at Universitas PGRI Sumenep provided the pedagogical bedrock. Here, pedagogical theory encountered systems programming: how do children truly learn in digitally underprivileged regions? How can complex distributed systems lower barrier thresholds for vernacular education?

Today, Viky leads foundational civic and educational institutions. Through the establishment of the KEMUT Foundation and its companion journalistic publication KEMUT News, he bridges grassroots educational interventions with advanced open-web architectures. His work rejects the false dichotomy between tradition and technical audacity—positioning culture as the primary catalyst for technical invention.')
WHERE id IS NOT NULL;
