import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { GlobeIcon } from "~/icons/icons";
import styles from "./header-project.css?inline";

interface IHeaderProjectProps {
    title: string,
    description: string,
    /** Cover image path. */
    image?: string,
    /** Live site URL for the visit button. */
    url?: string,
    /** Localized label for the visit button. */
    visitLabel?: string,
}

export default component$<IHeaderProjectProps>((props) => {
    // Load styles
    useStylesScoped$(styles);

    return (
        <div class="header-project">
            {props.image && (
                <img class="banner" src={props.image} alt={props.title} width={1280} height={720} />
            )}
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            {props.url && (
                <a class="visit-btn" href={props.url} target="_blank" rel="noopener noreferrer">
                    <GlobeIcon size="md"></GlobeIcon>
                    {props.visitLabel || "Visit site"}
                </a>
            )}
        </div>
    );
});
