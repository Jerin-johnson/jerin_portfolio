import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";
import { GithubIcon } from "./BrandIcons";

export default function SelectedWork({ projects }: { projects: Project[] }) {
  if (!projects.length) return null;

  return (
    <section className="mx-auto max-w-7xl px-6 md:px-10 pb-24 md:pb-32">
      <p className="font-mono text-xs text-[var(--color-text-muted)] tracking-widest mb-8">
        SELECTED ENGINEERING WORK
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div
            key={p.id}
            className="group rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-8 hover:border-[var(--color-accent)]/40 transition-colors"
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <span className="font-mono text-xs text-[var(--color-text-muted)]">{p.index}</span>
                <h3 className="font-display font-semibold text-xl mt-1">{p.name}</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">{p.tagline}</p>
              </div>
              <div className="flex gap-2 shrink-0">
                {p.links.live && (
                  <a
                    href={p.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.name} live link`}
                    className="p-2 rounded-md border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/50 transition-colors"
                  >
                    <ExternalLink size={14} />
                  </a>
                )}
                {p.links.github && (
                  <a
                    href={p.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.name} GitHub`}
                    className="p-2 rounded-md border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/50 transition-colors"
                  >
                    <GithubIcon size={14} />
                  </a>
                )}
              </div>
            </div>

            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-5">
              {p.description}
            </p>

            <ul className="space-y-2 mb-6">
              {p.highlights.slice(0, 3).map((h) => (
                <li key={h} className="flex gap-2.5 text-[13px] text-[var(--color-text-secondary)] leading-relaxed">
                  <span className="text-[var(--color-accent)] mt-0.5 shrink-0">→</span>
                  {h}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--color-border)]">
              {p.tech.map((t) => (
                <span key={t} className="font-mono text-[10px] px-2 py-0.5 rounded border border-[var(--color-border)] text-[var(--color-text-muted)]">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
