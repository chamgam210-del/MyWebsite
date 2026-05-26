import { clsx } from "@/lib/cn";

export function FlowDiagram({
  steps,
  className,
}: {
  steps: { label: string; sub?: string }[];
  className?: string;
}) {
  return (
    <div className={clsx("relative flex flex-wrap items-stretch gap-3", className)}>
      {steps.map((s, i) => (
        <div key={i} className="flex items-center gap-3">
          <div className="glass min-w-[140px] rounded-2xl px-4 py-3 text-center">
            <div className="text-[10px] uppercase tracking-widest text-white/40">
              Step {i + 1}
            </div>
            <div className="mt-1 text-sm font-medium">{s.label}</div>
            {s.sub && (
              <div className="mt-0.5 text-[11px] text-white/50">{s.sub}</div>
            )}
          </div>
          {i < steps.length - 1 && (
            <span className="hidden text-white/30 sm:inline">→</span>
          )}
        </div>
      ))}
    </div>
  );
}
