"use client";

import { useEffect, useState } from "react";
import {
  about,
  experience,
  intro,
  navItems,
  projects,
  socialLinks,
} from "../data/portfolio";
import { Section } from "./Section";

export function Portfolio() {
  const [activeSection, setActiveSection] = useState<string>("about");

  useEffect(() => {
    const sections = navItems
      .map(({ id }) => document.getElementById(id))
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
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-12 px-6 py-12 lg:flex-row lg:gap-4 lg:px-12 lg:py-0">
      {/* Sidebar / Intro */}
      <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[42%] lg:max-w-md lg:flex-col lg:justify-between lg:py-24 lg:pr-12">
        <div>
          <p className="mb-2 font-mono text-sm text-accent">{intro.greeting}</p>
          <h1 className="gradient-name text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
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

        <ul className="mt-10 flex gap-5 lg:mt-0" aria-label="Redes sociales">
          {socialLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors hover:text-accent hover:-translate-y-0.5 inline-block duration-200"
                aria-label={label}
              >
                <span className="font-mono text-xs uppercase tracking-wider">
                  {label}
                </span>
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

        <Section id="experience" index={2} title={navItems[1].label}>
          <ol className="flex flex-col gap-8">
            {experience.map((job) => (
              <li key={job.id}>
                <article className="experience-card group rounded-lg border border-transparent p-4 transition-colors hover:border-lightest-navy hover:bg-light-navy/40 sm:p-6">
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
                        className="rounded-full bg-accent/10 px-3 py-1 font-mono text-xs text-accent"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="projects" index={3} title={navItems[2].label}>
          <ul className="grid gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <li key={project.id}>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card group flex h-full flex-col rounded-lg border border-lightest-navy bg-light-navy/30 p-6 transition-all hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_8px_30px_-12px_rgba(100,255,218,0.25)]"
                >
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <span className="text-accent" aria-hidden="true">
                      <FolderIcon />
                    </span>
                    <span
                      className="text-muted transition-colors group-hover:text-accent"
                      aria-hidden="true"
                    >
                      <ExternalLinkIcon />
                    </span>
                  </div>
                  <h3 className="mb-2 font-medium text-foreground transition-colors group-hover:text-accent">
                    {project.title}
                  </h3>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <ul className="mt-auto flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li key={tag} className="font-mono text-xs text-muted">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </a>
              </li>
            ))}
          </ul>
        </Section>
      </main>
    </div>
  );
}

function FolderIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7"
    >
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}
