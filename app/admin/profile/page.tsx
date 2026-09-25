"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import ImageUploadField from "@/components/ImageUploadField";

export default function ProfileAdmin() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [avatarMode, setAvatarMode] = useState<"url" | "upload">("url");
  const [previewUrl, setPreviewUrl] = useState<string>("");

  const [formData, setFormData] = useState({
    full_name: "",
    tagline: "",
    bio: "",
    location: "",
    email: "",
    avatar_url: "",
    about_image_url: "",
    about_headline: "",
    about_quote: "",
    about_biography: "",
  });

  useEffect(() => {
    fetch("/api/admin/profile")
      .then((res) => res.json())
      .then((res) => {
        if (res.data) {
          setFormData({
            full_name: res.data.full_name || "",
            tagline: res.data.tagline || "",
            bio: res.data.bio || "",
            location: res.data.location || "",
            email: res.data.email || "",
            avatar_url: res.data.avatar_url || "",
            about_image_url: res.data.about_image_url || "",
            about_headline: res.data.about_headline || "",
            about_quote: res.data.about_quote || "",
            about_biography: res.data.about_biography || "",
          });
          setPreviewUrl(res.data.avatar_url || "");
        }
        setLoading(false);
      });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "avatar_url") setPreviewUrl(value);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Show local preview immediately
    const localPreview = URL.createObjectURL(file);
    setPreviewUrl(localPreview);
    setUploading(true);

    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/admin/upload-avatar", {
        method: "POST",
        body: fd,
      });
      const json = await res.json();
      if (json.url) {
        setFormData((prev) => ({ ...prev, avatar_url: json.url }));
        setPreviewUrl(json.url);
      } else {
        alert("Upload gagal: " + (json.error || "Unknown error"));
      }
    } catch {
      alert("Upload gagal, coba lagi.");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const res = await fetch("/api/admin/profile", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const json = await res.json();
    setSaving(false);
    if (json.error) {
      alert("Gagal menyimpan: " + json.error);
    } else {
      alert("Profile & Resume berhasil diperbarui!");
      router.refresh();
    }
  };

  if (loading) {
    return (
      <div className="w-full px-gutter lg:px-margin py-space-xl flex items-center gap-3 text-text-secondary">
        <span className="material-symbols-outlined animate-spin text-primary">progress_activity</span>
        Memuat data profil...
      </div>
    );
  }

  return (
    <div className="w-full px-gutter lg:px-margin py-space-lg">
      {/* Header */}
      <div className="mb-space-lg">
        <div className="flex items-center gap-2 mb-1">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="font-label-caps text-label-caps uppercase text-primary tracking-widest">Admin Panel</span>
        </div>
        <h1 className="font-headline-md text-headline-md text-text-primary">Profile &amp; Resume Header</h1>
        <p className="font-body-sm text-body-sm text-text-secondary mt-1">
          Data ini akan tampil di header Resume dan seluruh halaman website.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-space-lg max-w-3xl">
        
        {/* Avatar Section */}
        <div className="bg-surface-raised rounded-xl p-space-lg flex flex-col gap-space-md">
          <h2 className="font-headline-sm text-headline-sm text-text-primary">Foto Profil</h2>
          <ImageUploadField
            label="Foto Profil (upload dari perangkat atau URL)"
            bucket="avatars"
            value={formData.avatar_url}
            onChange={(url) => setFormData((prev) => ({ ...prev, avatar_url: url }))}
          />
        </div>

        {/* Personal Info Section */}
        <div className="bg-surface-raised rounded-xl p-space-lg flex flex-col gap-space-md">
          <h2 className="font-headline-sm text-headline-sm text-text-primary">Informasi Pribadi</h2>

          <div className="flex flex-col gap-2">
            <label className="font-label-code text-label-code text-text-secondary">Nama Lengkap *</label>
            <input
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              required
              className="p-3 rounded-lg bg-surface-base border border-border-hairline text-text-primary focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-label-code text-label-code text-text-secondary">Tagline / Jabatan</label>
            <input
              name="tagline"
              value={formData.tagline}
              onChange={handleChange}
              placeholder="Educator • Researcher • Technologist"
              className="p-3 rounded-lg bg-surface-base border border-border-hairline text-text-primary focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-label-code text-label-code text-text-secondary">Bio / Ringkasan Profil</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows={5}
              placeholder="Ceritakan tentang diri Anda secara singkat..."
              className="p-3 rounded-lg bg-surface-base border border-border-hairline text-text-primary focus:outline-none focus:border-primary transition-colors resize-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
            <div className="flex flex-col gap-2">
              <label className="font-label-code text-label-code text-text-secondary">Lokasi</label>
              <input
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Sumenep, East Java"
                className="p-3 rounded-lg bg-surface-base border border-border-hairline text-text-primary focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label-code text-label-code text-text-secondary">Email</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="nama@email.com"
                className="p-3 rounded-lg bg-surface-base border border-border-hairline text-text-primary focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>
        </div>

        {/* About Page Section */}
        <div className="bg-surface-raised rounded-xl p-space-lg flex flex-col gap-space-md">
          <h2 className="font-headline-sm text-headline-sm text-text-primary">Konten Halaman About</h2>
          <p className="font-body-sm text-body-sm text-text-secondary mt-[-8px]">
            Data ini khusus untuk mengisi konten panjang di halaman /about.
          </p>
          
          <ImageUploadField
            label="Foto Portrait Utama"
            bucket="avatars"
            value={formData.about_image_url}
            onChange={(url) => setFormData((prev) => ({ ...prev, about_image_url: url }))}
          />
          
          <div className="flex flex-col gap-2 mt-2">
            <label className="font-label-code text-label-code text-text-secondary">Headline Halaman About</label>
            <input
              name="about_headline"
              value={formData.about_headline}
              onChange={handleChange}
              placeholder="At the Intersection of Heritage and Innovation."
              className="p-3 rounded-lg bg-surface-base border border-border-hairline text-text-primary focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="font-label-code text-label-code text-text-secondary">Biografi Lengkap (Dukung Paragraf)</label>
            <textarea
              name="about_biography"
              value={formData.about_biography}
              onChange={handleChange}
              rows={12}
              placeholder="Cerita panjang biografi Anda..."
              className="p-3 rounded-lg bg-surface-base border border-border-hairline text-text-primary focus:outline-none focus:border-primary transition-colors resize-y"
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="font-label-code text-label-code text-text-secondary">Kutipan / Quote</label>
            <textarea
              name="about_quote"
              value={formData.about_quote}
              onChange={handleChange}
              rows={3}
              placeholder='"Code is not culturally neutral..."'
              className="p-3 rounded-lg bg-surface-base border border-border-hairline text-text-primary focus:outline-none focus:border-primary transition-colors resize-none"
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="flex items-center gap-space-md">
          <button
            type="submit"
            disabled={saving || uploading}
            className="inline-flex items-center gap-2 px-space-lg py-space-sm rounded-lg bg-primary text-on-primary font-button-text text-button-text hover:bg-primary-fixed-dim transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {saving ? (
              <>
                <span className="material-symbols-outlined animate-spin text-[18px]">progress_activity</span>
                Menyimpan...
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-[18px]">save</span>
                Simpan Profil
              </>
            )}
          </button>
          {uploading && (
            <span className="font-body-sm text-body-sm text-text-secondary">
              Menunggu upload foto selesai...
            </span>
          )}
        </div>
      </form>
    </div>
  );
}
