import Link from "next/link";
import { ArrowUpRight, Download, Mail, Briefcase } from "lucide-react";
import ButtonLink from "@/components/ButtonLink";
import TypedText from "@/components/TypedText";
import { projects } from "@/lib/projects";

const experienceSummary = [
  {
    period: "2025 — Present",
    role: "Software Engineer II",
    company: "Oliver Wyman Vector",
    detail: "Full-stack engineering, AI integration, and automation across enterprise web apps.",
  },
  {
    period: "2024 — 2025",
    role: "Software Engineer",
    company: "Oliver Wyman Vector",
    detail: "Built features and led AI-driven workflow improvements on DIGIMAINT.",
  },
  {
    period: "2023 — 2024",
    role: "Software / QA Engineer",
    company: "AeroSoft Systems",
    detail: "Started in QA automation, moved into product engineering and AI work.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO — full-bleed image with overlay */}
      <section className="relative isolate min-h-[calc(100vh-3.5rem)] lg:min-h-screen">
        {/* Background image (drop /public/hero.jpg to replace) */}
        <div
          className="absolute inset-0 -z-10 overflow-hidden bg-bg-soft bg-cover bg-center"
          style={{ backgroundImage: "url(/hero.jpg)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-bg/90 via-bg/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
        </div>

        {/* Drop-photo hint (only visible if no /public/hero.jpg yet) */}
        <div className="pointer-events-none absolute right-6 top-6 z-10 hidden font-mono text-[10px] uppercase tracking-widest text-ink-mute sm:block">
          drop photo → <span className="text-accent">public/hero.jpg</span>
        </div>

        <div className="relative z-10 flex min-h-[calc(100vh-3.5rem)] flex-col justify-center px-8 py-24 sm:px-16 lg:min-h-screen lg:px-24">
          <div className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">
            <span className="inline-flex items-center gap-2">
              <span className="inline-flex h-1.5 w-1.5 animate-pulseSoft rounded-full bg-accent" />
              Available for freelance & collaboration
            </span>
          </div>

          <h1 className="mt-6 font-serif text-6xl italic leading-[0.9] tracking-tightest text-ink sm:text-7xl lg:text-8xl">
            Chamath Guruge<span className="text-accent">.</span>
          </h1>

          <div className="mt-6 text-2xl text-ink-dim sm:text-3xl">
            <TypedText
              words={[
                "a Software Builder",
                "an AI Product Maker",
                "a Freelance Engineer",
                "an Automation Hacker",
              ]}
            />
          </div>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-dim sm:text-lg">
            I design and build software and AI products end-to-end — from idea
            to working app. Web, mobile, AI assistants, automation, internal
            tools. If it can be built, I&rsquo;ll figure out how.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <ButtonLink href="/projects" icon>View Work</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              <Mail className="h-4 w-4" />
              Let&rsquo;s build something
            </ButtonLink>
            <ButtonLink href="/resume" variant="ghost">
              <Download className="h-4 w-4" />
              Resume
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* EXPERIENCE — short summary */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">01</span>
              <h2 className="font-serif text-3xl italic tracking-tightest text-ink sm:text-4xl">
                Experience
              </h2>
            </div>
            <Link
              href="/resume"
              className="group hidden items-baseline gap-1.5 font-mono text-[11px] uppercase tracking-widest text-ink-dim hover:text-ink sm:inline-flex"
            >
              Full resume <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <ul className="mt-10 divide-y divide-white/[0.06] border-y border-white/[0.06]">
            {experienceSummary.map((x) => (
              <li key={x.period + x.role} className="grid grid-cols-12 items-baseline gap-4 py-6">
                <span className="col-span-12 font-mono text-[11px] uppercase tracking-widest text-ink-mute sm:col-span-3">
                  {x.period}
                </span>
                <div className="col-span-12 sm:col-span-9">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="font-serif text-2xl italic tracking-tightest text-ink sm:text-3xl">
                      {x.role}
                    </span>
                    <span className="text-sm text-accent">{x.company}</span>
                  </div>
                  <p className="mt-2 max-w-2xl text-base leading-relaxed text-ink-dim">
                    {x.detail}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PORTFOLIO — image cards */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">02</span>
              <h2 className="font-serif text-3xl italic tracking-tightest text-ink sm:text-4xl">
                Selected work
              </h2>
            </div>
            <Link
              href="/projects"
              className="group hidden items-baseline gap-1.5 font-mono text-[11px] uppercase tracking-widest text-ink-dim hover:text-ink sm:inline-flex"
            >
              All projects <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => {
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
        </div>
      </section>

      {/* LET'S BUILD SOMETHING — CTA */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
          <div className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">03 — Contact</div>
          <h2 className="mt-6 max-w-4xl font-serif text-5xl italic leading-[0.95] tracking-tightest text-ink sm:text-7xl">
            Let&rsquo;s build<br />something<span className="text-accent">.</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-dim">
            Got an idea, a problem to solve, or a product to ship? I&rsquo;m open
            to freelance projects, collaborations, and full-time roles.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <ButtonLink href="/contact" icon>
              <Mail className="h-4 w-4" />
              Start a conversation
            </ButtonLink>
            <ButtonLink href="/projects" variant="secondary">
              <Briefcase className="h-4 w-4" />
              See work first
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
