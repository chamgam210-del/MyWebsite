"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { clsx } from "@/lib/cn";

const links = [
  { href: "/", label: "Home", num: "00" },
  { href: "/projects", label: "Work", num: "01" },
  { href: "/about", label: "About", num: "02" },
  { href: "/resume", label: "Resume", num: "03" },
  { href: "/contact", label: "Contact", num: "04" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.06] bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <Link href="/" className="group flex items-baseline gap-2">
          <span className="font-serif text-xl italic leading-none text-ink">
            Chamath Guruge
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-widest text-ink-mute sm:inline">
            software · ai
          </span>
        </Link>

        <nav className="hidden items-center gap-1 sm:flex">
          {links.map((l) => {
            const active =
              l.href === "/" ? pathname === "/" : pathname?.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={clsx(
                  "group inline-flex items-baseline gap-1.5 rounded-full px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest transition-colors",
                  active ? "text-accent" : "text-ink-dim hover:text-ink"
                )}
              >
                <span className="opacity-60">{l.num}</span>
                <span>{l.label}</span>
              </Link>
            );
          })}
        </nav>

        <Link
          href="/contact"
          className="hidden items-center gap-1.5 rounded-full border border-accent/40 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-widest text-accent transition hover:bg-accent hover:text-bg sm:inline-flex"
        >
          Contact Me <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>

        <button
          className="rounded-md p-2 text-ink-dim hover:bg-white/5 sm:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/[0.06] bg-bg px-6 py-2 sm:hidden">
          <div className="flex flex-col">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline justify-between border-b border-white/[0.06] px-1 py-3 font-mono text-xs uppercase tracking-widest text-ink-dim last:border-b-0"
              >
                <span>
                  <span className="mr-2 text-ink-mute">{l.num}</span>
                  {l.label}
                </span>
                <ArrowUpRight className="h-4 w-4 text-ink-mute" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

