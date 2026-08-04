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
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

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
        <span className="font-mono text-accent">
          {String(index).padStart(2, "0")}.
        </span>
        {title}
        <span className="hidden h-px max-w-xs flex-1 bg-lightest-navy sm:block" />
      </h2>
      {children}
    </section>
  );
}
