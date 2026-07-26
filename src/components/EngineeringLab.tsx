import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export default function EngineeringLab({ projects }: { projects: Project[] }) {
  return (
    <section id="lab" className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32 scroll-mt-16 border-t border-[var(--color-border)]">
      <p className="font-mono text-xs text-[var(--color-text-muted)] tracking-widest mb-3">02 / ENGINEERING LAB</p>
      <h2 className="font-display font-semibold text-2xl md:text-3xl mb-12">
        Smaller builds, real architecture decisions.
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p) => (
          <a
            key={p.id}
            href={p.links.github ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6 min-h-[190px] hover:border-[var(--color-accent)]/40 hover:-translate-y-0.5 transition-all duration-200"
          >
            <div>
              <h3 className="font-display font-medium text-lg">{p.name}</h3>
              <p className="text-sm text-[var(--color-text-secondary)] mt-1.5">{p.tagline}</p>
            </div>

            <div className="mt-6 flex items-end justify-between">
              <p className="font-mono text-[11px] text-[var(--color-text-muted)] leading-relaxed">
                {p.tech.slice(0, 3).join(" · ")}
              </p>
              <span className="flex items-center gap-1 font-mono text-xs text-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity">
                Explore <ArrowUpRight size={13} />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
