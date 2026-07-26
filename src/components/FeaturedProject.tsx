import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";
import ArchitecturePlayground from "./ArchitecturePlayground";
import { GithubIcon } from "./BrandIcons";

export default function FeaturedProject({ project }: { project: Project }) {
  return (
    <section id="work" className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32 scroll-mt-16">
      <p className="font-mono text-xs text-[var(--color-text-muted)] tracking-widest mb-4">
        {project.index} / FEATURED SYSTEM
      </p>

      <div className="flex flex-wrap items-end justify-between gap-6 mb-4">
        <div>
          <h2 className="font-display font-semibold text-3xl md:text-5xl tracking-tight">
            {project.name.toUpperCase()}
          </h2>
          <p className="mt-2 text-[var(--color-text-secondary)] text-lg">{project.tagline}</p>
        </div>

        <div className="flex gap-3">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-md bg-[var(--color-text)] text-[var(--color-bg)] px-4 py-2 text-xs font-mono font-medium hover:bg-[var(--color-accent)] transition-colors"
            >
              Live <ExternalLink size={13} />
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-md border border-[var(--color-border)] px-4 py-2 text-xs font-mono hover:border-[var(--color-accent)]/50 transition-colors"
            >
              GitHub <GithubIcon size={13} />
            </a>
          )}
        </div>
      </div>

      <p className="max-w-2xl text-[var(--color-text-secondary)] leading-relaxed mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-14">
        {project.tech.map((t) => (
          <span
            key={t}
            className="font-mono text-[11px] px-2.5 py-1 rounded border border-[var(--color-border)] text-[var(--color-text-muted)]"
          >
            {t}
          </span>
        ))}
      </div>

      {project.architecture && (
        <div className="mb-14">
          <p className="font-mono text-xs text-[var(--color-text-muted)] tracking-widest mb-4">
            ARCHITECTURE PLAYGROUND
          </p>
          <ArchitecturePlayground
            nodes={project.architecture.nodes}
            edges={project.architecture.edges}
          />
        </div>
      )}

      <div>
        <p className="font-mono text-xs text-[var(--color-text-muted)] tracking-widest mb-4">
          ENGINEERING HIGHLIGHTS
        </p>
        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-3 text-sm text-[var(--color-text-secondary)] leading-relaxed">
              <span className="text-[var(--color-accent)] mt-0.5 shrink-0">→</span>
              {h}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
