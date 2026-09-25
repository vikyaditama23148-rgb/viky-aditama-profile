-- Jalankan SQL ini di Supabase SQL Editor untuk membuat semua bucket storage
-- yang dibutuhkan untuk upload gambar di Admin Panel.

-- 1. Buat semua bucket sebagai public
INSERT INTO storage.buckets (id, name, public) VALUES
  ('avatars',      'avatars',      true),
  ('images',       'images',       true),
  ('projects',     'projects',     true),
  ('research',     'research',     true),
  ('achievements', 'achievements', true)
ON CONFLICT (id) DO NOTHING;

-- 2. Hapus policy lama jika ada (agar tidak duplikat)
DROP POLICY IF EXISTS "Public read avatars"      ON storage.objects;
DROP POLICY IF EXISTS "Public read images"       ON storage.objects;
DROP POLICY IF EXISTS "Public read projects"     ON storage.objects;
DROP POLICY IF EXISTS "Public read research"     ON storage.objects;
DROP POLICY IF EXISTS "Public read achievements" ON storage.objects;
DROP POLICY IF EXISTS "Service insert avatars"      ON storage.objects;
DROP POLICY IF EXISTS "Service insert images"       ON storage.objects;
DROP POLICY IF EXISTS "Service insert projects"     ON storage.objects;
DROP POLICY IF EXISTS "Service insert research"     ON storage.objects;
DROP POLICY IF EXISTS "Service insert achievements" ON storage.objects;
DROP POLICY IF EXISTS "Service delete avatars"      ON storage.objects;
DROP POLICY IF EXISTS "Service delete images"       ON storage.objects;
DROP POLICY IF EXISTS "Service delete projects"     ON storage.objects;
DROP POLICY IF EXISTS "Service delete research"     ON storage.objects;
DROP POLICY IF EXISTS "Service delete achievements" ON storage.objects;

-- 3. Buat policy read publik
CREATE POLICY "Public read avatars"      ON storage.objects FOR SELECT USING (bucket_id = 'avatars');
CREATE POLICY "Public read images"       ON storage.objects FOR SELECT USING (bucket_id = 'images');
CREATE POLICY "Public read projects"     ON storage.objects FOR SELECT USING (bucket_id = 'projects');
CREATE POLICY "Public read research"     ON storage.objects FOR SELECT USING (bucket_id = 'research');
CREATE POLICY "Public read achievements" ON storage.objects FOR SELECT USING (bucket_id = 'achievements');

-- 4. Buat policy insert (upload)
CREATE POLICY "Service insert avatars"      ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'avatars');
CREATE POLICY "Service insert images"       ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'images');
CREATE POLICY "Service insert projects"     ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'projects');
CREATE POLICY "Service insert research"     ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'research');
CREATE POLICY "Service insert achievements" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'achievements');

-- 5. Buat policy delete
CREATE POLICY "Service delete avatars"      ON storage.objects FOR DELETE USING (bucket_id = 'avatars');
CREATE POLICY "Service delete images"       ON storage.objects FOR DELETE USING (bucket_id = 'images');
CREATE POLICY "Service delete projects"     ON storage.objects FOR DELETE USING (bucket_id = 'projects');
CREATE POLICY "Service delete research"     ON storage.objects FOR DELETE USING (bucket_id = 'research');
CREATE POLICY "Service delete achievements" ON storage.objects FOR DELETE USING (bucket_id = 'achievements');
