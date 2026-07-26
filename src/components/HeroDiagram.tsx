"use client";

import { useState } from "react";

type Node = {
  id: string;
  label: string;
  x: number;
  y: number;
  desc: string;
};

const NODES: Node[] = [
  { id: "client", label: "CLIENT", x: 150, y: 20, desc: "React app — booking UI, dashboards, live consults." },
  { id: "api", label: "API", x: 150, y: 100, desc: "Express services behind Nginx, one clean entry point." },
  { id: "redis", label: "REDIS", x: 70, y: 190, desc: "Distributed locks + Pub/Sub for real-time fan-out." },
  { id: "mongo", label: "MONGO", x: 230, y: 190, desc: "Primary store for patients, orders and records." },
  { id: "worker", label: "WORKER", x: 70, y: 280, desc: "Background jobs — notifications, report delivery." },
];

const EDGES: [string, string][] = [
  ["client", "api"],
  ["api", "redis"],
  ["api", "mongo"],
  ["redis", "worker"],
];

const nodeById = (id: string) => NODES.find((n) => n.id === id)!;

export default function HeroDiagram() {
  const [hovered, setHovered] = useState<string | null>(null);
  const active = hovered ? nodeById(hovered) : null;

  return (
    <div className="relative w-full max-w-sm mx-auto">
      <svg viewBox="0 0 300 330" className="w-full h-auto overflow-visible">
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="var(--color-border)" />
          </marker>
        </defs>

        {EDGES.map(([from, to], i) => {
          const a = nodeById(from);
          const b = nodeById(to);
          const isLit = hovered === from || hovered === to;
          return (
            <line
              key={`${from}-${to}`}
              x1={a.x}
              y1={a.y + 18}
              x2={b.x}
              y2={b.y - 18}
              stroke={isLit ? "var(--color-accent)" : "var(--color-border)"}
              strokeWidth={1.5}
              className="animate-dash transition-colors duration-300"
              style={{ animationDelay: `${i * 0.15}s` }}
              markerEnd="url(#arrow)"
            />
          );
        })}

        {NODES.map((n) => {
          const isActive = hovered === n.id;
          return (
            <g
              key={n.id}
              onMouseEnter={() => setHovered(n.id)}
              onMouseLeave={() => setHovered(null)}
              className="cursor-pointer"
            >
              <rect
                x={n.x - 42}
                y={n.y - 18}
                width={84}
                height={36}
                rx={6}
                fill={isActive ? "var(--color-accent-dim)" : "var(--color-surface)"}
                stroke={isActive ? "var(--color-accent)" : "var(--color-border)"}
                strokeWidth={1.2}
                className="transition-all duration-200"
              />
              <text
                x={n.x}
                y={n.y + 5}
                textAnchor="middle"
                fontSize="10.5"
                fontFamily="var(--font-mono)"
                fill={isActive ? "var(--color-accent)" : "var(--color-text-secondary)"}
                letterSpacing="0.5"
              >
                {n.label}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="h-12 mt-2 flex items-start justify-center text-center px-4">
        <p className="font-mono text-xs text-[var(--color-text-muted)]">
          {active ? active.desc : "Hover a node to see what it does →"}
        </p>
      </div>
    </div>
  );
}
