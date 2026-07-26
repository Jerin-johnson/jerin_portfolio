import HeroDiagram from "./HeroDiagram";

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 grid-fade pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 grid md:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
        <div>
          <div className="flex items-center gap-3 mb-6 font-mono text-xs text-[var(--color-text-secondary)]">
            <span className="tracking-widest">JERIN JOHNSON</span>
            <span className="flex items-center gap-1.5 text-[var(--color-success)]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-blink absolute inline-flex h-full w-full rounded-full bg-[var(--color-success)]" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--color-success)]" />
              </span>
              AVAILABLE
            </span>
          </div>

          <h1 className="font-display font-semibold leading-[1.05] text-4xl sm:text-5xl lg:text-6xl tracking-tight">
            Software Engineer
            <br />
            <span className="text-gradient">building systems that scale.</span>
          </h1>

          <p className="mt-6 max-w-lg text-[var(--color-text-secondary)] text-base md:text-lg leading-relaxed">
            I design and build production-ready web applications — from frontend experiences
            to backend architecture, distributed systems and cloud infrastructure.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="rounded-md bg-[var(--color-accent)] text-[var(--color-bg)] px-5 py-3 text-sm font-mono font-medium hover:opacity-90 transition-opacity"
            >
              Explore my work ↘
            </a>
            <a
              href="/Jerin_Johnson_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-[var(--color-border)] px-5 py-3 text-sm font-mono text-[var(--color-text)] hover:border-[var(--color-accent)]/50 transition-colors"
            >
              Resume ↗
            </a>
          </div>

          <div className="mt-14">
            <p className="font-mono text-xs text-[var(--color-text-muted)] mb-3 tracking-wide">CURRENTLY EXPLORING</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-[var(--color-text-secondary)]">
              <span>→ Distributed Systems</span>
              <span>→ System Design</span>
              <span>→ AI Engineering</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/60 backdrop-blur-sm p-8">
            <HeroDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}
