"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/utils";
import { navIconMap } from "@/lib/icons";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   const onScroll = () => setScrolled(window.scrollY > 8);
  //   onScroll();
  //   window.addEventListener("scroll", onScroll);
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  // useEffect(() => {
  //   setOpen(false);
  // }, [pathname]);
  return (
    <header className=" fixed top-0 left-0 right-0 z-50  ">
      <nav
        className={cn(
          "flex backdrop-blur-sm items-center justify-between   bg-white/30  lg:px-40 md:px-24 sm:px-24 p-4 py-3.5 shadow-sm transition-all duration-300",
          scrolled
            ? "border-panel-border shadow-md"
            : "border-panel-border/60 shadow-sm"
        )}
      >
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <span className="relative h-11 w-11 overflow-hidden rounded-md shadow-md shadow-blue-500/20 ring-1 ring-panel-border transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
            <Image
              src="https://res.cloudinary.com/lexicalsoftware/image/upload/v1783762418/lexicalsoftware.jpg"
              alt="Lexical Software logo"
              fill
              sizes="44px"
              className="object-cover"
              priority
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-extrabold tracking-wider text-ink">
              LEXICAL
            </span>
            <span className="-mt-1.5 font-mono text-[14.5px] font-bold tracking-widest text-lexical-orange">
              SOFTWARE
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            const Icon = navIconMap[link.icon];
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1.5 text-sm transition-colors duration-200",
                    isActive
                      ? "font-semibold text-lexical-orange underline underline-offset-4 decoration-2"
                      : "font-medium text-ink-muted hover:text-lexical-orange link-underline"
                  )}
                >
                  <Icon className="h-3.5 w-3.5"  />
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="hidden items-center lg:flex">
          <Link
            href="/contact"
            className="rounded-md bg-blue-600  px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:shadow-md hover:brightness-105 active:scale-[0.98]"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded border border-panel-border bg-base p-2 text-ink transition-colors hover:border-lexical-orange/50"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="mx-auto mt-2 max-w-7xl rounded-md border border-panel-border bg-panel/95 px-6 pb-6 pt-2 shadow-lg backdrop-blur-md lg:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              const Icon = navIconMap[link.icon];
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center gap-2.5 rounded-sm px-3 py-3 text-sm font-medium",
                      isActive
                        ? "bg-lexical-orange/10 font-semibold text-lexical-orange"
                        : "text-ink hover:bg-base"
                    )}
                  >
                    <Icon
                      className={cn(
                        "h-4 w-4",
                         isActive
                        ? "bg-lexical-orange/10 font-semibold text-lexical-orange"
                        : "text-ink hover:bg-base"
                      )}
                    />
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/contact"
            className="mt-4  rounded-md bg-blue-600  text-center text-md font-semibold text-white"
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}