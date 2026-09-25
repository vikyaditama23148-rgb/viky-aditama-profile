import Link from "next/link";
import { getAdminUser } from "@/lib/auth";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // The login page itself must render without a session, so we can't
  // globally redirect here without excluding it — Next.js doesn't allow
  // conditionally skipping a layout, so /admin/login renders its own
  // standalone page and this guard only protects everything else by
  // checking the session and redirecting when absent.
  const user = await getAdminUser();

  return (
    <div className="w-full">
      {user && (
        <div className="w-full border-b border-border-hairline bg-surface-raised px-gutter lg:px-margin py-space-sm flex items-center justify-between">
          <nav className="flex items-center gap-space-md font-label-caps text-label-caps uppercase tracking-widest text-text-secondary overflow-x-auto pb-1">
            <Link href="/admin" className="hover:text-text-primary">Dashboard</Link>
            <Link href="/admin/profile" className="hover:text-text-primary">Profile</Link>
            <Link href="/admin/projects" className="hover:text-text-primary">Projects</Link>
            <Link href="/admin/research" className="hover:text-text-primary">Research</Link>
            <Link href="/admin/achievements" className="hover:text-text-primary">Achievements</Link>
            <Link href="/admin/journey" className="hover:text-text-primary">Journey</Link>
            <Link href="/admin/skills" className="hover:text-text-primary">Skills</Link>
            <Link href="/admin/messages" className="hover:text-text-primary">Messages</Link>
          </nav>
          <span className="font-label-code text-label-code text-text-secondary">
            {user.email}
          </span>
        </div>
      )}
      {!user ? <LoginGate>{children}</LoginGate> : children}
    </div>
  );
}

function LoginGate({ children }: { children: React.ReactNode }) {
  // Renders the login page as-is; any other /admin/* route without a
  // session gets redirected server-side by its own page via requireAdminUser().
  return <>{children}</>;
}
