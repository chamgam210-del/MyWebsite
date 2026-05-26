import Link from "next/link";
import { ArrowUpRight, ArrowRight, Mail, Download, Sparkles, Wrench, ShieldCheck } from "lucide-react";
import ButtonLink from "@/components/ButtonLink";
import TechBadge from "@/components/TechBadge";
import { projects } from "@/lib/projects";

const credibility =
  "Software Engineer II at Oliver Wyman Vector · Android · AI Assistants · Local LLMs · Automation";

const howIBuild = [
  {
    n: "01",
    title: "Ship a working v1 first",
    body: "I'd rather have a rough prototype in front of a real user than a perfect spec on a page. Iteration starts after something runs.",
    Icon: Sparkles,
  },
  {
    n: "02",
    title: "AI as a draft, not an autopilot",
    body: "AI features stay draft-first whenever the cost of being wrong is real. The human stays in the loop on anything that touches the outside world.",
    Icon: ShieldCheck,
  },
  {
    n: "03",
    title: "Local-first when it matters",
    body: "On-device inference, local storage, and offline-friendly defaults — better privacy, lower latency, fewer cloud bills when the workload allows.",
    Icon: Wrench,
  },
];

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

const skillGroups = [
  { label: "Languages", items: ["Kotlin", "TypeScript", "Java", "Python", "SQL"] },
  { label: "Mobile", items: ["Jetpack Compose", "Room", "Hilt", "CameraX", "Foreground services"] },
  { label: "AI / ML", items: ["OpenAI API", "Whisper", "gpt-4o-mini", "RAG", "Local LLMs", "llama.cpp", "ML Kit"] },
  { label: "Web", items: ["Next.js", "React", "Tailwind", "Spring Boot", "FastAPI"] },
  { label: "Tools", items: ["Firecrawl", "Docker", "Vercel", "Gradle", "ADB", "Tailscale"] },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate min-h-[calc(100vh-3.5rem)] lg:min-h-screen">
        <div
          className="absolute inset-0 -z-10 overflow-hidden bg-bg-soft bg-cover bg-center"
          style={{ backgroundImage: "url(/hero.jpg)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-bg/90 via-bg/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
        </div>

        <div className="relative z-10 flex min-h-[calc(100vh-3.5rem)] flex-col justify-center px-8 py-24 sm:px-16 lg:min-h-screen lg:px-24">
          <div className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">
            <span className="inline-flex items-center gap-2">
              <span className="inline-flex h-1.5 w-1.5 animate-pulseSoft rounded-full bg-accent" />
              Available for freelance & collaboration
            </span>
          </div>

          <h1 className="mt-6 max-w-4xl font-serif text-5xl italic leading-[0.95] tracking-tightest text-ink sm:text-6xl lg:text-7xl">
            I build AI-powered apps for{" "}
            <span className="text-accent">real-world</span> workflows.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-dim sm:text-xl">
            I&rsquo;m Chamath Guruge, a software engineer focused on Android
            apps, AI assistants, automation tools, and full-stack prototypes —
            from idea to working product.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <ButtonLink href="/projects" icon>View Work</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              <Mail className="h-4 w-4" />
              Contact Me
            </ButtonLink>
            <ButtonLink href="/resume" variant="ghost">
              <Download className="h-4 w-4" />
              Resume
            </ButtonLink>
          </div>

          <div className="mt-14 max-w-3xl border-t border-white/[0.08] pt-5 font-mono text-[10px] uppercase tracking-widest text-ink-mute">
            {credibility}
          </div>
        </div>
      </section>

      {/* SELECTED WORK — large alternating blocks */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-28">
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">01</span>
              <h2 className="font-serif text-4xl italic tracking-tightest text-ink sm:text-5xl">
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

          <div className="mt-16 space-y-24 sm:space-y-32">
            {projects.map((p, i) => {
              const cover = p.media?.hero?.src ?? p.mediaSlots.hero;
              const reversed = i % 2 === 1;
              return (
                <article
                  key={p.slug}
                  className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
                >
                  {/* Visual */}
                  <Link
                    href={`/projects/${p.slug}`}
                    className={`group relative block overflow-hidden rounded-2xl border border-white/[0.08] bg-bg-card ${
                      reversed ? "lg:order-2" : ""
                    }`}
                  >
                    <div
                      className="relative aspect-[4/3] w-full bg-bg-soft bg-cover bg-center transition duration-500 group-hover:scale-[1.02]"
                      style={{ backgroundImage: `url(${cover})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />
                      <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full border border-white/15 bg-bg/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-ink backdrop-blur">
                        Case study <ArrowUpRight className="h-3 w-3" />
                      </div>
                    </div>
                  </Link>

                  {/* Copy */}
                  <div className={reversed ? "lg:order-1" : ""}>
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 font-mono text-[10px] uppercase tracking-widest text-ink-mute">
                      <span>{p.category}</span>
                      <span>·</span>
                      <span className="text-accent">{p.snapshot.status}</span>
                    </div>
                    <h3 className="mt-4 font-serif text-4xl italic leading-[0.95] tracking-tightest text-ink sm:text-5xl">
                      {p.title}
                      <span className="text-accent">.</span>
                    </h3>

                    <p className="mt-6 text-base leading-relaxed text-ink-dim">
                      <span className="text-ink-mute">Problem · </span>
                      {p.briefProblem}
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-ink-dim">
                      <span className="text-ink-mute">What I built · </span>
                      {p.briefBuilt}
                    </p>

                    <ul className="mt-6 space-y-2">
                      {p.outcomes.map((o) => (
                        <li key={o} className="flex gap-3 text-sm text-ink-dim">
                          <ArrowRight className="mt-1 h-3.5 w-3.5 flex-none text-accent" />
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 space-y-2">
                      {p.techGroups.map((g) => (
                        <div key={g.label} className="flex flex-wrap items-baseline gap-2">
                          <span className="w-16 shrink-0 font-mono text-[10px] uppercase tracking-widest text-ink-mute">
                            {g.label}
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {g.items.map((t) => (
                              <TechBadge key={t}>{t}</TechBadge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <ButtonLink href={`/projects/${p.slug}`} icon>
                        View Case Study
                      </ButtonLink>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW I BUILD */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">02</span>
            <h2 className="font-serif text-4xl italic tracking-tightest text-ink sm:text-5xl">
              How I build
            </h2>
          </div>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-dim">
            A few principles I keep coming back to across personal projects and
            client work.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {howIBuild.map(({ n, title, body, Icon }) => (
              <div
                key={n}
                className="rounded-2xl border border-white/[0.08] bg-bg-card p-6"
              >
                <div className="flex items-center justify-between">
                  <Icon className="h-5 w-5 text-accent" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">
                    {n}
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-2xl italic leading-tight tracking-tightest text-ink">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-dim">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">03</span>
              <h2 className="font-serif text-4xl italic tracking-tightest text-ink sm:text-5xl">
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

          <ul className="mt-12 divide-y divide-white/[0.06] border-y border-white/[0.06]">
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

      {/* SKILLS */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">04</span>
            <h2 className="font-serif text-4xl italic tracking-tightest text-ink sm:text-5xl">
              Skills
            </h2>
          </div>

          <div className="mt-12 divide-y divide-white/[0.06] border-y border-white/[0.06]">
            {skillGroups.map((g) => (
              <div key={g.label} className="grid grid-cols-12 items-baseline gap-4 py-5">
                <span className="col-span-12 font-mono text-[11px] uppercase tracking-widest text-ink-mute sm:col-span-3">
                  {g.label}
                </span>
                <div className="col-span-12 flex flex-wrap gap-1.5 sm:col-span-9">
                  {g.items.map((i) => (
                    <TechBadge key={i}>{i}</TechBadge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
          <div className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">
            05 — Contact
          </div>
          <h2 className="mt-6 max-w-4xl font-serif text-5xl italic leading-[0.95] tracking-tightest text-ink sm:text-7xl">
            Let&rsquo;s build<br />something<span className="text-accent">.</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-dim">
            Got an idea, a problem to solve, or a product to ship? I&rsquo;m
            open to freelance projects, collaborations, and full-time roles.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <ButtonLink href="/contact" icon>
              <Mail className="h-4 w-4" />
              Contact Me
            </ButtonLink>
            <ButtonLink href="/projects" variant="secondary">
              View Work
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
