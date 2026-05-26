"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";
import { clsx } from "@/lib/cn";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>("All");
  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <>
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-28">
          <div className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">
            01 — Work / 2025
          </div>
          <h1 className="mt-6 font-serif text-6xl italic leading-[0.9] tracking-tightest text-ink sm:text-8xl">
            Selected<br />work<span className="text-accent">.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-dim">
            Real builds — Android apps, AI assistants, automation tools.
            Each one was shaped around a specific user or workflow, not a tutorial.
          </p>

          <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[11px] uppercase tracking-widest">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={clsx(
                  "transition",
                  filter === c ? "text-accent" : "text-ink-mute hover:text-ink"
                )}
              >
                {c === "All" ? "All" : c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section>
        <ul className="mx-auto max-w-6xl divide-y divide-white/[0.06] border-b border-white/[0.06] px-6 sm:px-10">
          {filtered.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/projects/${p.slug}`}
                className="group grid grid-cols-12 items-baseline gap-4 py-8"
              >
                <span className="col-span-2 font-mono text-[11px] uppercase tracking-widest text-ink-mute">
                  {p.year}
                </span>
                <span className="col-span-10 font-serif text-4xl italic tracking-tightest text-ink transition group-hover:text-accent sm:col-span-5 sm:text-5xl">
                  {p.title}
                </span>
                <span className="col-span-12 text-sm text-ink-dim sm:col-span-4">
                  {p.category}
                </span>
                <span className="col-span-12 inline-flex items-baseline justify-start gap-1.5 font-mono text-[11px] uppercase tracking-widest text-ink-mute group-hover:text-accent sm:col-span-1 sm:justify-end">
                  View <ArrowUpRight className="h-3 w-3 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
        {filtered.length === 0 && (
          <p className="py-16 text-center text-ink-mute">No projects in this category yet.</p>
        )}
      </section>
    </>
  );
}
