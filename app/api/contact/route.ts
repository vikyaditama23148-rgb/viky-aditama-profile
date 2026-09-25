import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseServer";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);

  if (!body?.name || !body?.email || !body?.message) {
    return NextResponse.json(
      { error: "Name, email and message are required." },
      { status: 400 }
    );
  }

  const supabase = supabaseAdmin();
  const { error } = await supabase.from("messages").insert({
    name: body.name,
    email: body.email,
    subject: body.subject || null,
    message: body.message,
    category: body.category || "General",
  });

  if (error) {
    console.error("contact insert error", error);
    return NextResponse.json(
      { error: "Could not save your message. Please try again." },
      { status: 500 }
    );
  }

  // Optional: send an email notification here (e.g. via Resend) using
  // process.env.CONTACT_NOTIFICATION_EMAIL.

  return NextResponse.json({ ok: true });
}
