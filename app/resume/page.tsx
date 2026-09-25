import StaticHtml from "@/components/StaticHtml";
import { getResumeHtml } from "@/content/resume";
import { supabaseServer } from "@/lib/supabaseServer";

export const dynamic = "force-dynamic";

export default async function Page() {
  const supabase = supabaseServer();
  const [{ data: profile }, { data: entries }] = await Promise.all([
    supabase.from("profile").select("*").single(),
    supabase.from("resume_entries").select("*").eq("status", "published").order("sort_order", { ascending: true }),
  ]);

  const html = getResumeHtml(profile, entries || []);
  
  return <StaticHtml html={html} />;
}
