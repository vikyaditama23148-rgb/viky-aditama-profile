import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest">
      <div className="w-full px-gutter lg:px-margin py-space-xl flex flex-col gap-space-lg">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-space-lg">
          <div className="md:col-span-2 flex flex-col gap-space-xs">
            <span className="font-headline-sm text-headline-sm text-text-primary">
              VIKY ADITAMA
            </span>
            <p className="font-body-sm text-body-sm text-text-secondary max-w-md">
              Digital Identity Platform, computing systems research, and
              frontier architectural archives. Bridging intellectual rigour
              with foundational software ecosystems.
            </p>
          </div>
          <div className="flex flex-col gap-space-xs">
            <span className="font-label-caps text-label-caps uppercase text-primary tracking-widest">
              Initiatives &amp; Platforms
            </span>
            <nav className="flex flex-col gap-space-xs">
              <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#">KEMUT Foundation</a>
              <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#">KEMUT News</a>
              <Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="/work/madulingo">Madulingo</Link>
              <Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="/work/astrova">Astrova</Link>
            </nav>
          </div>
          <div className="flex flex-col gap-space-xs">
            <span className="font-label-caps text-label-caps uppercase text-primary tracking-widest">
              Network Index
            </span>
            <nav className="flex flex-col gap-space-xs">
              <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#">GitHub</a>
              <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#">LinkedIn</a>
              <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#">Google Scholar</a>
              <a className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" href="#">ResearchGate</a>
            </nav>
          </div>
        </div>
        <div className="pt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-md">
          <span className="font-label-code text-label-code text-text-secondary">
            © {new Date().getFullYear()} Viky Aditama. All intellectual property reserved.
          </span>
          <div className="flex items-center gap-space-md">
            <span className="font-label-code text-label-code text-text-secondary">Obsidian Architecture v4.2</span>
            <span className="h-1 w-1 rounded-full bg-primary" />
            <span className="font-label-code text-label-code text-text-secondary">Synchronized</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
