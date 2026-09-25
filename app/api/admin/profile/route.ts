import { NextRequest, NextResponse } from "next/server";
import { getAdminUser } from "@/lib/auth";
import { supabaseAdmin } from "@/lib/supabaseServer";

async function guard() {
  const user = await getAdminUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  return null;
}

export async function GET() {
  const unauthorized = await guard();
  if (unauthorized) return unauthorized;
  const supabase = supabaseAdmin();
  const { data, error } = await supabase.from("profile").select("*").single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ data });
}

export async function PUT(req: NextRequest) {
  const unauthorized = await guard();
  if (unauthorized) return unauthorized;
  const body = await req.json();
  const supabase = supabaseAdmin();
  const { data: existing } = await supabase.from("profile").select("id").single();
  if (!existing) return NextResponse.json({ error: "Profile not found" }, { status: 404 });
  const { data, error } = await supabase
    .from("profile")
    .update({ ...body, updated_at: new Date().toISOString() })
    .eq("id", existing.id)
    .select()
    .single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ data });
}
