"use client";

import { useEffect, useState } from "react";

type ResumeEntry = {
  id?: string;
  section: string;
  title: string;
  organization: string;
  date_range: string;
  description: string;
  sort_order: number;
  status: "draft" | "published";
};

const SECTIONS = ["Executive Leadership", "Diplomatic & Cultural Mandates", "Academic Credentials", "Other"];

const EMPTY: ResumeEntry = {
  section: "Executive Leadership",
  title: "",
  organization: "",
  date_range: "",
  description: "",
  sort_order: 0,
  status: "published",
};

const inputCls = "w-full bg-[#17191F] border border-[#272A31] rounded-lg px-3 py-2.5 text-[#F5F3EE] text-sm focus:outline-none focus:border-[#6366f1]";

export default function AdminResumePage() {
  const [items, setItems] = useState<ResumeEntry[]>([]);
  const [form, setForm] = useState<ResumeEntry>(EMPTY);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function load() {
    setLoading(true);
    const res = await fetch("/api/admin/resume");
    if (res.status === 401) { window.location.href = "/admin/login"; return; }
    const { data } = await res.json();
    setItems(data || []);
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  async function handleSave() {
    setSaving(true);
    setError("");
    const method = editingId ? "PUT" : "POST";
    const payload = editingId ? { ...form, id: editingId } : form;
    const res = await fetch("/api/admin/resume", {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    setSaving(false);
    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      setError(body.error || "Save failed");
      return;
    }
    setForm(EMPTY);
    setEditingId(null);
    load();
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this resume entry?")) return;
    await fetch("/api/admin/resume", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    load();
  }

  function startEdit(a: ResumeEntry) {
    setForm(a);
    setEditingId(a.id || null);
  }

  return (
    <div className="w-full px-gutter lg:px-margin py-space-xl grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
      {/* List */}
      <div>
        <h1 className="font-headline-sm text-headline-sm text-text-primary mb-space-md">
          Resume Entries ({items.length})
        </h1>
        {loading ? (
          <p className="text-text-secondary text-sm">Loading...</p>
        ) : items.length === 0 ? (
          <p className="text-text-secondary text-sm">No resume entries yet. Add one →</p>
        ) : (
          <div className="flex flex-col gap-2">
            {items.map((a) => (
              <div key={a.id} className="flex flex-col gap-1 bg-surface-raised border border-border-hairline rounded-lg px-4 py-3">
                <div className="flex items-center justify-between">
                  <p className="text-text-primary text-sm font-medium">{a.title}</p>
                  <div className="flex gap-3">
                    <button onClick={() => startEdit(a)} className="text-[#6366f1] text-xs hover:underline">Edit</button>
                    <button onClick={() => handleDelete(a.id!)} className="text-red-400 text-xs hover:underline">Delete</button>
                  </div>
                </div>
                <p className="text-text-secondary text-xs">{a.organization} · {a.section}</p>
                <p className="text-text-secondary text-xs">{a.date_range} · Order: {a.sort_order}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Form */}
      <div className="bg-surface-raised border border-border-hairline rounded-xl p-space-lg flex flex-col gap-3 h-fit">
        <h2 className="font-headline-sm text-headline-sm text-text-primary">
          {editingId ? "Edit Resume Entry" : "New Resume Entry"}
        </h2>
        
        <select className={inputCls} value={form.section} onChange={(e) => setForm({ ...form, section: e.target.value })}>
          <option value="" disabled>Select Section</option>
          {SECTIONS.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
        
        <input className={inputCls} placeholder="Title (e.g. Chief Executive Officer)" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
        <input className={inputCls} placeholder="Organization / Subtitle (e.g. KEMUT Foundation)" value={form.organization} onChange={(e) => setForm({ ...form, organization: e.target.value })} />
        <input className={inputCls} placeholder="Date Range / Highlight (e.g. 2024 - PRESENT)" value={form.date_range} onChange={(e) => setForm({ ...form, date_range: e.target.value })} />
        <textarea className={inputCls} placeholder="Description" rows={4} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
        
        <div className="grid grid-cols-2 gap-3">
          <input className={inputCls} type="number" placeholder="Sort order" value={form.sort_order} onChange={(e) => setForm({ ...form, sort_order: Number(e.target.value) })} />
          <select className={inputCls} value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value as any })}>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
          </select>
        </div>
        
        {error && <p className="text-red-400 text-sm">{error}</p>}
        
        <div className="flex gap-3 mt-2">
          <button onClick={handleSave} disabled={saving} className="px-4 py-2 rounded-lg bg-primary text-surface-base font-semibold text-sm disabled:opacity-60">
            {saving ? "Saving..." : editingId ? "Update" : "Create"}
          </button>
          {editingId && (
            <button onClick={() => { setForm(EMPTY); setEditingId(null); }} className="px-4 py-2 rounded-lg bg-surface-elevated text-text-primary text-sm">
              Cancel
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
