import { stack } from "@/data/stack";

export default function Stack() {
  return (
    <section className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32 border-t border-[var(--color-border)]">
      <p className="font-mono text-xs text-[var(--color-text-muted)] tracking-widest mb-3">03 / ENGINEERING STACK</p>
      <h2 className="font-display font-semibold text-2xl md:text-3xl mb-12">What I reach for, and why.</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
        {stack.map((group) => (
          <div key={group.label}>
            <h3 className="font-mono text-xs text-[var(--color-accent)] tracking-widest mb-4">
              {group.label.toUpperCase()}
            </h3>
            <ul className="space-y-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
