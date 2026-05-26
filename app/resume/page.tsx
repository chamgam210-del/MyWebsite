import { ArrowUpRight, GraduationCap, Award, BadgeCheck, Quote } from "lucide-react";
import ButtonLink from "@/components/ButtonLink";

export const metadata = {
  title: "Resume — Chamath Guruge",
  description:
    "Software Engineer II at Oliver Wyman Vector. Full-stack development, AI integration, automation, Java / Spring Boot / React / Python.",
};

type Role = {
  company: string;
  title: string;
  period: string;
  location?: string;
  type?: string;
  bullets: string[];
  skills?: string[];
};

const roles: Role[] = [
  {
    company: "Oliver Wyman Vector",
    title: "Software Engineer II",
    period: "Jan 2025 — Present",
    location: "Toronto, ON · Hybrid",
    type: "Full-time",
    bullets: [
      "Design, build, and optimize full-stack web applications using Java, Spring Boot, JavaScript, React, Node.js, and SQL — improving system performance and scalability.",
      "Integrate generative AI into the development workflow to accelerate documentation, code generation, and automation, lifting engineering productivity by ~25%.",
      "Automate manual workflows with Python pipelines, reducing repetitive effort by ~50% and freeing the team to focus on higher-value work.",
      "Diagnose and resolve critical production issues, cutting bug volume by ~35% and stabilizing the user experience.",
      "Run Agile delivery with JIRA — sprint planning, backlog grooming, and cross-functional coordination — keeping releases predictable.",
      "Modernize legacy modules and refactor system architecture to reduce technical debt and prepare the platform for future scale.",
    ],
    skills: ["Java", "Spring Boot", "React", "Node.js", "SQL", "Python", "Generative AI", "Agile / JIRA"],
  },
  {
    company: "Oliver Wyman Vector",
    title: "Software Engineer",
    period: "Feb 2024 — Jan 2025",
    location: "Toronto, ON · Hybrid",
    type: "Full-time",
    bullets: [
      "Developed and maintained DIGIMAINT, a Java-based web application — designed and shipped new features end-to-end.",
      "Debugged and resolved software defects, raising overall reliability and performance.",
      "Modernized and refactored legacy code paths, improving efficiency and scalability.",
      "Led the integration of AI-driven capabilities to extend business functionality.",
      "Automated internal processes to streamline workflows across the team.",
    ],
    skills: ["Java", "JavaScript", "HTML", "SQL", "Python", "AI Integration"],
  },
  {
    company: "AeroSoft Systems Inc.",
    title: "Software Engineer",
    period: "Nov 2023 — Feb 2024",
    location: "Mississauga, ON",
    type: "Full-time",
    bullets: [
      "Joined the engineering team prior to the company's transition into Oliver Wyman Vector.",
      "Contributed to the DIGIMAINT product suite and early AI integration efforts.",
    ],
    skills: ["Java", "Artificial Intelligence"],
  },
  {
    company: "AeroSoft Systems Inc.",
    title: "Junior Quality Engineer",
    period: "Jul 2023 — Jan 2024",
    location: "Mississauga, ON",
    type: "Full-time",
    bullets: [
      "Designed and executed automated and manual test suites covering core product flows.",
      "Built test automation that surfaced regressions earlier in the release cycle.",
    ],
    skills: ["Test Automation", "Selenium", "Manual Testing"],
  },
  {
    company: "Cineplex",
    title: "Technical Specialist",
    period: "Feb 2016 — May 2016",
    location: "Toronto, ON",
    type: "Full-time",
    bullets: [
      "Provided in-venue technical support and troubleshooting across cinema systems.",
    ],
  },
];

const education = [
  {
    school: "University of Toronto",
    degree: "Bachelor of Engineering — Industrial Engineering",
    period: "2017 — 2021",
    extra: "Coursework: APS360 Fundamentals of Machine Learning · MIE463 Integrated System Design · TensorFlow",
  },
];

const certs = [
  {
    name: "Sequence Models",
    issuer: "Coursera (DeepLearning.AI)",
    date: "Sep 2022",
    credential: "BJ4HPTXLURHA",
    tags: ["Artificial Intelligence"],
  },
  {
    name: "Natural Language Processing in TensorFlow",
    issuer: "Coursera (DeepLearning.AI)",
    date: "Sep 2022",
    credential: "W9QAHLS9V5K6",
    tags: ["AI", "TensorFlow"],
  },
];

const honors = [
  {
    title: "Edward S. Rogers Sr. Admission Scholarship",
    issuer: "University of Toronto",
  },
];

