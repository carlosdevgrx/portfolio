"use client";

import { useEffect, useState } from "react";

const KONAMI = [
  "ArrowUp", "ArrowUp",
  "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight",
  "ArrowLeft", "ArrowRight",
  "b", "a",
];

const ASCII = `
  ██████╗ █████╗ ██████╗ ██╗      ██████╗ ███████╗
 ██╔════╝██╔══██╗██╔══██╗██║     ██╔═══██╗██╔════╝
 ██║     ███████║██████╔╝██║     ██║   ██║███████╗
 ██║     ██╔══██║██╔══██╗██║     ██║   ██║╚════██║
 ╚██████╗██║  ██║██║  ██║███████╗╚██████╔╝███████║
  ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚══════╝
`;

export function EasterEgg() {
  const [open, setOpen] = useState(false);
  const [line, setLine] = useState(0);
  const [visitorCount, setVisitorCount] = useState<number | null>(null);

  // Console signature on mount
  useEffect(() => {
    console.log(
      `%c${ASCII}`,
      "color: #c4a0a8; font-family: monospace; font-size: 10px; line-height: 1.2;",
    );
    console.log(
      "%cHola, dev 👋",
      "color: #ccd6f6; font-size: 14px; font-weight: bold;",
    );
    console.log(
      "%cSi estás leyendo esto en devtools, claramente eres de los nuestros.",
      "color: #8892b0; font-size: 12px;",
    );
    console.log(
      "%c(Pista: prueba el Konami Code en la página 👾)",
      "color: #c4a0a8; font-size: 11px; font-style: italic;",
    );
  }, []);

  // Konami Code listener
  useEffect(() => {
    let progress = 0;

    const handler = (e: KeyboardEvent) => {
      if (e.key === KONAMI[progress]) {
        progress++;
        if (progress === KONAMI.length) {
          progress = 0;
          setLine(0);
          setVisitorCount(null);
          setOpen(true);
          // Increment and fetch shared counter
          fetch("/api/easter-egg", { method: "POST" })
            .then((r) => r.json())
            .then((d: { count: number | null }) => setVisitorCount(d.count))
            .catch(() => {});
        }
      } else {
        progress = e.key === KONAMI[0] ? 1 : 0;
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Typewriter line-by-line reveal
  const countLine =
    visitorCount !== null
      ? `> Eres el visitante #${visitorCount} en encontrar esto.`
      : "> Buscando tu número..."

  const lines = [
    "> ACCESO CONCEDIDO.",
    "> Bienvenido al modo desarrollador.",
    "> ",
    countLine,
    "> ",
    "> Si llegas hasta aquí, claramente somos del mismo gremio.",
    "> ",
    "> — Carlos",
  ];

  useEffect(() => {
    if (!open) return;
    if (line >= lines.length) return;
    const t = setTimeout(() => setLine((l) => l + 1), line === 0 ? 300 : 120);
    return () => clearTimeout(t);
  }, [open, line, lines.length]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        className="w-full max-w-lg rounded-lg border border-lightest-navy bg-[#0a192f] p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal chrome */}
        <div className="mb-4 flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500/70" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
          <span className="h-3 w-3 rounded-full bg-green-500/70" />
          <span className="ml-3 font-mono text-xs text-muted">secret.sh</span>
        </div>

        <div className="space-y-1 font-mono text-sm leading-relaxed">
          {lines.slice(0, line).map((l, i) => (
            <p key={i} className={l.startsWith("> https") ? "text-accent underline" : l === "> ACCESO CONCEDIDO." ? "text-green-400" : "text-muted"}>
              {l.startsWith("> https") ? (
                <a
                  href={l.replace("> ", "")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                  onClick={(e) => e.stopPropagation()}
                >
                  {l}
                </a>
              ) : l}
            </p>
          ))}
          {line < lines.length && (
            <p className="text-muted">
              {">"} <span className="animate-pulse">▌</span>
            </p>
          )}
        </div>

        <button
          onClick={() => setOpen(false)}
          className="mt-6 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-accent"
        >
          [ cerrar ]
        </button>
      </div>
    </div>
  );
}
