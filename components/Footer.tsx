import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const social = [
  { label: "Email", href: "mailto:chamz_210@hotmail.com" },
  { label: "GitHub", href: "https://github.com/chamgam210-del" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/chamath-guruge-3442a8127" },
];

const internal = [
  { href: "/projects", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10">
        <div className="flex items-end justify-between gap-6">
          <h2 className="font-serif text-5xl italic leading-[0.95] tracking-tightest text-ink sm:text-7xl">
            Let's build<br />something.
          </h2>
          <Link
            href="/contact"
            className="group hidden items-baseline gap-1.5 font-mono text-[11px] uppercase tracking-widest text-accent sm:inline-flex"
          >
            Start a project
            <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 border-t border-white/[0.06] pt-8 sm:grid-cols-3">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">
              Elsewhere
            </p>
            <ul className="mt-3 space-y-1.5">
              {social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group inline-flex items-baseline gap-1.5 text-sm text-ink-dim transition hover:text-ink"
                  >
                    {s.label}
                    <ArrowUpRight className="h-3 w-3 opacity-50 transition group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">
              Site
            </p>
            <ul className="mt-3 space-y-1.5">
              {internal.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="text-sm text-ink-dim hover:text-ink">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:text-right">
            <p className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">
              Colophon
            </p>
            <p className="mt-3 text-sm text-ink-dim">
              Next.js · Tailwind · Vercel
            </p>
            <p className="mt-1 font-mono text-[10px] text-ink-mute">
              © {new Date().getFullYear()} Chamath
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
