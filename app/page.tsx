import StaticHtml from "@/components/StaticHtml";
import { getHomeHtml } from "@/content/home";
import { supabaseServer } from "@/lib/supabaseServer";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const supabase = supabaseServer();
  const [
    { data: profile },
    { data: projects },
    { data: research },
    { data: achievements }
  ] = await Promise.all([
    supabase.from("profile").select("*").single(),
    supabase.from("projects").select("*").eq("featured", true).eq("status", "published").order("sort_order", { ascending: true }),
    supabase.from("research_publications").select("*").eq("featured", true).eq("status", "published").order("sort_order", { ascending: true }),
    supabase.from("achievements").select("*").eq("status", "published").order("sort_order", { ascending: true }).limit(3)
  ]);

  const html = getHomeHtml(profile, projects || [], research || [], achievements || []);
  return <StaticHtml html={html} />;
}
