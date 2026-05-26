import { clsx } from "@/lib/cn";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <div className="mb-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-ink-mute">
          <span className="h-px w-8 bg-ink-mute" />
          {eyebrow}
        </div>
      )}
      <h2 className="font-serif text-4xl italic leading-[0.95] tracking-tightest text-ink sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-2xl text-base text-ink-dim sm:text-lg">{description}</p>
      )}
    </div>
  );
}
