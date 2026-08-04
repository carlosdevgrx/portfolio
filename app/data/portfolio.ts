export const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
] as const;

export const intro = {
  name: "Carlos",
  title: "Software Engineer",
  tagline:
    "I build thoughtful digital experiences — from clean interfaces to scalable systems.",
};

export const about = {
  paragraphs: [
    "Hi, I'm Carlos — a software engineer who enjoys turning ideas into reliable, well-crafted products. I care about clarity in code, attention to detail in UI, and shipping things that actually work.",
    "Currently, I'm focused on building modern web applications with TypeScript and React. I like working at the intersection of design and engineering, where good UX meets maintainable architecture.",
    "When I'm not coding, you'll find me exploring new tools, reading, or tinkering with side projects.",
  ],
};

export const experience = [
  {
    id: "exp-1",
    period: "2024 — Present",
    role: "Software Engineer",
    company: "Company Name",
    description:
      "Build and maintain web applications. Collaborate with cross-functional teams to deliver features from concept to production.",
    tags: ["TypeScript", "React", "Next.js", "Node.js"],
  },
  {
    id: "exp-2",
    period: "2022 — 2024",
    role: "Frontend Developer",
    company: "Previous Company",
    description:
      "Developed responsive interfaces and design systems. Improved performance and accessibility across key product flows.",
    tags: ["JavaScript", "React", "CSS", "Figma"],
  },
  {
    id: "exp-3",
    period: "2020 — 2022",
    role: "Junior Developer",
    company: "First Company",
    description:
      "Contributed to client projects and internal tools. Learned best practices in testing, code review, and agile delivery.",
    tags: ["HTML", "CSS", "JavaScript", "Git"],
  },
];

export const projects = [
  {
    id: "proj-1",
    title: "Project One",
    description:
      "A web application that solves a real problem. Built with modern tooling and deployed to production.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: "#",
  },
  {
    id: "proj-2",
    title: "Project Two",
    description:
      "An API-driven tool with a clean dashboard. Focus on performance and developer experience.",
    tags: ["React", "Node.js", "PostgreSQL"],
    href: "#",
  },
  {
    id: "proj-3",
    title: "Project Three",
    description:
      "A side project exploring new ideas. Open source and documented for others to learn from.",
    tags: ["TypeScript", "Vercel"],
    href: "#",
  },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Email", href: "mailto:hello@example.com" },
];
