import type { ILangType } from "~/types/lang";

/**
 * Kind of project shown in the portfolio.
 * - "product": a deployed application/service (has a public URL).
 * - "library": a published package (npm) or developer tool.
 */
export type ProjectType = "product" | "library";

/**
 * Localized, human-readable strings for a project.
 */
export interface IProjectLocale {
    /** Title shown in the project card and the project page header. */
    title: string;
    /** Short one-line description shown in the project card grid. */
    summary: string;
    /** Longer subtitle shown under the title on the project page. */
    description: string;
    /** SEO keywords for the project page (comma separated). */
    keywords: string;
}

/**
 * Metadata describing a single project. One per `src/content/projects/<slug>/meta.ts`.
 * Long-form content lives next to it as `es.md` / `en.md`.
 */
export interface IProjectMeta {
    /** URL slug and visits key. Derived from the folder name when not set. */
    slug: string;
    /** Project kind, used to group/badge it. */
    type: ProjectType;
    /** Whether to highlight it among the first/principal projects. */
    featured: boolean;
    /** Manual ordering within its group (lower comes first). */
    order: number;
    /** Creation/publish date in ISO format (yyyy-mm-dd). */
    date: string;
    /** Public live URL, when the project is deployed. */
    url?: string;
    /** Source code repository URL. */
    repo?: string;
    /** npm package page URL, for libraries. */
    npm?: string;
    /** Package name, e.g. "@stexcore/indexed-db". */
    packageName?: string;
    /** Tech tags shown as chips. */
    tags: string[];
    /** Localized strings keyed by language. */
    locales: Record<ILangType, IProjectLocale>;
}

/**
 * A project entry resolved by the registry: its metadata plus the raw
 * markdown content for each language.
 */
export interface IProjectEntry {
    meta: IProjectMeta;
    content: Record<ILangType, string>;
}
