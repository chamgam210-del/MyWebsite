import { ImageIcon, Video as VideoIcon, Upload } from "lucide-react";
import type { MediaItem } from "@/lib/projects";
import { clsx } from "@/lib/cn";

/**
 * Renders either:
 *   - a real <img>/<video> if a media item is provided
 *   - a placeholder card prompting the user to drop a file at a specific path
 */
export default function MediaSlot({
  media,
  expectedPath,
  kind = "image",
  caption,
  aspect = "16/10",
  className,
  fallback,
}: {
  media?: MediaItem;
  expectedPath: string;
  kind?: "image" | "video";
  caption?: string;
  /** CSS aspect ratio, e.g. "16/10", "9/16", "4/5" */
  aspect?: string;
  className?: string;
  /** Optional fallback node shown inside the placeholder (e.g. a mockup). */
  fallback?: React.ReactNode;
}) {
  if (media?.src) {
    return (
      <figure className={clsx("group overflow-hidden rounded-2xl hairline", className)}>
        <div
          className="relative w-full bg-bg-soft"
          style={{ aspectRatio: aspect }}
        >
          {(media.type ?? kind) === "video" ? (
            <video
              src={media.src}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={media.src}
              alt={media.alt ?? caption ?? ""}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}
        </div>
        {(media.caption ?? caption) && (
          <figcaption className="px-4 py-2 font-mono text-[11px] uppercase tracking-widest text-ink-mute">
            {media.caption ?? caption}
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <div className={clsx("group relative overflow-hidden rounded-2xl border border-dashed border-white/15 bg-bg-soft", className)}>
      <div className="relative w-full" style={{ aspectRatio: aspect }}>
        {fallback ? (
          <div className="absolute inset-0 flex items-center justify-center p-3 opacity-60 transition group-hover:opacity-90">
            {fallback}
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-2 text-ink-mute">
              {kind === "video" ? (
                <VideoIcon className="h-6 w-6" />
              ) : (
                <ImageIcon className="h-6 w-6" />
              )}
              <span className="font-mono text-[10px] uppercase tracking-widest">
                {kind === "video" ? "video slot" : "screenshot slot"}
              </span>
            </div>
          </div>
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent opacity-90" />

        <div className="absolute inset-x-3 bottom-3 flex flex-col gap-1.5 text-left">
          <div className="inline-flex w-fit items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-accent">
            <Upload className="h-3 w-3" />
            add {kind}
          </div>
          <div className="font-mono text-[11px] text-ink/85">
            drop file → <span className="text-accent">{expectedPath}</span>
          </div>
          {caption && (
            <div className="text-xs text-ink-dim">{caption}</div>
          )}
        </div>
      </div>
    </div>
  );
}
