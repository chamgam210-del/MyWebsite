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
        <div className="mx-auto max-w-6xl px-6 pb-24 sm:px-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => {
              const cover = p.media?.hero?.src ?? p.mediaSlots.hero;
              return (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="group relative block overflow-hidden rounded-2xl border border-white/[0.08] bg-bg-card transition hover:border-accent/40"
                >
                  <div
                    className="relative aspect-[4/5] w-full bg-bg-soft bg-cover bg-center transition duration-500 group-hover:scale-[1.02]"
                    style={{ backgroundImage: `url(${cover})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <div className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">
                        {p.year} · {p.category}
                      </div>
                      <div className="mt-2 font-serif text-3xl italic leading-tight tracking-tightest text-ink transition group-hover:text-accent">
                        {p.title}
                      </div>
                      <div className="mt-2 line-clamp-2 text-sm text-ink-dim">
                        {p.tagline}
                      </div>
                    </div>
                    <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full border border-white/15 bg-bg/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-ink backdrop-blur">
                      View <ArrowUpRight className="h-3 w-3" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          {filtered.length === 0 && (
            <p className="py-16 text-center text-ink-mute">No projects in this category yet.</p>
          )}
        </div>
      </section>
    </>
  );
}
