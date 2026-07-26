"use client";

import { useEffect, useState } from "react";
import { FolderGit2, FlaskConical, User, Mail, FileText } from "lucide-react";
import { GithubIcon } from "./BrandIcons";

type Item = {
  label: string;
  hint: string;
  icon: React.ReactNode;
  action: () => void;
};

export default function CommandPalette({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");

  const items: Item[] = [
    {
      label: "Work",
      hint: "Featured project",
      icon: <FolderGit2 size={15} />,
      action: () => go("#work"),
    },
    {
      label: "Engineering Lab",
      hint: "Smaller builds",
      icon: <FlaskConical size={15} />,
      action: () => go("#lab"),
    },
    {
      label: "About",
      hint: "Background & timeline",
      icon: <User size={15} />,
      action: () => go("#about"),
    },
    {
      label: "Resume",
      hint: "Open PDF",
      icon: <FileText size={15} />,
      action: () => window.open("/Jerin_Johnson_Resume.pdf", "_blank"),
    },
    {
      label: "GitHub",
      hint: "View profile",
      icon: <GithubIcon size={15} />,
      action: () => window.open("https://github.com/Jerin-johnson/", "_blank"),
    },
    {
      label: "Contact",
      hint: "Send a message",
      icon: <Mail size={15} />,
      action: () => go("#contact"),
    },
  ];

  function go(hash: string) {
    document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    onClose();
  }

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!open) return null;

  const filtered = items.filter((i) =>
    (i.label + i.hint).toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-28 px-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] shadow-2xl overflow-hidden"
      >
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--color-border)]">
          <span className="font-mono text-[var(--color-accent)] text-sm">
            {">"}
          </span>
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Where do you want to go?"
            className="w-full bg-transparent outline-none font-mono text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]"
          />
          <kbd className="font-mono text-[10px] text-[var(--color-text-muted)] border border-[var(--color-border)] rounded px-1.5 py-0.5">
            ESC
          </kbd>
        </div>

        <div className="max-h-80 overflow-y-auto py-2">
          {filtered.length === 0 && (
            <p className="px-4 py-6 text-center font-mono text-xs text-[var(--color-text-muted)]">
              No matches.
            </p>
          )}
          {filtered.map((item) => (
            <button
              key={item.label}
              onClick={item.action}
              className="w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-[var(--color-surface-2)] transition-colors"
            >
              <span className="text-[var(--color-text-muted)]">
                {item.icon}
              </span>
              <span className="font-mono text-sm text-[var(--color-text)]">
                {item.label}
              </span>
              <span className="ml-auto font-mono text-xs text-[var(--color-text-muted)]">
                {item.hint}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
