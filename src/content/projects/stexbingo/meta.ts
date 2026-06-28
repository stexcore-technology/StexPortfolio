import type { IProjectMeta } from "~/types/project";

// Tip: this is the ONLY file you edit to change cards, links, dates or order.
const meta: IProjectMeta = {
    slug: "stexbingo",
    type: "product",
    featured: false,
    order: 10,
    date: "2026-06-28",
    url: "https://stexbingo.com",
    tags: ["Next.js", "Fastify", "Socket.io", "PostgreSQL", "Drizzle ORM", "Turborepo"],
    locales: {
        es: {
            title: "StexBingo",
            summary: "Bingo multijugador en tiempo real, multi-organización, con victorias validadas en el servidor.",
            description: "Plataforma SaaS de bingo en vivo para entretenimiento, con sincronización por WebSocket y subdominios por organización.",
            keywords: "bingo, tiempo real, websocket, socket.io, fastify, next.js, multi-tenant, saas, stexcore",
        },
        en: {
            title: "StexBingo",
            summary: "Real-time multiplayer Bingo, multi-organization, with server-validated wins for live games.",
            description: "A live Bingo SaaS for entertainment, with WebSocket sync and a branded subdomain per organization.",
            keywords: "bingo, real-time, websocket, socket.io, fastify, next.js, multi-tenant, saas, stexcore",
        },
    },
};

export default meta;
