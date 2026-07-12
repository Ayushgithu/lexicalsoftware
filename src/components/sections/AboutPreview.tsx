"use client";

import { CheckCircle2, Target, Compass } from "lucide-react";
import { Section, SectionHeading, SecondaryButton } from "@/components/ui/primitives";
import { TechCardCanvas } from "./TechCardCanvas";

const points = [
  "Senior engineers, not account managers, on every call",
  "Transparent timelines with weekly staging deploys",
  "Code you own outright — no platform lock-in",
];

export default function AboutPreview() {
  return (
    <Section className="border-t border-line relative overflow-hidden">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        {/* Left Content */}
        <div>
          <SectionHeading
            eyebrow="Who we are"
            title="A small team that ships like a much bigger one"
          />
          <p className="mt-6 text-base leading-relaxed text-ink-muted">
            Lexical Software is a consulting group built around full-stack
            engineers who work across the entire web stack &mdash; from Next.js
            and React on the frontend to Java, Spring Boot, and PostgreSQL on
            the backend, deployed on cloud infrastructure we configure and
            monitor ourselves.
          </p>
          <ul className="mt-8 space-y-4">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-lexical-orange" />
                <span className="text-sm font-medium text-ink">{point}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <SecondaryButton href="/about">More About Us</SecondaryButton>
          </div>
        </div>

        {/* Right Card with Three.js Background */}
        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-panel/60 p-8 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-lexical-orange/40 hover:shadow-lexical-orange/5 lg:p-10">
          
          {/* Ambient Lighting Glows */}
          <div className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-lexical-orange/10 blur-3xl transition-all duration-500 group-hover:bg-lexical-orange/20" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />

          {/* 3D Canvas Layer */}
          <TechCardCanvas />

          {/* Card Content Overlay */}
          <div className="relative z-10 space-y-8">
            {/* Mission Section */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4 text-lexical-orange" />
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-ink-muted">
                  Mission
                </span>
              </div>
              <p className="text-xl font-display font-semibold leading-relaxed text-ink">
                Build software that earns its place in production &mdash; fast,
                maintainable, and made to be handed off cleanly.
              </p>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-transparent via-line to-transparent" />
            

            {/* Vision Section */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Compass className="h-4 w-4 text-lexical-orange" />
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-ink-muted">
                  Vision
                </span>
              </div>
              <p className="text-xl font-display font-semibold leading-relaxed text-ink">
                To be the engineering partner founders call before their first
                full-time hire &mdash; and keep calling after their tenth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}