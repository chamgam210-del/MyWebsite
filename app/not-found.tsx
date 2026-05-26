import Link from "next/link";
import ButtonLink from "@/components/ButtonLink";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-5 py-24 text-center sm:px-8">
      <div className="text-xs uppercase tracking-widest text-white/40">404</div>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-white/65">
        That route doesn&apos;t exist. It may have been moved, or the project
        slug isn&apos;t in the data file yet.
      </p>
      <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
        <ButtonLink href="/" icon>
          Back home
        </ButtonLink>
        <Link
          href="/projects"
          className="text-sm text-white/65 underline-offset-4 hover:text-white hover:underline"
        >
          Or browse projects
        </Link>
      </div>
    </section>
  );
}
