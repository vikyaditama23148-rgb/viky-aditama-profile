import Link from "next/link";

export default function AiFab() {
  return (
    <div className="fixed bottom-space-lg right-space-lg z-40">
      <Link
        href="/ask-viky-ai"
        aria-label="Launch Viky AI Intelligence Assistant"
        className="relative group flex items-center gap-space-xs px-space-md py-space-sm rounded-full bg-surface-elevated text-secondary shadow-[0_0_24px_rgba(124,122,255,0.2)] hover:shadow-[0_0_32px_rgba(194,193,255,0.4)] hover:bg-surface-container-high transition-all duration-300"
      >
        <span className="material-symbols-outlined text-[20px] text-secondary group-hover:rotate-12 transition-transform duration-300">
          neurology
        </span>
        <span className="font-label-code text-label-code uppercase tracking-wider hidden sm:inline-block text-text-primary">
          Ask Viky AI
        </span>
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
        </span>
      </Link>
    </div>
  );
}
