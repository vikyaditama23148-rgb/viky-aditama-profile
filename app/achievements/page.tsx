import StaticHtml from "@/components/StaticHtml";
import { getAchievementsHtml } from "@/content/achievements";
import { supabaseServer } from "@/lib/supabaseServer";

export const dynamic = "force-dynamic";

export default async function Page() {
  const supabase = supabaseServer();
  const { data: achievements } = await supabase
    .from("achievements")
    .select("*")
    .eq("status", "published")
    .order("sort_order", { ascending: true });

  const html = getAchievementsHtml(achievements || []);
  return <StaticHtml html={html} />;
}
