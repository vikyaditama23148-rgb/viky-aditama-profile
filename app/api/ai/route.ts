import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseServer";
import { askViky } from "@/lib/gemini";

export async function POST(req: NextRequest) {
  const { question, sessionId } = await req.json().catch(() => ({}));

  if (!question || typeof question !== "string") {
    return NextResponse.json({ error: "A question is required." }, { status: 400 });
  }

  const supabase = supabaseAdmin();

  // Pull grounding context from the knowledge base (falls back to a
  // baseline bio if the table hasn't been seeded yet).
  const { data: kb } = await supabase
    .from("ai_knowledge_base")
    .select("title, content")
    .limit(20);

  const context =
    kb && kb.length > 0
      ? kb.map((k) => `## ${k.title}\n${k.content}`).join("\n\n")
      : `Viky Aditama is an educator, researcher, technologist and cultural advocate
based in Sumenep, East Java, Indonesia. He is Duta Budaya Madura (2024-2026),
Duta Kampus Universitas PGRI Sumenep (2024-2026), CEO of KEMUT Foundation,
and Editor-in-Chief of KEMUT News. His signature projects are Madulingo (an
educational game teaching Madurese language and culture) and Astrova (a
web-based interactive astronomy and solar-system learning platform). He also
publishes educational research in academic journals. (Populate the
ai_knowledge_base table via the admin dashboard for richer, up-to-date answers.)`;

  try {
    const { answer, error } = await askViky(question, context);

    if (error) {
      return NextResponse.json({ answer });
    }

    try {
      await supabase.from("ai_chat_logs").insert({
        session_id: sessionId || null,
        question,
        answer,
      });
    } catch (logErr) {
      console.error("ai_chat_logs insert error:", logErr);
    }

    return NextResponse.json({ answer });
  } catch (err) {
    console.error("ai route error:", err);
    return NextResponse.json(
      { answer: "The assistant is temporarily unavailable. Please try again shortly." },
      { status: 200 }
    );
  }
}
