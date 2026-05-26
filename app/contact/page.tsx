"use client";

import { useState } from "react";
import { Send, CheckCircle2, Mail, Github, Linkedin } from "lucide-react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:chamz_210@hotmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const channels = [
    {
      label: "Email",
      value: "chamz_210@hotmail.com",
      href: "mailto:chamz_210@hotmail.com",
      Icon: Mail,
      hint: "Best for project inquiries",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/chamath-guruge-3442a8127",
      href: "https://www.linkedin.com/in/chamath-guruge-3442a8127",
      Icon: Linkedin,
      hint: "Professional / recruiting",
    },
    {
      label: "GitHub",
      value: "github.com/chamgam210-del",
      href: "https://github.com/chamgam210-del",
      Icon: Github,
      hint: "Code & open-source",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
          <div className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">
            00 — Contact
          </div>
          <h1 className="mt-6 max-w-4xl font-serif text-6xl italic leading-[0.9] tracking-tightest text-ink sm:text-8xl">
            Say hello<span className="text-accent">.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-dim">
            Open to freelance, full-time, and collaboration on interesting
            AI/product builds. Pick whichever channel works best, or use the
            form below.
          </p>
        </div>
      </section>

      {/* DIRECT CONTACT */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">
              01
            </span>
            <h2 className="font-serif text-3xl italic tracking-tightest text-ink sm:text-4xl">
              Direct contact
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {channels.map(({ label, value, href, Icon, hint }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex flex-col gap-3 rounded-2xl border border-white/[0.08] bg-bg-card p-6 transition hover:border-accent/40"
              >
                <div className="flex items-center justify-between">
                  <Icon className="h-5 w-5 text-ink-dim transition group-hover:text-accent" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">
                    {label}
                  </span>
                </div>
                <div className="font-serif text-lg italic text-ink transition group-hover:text-accent">
                  {value}
                </div>
                <div className="text-xs text-ink-mute">{hint}</div>
              </a>
            ))}
          </div>

          <div className="mt-12 grid gap-2 font-mono text-[11px] uppercase tracking-widest text-ink-mute sm:grid-cols-2">
            <div className="text-ink">Best for</div>
            <ul className="space-y-1.5 text-ink-dim">
              <li>· AI / product prototypes</li>
              <li>· Android apps with AI features</li>
              <li>· Automation for small businesses</li>
              <li>· RAG and voice-first builds</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-3xl px-6 py-20 sm:px-10">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">
              02
            </span>
            <h2 className="font-serif text-3xl italic tracking-tightest text-ink sm:text-4xl">
              Send a message
            </h2>
          </div>
          <p className="mt-4 max-w-xl text-sm text-ink-dim">
            Prefer a form? Fill this out — it&rsquo;ll open your mail client
            pre-filled and addressed to me.
          </p>

          <form onSubmit={handleSubmit} className="mt-10">
            {sent ? (
              <div className="flex flex-col items-start py-8">
                <CheckCircle2 className="h-6 w-6 text-accent" />
                <h3 className="mt-4 font-serif text-3xl italic tracking-tightest text-ink">
                  Message ready to send.
                </h3>
                <p className="mt-3 max-w-md text-sm text-ink-dim">
                  Your mail client should have opened. If it didn&rsquo;t, email{" "}
                  <a
                    className="text-accent underline-offset-4 hover:underline"
                    href="mailto:chamz_210@hotmail.com"
                  >
                    chamz_210@hotmail.com
                  </a>
                  .
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field
                    label="Name"
                    value={form.name}
                    onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                    placeholder="Jane Doe"
                    required
                  />
                  <Field
                    label="Email"
                    type="email"
                    value={form.email}
                    onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                    placeholder="you@company.com"
                    required
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">
                    What&rsquo;s on your mind
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    placeholder="Tell me a bit about the project or opportunity…"
                    className="mt-2 w-full resize-none border-0 border-b border-white/15 bg-transparent px-0 py-2 text-base text-ink outline-none placeholder:text-ink-mute focus:border-accent"
                  />
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-2.5 text-sm text-bg transition hover:bg-ink/90"
                  >
                    Send message <Send className="h-4 w-4" />
                  </button>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">
                    Uses your local mail client — no backend.
                  </p>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">
        {label}
      </label>
      <input
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full border-0 border-b border-white/15 bg-transparent px-0 py-2 text-base text-ink outline-none placeholder:text-ink-mute focus:border-accent"
      />
    </div>
  );
}
