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
    "Construyo interfaces cuidadas con React y TypeScript, en la intersección de diseño, ingeniería e IA.",
};

export const about = {
  paragraphs: [
    "¡Buenas! Soy Carlos. Si tuviera que resumir lo que hago, te diría que me encanta construir cosas, y últimamente, sobre todo con IA. Llevo más de 6 años como desarrollador frontend picando código en React y TypeScript. Mis inicios fueron con WordPress y componentes a medida, pero he ido evolucionando hacia stacks modernos como Next.js y Node.js. Ahora mismo estoy metido de lleno en ampliar mi perfil hacia el full-stack.",
    "Para mí el diseño no es solo un boceto previo a la programación; es una pasión. Me muevo cómodo en Figma y he diseñado interfaces para bastantes clientes. De hecho, uno of mis mayores retos fue el rediseño completo de un portal B2C interno durante una transición de marca muy importante. Ahí me tocó pensar de verdad en estrategia de producto y branding, no solo en maquetar componentes.",
    "Disfruto conectando tres mundos: diseño, ingeniería sólida e inteligencia artificial. Me motiva lograr que una interfaz impecable funcione con un código limpio y escalable, aportando valor real al usuario.",
    "Actualmente trabajo como Frontend Developer en Hiberus. En este tiempo he pasado por proyectos bastante exigentes en sectores como seguros y finanzas, trabajando para clientes como MAPFRE, Sanitas, Caser, Redion o Randstad. Son entornos donde la fiabilidad, la accesibilidad y la calidad no son negociables.",
    "Por mi cuenta, sigo experimentando: estoy desarrollando Stridely, una app de running con funciones de IA que diseño, programo y gestiono de principio a fin (desde el concepto hasta la infraestructura).",
    "¿Y fuera de las pantallas? La mayor parte de mi tiempo libre tiene un nombre: mi hija.",
  ],
};

export const capabilities = {
  branding: ["Visual Identity", "Design Systems", "Art Direction"],
  products: ["Web Design", "UX/UI Systems", "Full-Stack Development"],
};

export const experience = [
  {
    id: "exp-1",
    period: "2023 — Actualidad",
    role: "Frontend Developer",
    company: "Hiberus",
    description:
      "Desarrollo frontend en proyectos de alta exigencia para clientes enterprise. En MAPFRE trabajé en portales digitales sobre WordPress Gutenberg y React a gran escala. En Sanitas contribuí al frontend de Salud Digital, plataforma sanitaria con múltiples perfiles de usuario.",
    tags: ["React", "Angular 18", "WordPress", "Gutenberg", "TypeScript"],
  },
  {
    id: "exp-2",
    period: "2022 — 2023",
    role: "Front End & WordPress Developer",
    company: "Sngular",
    description:
      "Desarrollo de interfaces y componentes bajo metodología BEM/BEMIT en proyectos de mediana y gran escala. Trabajo con SASS, arquitectura CSS estructurada y WordPress como CMS en entornos de equipo con procesos de revisión rigurosos.",
    tags: ["WordPress", "Angular", "Vue", "SASS", "BEMIT", "JavaScript"],
  },
  {
    id: "exp-3",
    period: "2018 — 2022",
    role: "Desarrollador Web",
    company: "Squembri",
    description:
      "Primeros años profesionales en agencia creativa. Desarrollo de sitios y tiendas a medida sobre WordPress para clientes de distintos sectores, combinando maquetación, diseño y programación de principio a fin.",
    tags: ["WordPress", "PHP", "JavaScript", "CSS"],
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
    screenshots: ["/stridely-1.png", "/stridely-2.png", "/stridely-3.png"],
  },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Correo", href: "mailto:holacarlosfernandez@gmail.com" },
];

export const contact = {
  email: "holacarlosfernandez@gmail.com",
  heading: "¿Hablamos?",
  description:
    "Cuéntame tu proyecto, idea o reto. Estaré encantado de leerlo.",
  cta: "ESCRÍBEME",
};
