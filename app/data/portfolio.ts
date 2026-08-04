export const navItems = [
  { id: "about", label: "Sobre mí" },
  { id: "experience", label: "Experiencia" },
  { id: "projects", label: "Proyectos" },
] as const;

export const intro = {
  greeting: "Hola, mi nombre es",
  name: "Carlos",
  title: "Desarrollador Frontend",
  tagline:
    "Construyo interfaces cuidadas con React y TypeScript — en la intersección de diseño, ingeniería e IA.",
};

export const about = {
  paragraphs: [
    "Hola! Soy Carlos, y me gusta construir cosas — sobre todo con IA. Soy desarrollador frontend con más de 6 años de experiencia creando interfaces en React y TypeScript. Empecé este camino trabajando con WordPress y componentes a medida, y desde entonces he evolucionado hacia stacks modernos como React, Next.js y Node.js — actualmente estoy ampliando mi perfil hacia full-stack.",
    "El diseño es algo que me apasiona de verdad, no solo lo veo como el paso previo a programar. Me manejo con soltura en Figma y he diseñado interfaces para varios clientes, incluyendo el rediseño completo de un portal B2C interno durante la transición de marca de Europ Assistance a Redion — un proyecto que me obligó a pensar en producto y en marca, no solo en componentes.",
    "Disfruto especialmente en la intersección entre diseño, ingeniería sólida e IA — donde una interfaz cuidada se combina con código limpio y escalable, y con funcionalidades que realmente aportan inteligencia a la experiencia del usuario.",
    "Ahora mismo trabajo como Frontend Developer en Hiberus. A lo largo de mi carrera he trabajado en proyectos del sector seguros y servicios financieros para clientes como MAPFRE, Sanitas, Caser y redion, además de otros proyectos como Randstad — entornos exigentes en cuanto a fiabilidad, accesibilidad y calidad de producto.",
    "En paralelo, también desarrollo Stridely, una app de running con funcionalidades de IA que diseño y construyo por mi cuenta, desde el producto hasta la infraestructura.",
    "Fuera del trabajo, la mayor parte de mi tiempo libre es para mi hija.",
  ],
};

export const experience = [
  {
    id: "exp-1",
    period: "2024 — Actualidad",
    role: "Frontend Developer",
    company: "Hiberus",
    description:
      "Desarrollo de interfaces para proyectos del sector seguros y servicios financieros. Trabajo en entornos exigentes donde la fiabilidad, la accesibilidad y la calidad de producto son prioritarias.",
    tags: ["React", "TypeScript", "Next.js", "Figma"],
  },
  {
    id: "exp-2",
    period: "2021 — 2024",
    role: "Frontend Developer",
    company: "MAPFRE, Sanitas, Caser, Redion, Randstad",
    description:
      "Proyectos para clientes enterprise en seguros y servicios. Destaca el rediseño completo de un portal B2C interno durante la transición de marca de Europ Assistance a Redion — pensando en producto y marca, no solo en componentes.",
    tags: ["React", "TypeScript", "Figma", "Accesibilidad"],
  },
  {
    id: "exp-3",
    period: "2018 — 2021",
    role: "Desarrollador Frontend",
    company: "Inicio de carrera",
    description:
      "Primeros años construyendo interfaces con WordPress y componentes a medida, evolucionando hacia stacks modernos con React, Next.js y Node.js.",
    tags: ["WordPress", "JavaScript", "React", "CSS"],
  },
];

export const projects = [
  {
    id: "proj-1",
    title: "Stridely",
    description:
      "App de running con funcionalidades de IA. La diseño y construyo por mi cuenta, desde el producto hasta la infraestructura.",
    tags: ["React Native", "IA", "Node.js", "Producto"],
    href: "#",
  },
  {
    id: "proj-2",
    title: "Portal B2C Redion",
    description:
      "Rediseño completo de un portal interno durante la transición de marca de Europ Assistance a Redion. Enfoque en producto, marca y experiencia de usuario.",
    tags: ["React", "TypeScript", "Figma", "Design System"],
    href: "#",
  },
  {
    id: "proj-3",
    title: "Proyectos enterprise",
    description:
      "Interfaces y componentes para el sector seguros y servicios financieros — MAPFRE, Sanitas, Caser y Randstad, entre otros.",
    tags: ["React", "TypeScript", "Accesibilidad"],
    href: "#",
  },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Correo", href: "mailto:hello@example.com" },
];
