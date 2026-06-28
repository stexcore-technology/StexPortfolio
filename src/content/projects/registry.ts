import type { ILangType } from "~/types/lang";
import type { IProjectEntry, IProjectMeta } from "~/types/project";

/**
 * Project registry.
 *
 * Every project lives in `src/content/projects/<slug>/` with:
 *   - `meta.ts`  → default export of {@link IProjectMeta}
 *   - `es.md` / `en.md` → long-form content per language
 *
 * Adding a project = create that folder. No routes, grids or loaders to touch.
 */

// Eagerly collect metadata and raw markdown at build time.
const metaModules = import.meta.glob<{ default: IProjectMeta }>("./*/meta.ts", {
    eager: true,
});
const contentModules = import.meta.glob<string>("./*/*.md", {
    eager: true,
    query: "?raw",
    import: "default",
});

/** slug -> raw markdown per language */
const contentBySlug = new Map<string, Partial<Record<ILangType, string>>>();

for (const [path, raw] of Object.entries(contentModules)) {
    // path looks like "./<slug>/<lang>.md"
    const match = path.match(/^\.\/([^/]+)\/([^/]+)\.md$/);
    if (!match) continue;
    const [, slug, lang] = match;

    const bucket = contentBySlug.get(slug) ?? {};
    bucket[lang as ILangType] = raw;
    contentBySlug.set(slug, bucket);
}

/** All project entries, resolved from metadata + content. */
const entries: IProjectEntry[] = Object.entries(metaModules)
    .map(([path, mod]) => {
        const slug = path.match(/^\.\/([^/]+)\/meta\.ts$/)?.[1];
        if (!slug) return null;

        const meta: IProjectMeta = { ...mod.default, slug: mod.default.slug || slug };
        const content = contentBySlug.get(slug) ?? {};

        return {
            meta,
            content: {
                es: content.es ?? "",
                en: content.en ?? "",
            },
        } satisfies IProjectEntry;
    })
    .filter((entry): entry is IProjectEntry => entry !== null);

/**
 * All projects sorted for display: featured first, then by `order`,
 * then by most recent date.
 */
export const projects: IProjectMeta[] = entries
    .map((entry) => entry.meta)
    .sort((a, b) => {
        if (a.featured !== b.featured) return a.featured ? -1 : 1;
        if (a.order !== b.order) return a.order - b.order;
        return b.date.localeCompare(a.date);
    });

/** All project slugs (useful for the visits loader and static paths). */
export const projectSlugs: string[] = projects.map((project) => project.slug);

/**
 * Get a single project's metadata by slug.
 */
export function getProjectMeta(slug: string): IProjectMeta | undefined {
    return entries.find((entry) => entry.meta.slug === slug)?.meta;
}

/**
 * Get the raw markdown for a project in a given language.
 * Falls back to the other language when one is missing.
 */
export function getProjectContent(slug: string, lang: ILangType): string | undefined {
    const entry = entries.find((entry) => entry.meta.slug === slug);
    if (!entry) return undefined;
    return entry.content[lang] || entry.content[lang === "es" ? "en" : "es"];
}
