import Link from "next/link";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import ButtonLink from "@/components/ButtonLink";
import TechBadge from "@/components/TechBadge";
import TypedText from "@/components/TypedText";
import { projects } from "@/lib/projects";

const skillGroups = [
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { label: "Android", items: ["Kotlin", "Jetpack Compose", "Material 3", "Room", "Hilt", "DataStore", "CameraX"] },
  { label: "Backend", items: ["Python", "FastAPI", "Flask", "Node.js", "REST APIs"] },
  { label: "AI / ML", items: ["OpenAI API", "Whisper", "GPT-4o-mini", "RAG", "ChromaDB", "Embeddings", "Local LLMs", "llama.cpp", "ML Kit"] },
  { label: "Tools", items: ["GitHub", "Vercel", "Docker", "Raspberry Pi", "Android Studio", "Gradle", "ADB", "Firecrawl", "AutoGen", "MCP"] },
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
              Markham, ON · Software Engineer II @ Oliver Wyman Vector
            </span>
          </div>

          <h1 className="mt-6 font-serif text-7xl italic leading-[0.9] tracking-tightest text-ink sm:text-8xl lg:text-9xl">
            Chamath<span className="text-accent">.</span>
          </h1>

          <div className="mt-6 text-2xl text-ink-dim sm:text-3xl">
            <TypedText words={["a Software Engineer", "an AI Builder", "a Full-Stack Developer", "an Automation Hacker"]} />
          </div>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-dim sm:text-lg">
            Software Engineer II at <span className="text-ink">Oliver Wyman Vector</span> —
            building full-stack web apps in Java, Spring Boot, and React, and integrating
            generative AI into how engineering teams ship software.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <ButtonLink href="/projects" icon>View Work</ButtonLink>
            <ButtonLink href="/resume" variant="secondary">
              <Download className="h-4 w-4" />
              Resume
            </ButtonLink>
            <ButtonLink href="/contact" variant="ghost">
              <Mail className="h-4 w-4" />
              Contact
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS — list rows */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">01</span>
              <h2 className="font-serif text-3xl italic tracking-tightest text-ink sm:text-4xl">
                Selected work
              </h2>
            </div>
            <Link
              href="/projects"
              className="group hidden items-baseline gap-1.5 font-mono text-[11px] uppercase tracking-widest text-ink-dim hover:text-ink sm:inline-flex"
            >
              Index <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <ul className="mt-10 divide-y divide-white/[0.06] border-y border-white/[0.06]">
            {projects.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/projects/${p.slug}`}
                  className="group grid grid-cols-12 items-baseline gap-4 py-6 transition"
                >
                  <span className="col-span-2 font-mono text-[11px] uppercase tracking-widest text-ink-mute">
                    {p.year}
                  </span>
                  <span className="col-span-10 font-serif text-2xl italic tracking-tightest text-ink transition group-hover:text-accent sm:col-span-4 sm:text-3xl">
                    {p.title}
                  </span>
                  <span className="col-span-12 text-sm text-ink-dim sm:col-span-4">
                    {p.category}
                  </span>
                  <span className="col-span-12 inline-flex items-baseline justify-start gap-1.5 font-mono text-[11px] uppercase tracking-widest text-ink-mute group-hover:text-accent sm:col-span-2 sm:justify-end">
                    View <ArrowUpRight className="h-3 w-3 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* STACK */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">02</span>
            <h2 className="font-serif text-3xl italic tracking-tightest text-ink sm:text-4xl">
              Stack
            </h2>
          </div>

          <div className="mt-10 divide-y divide-white/[0.06] border-y border-white/[0.06]">
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

      {/* ABOUT BLURB */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">03</span>
            <h2 className="font-serif text-3xl italic tracking-tightest text-ink sm:text-4xl">
              About
            </h2>
          </div>

          <div className="mt-10 grid gap-12 sm:grid-cols-[1.4fr_1fr]">
            <p className="max-w-2xl font-serif text-2xl italic leading-snug text-ink sm:text-3xl">
              I build useful products from scratch — especially tools that combine{" "}
              <span className="text-accent">AI</span>, automation, mobile apps, and
              real-world workflows.
            </p>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-5 self-end font-mono text-[11px] uppercase tracking-widest">
              {[
                { k: "Focus", v: "AI · Mobile · Automation" },
                { k: "Stack", v: "Kotlin · TS · Python" },
                { k: "Style", v: "Practical over hype" },
                { k: "Loves", v: "Edge LLMs · voice UX" },
              ].map((s) => (
                <div key={s.k}>
                  <dt className="text-ink-mute">{s.k}</dt>
                  <dd className="mt-1 text-ink">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10">
            <ButtonLink href="/about" variant="secondary" icon>More about me</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
