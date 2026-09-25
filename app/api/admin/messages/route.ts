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
  const { data, error } = await supabase
    .from("messages")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ data });
}

export async function PUT(req: NextRequest) {
  const unauthorized = await guard();
  if (unauthorized) return unauthorized;
  const { id, status } = await req.json();
  if (!id || !status) return NextResponse.json({ error: "id and status are required" }, { status: 400 });
  const supabase = supabaseAdmin();
  const { data, error } = await supabase
    .from("messages")
    .update({ status })
    .eq("id", id)
    .select()
    .single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ data });
}

export async function DELETE(req: NextRequest) {
  const unauthorized = await guard();
  if (unauthorized) return unauthorized;
  const { id } = await req.json();
  const supabase = supabaseAdmin();
  const { error } = await supabase.from("messages").delete().eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
