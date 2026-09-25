"use client";

import { useRef, useState } from "react";

interface ImageUploadFieldProps {
  /** Current image URL value */
  value: string;
  /** Called when URL changes (both from file upload or manual URL) */
  onChange: (url: string) => void;
  /** Label shown above the field */
  label?: string;
  /** Supabase Storage bucket name to upload to */
  bucket?: string;
}

/**
 * Reusable image field that supports:
 * - Uploading from device (uploads to Supabase Storage via /api/admin/upload-image)
 * - Manual URL input
 * Shows a live preview of the current image.
 */
export default function ImageUploadField({
  value,
  onChange,
  label = "Gambar",
  bucket = "images",
}: ImageUploadFieldProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [mode, setMode] = useState<"url" | "upload">("url");
  const [preview, setPreview] = useState(value);

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPreview(e.target.value);
    onChange(e.target.value);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Immediate local preview
    const localUrl = URL.createObjectURL(file);
    setPreview(localUrl);
    setUploading(true);

    try {
      const fd = new FormData();
      fd.append("file", file);
      fd.append("bucket", bucket);

      const res = await fetch("/api/admin/upload-image", { method: "POST", body: fd });
      const json = await res.json();

      if (json.url) {
        setPreview(json.url);
        onChange(json.url);
      } else {
        alert("Upload gagal: " + (json.error || "Unknown error"));
        setPreview(value); // revert
      }
    } catch {
      alert("Upload gagal, coba lagi.");
      setPreview(value);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="font-label-code text-label-code text-text-secondary">{label}</label>
      )}

      {/* Preview */}
      {preview && (
        <div className="relative w-full h-36 rounded-lg overflow-hidden bg-surface-elevated border border-border-hairline">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={preview}
            alt="Preview"
            className="w-full h-full object-cover"
            onError={() => setPreview("")}
          />
          {uploading && (
            <div className="absolute inset-0 bg-surface-base/70 backdrop-blur-sm flex items-center justify-center gap-2">
              <span className="material-symbols-outlined animate-spin text-primary text-[24px]">
                progress_activity
              </span>
              <span className="font-label-code text-label-code text-text-primary">Mengupload...</span>
            </div>
          )}
          <button
            type="button"
            onClick={() => { setPreview(""); onChange(""); }}
            className="absolute top-2 right-2 w-7 h-7 rounded-full bg-surface-base/80 backdrop-blur-sm flex items-center justify-center text-text-secondary hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">close</span>
          </button>
        </div>
      )}

      {/* Mode toggle */}
      <div className="flex rounded-lg overflow-hidden border border-border-hairline w-fit">
        <button
          type="button"
          onClick={() => setMode("upload")}
          className={`px-3 py-1.5 font-label-code text-label-code text-[12px] flex items-center gap-1 transition-colors ${
            mode === "upload"
              ? "bg-primary text-on-primary"
              : "bg-surface-elevated text-text-secondary hover:text-text-primary"
          }`}
        >
          <span className="material-symbols-outlined text-[14px]">upload</span>
          Upload
        </button>
        <button
          type="button"
          onClick={() => setMode("url")}
          className={`px-3 py-1.5 font-label-code text-label-code text-[12px] flex items-center gap-1 transition-colors ${
            mode === "url"
              ? "bg-primary text-on-primary"
              : "bg-surface-elevated text-text-secondary hover:text-text-primary"
          }`}
        >
          <span className="material-symbols-outlined text-[14px]">link</span>
          URL
        </button>
      </div>

      {/* Upload from device */}
      {mode === "upload" && (
        <>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
            id={`img-upload-${label}`}
          />
          <label
            htmlFor={`img-upload-${label}`}
            className={`flex items-center gap-2 p-3 rounded-lg border-2 border-dashed cursor-pointer transition-colors ${
              uploading
                ? "border-primary/30 text-text-secondary cursor-not-allowed"
                : "border-border-hairline text-text-secondary hover:border-primary hover:text-primary"
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">add_photo_alternate</span>
            <span className="font-label-code text-label-code text-[12px]">
              {uploading ? "Mengupload..." : "Pilih gambar dari perangkat"}
            </span>
          </label>
          <p className="font-body-sm text-body-sm text-text-secondary text-[11px]">
            Format: JPG, PNG, WEBP, GIF. Maks 10 MB.
          </p>
        </>
      )}

      {/* Manual URL input */}
      {mode === "url" && (
        <input
          type="text"
          value={value}
          onChange={handleUrlChange}
          placeholder="https://example.com/gambar.jpg"
          className="w-full bg-surface-base border border-border-hairline rounded-lg p-3 text-text-primary font-body-sm text-body-sm focus:outline-none focus:border-primary transition-colors"
        />
      )}
    </div>
  );
}
