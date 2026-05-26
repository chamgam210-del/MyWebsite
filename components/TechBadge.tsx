import { clsx } from "@/lib/cn";

export default function TechBadge({
  children,
  tone = "default",
  className,
}: {
  children: React.ReactNode;
  tone?: "default" | "violet" | "cyan" | "amber" | "emerald" | "accent";
  className?: string;
}) {
  const tones = {
    default: "border-white/10 text-ink-dim",
    violet: "border-white/10 text-ink-dim",
    cyan: "border-white/10 text-ink-dim",
    amber: "border-accent/30 text-accent",
    emerald: "border-white/10 text-ink-dim",
    accent: "border-accent/30 text-accent",
  } as const;
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border bg-transparent px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
