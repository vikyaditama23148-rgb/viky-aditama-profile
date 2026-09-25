import StaticHtml from "@/components/StaticHtml";
import { getAboutHtml } from "@/content/about";
import { supabaseServer } from "@/lib/supabaseServer";

export const dynamic = "force-dynamic";

export default async function Page() {
  const supabase = supabaseServer();
  const { data: profile } = await supabase.from("profile").select("*").single();

  const html = getAboutHtml(profile);

  return <StaticHtml html={html} />;
}
