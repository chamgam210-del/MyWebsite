import { clsx } from "@/lib/cn";

export default function PhoneMockup({
  children,
  className,
  accent = "violet",
}: {
  children: React.ReactNode;
  className?: string;
  accent?: "violet" | "amber" | "rose" | "cyan";
}) {
  const glow = {
    violet: "from-violet-500/30 to-cyan-400/20",
    amber: "from-amber-500/30 to-orange-400/20",
    rose: "from-rose-500/30 to-orange-300/20",
    cyan: "from-cyan-400/30 to-violet-500/20",
  }[accent];

  return (
    <div className={clsx("relative", className)}>
      <div
        className={clsx(
          "absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br opacity-60 blur-3xl",
          glow
        )}
      />
      <div className="relative mx-auto w-full max-w-[300px] rounded-[2.5rem] border border-white/10 bg-bg-soft p-2 shadow-glow">
        <div className="absolute left-1/2 top-2 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
        <div className="relative h-[600px] overflow-hidden rounded-[2rem] bg-[#0a0d12]">
          <div className="absolute inset-x-0 top-0 flex items-center justify-between px-6 pt-3 text-[10px] font-medium text-white/60">
            <span>9:41</span>
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              5G
            </span>
          </div>
          <div className="h-full overflow-y-auto px-3 pb-3 pt-8 scrollbar-thin">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
