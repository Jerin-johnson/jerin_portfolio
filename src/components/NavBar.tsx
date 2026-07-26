"use client";

import { useEffect, useState } from "react";
import { Command, Menu, X } from "lucide-react";

const LINKS = [
  { href: "#work", label: "Work", num: "01" },
  { href: "#lab", label: "Lab", num: "02" },
  { href: "#about", label: "About", num: "03" },
  { href: "#contact", label: "Contact", num: "04" },
];

export default function NavBar({ onOpenPalette }: { onOpenPalette: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mac, setMac] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    setMac(/Mac|iPod|iPhone|iPad/.test(navigator.platform ?? navigator.userAgent));
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-[var(--color-bg)]/85 backdrop-blur-md border-b border-[var(--color-border)]" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-semibold tracking-tight text-sm">
          JERIN<span className="text-[var(--color-accent)]">.J</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 font-mono text-xs tracking-wide text-[var(--color-text-secondary)]">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-[var(--color-text)] transition-colors">
              <span className="text-[var(--color-text-muted)]">{l.num}</span> {l.label.toUpperCase()}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenPalette}
            className="flex items-center gap-2 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-xs font-mono text-[var(--color-text-muted)] hover:border-[var(--color-accent)]/50 hover:text-[var(--color-text-secondary)] transition-colors"
          >
            <Command size={13} />
            <span>{mac ? "⌘" : "Ctrl"}K</span>
          </button>
          <a
            href="/Jerin_Johnson_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-[var(--color-text)] text-[var(--color-bg)] px-4 py-1.5 text-xs font-mono font-medium hover:bg-[var(--color-accent)] transition-colors"
          >
            RESUME ↗
          </a>
        </div>

        <button className="md:hidden text-[var(--color-text)]" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[var(--color-border)] bg-[var(--color-bg)] px-6 py-6 flex flex-col gap-5">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-mono text-sm text-[var(--color-text-secondary)]"
            >
              <span className="text-[var(--color-text-muted)]">{l.num}</span> {l.label.toUpperCase()}
            </a>
          ))}
          <a
            href="/Jerin_Johnson_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-[var(--color-text)] text-[var(--color-bg)] px-4 py-2 text-xs font-mono font-medium text-center"
          >
            RESUME ↗
          </a>
        </div>
      )}
    </header>
  );
}
