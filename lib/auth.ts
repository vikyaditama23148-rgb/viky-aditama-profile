import { supabaseServer } from "./supabaseServer";

/**
 * Returns the currently signed-in Supabase user for admin routes, or null.
 * The admin dashboard relies entirely on Supabase Auth (email/password) —
 * create the admin account once in the Supabase dashboard under
 * Authentication -> Users, then sign in at /admin/login.
 */
export async function getAdminUser() {
  const supabase = supabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}

export async function requireAdminUser() {
  const user = await getAdminUser();
  if (!user) {
    throw new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }
  return user;
}
