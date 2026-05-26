import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ShieldCheck } from "lucide-react";
import { getAllSlugs, getProject } from "@/lib/projects";
import TechBadge from "@/components/TechBadge";
import ButtonLink from "@/components/ButtonLink";
import MediaSlot from "@/components/MediaSlot";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = getProject(params.slug);
  if (!p) return { title: "Project not found" };
  return {
    title: `${p.title} — Chamath`,
    description: p.shortDescription,
  };
}

export default function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const isTummy = project.slug === "tummy-tracker";
  const screenshotSlots = project.mediaSlots.screenshots;
  const screenshots = project.media.screenshots;

  return (
    <article>
      {/* HEADER */}
      <header className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-24">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-ink-mute hover:text-ink"
          >
            <ArrowLeft className="h-3 w-3" />
            All work
          </Link>

          <div className="mt-10 flex flex-wrap items-baseline gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-widest text-ink-mute">
            <span>{project.year}</span>
            <span>·</span>
            <span>{project.category}</span>
            <span>·</span>
            <span className="text-accent">{project.status}</span>
          </div>

          <h1 className="mt-6 max-w-4xl font-serif text-6xl italic leading-[0.92] tracking-tightest text-ink sm:text-8xl">
            {project.title}
            <span className="text-accent">.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-ink-dim sm:text-2xl">
            {project.tagline}
          </p>

          <div className="mt-10 flex flex-wrap gap-1.5">
            {project.techStack.map((t) => (
              <TechBadge key={t}>{t}</TechBadge>
            ))}
          </div>
        </div>
      </header>

      {/* HERO MEDIA */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-12 sm:px-10">
          <MediaSlot
            media={project.media.hero}
            expectedPath={`public${project.mediaSlots.hero}`}
            caption="Hero / cover image"
            aspect="16/9"
          />
        </div>
      </section>

      {/* PROBLEM / SOLUTION */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
          <div className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">
            01 — Why it exists
          </div>
          <div className="mt-10 grid gap-12 sm:grid-cols-2">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">
                Problem
              </div>
              <p className="mt-4 font-serif text-2xl italic leading-snug text-ink">
                {project.problem}
              </p>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-accent">
                Solution
              </div>
              <p className="mt-4 text-lg leading-relaxed text-ink-dim">
                {project.solution}
              </p>
            </div>
          </div>

          <p className="mt-16 max-w-3xl text-base leading-relaxed text-ink-dim">
            {project.longDescription}
          </p>
        </div>
      </section>

      {/* VIDEO */}
      {project.mediaSlots.video && (
        <section className="border-b border-white/[0.06]">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10">
            <div className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">
              02 — Walkthrough
            </div>
            <div className="mt-8">
              <MediaSlot
                media={project.media.video}
                expectedPath={`public${project.mediaSlots.video}`}
                kind="video"
                caption="Short product walkthrough"
                aspect="16/9"
              />
            </div>
          </div>
        </section>
      )}

      {/* SCREENSHOTS */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
          <div className="flex items-baseline justify-between">
            <div className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">
              03 — Screens
            </div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">
              {screenshots.length} / {screenshotSlots.length}
            </div>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {screenshotSlots.map((slot, i) => (
              <MediaSlot
                key={slot.file}
                media={screenshots[i]}
                expectedPath={`public${slot.file}`}
                caption={slot.caption}
                aspect="9/16"
              />
            ))}
          </div>

          <p className="mt-8 font-mono text-[11px] text-ink-mute">
            Drop real screenshots in <span className="text-accent">/public/projects/{project.slug}/</span> and they'll appear here.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
          <div className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">
            04 — Features
          </div>
          <ul className="mt-10 divide-y divide-white/[0.06] border-y border-white/[0.06]">
            {project.features.map((f, i) => (
              <li
                key={i}
                className="grid grid-cols-12 items-baseline gap-4 py-4 text-ink-dim"
              >
                <span className="col-span-2 font-mono text-[11px] uppercase tracking-widest text-ink-mute">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="col-span-10 text-base text-ink">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
          <div className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">
            05 — Architecture
          </div>
          <dl className="mt-10 divide-y divide-white/[0.06] border-y border-white/[0.06]">
            {project.architecture.map((a) => (
              <div key={a.area} className="grid grid-cols-12 gap-4 py-5">
                <dt className="col-span-12 font-mono text-[11px] uppercase tracking-widest text-accent sm:col-span-3">
                  {a.area}
                </dt>
                <dd className="col-span-12 text-sm text-ink-dim sm:col-span-9">
                  {a.description}
                </dd>
              </div>
            ))}
          </dl>

          {project.engineeringNotes && (
            <div className="mt-10 rounded-2xl border border-white/[0.06] bg-bg-soft p-6">
              <div className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">
                Engineering notes
              </div>
              <ul className="mt-4 space-y-2 font-mono text-[12px] text-ink-dim">
                {project.engineeringNotes.map((n, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-accent">›</span>
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
          <div className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">
            06 — What was hard
          </div>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2">
            {project.challenges.map((c, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-mono text-[11px] uppercase tracking-widest text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed text-ink-dim">{c}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* OUTCOME */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
          <div className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">
            07 — Outcome
          </div>
          <blockquote className="mt-8 max-w-4xl font-serif text-3xl italic leading-snug tracking-tightest text-ink sm:text-5xl">
            <span className="text-accent">"</span>
            {project.outcome}
            <span className="text-accent">"</span>
          </blockquote>
        </div>
      </section>

      {/* PRIVACY */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10">
          <div className="flex items-baseline gap-3 font-mono text-[10px] uppercase tracking-widest text-ink-mute">
            <ShieldCheck className="h-3 w-3" />
            Privacy & safety
          </div>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-dim">
            {project.privacyNotes}
          </p>
          {isTummy && (
            <p className="mt-3 max-w-3xl font-mono text-[11px] uppercase tracking-widest text-accent">
              Disclaimer: Tummy Tracker is exploratory tracking software, not medical advice.
            </p>
          )}
        </div>
      </section>

      {/* FOOTER NAV */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-ink-dim hover:text-ink"
          >
            <ArrowLeft className="h-3 w-3" />
            All work
          </Link>
          <ButtonLink href="/contact" icon>
            Discuss this project
          </ButtonLink>
        </div>
      </section>
    </article>
  );
}
