import type { IProjectMeta } from "~/types/project";

const meta: IProjectMeta = {
    slug: "stexassistant",
    type: "product",
    featured: false,
    order: 11,
    date: "2026-06-15",
    url: "https://assistant.stexcore.net",
    tags: ["Next.js", "React", "Ollama", "TailwindCSS", "TypeScript", "Docker"],
    locales: {
        es: {
            title: "StexAssistant",
            summary: "Chat de IA autoalojado y privado, con un modelo Ollama local. Sin nube, todo en un solo docker-compose.",
            description: "Asistente de IA privado y autocontenido, impulsado por un modelo Ollama local.",
            keywords: "asistente de IA, chat IA, Ollama, IA local, autoalojado, privacidad, Next.js, Docker, Stexcore",
        },
        en: {
            title: "StexAssistant",
            summary: "Privacy-first, self-hosted AI chat powered by a local Ollama model. No cloud, all in one docker-compose.",
            description: "A private, self-contained AI assistant powered by a local Ollama model.",
            keywords: "AI assistant, AI chat, Ollama, local AI, self-hosted, privacy, Next.js, Docker, Stexcore",
        },
    },
};

export default meta;
