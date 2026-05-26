import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import TechBadge from "./TechBadge";
import { ProjectThumb } from "./VisualMockups";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-bg-card transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:shadow-glow"
    >
      <div className="relative h-56 w-full overflow-hidden border-b border-white/5">
        <ProjectThumb visualType={project.visualType} />
        <div className="absolute right-3 top-3 flex items-center gap-1.5">
          <span className="rounded-full border border-white/10 bg-black/40 px-2 py-0.5 text-[10px] uppercase tracking-widest text-white/70 backdrop-blur">
            {project.status}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <div className="text-[10px] uppercase tracking-widest text-white/40">
            {project.category}
          </div>
          <div className="mt-1 flex items-start justify-between gap-3">
            <h3 className="text-xl font-semibold tracking-tight">
              {project.title}
            </h3>
            <ArrowUpRight className="mt-0.5 h-4 w-4 text-white/40 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
          </div>
          <p className="mt-1 text-sm text-white/55">{project.tagline}</p>
        </div>

        <p className="text-sm leading-relaxed text-white/70">
          {project.shortDescription}
        </p>

        <ul className="mt-1 space-y-1">
          {project.highlights.slice(0, 3).map((h) => (
            <li
              key={h}
              className="flex items-start gap-2 text-[12px] text-white/65"
            >
              <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-white/40" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {project.techStack.slice(0, 5).map((t) => (
            <TechBadge key={t}>{t}</TechBadge>
          ))}
          {project.techStack.length > 5 && (
            <TechBadge>+{project.techStack.length - 5}</TechBadge>
          )}
        </div>

        <div className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-white/90 transition group-hover:text-white">
          View case study
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  );
}
