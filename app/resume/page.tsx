import StaticHtml from "@/components/StaticHtml";
import { getResumeHtml } from "@/content/resume";
import { supabaseServer } from "@/lib/supabaseServer";

export const dynamic = "force-dynamic";

export default async function Page() {
  const supabase = supabaseServer();
  const { data: profile } = await supabase.from("profile").select("*").single();

  const html = getResumeHtml(profile);
  
  return <StaticHtml html={html} />;
}
