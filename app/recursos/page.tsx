import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Recursos — Carlos",
  description: "Wallpapers y recursos de diseño hechos por Carlos, libres para descargar.",
};

const resources = [
  {
    id: "wallpaper-macbook",
    title: "Wallpaper macOS",
    description: "El fondo de escritorio que uso en mi Mac. Diseñado por mí.",
    file: "/wallpaper-macbook.png",
    downloadName: "wallpaper-macbook-by-carlos.png",
    tag: "Wallpaper",
    resolution: "1672 × 941",
  },
];

const coming = [
  { title: "Paleta de colores del portfolio", tag: "Color" },
  { title: "Tipografías favoritas", tag: "Tipografía" },
];

export default function RecursosPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-20 lg:px-12 lg:py-32">

      {/* Header */}
      <div className="mb-16">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-accent"
        >
          <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M10 3 4 8l6 5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 8h9" strokeLinecap="round" />
          </svg>
          Volver
        </Link>
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-accent">Carlos / Recursos</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Cosas que hice<br />y puedes usar.
        </h1>
        <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
          Wallpapers, paletas, recursos de diseño. Todo hecho por mí, todo libre para descargar.
        </p>
      </div>

      {/* Resources grid */}
      <div className="grid gap-6 sm:grid-cols-2">
        {resources.map((r) => (
          <article
            key={r.id}
            className="group flex flex-col overflow-hidden rounded-xl border border-lightest-navy bg-light-navy/30 transition-colors hover:border-accent/40"
          >
            {/* Preview */}
            <div className="relative aspect-video w-full overflow-hidden bg-lightest-navy">
              <Image
                src={r.file}
                alt={r.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(min-width: 640px) 50vw, 100vw"
              />
            </div>

            {/* Info */}
            <div className="flex flex-1 flex-col gap-4 p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="font-mono text-[0.64rem] uppercase tracking-[0.2em] text-accent">
                    {r.tag}
                  </span>
                  <h2 className="mt-1 text-lg font-semibold text-foreground">{r.title}</h2>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{r.description}</p>
                </div>
              </div>

              <div className="mt-auto flex items-center justify-between">
                <span className="font-mono text-xs text-muted">{r.resolution}</span>
                <a
                  href={r.file}
                  download={r.downloadName}
                  className="inline-flex items-center gap-2 rounded-full border border-lightest-navy px-4 py-2 font-mono text-xs uppercase tracking-widest text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                >
                  Descargar
                  <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M8 2v8m0 0-3-3m3 3 3-3M2 13h12" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        ))}

        {/* Coming soon placeholders */}
        {coming.map((c) => (
          <div
            key={c.title}
            className="flex flex-col justify-between rounded-xl border border-dashed border-lightest-navy p-5 opacity-50"
          >
            <span className="font-mono text-[0.64rem] uppercase tracking-[0.2em] text-muted">
              {c.tag}
            </span>
            <p className="mt-2 text-base font-medium text-muted">{c.title}</p>
            <span className="mt-4 font-mono text-xs uppercase tracking-widest text-muted">
              Próximamente
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}
