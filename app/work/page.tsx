import StaticHtml from "@/components/StaticHtml";
import { getWorkHtml } from "@/content/work";
import { supabaseServer } from "@/lib/supabaseServer";

export const dynamic = "force-dynamic";

export default async function Page() {
  const supabase = supabaseServer();
  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .eq("status", "published")
    .order("sort_order", { ascending: true });

  const html = getWorkHtml(projects || []);
  return <StaticHtml html={html} />;
}
