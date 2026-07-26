"use client";

import { useState } from "react";
import type { ArchNode, ArchEdge } from "@/data/projects";

export default function ArchitecturePlayground({
  nodes,
  edges,
}: {
  nodes: ArchNode[];
  edges: ArchEdge[];
}) {
  const [active, setActive] = useState<string>(nodes[0]?.id ?? "");
  const activeNode = nodes.find((n) => n.id === active);
  const byId = (id: string) => nodes.find((n) => n.id === id)!;

  return (
    <div className="grid md:grid-cols-[1.3fr_1fr] gap-6 items-stretch">
      <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] p-6">
        <svg viewBox="0 0 100 100" className="w-full h-[340px] md:h-[420px]">
          <defs>
            <marker id="arrow2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" fill="var(--color-border)" />
            </marker>
          </defs>

          {edges.map((e, i) => {
            const a = byId(e.from);
            const b = byId(e.to);
            const lit = active === e.from || active === e.to;
            return (
              <line
                key={i}
                x1={a.x}
                y1={a.y + 3.2}
                x2={b.x}
                y2={b.y - 3.2}
                stroke={lit ? "var(--color-accent)" : "var(--color-border)"}
                strokeWidth={0.4}
                markerEnd="url(#arrow2)"
                className="transition-colors duration-300"
              />
            );
          })}

          {nodes.map((n) => {
            const isActive = active === n.id;
            return (
              <g
                key={n.id}
                onClick={() => setActive(n.id)}
                className="cursor-pointer"
              >
                <rect
                  x={n.x - 9}
                  y={n.y - 3.2}
                  width={18}
                  height={6.4}
                  rx={1.2}
                  fill={isActive ? "var(--color-accent-dim)" : "var(--color-surface)"}
                  stroke={isActive ? "var(--color-accent)" : "var(--color-border)"}
                  strokeWidth={0.3}
                />
                <text
                  x={n.x}
                  y={n.y + 1}
                  textAnchor="middle"
                  fontSize="2.6"
                  fontFamily="var(--font-mono)"
                  fill={isActive ? "var(--color-accent)" : "var(--color-text-secondary)"}
                >
                  {n.label}
                </text>
              </g>
            );
          })}
        </svg>
        <p className="mt-2 text-center font-mono text-[11px] text-[var(--color-text-muted)]">
          Click a node to see why it&apos;s there
        </p>
      </div>

      <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6 flex flex-col">
        <span className="font-mono text-xs text-[var(--color-accent)] tracking-widest">
          {activeNode?.label}
        </span>
        <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
          {activeNode?.description}
        </p>

        <div className="mt-auto pt-6 flex flex-wrap gap-2">
          {nodes.map((n) => (
            <button
              key={n.id}
              onClick={() => setActive(n.id)}
              className={`font-mono text-[10px] px-2.5 py-1 rounded border transition-colors ${
                active === n.id
                  ? "border-[var(--color-accent)] text-[var(--color-accent)]"
                  : "border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"
              }`}
            >
              {n.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
