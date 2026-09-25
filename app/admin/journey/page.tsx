"use client";

import { useEffect, useState } from "react";

type Journey = {
  id?: string;
  title: string;
  organization: string;
  description: string;
  start_date: string;
  end_date: string;
  category: string;
  sort_order: number;
  status: "draft" | "published";
};

const CATEGORIES = ["Education", "Work", "Volunteer", "Award", "Publication", "Other"];

const EMPTY: Journey = {
  title: "",
  organization: "",
  description: "",
  start_date: "",
  end_date: "",
  category: "Work",
  sort_order: 0,
  status: "published",
};

const inputCls = "w-full bg-[#17191F] border border-[#272A31] rounded-lg px-3 py-2.5 text-[#F5F3EE] text-sm focus:outline-none focus:border-[#6366f1]";

export default function AdminJourneyPage() {
  const [items, setItems] = useState<Journey[]>([]);
  const [form, setForm] = useState<Journey>(EMPTY);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function load() {
    setLoading(true);
    const res = await fetch("/api/admin/journey");
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
    const res = await fetch("/api/admin/journey", {
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
    if (!confirm("Delete this journey entry?")) return;
    await fetch("/api/admin/journey", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    load();
  }

  return (
    <div className="w-full px-gutter lg:px-margin py-space-xl grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
      {/* List */}
      <div>
        <h1 className="font-headline-sm text-headline-sm text-text-primary mb-space-md">
          Journey / Timeline ({items.length})
        </h1>
        {loading ? (
          <p className="text-text-secondary text-sm">Loading...</p>
        ) : items.length === 0 ? (
          <p className="text-text-secondary text-sm">No entries yet. Add one →</p>
        ) : (
          <div className="flex flex-col gap-2">
            {items.map((j) => (
              <div key={j.id} className="flex items-center justify-between bg-surface-raised border border-border-hairline rounded-lg px-4 py-3">
                <div>
                  <p className="text-text-primary text-sm font-medium">{j.title}</p>
                  <p className="text-text-secondary text-xs">{j.organization} · {j.category} · {j.start_date}{j.end_date ? ` – ${j.end_date}` : ""}</p>
                </div>
                <div className="flex gap-3">
                  <button onClick={() => { setForm(j); setEditingId(j.id || null); }} className="text-[#6366f1] text-xs hover:underline">Edit</button>
                  <button onClick={() => handleDelete(j.id!)} className="text-red-400 text-xs hover:underline">Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Form */}
      <div className="bg-surface-raised border border-border-hairline rounded-xl p-space-lg flex flex-col gap-3 h-fit">
        <h2 className="font-headline-sm text-headline-sm text-text-primary">
          {editingId ? "Edit Entry" : "New Entry"}
        </h2>
        <input className={inputCls} placeholder="Title / Role" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
        <input className={inputCls} placeholder="Organization / Institution" value={form.organization} onChange={(e) => setForm({ ...form, organization: e.target.value })} />
        <textarea className={inputCls} placeholder="Description" rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-text-secondary text-xs mb-1 block">Start Date</label>
            <input className={inputCls} type="date" value={form.start_date} onChange={(e) => setForm({ ...form, start_date: e.target.value })} />
          </div>
          <div>
            <label className="text-text-secondary text-xs mb-1 block">End Date (kosongkan jika masih berlangsung)</label>
            <input className={inputCls} type="date" value={form.end_date} onChange={(e) => setForm({ ...form, end_date: e.target.value })} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <select className={inputCls} value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
            {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <input className={inputCls} type="number" placeholder="Sort order" value={form.sort_order} onChange={(e) => setForm({ ...form, sort_order: Number(e.target.value) })} />
        </div>
        <select className={inputCls} value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value as any })}>
          <option value="published">Published</option>
          <option value="draft">Draft</option>
        </select>
        {error && <p className="text-red-400 text-sm">{error}</p>}
        <div className="flex gap-3">
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
