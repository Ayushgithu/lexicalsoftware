import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Lightbulb,
  Zap,
} from "lucide-react";
import { Section, SectionHeading, Pill } from "@/components/ui/primitives";
import TechBadge from "@/components/ui/TechBadge";
import RemoteImage from "@/components/shared/RemoteImage";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} | Lexical Software Portfolio`,
    description: project.description,
  };
}

function hostOf(url: string) {
  try {
    return new URL(url).host;
  } catch {
    return url;
  }
}

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* Hero: text on the left, full (uncropped) screenshot on the right */}
      <Section className="bg-grid">
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 font-mono text-xs text-ink-muted hover:text-lexical-orange"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to portfolio
        </Link>

        <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Pill>{project.category}</Pill>
              {project.poweredByLexical && (
                <span className="inline-flex items-center gap-2 rounded-full border border-lexical-orange/40 bg-lexical-orange/10 py-1 pl-1 pr-3.5">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-lexical-gradient">
                    <Zap className="h-3.5 w-3.5 fill-white text-white" />
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                    Powered by
                  </span>
                  <span className="-ml-1 font-display text-sm font-700 text-lexical-orange">
                    Lexical Software
                  </span>
                </span>
              )}
            </div>

            <h1 className="mt-4 font-display text-4xl font-700 text-ink sm:text-5xl">
              {project.name}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <TechBadge key={tech} name={tech} />
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-lexical-orange px-5 py-2.5 font-display text-sm font-600 text-lexical-orange transition-all hover:-translate-y-0.5 hover:bg-lexical-orange hover:text-white"
                >
                  Visit Live Site
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-lexical-gradient px-5 py-2.5 font-display text-sm font-600 text-base transition-transform hover:-translate-y-0.5"
              >
                Discuss a Similar Project
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Browser-style frame; image keeps its natural ratio so nothing is cut */}
          <div className="overflow-hidden rounded-2xl border border-panel-border bg-panel shadow-xl shadow-blue-500/10">
            <div className="flex items-center gap-3 border-b border-line bg-base px-4 py-2.5">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              </div>
              <div className="min-w-0 flex-1 truncate rounded-full border border-panel-border bg-panel px-3 py-0.5 text-center font-mono text-[11px] text-ink-muted">
                {project.liveUrl ? hostOf(project.liveUrl) : project.slug}
              </div>
            </div>
            <RemoteImage
              publicId={project.cloudinaryId ?? ""}
              imageUrl={project.imageUrl}
              alt={`${project.name} screenshot`}
              width={1400}
              height={800}
              fallbackLabel="Screenshot placeholder"
              className="h-auto min-h-[200px] object-contain"
            />
          </div>
        </div>
      </Section>

      {/* Overview + problem / solution */}
      <Section className="border-t border-line">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHeading eyebrow="Overview" title="Project overview" />
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              {project.overview}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-panel-border bg-panel p-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-500/10 text-red-500">
                <AlertCircle className="h-4 w-4" />
              </span>
              <h3 className="mt-4 font-display text-lg font-700 text-ink">
                The problem
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {project.problem}
              </p>
            </div>
            <div className="rounded-2xl border border-lexical-orange/30 bg-lexical-orange/5 p-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-lexical-gradient text-white">
                <Lightbulb className="h-4 w-4" />
              </span>
              <h3 className="mt-4 font-display text-lg font-700 text-ink">
                Our solution
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Results + features */}
      <Section className="border-t border-line">
        <div className="grid gap-4 sm:grid-cols-3">
          {project.results.map((result) => (
            <div
              key={result.label}
              className="rounded-2xl border border-panel-border bg-panel p-6 text-center"
            >
              <p className="font-display text-3xl font-700 text-gradient-lexical">
                {result.value}
              </p>
              <p className="mt-2 font-mono text-xs uppercase tracking-wider text-ink-muted">
                {result.label}
              </p>
            </div>
          ))}
        </div>

        <h3 className="mt-14 font-display text-xl font-700 text-ink">
          Key features
        </h3>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 rounded-xl border border-panel-border bg-panel px-4 py-3 text-sm text-ink"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-lexical-orange" />
              {feature}
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}