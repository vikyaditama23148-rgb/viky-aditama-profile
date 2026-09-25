"use client";

import { useEffect, useState } from "react";
import ImageUploadField from "@/components/ImageUploadField";

type Research = {
  id?: string;
  title: string;
  abstract: string;
  authors: string;
  journal: string;
  publication_date: string;
  doi: string;
  external_url: string;
  status: "draft" | "published";
};

const EMPTY: Research = {
  title: "",
  abstract: "",
  authors: "",
  journal: "",
  publication_date: "",
  doi: "",
  external_url: "",
  status: "draft",
};

export default function AdminResearchPage() {
  const [items, setItems] = useState<Research[]>([]);
  const [form, setForm] = useState<Research>(EMPTY);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function load() {
    setLoading(true);
    const res = await fetch("/api/admin/research");
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
    const res = await fetch("/api/admin/research", {
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
    if (!confirm("Delete this publication?")) return;
    await fetch("/api/admin/research", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    load();
  }

  return (
    <div className="w-full px-gutter lg:px-margin py-space-xl grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
      <div>
        <h1 className="font-headline-sm text-headline-sm text-text-primary mb-space-md">
          Research Publications ({items.length})
        </h1>
        {loading ? (
          <p className="text-text-secondary">Loading...</p>
        ) : (
          <div className="flex flex-col gap-space-sm">
            {items.map((r) => (
              <div key={r.id} className="flex items-center justify-between bg-surface-raised border border-border-hairline rounded-lg p-space-sm">
                <div>
                  <p className="font-body-md text-body-md text-text-primary">{r.title}</p>
                  <p className="font-label-code text-label-code text-text-secondary">{r.journal} · {r.status}</p>
                </div>
                <div className="flex gap-space-xs">
                  <button onClick={() => { setForm(r); setEditingId(r.id || null); }} className="text-secondary text-sm">Edit</button>
                  <button onClick={() => handleDelete(r.id!)} className="text-error text-sm">Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-surface-raised border border-border-hairline rounded-xl p-space-lg flex flex-col gap-space-sm h-fit">
        <h2 className="font-headline-sm text-headline-sm text-text-primary">
          {editingId ? "Edit Publication" : "New Publication"}
        </h2>
        <input className="input" placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
        <textarea className="input" placeholder="Abstract" rows={4} value={form.abstract} onChange={(e) => setForm({ ...form, abstract: e.target.value })} />
        <input className="input" placeholder="Authors" value={form.authors} onChange={(e) => setForm({ ...form, authors: e.target.value })} />
        <input className="input" placeholder="Journal" value={form.journal} onChange={(e) => setForm({ ...form, journal: e.target.value })} />
        <div className="grid grid-cols-2 gap-space-sm">
          <input className="input" type="date" value={form.publication_date} onChange={(e) => setForm({ ...form, publication_date: e.target.value })} />
          <input className="input" placeholder="DOI" value={form.doi} onChange={(e) => setForm({ ...form, doi: e.target.value })} />
        </div>
        <input className="input" placeholder="External URL (link publikasi)" value={form.external_url} onChange={(e) => setForm({ ...form, external_url: e.target.value })} />
        <ImageUploadField
          label="PDF / Cover Thumbnail"
          bucket="research"
          value={(form as any).pdf_url || ""}
          onChange={(url) => setForm({ ...form, ...(url ? { pdf_url: url } : {}) } as any)}
        />
        <select className="input" value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value as any })}>
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>
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
