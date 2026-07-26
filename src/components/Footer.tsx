export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-[var(--color-text-muted)]">
          © {new Date().getFullYear()} Jerin Johnson
        </p>
        <p className="font-mono text-xs text-[var(--color-text-muted)] tracking-widest">
          BUILD → MEASURE → LEARN → SCALE
        </p>
      </div>
    </footer>
  );
}
