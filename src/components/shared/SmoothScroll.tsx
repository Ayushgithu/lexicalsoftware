"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

let instance: Lenis | null = null;

/** Smoothly scroll to the top (falls back to native scrolling). */
export function scrollToTop() {
  if (instance) instance.scrollTo(0);
  else window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    // Respect reduced-motion: keep the browser's native scrolling.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      anchors: true,
      autoRaf: true,
    });
    instance = lenis;

    return () => {
      lenis.destroy();
      instance = null;
    };
  }, []);

  // New page -> start at the top.
  useEffect(() => {
    instance?.scrollTo(0, { immediate: true });
  }, [pathname]);

  return null;
}