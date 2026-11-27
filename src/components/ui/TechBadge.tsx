import type { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiSupabase,
  SiResend,
  SiFirebase,
  SiVercel,
  SiCloudinary,
  SiRazorpay,
  SiGooglesheets,
  SiOpencv,
  SiPrisma,
  SiShadcnui,
  SiPython,
  SiFastapi,
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiPhp,
  SiSpringboot,
} from "react-icons/si";
import { cn } from "@/lib/utils";

// Brand icon + colour for each technology. "currentColor" is used for
// black/white brand marks so they stay visible in both light and dark mode.
// Technologies not listed here (e.g. AWS, Java) simply render as text only.
const techIcons: Record<string, { icon: IconType; color: string }> = {
  "next.js": { icon: SiNextdotjs, color: "currentColor" },
  typescript: { icon: SiTypescript, color: "#3178C6" },
  "tailwind css": { icon: SiTailwindcss, color: "#06B6D4" },
  mongodb: { icon: SiMongodb, color: "#47A248" },
  supabase: { icon: SiSupabase, color: "#3ECF8E" },
  resend: { icon: SiResend, color: "currentColor" },
  firebase: { icon: SiFirebase, color: "#FFA000" },
  vercel: { icon: SiVercel, color: "currentColor" },
  cloudinary: { icon: SiCloudinary, color: "#3448C5" },
  razorpay: { icon: SiRazorpay, color: "#3395FF" },
  "google sheets": { icon: SiGooglesheets, color: "#34A853" },
  opencv: { icon: SiOpencv, color: "#5C3EE8" },
  prisma: { icon: SiPrisma, color: "currentColor" },
  "shadcn ui": { icon: SiShadcnui, color: "currentColor" },
  python: { icon: SiPython, color: "#3776AB" },
  fastapi: { icon: SiFastapi, color: "#009688" },
  react: { icon: SiReact, color: "#61DAFB" },
  "node.js": { icon: SiNodedotjs, color: "#5FA04E" },
  postgresql: { icon: SiPostgresql, color: "#4169E1" },
  mysql: { icon: SiMysql, color: "#4479A1" },
  redis: { icon: SiRedis, color: "#FF4438" },
  php: { icon: SiPhp, color: "#777BB4" },
  "spring boot": { icon: SiSpringboot, color: "#6DB33F" },
};

export default function TechBadge({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const entry = techIcons[name.toLowerCase()];
  const Icon = entry?.icon;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border border-panel-border bg-base px-2.5 py-1 font-mono text-xs text-ink-muted",
        className
      )}
    >
      {Icon && (
        <Icon
          className="h-3.5 w-3.5 shrink-0 text-ink"
          style={entry.color === "currentColor" ? undefined : { color: entry.color }}
          aria-hidden="true"
        />
      )}
      {name}
    </span>
  );
}