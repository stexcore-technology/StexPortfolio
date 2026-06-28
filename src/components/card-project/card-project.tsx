import { component$, useStylesScoped$ } from "@builder.io/qwik";
import CardButton from "../card-button/card-button";
import { EyeIcon } from "~/icons/icons";
import styles from "./card-project.css?inline";
import Box from "../box/box";
import { formatViews } from "~/utils/text.util";

interface ICardProjectProps {
    date?: string,
    href?: string
    title: string,
    details: string,
    views: number,
    image?: string,
}

export default component$<ICardProjectProps>(({ date, title, details, views, href, image }) => {
    // Load styles
    useStylesScoped$(styles);

    return (
        <CardButton href={href}>
            {image && (
                <img class="thumb" src={image} alt={title} width={600} height={340} loading="lazy" />
            )}
            <div class="date">
                {date}
                <div class="visits">
                    <EyeIcon size="md"></EyeIcon> <Box pb={2}>{formatViews(views)}</Box>
                </div>
            </div>
            <div class="content">
                <h2>{title}</h2>
                <p>{details}</p>
            </div>
        </CardButton>
    )
});