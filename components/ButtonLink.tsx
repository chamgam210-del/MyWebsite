import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { clsx } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  icon = false,
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  external?: boolean;
  icon?: boolean;
  className?: string;
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm transition-all duration-200 whitespace-nowrap";
  const styles: Record<Variant, string> = {
    primary:
      "bg-ink text-bg hover:bg-ink/90",
    secondary:
      "border border-white/15 text-ink hover:bg-white/5",
    ghost: "text-ink-dim hover:text-ink",
  };

  const content = (
    <>
      {children}
      {icon && <ArrowRight className="h-4 w-4" />}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={clsx(base, styles[variant], className)}
      >
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={clsx(base, styles[variant], className)}>
      {content}
    </Link>
  );
}
