import Link from "next/link";
import { ArrowRight, ExternalLink, Star, Zap } from "lucide-react";
import type { Project } from "@/data/projects";
import TechBadge from "@/components/ui/TechBadge";
import RemoteImage from "@/components/shared/RemoteImage";
import { cn } from "@/lib/utils";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-panel shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-500/15",
        project.featured
          ? "border-lexical-orange/40 hover:border-lexical-orange"
          : "border-panel-border hover:border-lexical-orange/50"
      )}
    >
      {project.poweredByLexical && (
        <div className="absolute inset-x-0 top-0 z-20 h-0.5 bg-lexical-gradient" />
      )}

      {/* Image */}
      <Link
        href={`/portfolio/${project.slug}`}
        className="relative block h-52 shrink-0 overflow-hidden border-b border-line bg-base"
      >
        <div className="h-full w-full transition-transform duration-700 group-hover:scale-105">
          <RemoteImage
            publicId={project.cloudinaryId ?? ""}
            imageUrl={project.imageUrl}
            alt={`${project.name} screenshot`}
            width={800}
            height={450}
            fallbackLabel={project.category}
            className="object-top"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {project.featured && (
          <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full border border-lexical-orange/30 bg-base/85 px-3 py-1 backdrop-blur-sm">
            <Star className="h-3 w-3 fill-lexical-amber text-lexical-amber" />
            <span className="font-mono text-[10px] font-600 uppercase tracking-[0.15em] text-lexical-amber">
              Featured
            </span>
          </div>
        )}

        <span className="absolute right-3 top-3 rounded-full border border-panel-border bg-base/85 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-ink-muted backdrop-blur-sm">
          {project.category}
        </span>

        {project.poweredByLexical && (
          <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 py-1 pl-1 pr-3 shadow-lg backdrop-blur-md">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-lexical-gradient">
              <Zap className="h-3 w-3 fill-white text-white" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-white/70">
              Powered by
            </span>
            <span className="-ml-1 font-display text-[11px] font-700 text-white">
              Lexical Software
            </span>
          </div>
        )}
      </Link>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <Link href={`/portfolio/${project.slug}`}>
          <h3 className="font-display text-xl font-600 text-ink transition-colors group-hover:text-lexical-orange">
            {project.name}
          </h3>
        </Link>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-muted">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>

        {/* Footer (always pinned to the bottom so all cards line up) */}
        <div className="mt-auto pt-6">
          <div className="flex items-center justify-between gap-3 border-t border-line pt-4">
            <Link
              href={`/portfolio/${project.slug}`}
              className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-muted transition-colors group-hover:text-lexical-orange"
            >
              View Case Study
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-lexical-orange/40 bg-lexical-orange/10 px-3 py-1 font-mono text-xs text-lexical-orange transition-colors hover:bg-lexical-orange hover:text-white"
              >
                Live Site
                <ExternalLink className="h-3 w-3" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}