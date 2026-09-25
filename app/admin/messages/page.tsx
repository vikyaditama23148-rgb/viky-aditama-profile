"use client";

import { useEffect, useState } from "react";

type Message = {
  id: string;
  name: string;
  email: string;
  subject: string | null;
  message: string;
  category: string | null;
  status: "new" | "read" | "replied" | "archived";
  created_at: string;
};

export default function AdminMessagesPage() {
  const [items, setItems] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    const res = await fetch("/api/admin/messages");
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

  async function updateStatus(id: string, status: Message["status"]) {
    await fetch("/api/admin/messages", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
    load();
  }

  async function remove(id: string) {
    if (!confirm("Delete this message?")) return;
    await fetch("/api/admin/messages", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    load();
  }

  return (
    <div className="w-full px-gutter lg:px-margin py-space-xl">
      <h1 className="font-headline-sm text-headline-sm text-text-primary mb-space-md">
        Messages ({items.length})
      </h1>
      {loading ? (
        <p className="text-text-secondary">Loading...</p>
      ) : (
        <div className="flex flex-col gap-space-sm">
          {items.map((m) => (
            <div key={m.id} className="bg-surface-raised border border-border-hairline rounded-lg p-space-md flex flex-col gap-space-xs">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-body-md text-body-md text-text-primary">
                    {m.name} <span className="text-text-secondary">&lt;{m.email}&gt;</span>
                  </p>
                  <p className="font-label-code text-label-code text-text-secondary">
                    {m.category} · {new Date(m.created_at).toLocaleString()}
                  </p>
                </div>
                <div className="flex items-center gap-space-xs">
                  <select
                    className="bg-surface-elevated border border-border-hairline rounded px-2 py-1 text-sm text-text-primary"
                    value={m.status}
                    onChange={(e) => updateStatus(m.id, e.target.value as Message["status"])}
                  >
                    <option value="new">New</option>
                    <option value="read">Read</option>
                    <option value="replied">Replied</option>
                    <option value="archived">Archived</option>
                  </select>
                  <button onClick={() => remove(m.id)} className="text-error text-sm">Delete</button>
                </div>
              </div>
              {m.subject && <p className="font-body-sm text-body-sm text-text-primary font-semibold">{m.subject}</p>}
              <p className="font-body-sm text-body-sm text-text-secondary whitespace-pre-wrap">{m.message}</p>
            </div>
          ))}
          {items.length === 0 && (
            <p className="text-text-secondary">No messages yet.</p>
          )}
        </div>
      )}
    </div>
  );
}
