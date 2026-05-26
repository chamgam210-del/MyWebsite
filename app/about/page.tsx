import TechBadge from "@/components/TechBadge";
import ButtonLink from "@/components/ButtonLink";

export const metadata = {
  title: "About — Chamath",
  description:
    "Software developer focused on AI applications, automation, Android apps, full-stack tools, voice assistants, and RAG systems.",
};

const sections = [
  {
    n: "01",
    title: "What I build",
    body: "AI assistants, voice-first apps, local LLM experiments, RAG applications, Android apps, and business automation tools. I gravitate toward products that combine multiple disciplines — voice + vision, mobile + AI, scraping + scheduling — where the interesting work happens at the seams.",
  },
  {
    n: "02",
    title: "How I work",
    body: "I prototype quickly, then harden what matters. I bias toward shipping a working v1 in front of a real user over a perfect spec. I prefer drafts over auto-actions, on-device over cloud when feasible, and clear UX over clever architecture.",
  },
  {
    n: "03",
    title: "Current focus",
    body: "On-device AI on Android (wake word, local LLMs, streaming voice), RAG and agent workflows that solve actual operational pain, and small-business automation that respects existing workflows instead of forcing change.",
  },
  {
    n: "04",
    title: "Why I build",
    body: "Most of my projects start when someone I know says \u201cI keep dealing with X.\u201d I like turning that frustration into a working tool \u2014 small, focused, and useful \u2014 even when it doesn't ship publicly.",
  },
];

const techGroups = [
  { label: "Languages", items: ["Kotlin", "TypeScript", "Python", "JavaScript", "C/C++ (JNI)"] },
  { label: "Mobile", items: ["Jetpack Compose", "Material 3", "Room", "Hilt", "DataStore", "CameraX", "Foreground services"] },
  { label: "Web", items: ["Next.js", "React", "Tailwind CSS", "FastAPI", "Flask", "Node.js"] },
  { label: "AI / ML", items: ["OpenAI API", "Whisper", "GPT-4o-mini", "llama.cpp", "Qwen / local LLMs", "RAG", "ChromaDB", "Embeddings", "ML Kit"] },
  { label: "Tooling", items: ["GitHub", "Vercel", "Docker", "Gradle", "Android Studio", "ADB", "Tailscale", "Firecrawl", "MCP"] },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
          <div className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">
            00 — About
          </div>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl italic leading-[0.95] tracking-tightest text-ink sm:text-7xl">
            I build useful products at the seams of{" "}
            <span className="text-accent">AI</span>, mobile, and automation.
          </h1>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-ink-dim">
            I like turning ideas into prototypes and prototypes into real products.
            My work spans AI assistants, voice-first apps, local LLM experiments,
            RAG applications, mobile apps, and business automation tools — usually
            in service of a real user with a real problem.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/projects" icon>See work</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">Get in touch</ButtonLink>
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
          <div className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
            {sections.map((s) => (
              <div key={s.title} className="grid grid-cols-12 gap-4 py-10">
                <div className="col-span-12 sm:col-span-3">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">
                    {s.n}
                  </div>
                  <div className="mt-2 font-serif text-2xl italic tracking-tightest text-ink">
                    {s.title}
                  </div>
                </div>
                <p className="col-span-12 max-w-2xl text-base leading-relaxed text-ink-dim sm:col-span-9">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">05</span>
            <h2 className="font-serif text-3xl italic tracking-tightest text-ink sm:text-4xl">
              Stack
            </h2>
          </div>

          <div className="mt-10 divide-y divide-white/[0.06] border-y border-white/[0.06]">
            {techGroups.map((g) => (
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
    </>
  );
}
