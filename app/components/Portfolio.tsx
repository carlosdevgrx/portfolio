"use client";

import { useEffect, useState } from "react";
import {
  about,
  capabilities,
  contact,
  experience,
  intro,
  navItems,
  projects,
  socialLinks,
} from "../data/portfolio";
import { Lightbox } from "./Lightbox";
import { Section } from "./Section";

export function Portfolio() {
  const [activeSection, setActiveSection] = useState<string>("about");
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number; alt: string } | null>(null);

  useEffect(() => {
    // Debounce to prevent rapid re-triggering at section boundaries
    const id = setTimeout(() => {
      document.documentElement.dataset.theme =
        activeSection === "experience" || activeSection === "projects"
          ? "light"
          : "dark";
    }, 120);
    return () => clearTimeout(id);
  }, [activeSection]);

  useEffect(() => {
    const sectionIds = [...navItems.map(({ id }) => id), "contact"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Sidebar / Intro */}
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-12 lg:flex-row lg:gap-4 lg:px-12 lg:py-0">
      <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[42%] lg:max-w-md lg:flex-col lg:justify-between lg:py-24 lg:pr-12">
        <div>
          <p className="mb-2 font-mono text-base text-accent">{intro.greeting}</p>
          <h1 className="gradient-name text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            {intro.name}.
          </h1>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-muted sm:text-3xl">
            {intro.title}.
          </h2>
          <p className="mt-6 max-w-xs text-base leading-relaxed text-muted">
            {intro.tagline}
          </p>

          <nav className="mt-10 hidden lg:block" aria-label="Secciones">
            <ul className="flex flex-col gap-1">
              {navItems.map(({ id, label }) => {
                const isActive = activeSection === id;
                return (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className={`group flex items-center gap-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors ${
                        isActive ? "text-foreground" : "text-muted hover:text-accent"
                      }`}
                    >
                      <span
                        className={`h-px bg-accent transition-all duration-300 ${
                          isActive ? "w-16" : "w-8 group-hover:w-16"
                        }`}
                      />
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <ul className="mt-10 flex gap-4 lg:mt-0" aria-label="Redes sociales">
          {socialLinks.map(({ label, href, icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-lightest-navy text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                aria-label={label}
              >
                <SocialIcon id={icon} />
              </a>
            </li>
          ))}
        </ul>
      </header>

      {/* Mobile nav */}
      <nav
        className="sticky top-0 z-10 -mx-6 flex gap-6 overflow-x-auto border-b border-lightest-navy bg-background/80 px-6 py-4 backdrop-blur-sm lg:hidden"
        aria-label="Secciones"
      >
        {navItems.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`shrink-0 font-mono text-xs uppercase tracking-widest transition-colors ${
              activeSection === id ? "text-accent" : "text-muted"
            }`}
          >
            {label}
          </a>
        ))}
      </nav>

      {/* Main content */}
      <main className="flex flex-1 flex-col gap-16 pb-24 pt-4 lg:gap-24 lg:py-24">
        <Section id="about" index={1} title={navItems[0].label}>
          <div className="flex flex-col gap-4 text-muted">
            {about.paragraphs.map((paragraph, index) => (
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </Section>

        <Section id="capabilities" index={2} title="Capacidades">
          <p className="mb-10 max-w-sm text-base leading-relaxed text-muted">
            Servicios integrales que conectan estrategia, diseño y tecnología
            para mover tu negocio hacia adelante.
          </p>

          <div className="grid gap-8 sm:grid-cols-2">
            {[
              { label: "BRANDING & STRATEGY", items: capabilities.branding },
              { label: "DIGITAL PRODUCTS", items: capabilities.products },
            ].map(({ label, items }) => (
              <div key={label}>
                <div className="mb-5 flex items-center gap-4">
                  <span className="font-mono text-[0.64rem] uppercase tracking-[0.24em] text-muted">
                    {label}
                  </span>
                  <span className="h-px flex-1 bg-lightest-navy" />
                </div>

                <div className="space-y-0">
                  {items.map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-4 border-t border-lightest-navy py-4"
                    >
                      <span className="font-mono text-[0.66rem] uppercase tracking-[0.2em] text-muted">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-base font-medium leading-none text-foreground sm:text-xl">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="experience" index={3} title={navItems[1].label}>
          <ol className="flex flex-col gap-8">
            {experience.map((job) => (
              <li key={job.id}>
                <a
                  href={job.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="experience-card group block cursor-pointer rounded-lg border border-transparent p-4 transition-colors hover:border-lightest-navy hover:bg-light-navy/40 sm:p-6"
                >
                  <header className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="font-medium text-foreground transition-colors group-hover:text-accent">
                        {job.role}
                        <span className="text-muted"> · {job.company}</span>
                      </h3>
                    </div>
                    <time
                      dateTime={job.period}
                      className="shrink-0 font-mono text-xs uppercase tracking-wider text-muted"
                    >
                      {job.period}
                    </time>
                  </header>
                  <p className="mb-4 text-sm leading-relaxed text-muted">
                    {job.description}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-lightest-navy px-3 py-1 font-mono text-xs text-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </a>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="projects" index={4} title={navItems[2].label}>
          {projects.map((project) => (
            <article key={project.id}>
              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                </div>
                <ul className="flex flex-wrap gap-2 sm:justify-end">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-lightest-navy px-3 py-1 font-mono text-xs text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              {project.screenshots && (
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  {project.screenshots.map((src, i) => (
                    <button
                      key={src}
                      onClick={() => setLightbox({ images: project.screenshots!, index: i, alt: project.title })}
                      className="group cursor-pointer overflow-hidden rounded-lg bg-light-navy transition-opacity hover:opacity-90"
                      aria-label={`Ver ${project.title} captura ${i + 1}`}
                    >
                      <img
                        src={src}
                        alt={`${project.title} captura ${i + 1}`}
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              )}
            </article>
          ))}
        </Section>
      </main>
    </div>

    {lightbox && (
      <Lightbox
        images={lightbox.images}
        index={lightbox.index}
        alt={lightbox.alt}
        onClose={() => setLightbox(null)}
        onPrev={() => setLightbox((l) => l && { ...l, index: (l.index - 1 + l.images.length) % l.images.length })}
        onNext={() => setLightbox((l) => l && { ...l, index: (l.index + 1) % l.images.length })}
      />
    )}

    <section id="contact" className="flex min-h-screen flex-col items-center justify-center border-t border-lightest-navy px-6 py-32 text-center lg:px-24 lg:py-48">
      <h2 className="contact-heading">{contact.heading}</h2>
      <p className="mt-8 max-w-xs text-base leading-relaxed text-muted">
        {contact.description}
      </p>
      <a
        href={`mailto:${contact.email}`}
        className="group mt-12 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-foreground"
      >
        {contact.cta}
        <span
          className="transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        >
          &rarr;
        </span>
      </a>
    </section>
  </>
  );
}

function SocialIcon({ id }: { id: string }) {
  if (id === "github") return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
  if (id === "linkedin") return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}
