export const navItems = [
  { id: "about", label: "Sobre mí" },
  { id: "capabilities", label: "Capacidades" },
  { id: "experience", label: "Experiencia" },
  { id: "projects", label: "Proyectos" },
] as const;

export const intro = {
  greeting: "Hola, mi nombre es",
  name: "Carlos",
  title: "Desarrollador Frontend",
  tagline:
    "Creo interfaces con React y TypeScript. Me gusta encontrar el equilibrio entre el diseño, la ingeniería y la inteligencia artificial.",
};

export const about = {
  paragraphs: [
    "Buenos días! Me llamo Carlos. Me gusta mucho construir cosas, y ahora trabajo con inteligencia artificial casi todos los días, tanto en mi trabajo como en mis propios proyectos personales. He sido desarrollador de frontend durante más de ocho años, escribiendo código en React y TypeScript. Empecé con WordPress y componentes personalizados, y desde entonces he ido avanzando hacia tecnologías más modernas como Next.js y Node.js, incorporando inteligencia artificial en ellas cuando es necesario.",
    "Mi objetivo actual es seguir creciendo como desarrollador full-stack, y la inteligencia artificial es una parte importante de cómo diseño las integraciones desde el principio hasta el final. También me gusta el diseño, y me siento cómodo utilizando Figma. He diseñado interfaces para muchos clientes, y uno de los desafíos que más recuerdo fue rediseñar un portal de comercio electrónico durante una transición de marca. En ese proyecto, tuve que pensar en la estrategia del producto y la identidad de la marca, no solo en crear pantallas.",
    "Lo que más me gusta es combinar diseño, ingeniería sólida e inteligencia artificial en todos los aspectos, desde cómo programo hasta cómo pienso en el producto. Me encanta que una interfaz se vea bien y que tenga un código limpio y sólido debajo que pueda durar mucho tiempo.",
    "Actualmente, trabajo como desarrollador de frontend en Hiberus, en proyectos exigentes para clientes como MAPFRE, Sanitas o Caser, que son sectores en los que no se puede permitir el error.",
    "En mi tiempo libre, sigo trabajando en mis propios proyectos, como Stridely, una aplicación de running que utiliza inteligencia artificial y que estoy creando desde cero, desde el diseño hasta la infraestructura.",
    "Y fuera del trabajo, me gusta pasar tiempo con mi hija.",
  ],
};

export const capabilities = {
  design: ["UI Design (Figma)", "Design Systems", "Prototipado"],
  development: ["Frontend Engineering", "IA aplicada al producto", "Full-Stack (en progreso)"],
};

export const experience = [
  {
    id: "exp-1",
    period: "2023 — Actualidad",
    role: "Frontend Developer",
    company: "Hiberus",
    href: "https://www.hiberus.com",
    description:
      "Desarrollo frontend en proyectos de alta exigencia para clientes enterprise. En MAPFRE trabajé en portales digitales sobre WordPress Gutenberg y React a gran escala. En Sanitas contribuí al frontend de Salud Digital, plataforma sanitaria con múltiples perfiles de usuario.",
    tags: ["React", "Angular 18", "WordPress", "Gutenberg", "TypeScript"],
  },
  {
    id: "exp-2",
    period: "2022 — 2023",
    role: "Front End & WordPress Developer",
    company: "Sngular",
    href: "https://www.sngular.com",
    description:
      "Desarrollo de interfaces y componentes bajo metodología BEM/BEMIT en proyectos de mediana y gran escala. Trabajo con SASS, arquitectura CSS estructurada y WordPress como CMS en entornos de equipo con procesos de revisión rigurosos.",
    tags: ["WordPress", "Angular", "Vue", "SASS", "BEMIT", "JavaScript"],
  },
  {
    id: "exp-3",
    period: "2018 — 2022",
    role: "Desarrollador Web",
    company: "Squembri",
    href: "https://squembri.com",
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
  { label: "GitHub", href: "https://github.com/carlosdevgrx", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/carlos-fern%C3%A1ndez-garc%C3%ADa-216428111/", icon: "linkedin" },
  { label: "Correo", href: "mailto:holacarlosfernandez@gmail.com", icon: "mail" },
];

export const contact = {
  email: "holacarlosfernandez@gmail.com",
  heading: "¿Hablamos?",
  description:
    "Cuéntame tu proyecto, idea o reto. Estaré encantado de leerlo.",
  cta: "ESCRÍBEME",
};
