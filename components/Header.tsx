"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Research", href: "/research" },
  { label: "Journey", href: "/journey" },
  { label: "Skills", href: "/skills" },
  { label: "Achievements", href: "/achievements" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-surface-base/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 w-full px-gutter lg:px-margin flex items-center justify-between gap-space-md">
        <Link href="/" className="flex items-center gap-space-sm group">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-elevated font-headline-sm text-primary">
            VA
          </span>
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm tracking-tight text-text-primary group-hover:text-primary transition-colors">
              VIKY ADITAMA
            </span>
            <span className="font-label-caps text-label-caps uppercase text-text-secondary tracking-widest hidden sm:inline-block">
              ARCHIVE &amp; RESEARCH
            </span>
          </div>
        </Link>

        <nav className="hidden xl:flex items-center gap-space-md h-full">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "h-full flex items-center transition-colors text-primary border-b-2 border-primary font-bold font-button-text text-button-text"
                    : "h-full flex items-center font-button-text text-button-text text-on-surface-variant hover:text-on-surface transition-colors"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-space-md shrink-0">
          <Link
            href="/ask-viky-ai"
            className="relative hidden sm:inline-flex items-center gap-space-xs px-space-md py-space-xs rounded-full bg-surface-elevated text-secondary font-label-code text-label-code shadow-[0_0_15px_rgba(194,193,255,0.15)] hover:shadow-[0_0_20px_rgba(194,193,255,0.28)] hover:bg-surface-container-high hover:text-text-primary transition-all duration-300"
          >
            <span className="material-symbols-outlined text-[16px] text-secondary">
              auto_awesome
            </span>
            <span className="font-label-caps text-label-caps uppercase tracking-wider">
              Ask Viky AI
            </span>
          </Link>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="xl:hidden flex items-center justify-center h-9 w-9 rounded-lg bg-surface-elevated text-text-primary"
          >
            <span className="material-symbols-outlined text-[20px]">
              {open ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="xl:hidden border-t border-border-hairline bg-surface-base/95 backdrop-blur-xl px-gutter py-space-md flex flex-col gap-space-sm">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={
                pathname === link.href
                  ? "py-space-xs font-button-text text-button-text text-primary font-bold"
                  : "py-space-xs font-button-text text-button-text text-on-surface-variant"
              }
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/ask-viky-ai"
            onClick={() => setOpen(false)}
            className="py-space-xs font-label-caps text-label-caps uppercase text-secondary"
          >
            Ask Viky AI
          </Link>
        </nav>
      )}
    </header>
  );
}
