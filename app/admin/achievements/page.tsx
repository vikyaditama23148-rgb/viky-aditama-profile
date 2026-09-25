"use client";

import { useEffect, useState } from "react";
import ImageUploadField from "@/components/ImageUploadField";

type Achievement = {
  id?: string;
  title: string;
  issuer: string;
  description: string;
  date: string;
  category: string;
  icon: string;
  sort_order: number;
  status: "draft" | "published";
};

const CATEGORIES = ["Cultural", "Academic", "Leadership", "Technology", "Other"];

const EMPTY: Achievement = {
  title: "",
  issuer: "",
  description: "",
  date: "",
  category: "Academic",
  icon: "",
  sort_order: 0,
  status: "published",
};

const inputCls = "w-full bg-[#17191F] border border-[#272A31] rounded-lg px-3 py-2.5 text-[#F5F3EE] text-sm focus:outline-none focus:border-[#6366f1]";

export default function AdminAchievementsPage() {
  const [items, setItems] = useState<Achievement[]>([]);
  const [form, setForm] = useState<Achievement>(EMPTY);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function load() {
    setLoading(true);
    const res = await fetch("/api/admin/achievements");
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
    const res = await fetch("/api/admin/achievements", {
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
    if (!confirm("Delete this achievement?")) return;
    await fetch("/api/admin/achievements", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    load();
  }

  function startEdit(a: Achievement) {
    setForm(a);
    setEditingId(a.id || null);
  }

  return (
    <div className="w-full px-gutter lg:px-margin py-space-xl grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
      {/* List */}
      <div>
        <h1 className="font-headline-sm text-headline-sm text-text-primary mb-space-md">
          Achievements ({items.length})
        </h1>
        {loading ? (
          <p className="text-text-secondary text-sm">Loading...</p>
        ) : items.length === 0 ? (
          <p className="text-text-secondary text-sm">No achievements yet. Add one →</p>
        ) : (
          <div className="flex flex-col gap-2">
            {items.map((a) => (
              <div key={a.id} className="flex items-center justify-between bg-surface-raised border border-border-hairline rounded-lg px-4 py-3">
                <div>
                  <p className="text-text-primary text-sm font-medium">{a.title}</p>
                  <p className="text-text-secondary text-xs">{a.issuer} · {a.category} · {a.status}</p>
                </div>
                <div className="flex gap-3">
                  <button onClick={() => startEdit(a)} className="text-[#6366f1] text-xs hover:underline">Edit</button>
                  <button onClick={() => handleDelete(a.id!)} className="text-red-400 text-xs hover:underline">Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Form */}
      <div className="bg-surface-raised border border-border-hairline rounded-xl p-space-lg flex flex-col gap-3 h-fit">
        <h2 className="font-headline-sm text-headline-sm text-text-primary">
          {editingId ? "Edit Achievement" : "New Achievement"}
        </h2>
        <input className={inputCls} placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
        <input className={inputCls} placeholder="Issuer / Organization" value={form.issuer} onChange={(e) => setForm({ ...form, issuer: e.target.value })} />
        <textarea className={inputCls} placeholder="Description" rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
        <div className="grid grid-cols-2 gap-3">
          <input className={inputCls} type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
          <select className={inputCls} value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
            {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <ImageUploadField
          label="Icon / Badge Image (URL atau Upload)"
          bucket="achievements"
          value={form.icon}
          onChange={(url) => setForm({ ...form, icon: url })}
        />
        <div className="grid grid-cols-2 gap-3">
          <input className={inputCls} placeholder="Atau ketik emoji/nama icon" value={form.icon} onChange={(e) => setForm({ ...form, icon: e.target.value })} />
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
