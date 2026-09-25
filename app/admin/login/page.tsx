"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { supabaseBrowser } from "@/lib/supabaseClient";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const supabase = supabaseBrowser();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      setError(error.message);
      return;
    }
    router.push("/admin");
    router.refresh();
  }

  return (
    <div className="w-full px-gutter py-space-xl flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm flex flex-col gap-space-md bg-surface-raised border border-border-hairline rounded-xl p-space-lg"
      >
        <h1 className="font-headline-sm text-headline-sm text-text-primary">
          Admin Sign In
        </h1>
        <input
          type="email"
          required
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-surface-elevated border border-border-hairline rounded-lg px-4 py-3 text-text-primary"
        />
        <input
          type="password"
          required
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-surface-elevated border border-border-hairline rounded-lg px-4 py-3 text-text-primary"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 rounded-lg bg-primary text-surface-base font-button-text text-button-text font-semibold disabled:opacity-60"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
        {error && <p className="font-body-sm text-body-sm text-error">{error}</p>}
        <p className="font-body-sm text-body-sm text-text-secondary">
          Create the admin account once in Supabase → Authentication → Users.
        </p>
      </form>
    </div>
  );
}
