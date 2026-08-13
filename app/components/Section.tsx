"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type SectionProps = {
  id: string;
  index: number;
  title: string;
  children: ReactNode;
};

export function Section({ id, index, title, children }: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  // Start visible so SSR and above-fold sections never flash hidden
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // If already in the viewport on mount, keep visible and skip the observer
    const { top } = element.getBoundingClientRect();
    if (top < window.innerHeight * 0.95) return;

    // Below fold: hide immediately (user can't see this) then reveal on scroll
    setVisible(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      className={`scroll-mt-24 lg:scroll-mt-0 ${visible ? "section-visible" : "section-hidden"}`}
    >
      <h2 className="section-heading mb-6 flex items-center gap-4 text-foreground">
        <span className="font-mono text-foreground/40">
          {String(index).padStart(2, "0")}.
        </span>
        <span className="section-title-serif">{title}</span>
        <span className="hidden h-px max-w-xs flex-1 bg-lightest-navy sm:block" />
      </h2>
      {children}
    </section>
  );
}
