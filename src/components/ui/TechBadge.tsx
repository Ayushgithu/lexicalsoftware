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
  SiElectron,
} from "react-icons/si";
import { cn } from "@/lib/utils";

// Brand icon + colour for each technology. "currentColor" marks black/white
// brand logos, which are drawn dark on the white circle.
// Technologies not listed here (e.g. AWS, Java) render as text only.
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
  electron: { icon: SiElectron, color: "#47848F" },
};

function getTech(name: string): { icon: IconType; color: string } | undefined {
  return techIcons[name.toLowerCase()];
}

export default function TechBadge({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const entry = getTech(name);
  const Icon = entry?.icon;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-panel-border bg-base py-1 pr-3 font-mono text-xs text-ink-muted transition-colors hover:border-lexical-orange/40 hover:text-ink",
        Icon ? "pl-1" : "pl-3",
        className
      )}
    >
      {entry && Icon && (
        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-200">
          <Icon
            className="h-3 w-3"
            style={{
              color: entry.color === "currentColor" ? "#0f172a" : entry.color,
            }}
            aria-hidden="true"
          />
        </span>
      )}
      {name}
    </span>
  );
}