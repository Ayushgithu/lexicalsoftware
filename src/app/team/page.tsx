import type { Metadata } from "next";
import { Users } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/primitives";
import { team } from "@/data/team";
import TeamCard from "@/components/shared/TeamCard";
import Reveal from "@/components/shared/Reveal";

export const metadata: Metadata = {
  title: "Team | Lexical Software",
  description:
    "Meet the engineers at Lexical Software — full-stack coverage across Java/Spring Boot, React, MySQL, and AWS.",
};

export default function TeamPage() {
  return (
    <Section className="bg-grid">
      <SectionHeading
        eyebrow="Team"
        title="The engineers behind Lexical Software"
        description="Full-stack coverage across Java/Spring Boot, React, UI/UX design, and cloud infrastructure — with each member's core tech stack and direct contact info."
        align="center"
      />

      <div className="mt-14 grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member, index) => (
          <Reveal
            key={member.slug}
            delay={(index % 3) * 80}
            className="h-full"
          >
            <TeamCard member={member} />
          </Reveal>
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-dashed border-lexical-orange/40 bg-panel/70 p-6 text-center">
        <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-lexical-gradient text-white">
          <Users className="h-4 w-4" />
        </span>
        <p className="mt-3 font-display text-lg font-600 text-ink">
          And that&apos;s not everyone.
        </p>
        <p className="mt-1 text-sm leading-relaxed text-ink-muted">
          We have more teammates and employees working behind the scenes across
          development, design and testing, helping deliver every project on
          time.
        </p>
      </div>
    </Section>
  );
}