import type { IProjectMeta } from "~/types/project";

// Tip: this is the ONLY file you edit to change cards, links, dates or order.
const meta: IProjectMeta = {
    slug: "stexcrm",
    type: "product",
    featured: true,
    order: 1,
    date: "2026-06-26",
    url: "https://stexcrm.com",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM", "Material UI", "Auth.js"],
    locales: {
        es: {
            title: "StexCRM",
            summary: "CRM flexible con objetos dinámicos y constructor de formularios drag-and-drop, sin tocar código.",
            description: "Un CRM genérico que se adapta a cualquier negocio mediante esquemas de datos personalizables y formularios visuales.",
            keywords: "crm, next.js, postgresql, drizzle, formularios, objetos dinámicos, saas, stexcore",
        },
        en: {
            title: "StexCRM",
            summary: "A flexible CRM with dynamic objects and a drag-and-drop form builder — no code required.",
            description: "A generic CRM that adapts to any business through customizable data schemas and visual forms.",
            keywords: "crm, next.js, postgresql, drizzle, forms, dynamic objects, saas, stexcore",
        },
    },
};

export default meta;
