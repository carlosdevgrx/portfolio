import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      {/* Glitchy 404 */}
      <div className="relative select-none">
        <p
          className="font-mono text-[clamp(6rem,20vw,16rem)] font-bold leading-none text-lightest-navy"
          aria-hidden="true"
        >
          404
        </p>
        <p className="gradient-name absolute inset-0 font-mono text-[clamp(6rem,20vw,16rem)] font-bold leading-none opacity-15 blur-sm">
          404
        </p>
      </div>

      <div className="mt-2 space-y-3">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Esta página no existe.
        </h1>
        <p className="max-w-sm text-base leading-relaxed text-muted">
          O la moví, o la borré, o nunca estuvo aquí.{" "}
          <span className="font-mono text-sm text-accent">¯\_(ツ)_/¯</span>
        </p>
      </div>

      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-3 rounded-full border border-lightest-navy px-8 py-4 font-mono text-xs uppercase tracking-widest text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
      >
        <span className="h-px w-6 bg-current transition-all duration-300 group-hover:w-10" />
        Volver al inicio
      </Link>
    </main>
  );
}
