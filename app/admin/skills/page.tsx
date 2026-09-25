"use client";

import { useEffect, useState } from "react";

type Skill = {
  id?: string;
  name: string;
  category: string;
  proficiency: number;
  sort_order: number;
};

const CATEGORIES = ["Engineering", "Design", "Languages", "Research", "Tools", "Other"];

const EMPTY: Skill = {
  name: "",
  category: "Engineering",
  proficiency: 80,
  sort_order: 0,
};

const inputCls = "w-full bg-[#17191F] border border-[#272A31] rounded-lg px-3 py-2.5 text-[#F5F3EE] text-sm focus:outline-none focus:border-[#6366f1]";

export default function AdminSkillsPage() {
  const [items, setItems] = useState<Skill[]>([]);
  const [form, setForm] = useState<Skill>(EMPTY);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // Group by category for display
  const grouped = items.reduce((acc, s) => {
    if (!acc[s.category]) acc[s.category] = [];
    acc[s.category].push(s);
    return acc;
  }, {} as Record<string, Skill[]>);

  async function load() {
    setLoading(true);
    const res = await fetch("/api/admin/skills");
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
    const res = await fetch("/api/admin/skills", {
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
    if (!confirm("Delete this skill?")) return;
    await fetch("/api/admin/skills", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    load();
  }

  return (
    <div className="w-full px-gutter lg:px-margin py-space-xl grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
      {/* List grouped by category */}
      <div>
        <h1 className="font-headline-sm text-headline-sm text-text-primary mb-space-md">
          Skills ({items.length})
        </h1>
        {loading ? (
          <p className="text-text-secondary text-sm">Loading...</p>
        ) : items.length === 0 ? (
          <p className="text-text-secondary text-sm">No skills yet. Add one →</p>
        ) : (
          <div className="flex flex-col gap-4">
            {Object.entries(grouped).map(([cat, skills]) => (
              <div key={cat}>
                <p className="text-text-secondary text-xs uppercase tracking-widest font-semibold mb-2">{cat}</p>
                <div className="flex flex-col gap-1.5">
                  {skills.map((s) => (
                    <div key={s.id} className="flex items-center justify-between bg-surface-raised border border-border-hairline rounded-lg px-4 py-2.5">
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <span className="text-text-primary text-sm font-medium truncate">{s.name}</span>
                        <div className="flex-1 bg-[#272A31] rounded-full h-1.5 max-w-[100px]">
                          <div className="bg-primary h-1.5 rounded-full" style={{ width: `${s.proficiency}%` }} />
                        </div>
                        <span className="text-text-secondary text-xs shrink-0">{s.proficiency}%</span>
                      </div>
                      <div className="flex gap-3 ml-3">
                        <button onClick={() => { setForm(s); setEditingId(s.id || null); }} className="text-[#6366f1] text-xs hover:underline">Edit</button>
                        <button onClick={() => handleDelete(s.id!)} className="text-red-400 text-xs hover:underline">Delete</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Form */}
      <div className="bg-surface-raised border border-border-hairline rounded-xl p-space-lg flex flex-col gap-3 h-fit">
        <h2 className="font-headline-sm text-headline-sm text-text-primary">
          {editingId ? "Edit Skill" : "New Skill"}
        </h2>
        <input className={inputCls} placeholder="Skill name (e.g. TypeScript)" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <select className={inputCls} value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
          {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        <div>
          <label className="text-text-secondary text-xs mb-1 block">Proficiency: {form.proficiency}%</label>
          <input
            type="range" min={0} max={100} value={form.proficiency}
            onChange={(e) => setForm({ ...form, proficiency: Number(e.target.value) })}
            className="w-full accent-[#6366f1]"
          />
        </div>
        <input className={inputCls} type="number" placeholder="Sort order" value={form.sort_order} onChange={(e) => setForm({ ...form, sort_order: Number(e.target.value) })} />
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
