import TechBadge from "./TechBadge";
import { WrenchDeskPhone, TummyTrackerPhone, CasperPhone } from "./VisualMockups";
import type { Project } from "@/lib/projects";

export default function ProjectHero({ project }: { project: Project }) {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 -z-10 bg-grid-fade" />
      <div className="absolute inset-0 -z-10 bg-dots opacity-40" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
        <div>
          <div className="mb-4 flex flex-wrap items-center gap-2 text-xs">
            <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 uppercase tracking-widest text-white/70">
              {project.category}
            </span>
            <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 uppercase tracking-widest text-emerald-200">
              {project.status}
            </span>
          </div>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-3 text-xl text-white/70">{project.tagline}</p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65">
            {project.shortDescription}
          </p>
          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.techStack.map((t) => (
              <TechBadge key={t}>{t}</TechBadge>
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <ProjectHeroVisual visualType={project.visualType} />
        </div>
      </div>
    </section>
  );
}

function ProjectHeroVisual({ visualType }: { visualType: string }) {
  if (visualType === "wrenchdesk") return <WrenchDeskPhone />;
  if (visualType === "tummy-tracker") return <TummyTrackerPhone />;
  if (visualType === "casper") return <CasperPhone />;
  return null;
}
