import type { IProjectMeta } from "~/types/project";

const meta: IProjectMeta = {
    slug: "stexcore",
    type: "product",
    featured: true,
    order: 2,
    date: "2026-06-27",
    url: "https://stexcore.net",
    tags: ["Next.js", "React", "TypeScript", "TailwindCSS", "Framer Motion", "Material UI"],
    locales: {
        es: {
            title: "Stexcore",
            summary: "Organización de desarrollo de software que convierte ideas en apps, webs y sistemas reales.",
            description: "La carta de presentación de Stexcore Technology: del concepto al lanzamiento, acompañando cada paso.",
            keywords: "stexcore, desarrollo de software, apps móviles, flutter, next.js, nestjs, postgresql, agencia, venezuela",
        },
        en: {
            title: "Stexcore",
            summary: "A software development organization that turns ideas into real apps, web platforms and systems.",
            description: "The landing page of Stexcore Technology: from concept to launch, by your side at every step.",
            keywords: "stexcore, software development, mobile apps, flutter, next.js, nestjs, postgresql, agency, venezuela",
        },
    },
};

export default meta;
