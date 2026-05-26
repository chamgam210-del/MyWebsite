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
    body: "Prototype fast, harden what matters. Working v1 over perfect spec. Drafts over auto-actions, on-device over cloud when it makes sense, clear UX over clever architecture.",
  },
  {
    n: "03",
    title: "Background",
    body: "Industrial Engineering at the University of Toronto (2017–2021), with machine-learning coursework in APS360. Started in QA at AeroSoft Systems, moved into software engineering, and now lead AI integration work at Oliver Wyman Vector.",
  },
  {
    n: "04",
    title: "Current focus",
    body: "On-device AI on Android (wake word, local LLMs, streaming voice), RAG and agent workflows that solve real operational pain, and small-business automation that respects existing workflows.",
  },
  {
    n: "05",
    title: "What I’m looking for",
    body: "I’m interested in AI product engineering roles, Android apps with AI features, small-business automation tools, voice/vision assistants, local AI experiments, and freelance MVP/prototype builds.",
  },
];

const techGroups = [
  { label: "Languages", items: ["Java", "TypeScript", "JavaScript", "Python", "Kotlin", "SQL", "HTML", "C/C++ (JNI)"] },
  { label: "Backend / Enterprise", items: ["Spring Boot", "Node.js", "FastAPI", "Flask", "REST APIs", "SQL databases"] },
  { label: "Web", items: ["Next.js", "React", "Tailwind CSS"] },
  { label: "Mobile", items: ["Jetpack Compose", "Material 3", "Room", "Hilt", "DataStore", "CameraX", "Foreground services"] },
  { label: "AI / ML", items: ["OpenAI API", "Whisper", "GPT-4o-mini", "llama.cpp", "Qwen / local LLMs", "RAG", "ChromaDB", "Embeddings", "TensorFlow", "ML Kit"] },
  { label: "QA / Testing", items: ["Selenium", "Test Automation", "Manual Testing"] },
  { label: "Tooling & Process", items: ["Git / GitHub", "JIRA", "Agile", "Vercel", "Docker", "Gradle", "Android Studio", "ADB", "Firecrawl", "MCP"] },
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
            Software engineer who ships practical{" "}
            <span className="text-accent">AI</span> products.
          </h1>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-ink-dim">
            I’m Chamath Guruge — I build Android apps, AI assistants, and
            automation tools end-to-end. Engineering plus QA roots, a bias for
            shipping working v1s over polished specs, and a focus on AI / mobile
            / automation.
          </p>
          <div className="mt-8 font-mono text-[11px] uppercase tracking-widest text-ink-mute">
            Markham, Ontario · Canada
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/contact" icon>Contact Me</ButtonLink>
            <ButtonLink href="/projects" variant="secondary">View Work</ButtonLink>
            <ButtonLink href="/resume" variant="ghost">Resume</ButtonLink>
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
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">06</span>
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
