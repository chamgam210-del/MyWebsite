import { Sparkles } from "lucide-react";

export default function FeatureGrid({ items }: { items: string[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((f, i) => (
        <div
          key={i}
          className="glass group rounded-2xl p-4 transition hover:border-white/20 hover:bg-white/[0.06]"
        >
          <div className="flex items-start gap-3">
            <div className="mt-0.5 inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500/30 to-cyan-400/20 text-violet-200">
              <Sparkles className="h-3.5 w-3.5" />
            </div>
            <p className="text-sm leading-snug text-white/80">{f}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
