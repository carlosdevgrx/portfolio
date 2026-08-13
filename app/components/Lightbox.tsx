"use client";

import { useEffect } from "react";

type LightboxProps = {
  images: string[];
  index: number;
  alt: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export function Lightbox({ images, index, alt, onClose, onPrev, onNext }: LightboxProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-foreground"
        aria-label="Anterior"
      >
        ←
      </button>

      {/* Image */}
      <div
        className="relative mx-16 max-h-[90vh] max-w-sm"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[index]}
          alt={`${alt} ${index + 1}`}
          className="max-h-[90vh] w-full rounded-xl object-contain shadow-2xl"
        />
        <p className="mt-3 text-center font-mono text-xs text-muted">
          {index + 1} / {images.length}
        </p>
      </div>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-foreground"
        aria-label="Siguiente"
      >
        →
      </button>

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute right-5 top-5 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-foreground"
        aria-label="Cerrar"
      >
        ESC
      </button>
    </div>
  );
}
