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
  pparagraphs: [
    "¡Buenas! Soy Carlos. Si tuviera que resumir lo que hago, te diría que me encanta construir cosas, y últimamente, sobre todo con IA. Llevo más de 6 años como desarrollador frontend picando código en React y TypeScript. Mis inicios fueron con WordPress y componentes a medida, pero he ido evolucionando hacia stacks modernos como Next.js y Node.js. Ahora mismo estoy metido de lleno en ampliar mi perfil hacia el full-stack.",
    "Para mí el diseño no es solo un boceto previo a la programación; es una pasión. Me muevo cómodo en Figma y he diseñado interfaces para bastantes clientes. De hecho, uno of mis mayores retos fue el rediseño completo de un portal B2C interno durante una transición de marca muy importante. Ahí me tocó pensar de verdad en estrategia de producto y branding, no solo en maquetar componentes.",
    "Disfruto conectando tres mundos: diseño, ingeniería sólida e inteligencia artificial. Me motiva lograr que una interfaz impecable funcione con un código limpio y escalable, aportando valor real al usuario.",
    "Actualmente trabajo como Frontend Developer en Hiberus. En este tiempo he pasado por proyectos bastante exigentes en sectores como seguros y finanzas, trabajando para clientes como MAPFRE, Sanitas, Caser, Redion o Randstad. Son entornos donde la fiabilidad, la accesibilidad y la calidad no son negociables.",
    "Por mi cuenta, sigo experimentando: estoy desarrollando Stridely, una app de running con funciones de IA que diseño, programo y gestiono de principio a fin (desde el concepto hasta la infraestructura).",
    "¿Y fuera de las pantallas? La mayor parte de mi tiempo libre tiene un nombre: mi hija.",
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
