import { redirect } from "next/navigation";
import Link from "next/link";
import { getAdminUser } from "@/lib/auth";
import { supabaseAdmin } from "@/lib/supabaseServer";

export default async function AdminDashboard() {
  const user = await getAdminUser();
  if (!user) redirect("/admin/login");

  const supabase = supabaseAdmin();
  const [{ count: projects }, { count: research }, { count: messages }, { count: newMessages }] =
    await Promise.all([
      supabase.from("projects").select("*", { count: "exact", head: true }),
      supabase.from("research_publications").select("*", { count: "exact", head: true }),
      supabase.from("messages").select("*", { count: "exact", head: true }),
      supabase.from("messages").select("*", { count: "exact", head: true }).eq("status", "new"),
    ]);

  const cards = [
    { label: "Projects", value: projects ?? 0, href: "/admin/projects" },
    { label: "Research Publications", value: research ?? 0, href: "/admin/research" },
    { label: "New Messages", value: newMessages ?? 0, href: "/admin/messages" },
    { label: "Total Messages", value: messages ?? 0, href: "/admin/messages" },
  ];

  return (
    <div className="w-full px-gutter lg:px-margin py-space-xl">
      <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-text-primary font-bold mb-space-lg">
        Admin Dashboard
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
        {cards.map((c) => (
          <Link
            key={c.label}
            href={c.href}
            className="flex flex-col gap-space-xs bg-surface-raised border border-border-hairline rounded-xl p-space-md hover:border-primary transition-colors"
          >
            <span className="font-label-caps text-label-caps uppercase text-text-secondary tracking-widest">
              {c.label}
            </span>
            <span className="font-display-hero-mobile text-display-hero-mobile text-primary font-bold">
              {c.value}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