export default function ResumePage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
          <div className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">
            00 — Resume
          </div>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl italic leading-[0.95] tracking-tightest text-ink sm:text-7xl">
            Software Engineer building <span className="text-accent">AI-driven</span> products.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-dim">
            Currently Software Engineer II at <span className="text-ink">Oliver Wyman Vector</span> in
            Toronto, where I work across the full stack — Java, Spring Boot, React, Node, SQL — and
            lead generative-AI and automation work that ships into production.
          </p>
          <div className="mt-8 flex flex-wrap gap-2 font-mono text-[11px] uppercase tracking-widest text-ink-mute">
            <span>Markham, ON · Canada</span>
            <span>·</span>
            <span>Open to: On-site / Hybrid / Remote</span>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="/resume.pdf" external variant="secondary">Download PDF</ButtonLink>
            <ButtonLink href="/contact" icon>Get in touch</ButtonLink>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">01</span>
            <h2 className="font-serif text-3xl italic tracking-tightest text-ink sm:text-4xl">
              Experience
            </h2>
          </div>

          <ol className="mt-12 divide-y divide-white/[0.06] border-y border-white/[0.06]">
            {roles.map((r, i) => (
              <li key={i} className="grid grid-cols-12 gap-4 py-10">
                <div className="col-span-12 sm:col-span-3">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">
                    {r.period}
                  </div>
                  {r.location && (
                    <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-ink-mute">
                      {r.location}
                    </div>
                  )}
                  {r.type && (
                    <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-ink-mute">
                      {r.type}
                    </div>
                  )}
                </div>
                <div className="col-span-12 sm:col-span-9">
                  <div className="font-serif text-2xl italic tracking-tightest text-ink sm:text-3xl">
                    {r.title}
                  </div>
                  <div className="mt-1 text-sm text-ink-dim">
                    <span className="text-accent">{r.company}</span>
                  </div>
                  <ul className="mt-5 space-y-2.5 text-base leading-relaxed text-ink-dim">
                    {r.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3">
                        <span className="mt-2 inline-block h-1 w-1 flex-none rounded-full bg-accent/70" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  {r.skills && (
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {r.skills.map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-ink-dim"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">02</span>
            <h2 className="font-serif text-3xl italic tracking-tightest text-ink sm:text-4xl">
              Education
            </h2>
          </div>
          <div className="mt-10 divide-y divide-white/[0.06] border-y border-white/[0.06]">
            {education.map((e) => (
              <div key={e.school} className="grid grid-cols-12 gap-4 py-8">
                <div className="col-span-12 sm:col-span-3">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">
                    {e.period}
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-9">
                  <div className="flex items-baseline gap-2">
                    <GraduationCap className="h-5 w-5 flex-none text-accent" />
                    <div className="font-serif text-2xl italic tracking-tightest text-ink">
                      {e.school}
                    </div>
                  </div>
                  <div className="mt-2 text-base text-ink-dim">{e.degree}</div>
                  {e.extra && (
                    <div className="mt-2 font-mono text-[11px] uppercase tracking-widest text-ink-mute">
                      {e.extra}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">03</span>
            <h2 className="font-serif text-3xl italic tracking-tightest text-ink sm:text-4xl">
              Certifications
            </h2>
          </div>
          <ul className="mt-10 divide-y divide-white/[0.06] border-y border-white/[0.06]">
            {certs.map((c) => (
              <li key={c.name} className="grid grid-cols-12 items-baseline gap-4 py-6">
                <div className="col-span-12 sm:col-span-3">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">
                    {c.date}
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-9">
                  <div className="flex items-baseline gap-2">
                    <BadgeCheck className="h-4 w-4 flex-none text-accent" />
                    <div className="font-serif text-xl italic tracking-tightest text-ink sm:text-2xl">
                      {c.name}
                    </div>
                  </div>
                  <div className="mt-1 text-sm text-ink-dim">
                    {c.issuer} · <span className="font-mono text-[11px] uppercase tracking-widest text-ink-mute">ID {c.credential}</span>
                  </div>
                  {c.tags && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {c.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-ink-dim"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* HONORS */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">04</span>
            <h2 className="font-serif text-3xl italic tracking-tightest text-ink sm:text-4xl">
              Honors & awards
            </h2>
          </div>
          <ul className="mt-10 divide-y divide-white/[0.06] border-y border-white/[0.06]">
            {honors.map((h) => (
              <li key={h.title} className="flex items-center gap-3 py-6">
                <Award className="h-5 w-5 flex-none text-accent" />
                <div>
                  <div className="font-serif text-xl italic tracking-tightest text-ink">{h.title}</div>
                  <div className="text-sm text-ink-dim">{h.issuer}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* RECOMMENDATION */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">05</span>
            <h2 className="font-serif text-3xl italic tracking-tightest text-ink sm:text-4xl">
              Recommendation
            </h2>
          </div>

          <figure className="mt-10 grid grid-cols-12 gap-6">
            <div className="col-span-12 sm:col-span-1">
              <Quote className="h-8 w-8 text-accent" />
            </div>
            <div className="col-span-12 sm:col-span-11">
              <blockquote className="font-serif text-2xl italic leading-snug tracking-tightest text-ink sm:text-3xl">
                &ldquo;Chamath&rsquo;s expertise in AI and machine learning stood out early in his
                career, and he has consistently been at the forefront of integrating AI tools into
                our software development and testing processes. His innovative approach has
                significantly enhanced our ability to embed AI into our workflows, improving
                efficiency and quality.&rdquo;
              </blockquote>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-dim">
                I had the privilege of hiring Chamath directly from university to join AeroSoft
                Systems (now Oliver Wyman Vector) as a QA Engineer and Software Developer. From day
                one, Chamath demonstrated a strong work ethic, exceptional technical skills, and a
                deep passion for technology. He is a dedicated, highly skilled professional who
                continuously seeks to learn and grow.
              </p>
              <figcaption className="mt-6 border-l-2 border-accent pl-4">
                <div className="font-serif text-lg italic text-ink">Barend Van De Vrande</div>
                <div className="text-sm text-ink-dim">
                  Independent Aviation MRO IT Systems Advisor · Hiring Manager at AeroSoft / Oliver Wyman Vector
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-ink-mute">
                  June 2025
                </div>
              </figcaption>
            </div>
          </figure>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
          <h3 className="font-serif text-3xl italic tracking-tightest text-ink sm:text-5xl">
            Have a role or project in mind?
          </h3>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/contact" icon>Contact me</ButtonLink>
            <ButtonLink href="/projects" variant="secondary">See projects <ArrowUpRight className="h-4 w-4" /></ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
