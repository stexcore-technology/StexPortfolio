import type { IProjectMeta } from "~/types/project";

const meta: IProjectMeta = {
    slug: "indexed-db",
    type: "library",
    featured: false,
    order: 20,
    image: "/projects/indexed-db.png",
    date: "2024-12-13",
    npm: "https://www.npmjs.com/package/@stexcore/indexed-db",
    repo: "https://github.com/stexcore/indexed-db",
    packageName: "@stexcore/indexed-db",
    tags: ["TypeScript", "IndexedDB", "JavaScript", "Browser"],
    locales: {
        es: {
            title: "@stexcore/indexed-db",
            summary: "Librería tipada de JavaScript sobre IndexedDB: CRUD y consultas con estructura de tablas.",
            description: "Una capa sobre IndexedDB que simplifica la gestión de datos en el navegador con una estructura similar a una base de datos.",
            keywords: "indexed-db, typescript, javascript, frontend, base de datos, navegador, crud, stexcore",
        },
        en: {
            title: "@stexcore/indexed-db",
            summary: "Typed JavaScript library over IndexedDB: CRUD and queries with a table-like structure.",
            description: "A layer over IndexedDB that simplifies browser data management with a database-like structure.",
            keywords: "indexed-db, typescript, javascript, frontend, database, browser, crud, stexcore",
        },
    },
};

export default meta;
