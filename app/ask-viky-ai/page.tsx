"use client";

import { useState, useRef, FormEvent, useEffect } from "react";

type Msg = { role: "user" | "assistant"; text: string };

const SUGGESTIONS = [
  "What is Madulingo?",
  "Tell me about Astrova's technology stack.",
  "What does Viky research?",
  "How can I collaborate with Viky?",
];

export default function AskVikyAiPage() {
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "assistant",
      text: "Hi, I'm Viky AI — ask me about Viky's projects, research, or how to get in touch.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function send(question: string) {
    if (!question.trim() || loading) return;
    setMessages((m) => [...m, { role: "user", text: question }]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
      const data = await res.json();
      setMessages((m) => [
        ...m,
        { role: "assistant", text: data.answer || "No response received." },
      ]);
    } catch {
      setMessages((m) => [
        ...m,
        { role: "assistant", text: "Something went wrong reaching the assistant." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    send(input);
  }

  return (
    <div className="w-full px-gutter lg:px-margin py-space-xl">
      <div className="max-w-3xl mx-auto flex flex-col gap-space-md">
        <div className="flex flex-col gap-space-xs">
          <span className="font-label-caps text-label-caps uppercase text-secondary tracking-widest inline-flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-[16px]">auto_awesome</span>
            Ask Viky AI
          </span>
          <h1 className="font-headline-lg-mobile lg:font-headline-lg text-headline-lg-mobile lg:text-headline-lg text-text-primary tracking-tight font-bold">
            Ask about Viky&rsquo;s work, research &amp; projects.
          </h1>
        </div>

        <div className="flex flex-col gap-space-sm border border-border-hairline rounded-xl bg-surface-raised p-space-md h-[440px] overflow-y-auto">
          {messages.map((m, i) => (
            <div
              key={i}
              className={
                m.role === "user"
                  ? "self-end max-w-[80%] rounded-lg bg-primary text-surface-base px-4 py-2.5 font-body-sm text-body-sm"
                  : "self-start max-w-[80%] rounded-lg bg-surface-elevated text-text-primary px-4 py-2.5 font-body-sm text-body-sm"
              }
            >
              {m.text}
            </div>
          ))}
          {loading && (
            <div className="self-start max-w-[80%] rounded-lg bg-surface-elevated text-text-secondary px-4 py-2.5 font-body-sm text-body-sm italic">
              Thinking...
            </div>
          )}
          <div ref={endRef} />
        </div>

        <div className="flex flex-wrap gap-space-xs">
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              onClick={() => send(s)}
              className="font-label-code text-label-code text-text-secondary bg-surface-elevated px-3 py-1.5 rounded-full hover:text-text-primary hover:bg-surface-container-high transition-colors"
            >
              {s}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex items-center gap-space-sm">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question..."
            className="flex-1 bg-surface-elevated border border-border-hairline rounded-lg px-4 py-3 text-text-primary font-body-md text-body-md focus:outline-none focus:border-primary"
          />
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-space-xs px-6 py-3 rounded-lg bg-primary text-surface-base font-button-text text-button-text font-semibold hover:bg-primary-fixed transition-all disabled:opacity-60"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
