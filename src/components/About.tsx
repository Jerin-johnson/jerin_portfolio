const TIMELINE = [
  {
    period: "Apr 2025 — Jun 2026",
    title: "Full Stack Development (MERN) — Brototype",
    body:
      "Professional training focused on production-grade systems: built and deployed healthcare SaaS and e-commerce platforms, designed scalable backends with microservices and event-driven architecture, and worked hands-on with Micro Frontends, Module Federation, gRPC, RabbitMQ and Kubernetes.",
  },
  {
    period: "Apr 2026 — May 2026",
    title: "Freelance Full Stack Developer",
    body:
      "Migrated a billing software codebase from JavaScript to TypeScript, refactored the backend onto the Repository Pattern to decouple data access from business logic, and optimised the frontend build to cut bundle size and speed up deploys.",
  },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32 border-t border-[var(--color-border)] scroll-mt-16">
      <p className="font-mono text-xs text-[var(--color-text-muted)] tracking-widest mb-3">04 / ABOUT</p>

      <div className="grid md:grid-cols-[1fr_1.4fr] gap-14">
        <div>
          <h2 className="font-display font-semibold text-2xl md:text-3xl mb-6">
            I like systems that stay simple under load.
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            I&apos;m a full stack MERN developer working across healthcare and e-commerce products —
            comfortable owning a feature from the React component down to the queue that
            processes it. I care about clean architecture, predictable systems under
            concurrency, and code that&apos;s easy for the next engineer to extend.
          </p>

          <div className="mt-8 flex flex-wrap gap-2 font-mono text-xs text-[var(--color-text-muted)]">
            <span className="px-2.5 py-1 rounded border border-[var(--color-border)]">Kerala, India</span>
            <span className="px-2.5 py-1 rounded border border-[var(--color-border)]">English</span>
            <span className="px-2.5 py-1 rounded border border-[var(--color-border)]">Malayalam</span>
          </div>
        </div>

        <div className="relative pl-8">
          <div className="absolute left-[3px] top-2 bottom-2 w-px bg-[var(--color-border)]" />
          <div className="space-y-12">
            {TIMELINE.map((item) => (
              <div key={item.title} className="relative">
                <div className="absolute -left-8 top-1.5 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                <p className="font-mono text-xs text-[var(--color-text-muted)] mb-1.5">{item.period}</p>
                <h3 className="font-display font-medium text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
