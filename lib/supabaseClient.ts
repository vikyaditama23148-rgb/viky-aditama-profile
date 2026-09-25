import { createBrowserClient } from "@supabase/ssr";

/**
 * Browser-side Supabase client. Uses the public anon key only — safe to
 * ship to the client. Row Level Security policies (see supabase/schema.sql)
 * restrict it to reading published content and inserting contact messages.
 */
export function supabaseBrowser() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
