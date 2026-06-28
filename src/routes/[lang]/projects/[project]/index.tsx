import { component$ } from "@builder.io/qwik";
import { type DocumentHead, routeLoader$ } from "@builder.io/qwik-city";
import Project from "~/components/project/project";
import { getProjectContent, getProjectMeta } from "~/content/projects/registry";
import { renderMarkdown } from "~/utils/markdown";
import visitsService from "~/services/visits.service";
import { ORG_NAME } from "~/config/contact";
import type { ILangType } from "~/types/lang";

export const useProject = routeLoader$(async (event) => {
    const slug = event.params.project;
    const lang = event.params.lang as ILangType;

    const meta = getProjectMeta(slug);
    if (!meta) {
        // Unknown project: send the visitor back to the projects list.
        throw event.redirect(302, `/${lang}/projects`);
    }

    const html = renderMarkdown(getProjectContent(slug, lang) ?? "");
    const visit = await visitsService.incrementVisit(slug);
    const locale = meta.locales[lang] ?? meta.locales.en;

    return {
        html,
        views: visit.count_visit,
        title: locale.title,
        description: locale.description,
        url: meta.url,
        repo: meta.repo,
        npm: meta.npm,
    };
});

export default component$(() => {
    const project = useProject();

    return (
        <Project
            title={project.value.title}
            description={project.value.description}
            html={project.value.html}
            views={project.value.views}
            url={project.value.url}
            repo={project.value.repo}
            npm={project.value.npm}
        ></Project>
    );
});

/**
 * Head Page — built from the project metadata.
 */
export const head: DocumentHead = ({ params }) => {
    const meta = getProjectMeta(params.project);
    const lang = params.lang as ILangType;
    const locale = meta?.locales[lang] ?? meta?.locales.en;

    return {
        title: locale ? `${locale.title} - ${ORG_NAME} Portfolio` : `${ORG_NAME} Portfolio`,
        meta: [
            { name: "description", content: locale?.summary ?? "" },
            { name: "author", content: ORG_NAME },
            { name: "keywords", content: locale?.keywords ?? "" },
        ],
    };
};
