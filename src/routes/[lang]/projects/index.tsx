import { component$, useStylesScoped$ } from "@builder.io/qwik";
import IconButton from "~/components/icon-button/icon-button";
import CardProject from "~/components/card-project/card-project";
import Navbar, { NavItem } from "~/components/navbar/navbar";
import { BackIcon } from "~/icons/icons";
import { type DocumentHead, routeLoader$, useNavigate } from "@builder.io/qwik-city";
import MainContent from "~/components/main-content/main-content";
import Divider from "~/components/divider/divider";
import Header from "~/components/header/header";
import Box from "~/components/box/box";
import styles from "./index.css?inline";
import visitsService from "~/services/visits.service";
import LangProvider from "~/providers/lang.provider";
import useLang from "~/hooks/useLang";
import LangButton from "~/components/lang-button/lang-button";
import langService from "~/services/lang.service";
import type { ILangType } from "~/types/lang";
import { projects, projectSlugs } from "~/content/projects/registry";
import { formatDate } from "~/utils/text.util";

export const useVisits = routeLoader$(async () => {
    const records = await Promise.all(
        projectSlugs.map((slug) => visitsService.getVisit(slug)),
    );

    const visits: Record<string, number> = {};
    projectSlugs.forEach((slug, index) => {
        visits[slug] = records[index]?.count_visit ?? 0;
    });

    return visits;
});

const PageComponent = component$(() => {
    const lang = useLang(["navbar:home", "projects"]);

    // Load styles
    useStylesScoped$(styles);
    // Visits
    const visits = useVisits();
    // Load navigate
    const navigate = useNavigate();

    const langType = lang.value.lang_type;

    return (
        <>
            <Navbar>
                <IconButton q:slot="start" onClick$={() => navigate("..")} title={lang.value["navbar:home"]?.navbar.back.tooltip}>
                    <BackIcon></BackIcon>
                </IconButton>
                <NavItem href={`/${langType}/projects`} title={lang.value["navbar:home"]?.navbar.projects.tooltip}>
                    {lang.value["navbar:home"]?.navbar.projects.label}
                </NavItem>
                <NavItem href={`/${langType}/contact`} title={lang.value["navbar:home"]?.navbar.contact.tooltip}>
                    {lang.value["navbar:home"]?.navbar.contact.label}
                </NavItem>
                <Box px={10}></Box>
                <LangButton></LangButton>
            </Navbar>
            <MainContent>
                <Header
                    title={lang.value.projects?.header.title || ""}
                    description={lang.value.projects?.header.description || ""}
                ></Header>
                <Divider></Divider>
                <Box py={40}>
                    <div class="grid-container">
                        {projects.map((project) => {
                            const locale = project.locales[langType] ?? project.locales.en;
                            return (
                                <CardProject
                                    key={project.slug}
                                    href={`/${langType}/projects/${project.slug}`}
                                    title={locale.title}
                                    details={locale.summary}
                                    date={formatDate(project.date, langType)}
                                    views={visits.value[project.slug] ?? 0}
                                    image={project.image}
                                ></CardProject>
                            );
                        })}
                    </div>
                </Box>
            </MainContent>
        </>
    )
});

export default component$(() => {
    return (
        <LangProvider segments={["navbar:home", "projects"]}>
            <PageComponent></PageComponent>
        </LangProvider>
    );
});

/**
 * Head Page
 * @param ctx Context
 */
export const head: DocumentHead = (ctx) => {
  // Get lang
  const segment = langService.getLang(ctx.params.lang as ILangType, "head:projects");

  return {
    title: segment.title,
    meta: [
      { name: "description", content: segment.description },
      { name: "author", content: segment.author },
      { name: "keywords", content: segment.keywords }
    ],
  }
};
