import StaticHtml from "@/components/StaticHtml";
import { getSkillsHtml } from "@/content/skills";
import { supabaseServer } from "@/lib/supabaseServer";

export const dynamic = "force-dynamic";

export default async function Page() {
  const supabase = supabaseServer();
  const { data: skills } = await supabase
    .from("skills")
    .select("*")
    .order("sort_order", { ascending: true });

  const html = getSkillsHtml(skills || []);
  return <StaticHtml html={html} />;
}
