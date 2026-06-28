import { component$ } from "@builder.io/qwik";
import { BackIcon, EyeIcon, GithubIcon, GlobeIcon, NpmIcon, WhatsappIcon } from "~/icons/icons";
import ContentProject from "../content-project/content-project";
import Divider from "../divider/divider";
import HeaderProject from "../header-project/header-project";
import HtmlContent from "../html-content/html-content";
import IconButton from "../icon-button/icon-button";
import MainContent from "../main-content/main-content";
import Navbar, { NavItem } from "../navbar/navbar";
import { useNavigate } from "@builder.io/qwik-city";
import { formatViews } from "~/utils/text.util";
import Box from "../box/box";
import LangButton from "../lang-button/lang-button";
import LangProvider from "~/providers/lang.provider";
import { WHATSAPP_URL } from "~/config/contact";

interface IProjectProps {
    title: string,
    description: string,
    html: string,
    views: number,
    /** Public live site URL. */
    url?: string,
    /** Source code repository URL. */
    repo?: string,
    /** npm package URL. */
    npm?: string,
}

export default component$<IProjectProps>((props) => {
    // Load styles
    const navigate = useNavigate();

    return (
        <LangProvider segments={[]}>
            <Navbar>
                <IconButton q:slot="start" onClick$={() => navigate("..")}>
                    <BackIcon></BackIcon>
                </IconButton>
                <NavItem title="Views counter for this page" disabled>
                    <EyeIcon></EyeIcon> {formatViews(props.views)}
                </NavItem>
                {props.url && (
                    <NavItem href={props.url} title="Visit live site">
                        <GlobeIcon></GlobeIcon>
                    </NavItem>
                )}
                {props.npm && (
                    <NavItem href={props.npm} title="View on npm">
                        <NpmIcon></NpmIcon>
                    </NavItem>
                )}
                <NavItem href={props.repo || "https://github.com/stexcore"} title="Source code">
                    <GithubIcon></GithubIcon>
                </NavItem>
                <NavItem href={WHATSAPP_URL} title="Contact us on WhatsApp">
                    <WhatsappIcon></WhatsappIcon>
                </NavItem>
                <Box px={10}></Box>
                <LangButton></LangButton>
            </Navbar>
            <MainContent>
                <HeaderProject
                    title={props.title}
                    description={props.description}
                ></HeaderProject>
                <Divider></Divider>
                <ContentProject q:slot="bottom">
                    <HtmlContent html={props.html}></HtmlContent>
                </ContentProject>
            </MainContent>
        </LangProvider>
    );
});
