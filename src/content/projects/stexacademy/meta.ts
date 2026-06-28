import type { IProjectMeta } from "~/types/project";

const meta: IProjectMeta = {
    slug: "stexacademy",
    type: "product",
    featured: true,
    order: 3,
    date: "2026-06-26",
    url: "https://academy.stexcore.net",
    tags: ["Next.js", "Material UI", "Drizzle ORM", "PostgreSQL", "Auth.js", "TypeScript"],
    locales: {
        es: {
            title: "StexAcademy",
            summary: "Plataforma de cursos online estilo Platzi con roles, lecciones en video, quizzes y certificados verificables.",
            description: "Una plataforma de aprendizaje con rutas, progreso reanudable y certificados verificables para el ecosistema stexcore.",
            keywords: "cursos online, e-learning, next.js, postgresql, drizzle, certificados, quizzes, rutas de aprendizaje, stexcore",
        },
        en: {
            title: "StexAcademy",
            summary: "A Platzi-style online courses platform with roles, video lessons, quizzes and verifiable certificates.",
            description: "A learning platform with paths, resumable progress and verifiable certificates for the stexcore ecosystem.",
            keywords: "online courses, e-learning, next.js, postgresql, drizzle, certificates, quizzes, learning paths, stexcore",
        },
    },
};

export default meta;
