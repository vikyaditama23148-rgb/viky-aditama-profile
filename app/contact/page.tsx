"use client";

import { useState, FormEvent } from "react";

const CATEGORIES = ["Collaboration", "Research", "Press", "General"];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    category: "General",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong.");
      }
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "", category: "General" });
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong.");
    }
  }

  return (
    <div className="w-full px-gutter lg:px-margin py-space-xl">
      <div className="max-w-3xl mx-auto flex flex-col gap-space-lg">
        <div className="flex flex-col gap-space-xs">
          <span className="font-label-caps text-label-caps uppercase text-primary tracking-widest">
            Contact &amp; Collaboration
          </span>
          <h1 className="font-display-hero-mobile lg:font-headline-lg text-display-hero-mobile lg:text-headline-lg text-text-primary tracking-tighter uppercase font-bold">
            Let&rsquo;s build something meaningful.
          </h1>
          <p className="font-body-lg text-body-lg text-text-secondary max-w-xl">
            Available for research collaborations, cultural consulting,
            enterprise technical architecture, and guest pedagogical
            lecturing.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-space-md bg-surface-raised border border-border-hairline rounded-xl p-space-lg"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
            <Field label="Name">
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="input"
                placeholder="Your name"
              />
            </Field>
            <Field label="Email">
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="input"
                placeholder="you@example.com"
              />
            </Field>
          </div>

          <Field label="Category">
            <select
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="input"
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Subject">
            <input
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className="input"
              placeholder="What is this about?"
            />
          </Field>

          <Field label="Message">
            <textarea
              required
              rows={6}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="input resize-none"
              placeholder="Tell me about your project or inquiry..."
            />
          </Field>

          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center justify-center gap-space-xs px-6 py-3.5 rounded-lg bg-primary text-surface-base font-button-text text-button-text font-semibold hover:bg-primary-fixed transition-all duration-200 shadow-[0_4px_20px_rgba(200,169,107,0.25)] disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "sent" && (
            <p className="font-body-sm text-body-sm text-primary">
              Message sent — thank you. I&rsquo;ll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="font-body-sm text-body-sm text-error">{errorMsg}</p>
          )}
        </form>
      </div>

      <style>{`
        .input {
          width: 100%;
          background: var(--surface-elevated, #17191F);
          border: 1px solid #272A31;
          border-radius: 0.5rem;
          padding: 0.75rem 1rem;
          color: #F5F3EE;
          font-size: 15px;
        }
        .input:focus {
          outline: none;
          border-color: #C8A96B;
        }
      `}</style>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-space-xs">
      <span className="font-label-caps text-label-caps uppercase text-text-secondary tracking-widest">
        {label}
      </span>
      {children}
    </label>
  );
}
