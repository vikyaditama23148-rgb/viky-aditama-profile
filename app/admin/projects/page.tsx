"use client";

import { useEffect, useState } from "react";
import ImageUploadField from "@/components/ImageUploadField";

type Project = {
  id?: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  cover_image_url: string;
  role: string;
  year: string;
  featured: boolean;
  status: "draft" | "published";
};

const EMPTY: Project = {
  slug: "",
  title: "",
  summary: "",
  description: "",
  cover_image_url: "",
  role: "",
  year: "",
  featured: false,
  status: "draft",
};

export default function AdminProjectsPage() {
  const [items, setItems] = useState<Project[]>([]);
  const [form, setForm] = useState<Project>(EMPTY);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function load() {
    setLoading(true);
    const res = await fetch("/api/admin/projects");
    if (res.status === 401) {
      window.location.href = "/admin/login";
      return;
    }
    const { data } = await res.json();
    setItems(data || []);
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  async function handleSave() {
    setError("");
    const method = editingId ? "PUT" : "POST";
    const payload = editingId ? { ...form, id: editingId } : form;
    const res = await fetch("/api/admin/projects", {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
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
    if (!confirm("Delete this project?")) return;
    await fetch("/api/admin/projects", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    load();
  }

  function startEdit(p: Project) {
    setForm(p);
    setEditingId(p.id || null);
  }

  return (
    <div className="w-full px-gutter lg:px-margin py-space-xl grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
      <div>
        <h1 className="font-headline-sm text-headline-sm text-text-primary mb-space-md">
          Projects ({items.length})
        </h1>
        {loading ? (
          <p className="text-text-secondary">Loading...</p>
        ) : (
          <div className="flex flex-col gap-space-sm">
            {items.map((p) => (
              <div
                key={p.id}
                className="flex items-center justify-between bg-surface-raised border border-border-hairline rounded-lg p-space-sm"
              >
                <div>
                  <p className="font-body-md text-body-md text-text-primary">{p.title}</p>
                  <p className="font-label-code text-label-code text-text-secondary">
                    /{p.slug} · {p.status}
                  </p>
                </div>
                <div className="flex gap-space-xs">
                  <button onClick={() => startEdit(p)} className="text-secondary text-sm">Edit</button>
                  <button onClick={() => handleDelete(p.id!)} className="text-error text-sm">Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-surface-raised border border-border-hairline rounded-xl p-space-lg flex flex-col gap-space-sm h-fit">
        <h2 className="font-headline-sm text-headline-sm text-text-primary">
          {editingId ? "Edit Project" : "New Project"}
        </h2>
        <input className="input" placeholder="Slug (e.g. madulingo)" value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} />
        <input className="input" placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
        <input className="input" placeholder="Summary" value={form.summary} onChange={(e) => setForm({ ...form, summary: e.target.value })} />
        <textarea className="input" placeholder="Description" rows={4} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
        <ImageUploadField
          label="Cover Image"
          bucket="projects"
          value={form.cover_image_url}
          onChange={(url) => setForm({ ...form, cover_image_url: url })}
        />
        <div className="grid grid-cols-2 gap-space-sm">
          <input className="input" placeholder="Role" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} />
          <input className="input" placeholder="Year" value={form.year} onChange={(e) => setForm({ ...form, year: e.target.value })} />
        </div>
        <div className="flex items-center gap-space-md">
          <label className="flex items-center gap-space-xs text-text-secondary text-sm">
            <input type="checkbox" checked={form.featured} onChange={(e) => setForm({ ...form, featured: e.target.checked })} />
            Featured
          </label>
          <select className="input" value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value as any })}>
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>
        {error && <p className="text-error text-sm">{error}</p>}
        <div className="flex gap-space-sm">
          <button onClick={handleSave} className="px-4 py-2 rounded-lg bg-primary text-surface-base font-semibold">
            {editingId ? "Update" : "Create"}
          </button>
          {editingId && (
            <button onClick={() => { setForm(EMPTY); setEditingId(null); }} className="px-4 py-2 rounded-lg bg-surface-elevated text-text-primary">
              Cancel
            </button>
          )}
        </div>
      </div>

      <style>{`.input{width:100%;background:#17191F;border:1px solid #272A31;border-radius:0.5rem;padding:0.6rem 0.9rem;color:#F5F3EE;font-size:14px;}`}</style>
    </div>
  );
}
