"use client";

import { useState } from "react";
import { ArrowUpRight, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const channels = [
    { label: "Email", value: "your-email@example.com", href: "mailto:your-email@example.com" },
    { label: "GitHub", value: "github.com/your-handle", href: "https://github.com/" },
    { label: "LinkedIn", value: "linkedin.com/in/your-handle", href: "https://www.linkedin.com/" },
  ];

  return (
    <>
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
            AI/product builds. Drop a line and I'll get back to you.
          </p>
        </div>
      </section>

      <section className="border-b border-white/[0.06]">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 py-20 sm:px-10 lg:grid-cols-[1fr_1.2fr]">
          {/* Channels */}
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">
              Direct
            </div>
            <ul className="mt-6 divide-y divide-white/[0.06] border-y border-white/[0.06]">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group grid grid-cols-12 items-baseline gap-3 py-4"
                  >
                    <span className="col-span-3 font-mono text-[10px] uppercase tracking-widest text-ink-mute">
                      {c.label}
                    </span>
                    <span className="col-span-8 text-sm text-ink transition group-hover:text-accent">
                      {c.value}
                    </span>
                    <ArrowUpRight className="col-span-1 h-3.5 w-3.5 justify-self-end text-ink-mute transition group-hover:text-accent" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <div className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">
                Best for
              </div>
              <ul className="mt-3 space-y-1.5 text-sm text-ink-dim">
                <li>· AI/product prototypes</li>
                <li>· Android apps with AI features</li>
                <li>· Automation for small businesses</li>
                <li>· RAG and voice-first builds</li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">
              Message
            </div>
            {sent ? (
              <div className="mt-8 flex flex-col items-start py-8">
                <CheckCircle2 className="h-6 w-6 text-accent" />
                <h3 className="mt-4 font-serif text-3xl italic tracking-tightest text-ink">
                  Message ready to send.
                </h3>
                <p className="mt-3 max-w-md text-sm text-ink-dim">
                  Your mail client should have opened. If it didn't, email{" "}
                  <a
                    className="text-accent underline-offset-4 hover:underline"
                    href="mailto:your-email@example.com"
                  >
                    your-email@example.com
                  </a>
                  .
                </p>
              </div>
            ) : (
              <div className="mt-6 space-y-6">
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
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-ink-mute">
                    What's on your mind
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
