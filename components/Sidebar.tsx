"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Home,
  User,
  FileText,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Menu,
  X,
} from "lucide-react";
import { clsx } from "@/lib/cn";

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/resume.pdf", label: "Resume", icon: FileText, external: true },
  { href: "/projects", label: "Portfolio", icon: Briefcase },
  { href: "/contact", label: "Contact", icon: Mail },
];

const socials = [
  { href: "https://twitter.com/", icon: Twitter, label: "Twitter" },
  { href: "https://github.com/", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/", icon: Linkedin, label: "LinkedIn" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile top bar */}
      <div className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-white/[0.06] bg-bg/90 px-5 py-3 backdrop-blur lg:hidden">
        <Link href="/" className="font-serif text-xl italic text-ink">
          Chamath
        </Link>
        <button
          onClick={() => setOpen((o) => !o)}
          className="rounded-md p-2 text-ink-dim hover:bg-white/5"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Sidebar — fixed on desktop, drawer on mobile */}
      <aside
        className={clsx(
          "fixed inset-y-0 left-0 z-50 flex w-72 flex-col items-center gap-6 border-r border-white/[0.06] bg-bg-soft px-6 py-10 transition-transform duration-300",
          "lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3 rounded-md p-1.5 text-ink-dim hover:bg-white/5 lg:hidden"
          aria-label="Close menu"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Avatar */}
        <Link href="/" className="group relative block">
          <div className="h-28 w-28 overflow-hidden rounded-full border-2 border-white/10 bg-bg-card transition group-hover:border-accent/50">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/avatar.jpg"
              alt="Chamath"
              className="h-full w-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
        </Link>

        <div className="text-center">
          <div className="font-serif text-2xl italic leading-tight tracking-tightest text-ink">
            Chamath
          </div>
          <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-ink-mute">
            Software · AI
          </div>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-ink-dim transition hover:border-accent/50 hover:text-accent"
            >
              <s.icon className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>

        {/* Nav */}
        <nav className="mt-2 w-full">
          <ul className="flex flex-col">
            {links.map((l) => {
              const active = l.external
                ? false
                : l.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(l.href);
              const Icon = l.icon;
              const content = (
                <span
                  className={clsx(
                    "group flex items-center gap-3 border-l-2 px-4 py-3 font-mono text-[11px] uppercase tracking-widest transition",
                    active
                      ? "border-accent text-accent"
                      : "border-transparent text-ink-dim hover:border-white/30 hover:text-ink"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {l.label}
                </span>
              );
              return (
                <li key={l.href}>
                  {l.external ? (
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                    >
                      {content}
                    </a>
                  ) : (
                    <Link href={l.href} onClick={() => setOpen(false)}>
                      {content}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-auto font-mono text-[10px] uppercase tracking-widest text-ink-mute">
          © {new Date().getFullYear()}
        </div>
      </aside>

      {/* Mobile overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
        />
      )}
    </>
  );
}
