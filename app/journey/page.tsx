import StaticHtml from "@/components/StaticHtml";
import { getJourneyHtml } from "@/content/journey";
import { supabaseServer } from "@/lib/supabaseServer";

export const dynamic = "force-dynamic";

export default async function Page() {
  const supabase = supabaseServer();
  const { data: journey } = await supabase
    .from("journey_entries")
    .select("*")
    .eq("status", "published")
    .order("start_date", { ascending: false });

  const html = getJourneyHtml(journey || []);
  return <StaticHtml html={html} />;
}
