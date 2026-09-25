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
    .from("achievements")
    .select("*")
    .order("sort_order", { ascending: true });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ data });
}

export async function POST(req: NextRequest) {
  const unauthorized = await guard();
  if (unauthorized) return unauthorized;
  const body = await req.json();
  const supabase = supabaseAdmin();
  const { data, error } = await supabase.from("achievements").insert(body).select().single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ data });
}

export async function PUT(req: NextRequest) {
  const unauthorized = await guard();
  if (unauthorized) return unauthorized;
  const body = await req.json();
  if (!body.id) return NextResponse.json({ error: "id is required" }, { status: 400 });
  const supabase = supabaseAdmin();
  const { id, ...rest } = body;
  const { data, error } = await supabase
    .from("achievements")
    .update(rest)
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
  const { error } = await supabase.from("achievements").delete().eq("id", id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ ok: true });
}
