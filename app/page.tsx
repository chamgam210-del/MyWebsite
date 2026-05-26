import Link from "next/link";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import ButtonLink from "@/components/ButtonLink";
import TechBadge from "@/components/TechBadge";
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
      {/* HERO — editorial, typographic */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-ink-mute">
            <span className="inline-flex h-1.5 w-1.5 animate-pulseSoft rounded-full bg-accent" />
            <span>Available · AI / Mobile / Automation</span>
          </div>

          <h1 className="mt-8 font-serif text-[15vw] italic leading-[0.85] tracking-tightest text-ink sm:text-[8rem] lg:text-[10rem]">
            Chamath<span className="text-accent">.</span>
          </h1>

          <div className="mt-10 grid gap-12 sm:grid-cols-[1fr_auto] sm:items-end">
            <p className="max-w-xl text-lg leading-relaxed text-ink-dim sm:text-xl">
              Software developer building <span className="text-ink">AI-powered apps</span>,
              {" "}automation tools, and full-stack products — practical software that
              turns ideas into shipped work.
            </p>
            <div className="font-mono text-[11px] uppercase tracking-widest text-ink-mute">
              <div>Colombo / Remote</div>
              <div className="mt-1">{new Date().getFullYear()}</div>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-3">
            <ButtonLink href="/projects" icon>View Work</ButtonLink>
            <ButtonLink href="/resume.pdf" external variant="secondary">
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
