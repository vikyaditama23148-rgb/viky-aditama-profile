import StaticHtml from "@/components/StaticHtml";
import { getResearchHtml } from "@/content/research";
import { supabaseServer } from "@/lib/supabaseServer";

export const dynamic = "force-dynamic";

export default async function Page() {
  const supabase = supabaseServer();
  const { data: research } = await supabase
    .from("research_publications")
    .select("*")
    .eq("status", "published")
    .order("sort_order", { ascending: true });

  const html = getResearchHtml(research || []);
  return <StaticHtml html={html} />;
}
