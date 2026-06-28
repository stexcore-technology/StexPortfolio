import { $, component$, useOnDocument, useSignal, useStylesScoped$ } from "@builder.io/qwik";
import useLang from "~/hooks/useLang";
import { GridIcon } from "~/icons/icons";
import styles from "./ecosystem-menu.css?inline";

interface IService {
    name: string;
    tag: { es: string; en: string };
    url: string;
    primary?: boolean;
}

/** The Stexcore ecosystem — keep in sync as new services launch. */
const services: IService[] = [
    { name: "Stexcore", tag: { es: "Agencia · Contratános", en: "Agency · Hire us" }, url: "https://stexcore.net", primary: true },
    { name: "StexCRM", tag: { es: "CRM a medida", en: "Custom CRM" }, url: "https://stexcrm.com" },
    { name: "StexAcademy", tag: { es: "Cursos online", en: "Online courses" }, url: "https://academy.stexcore.net" },
    { name: "StexBingo", tag: { es: "Bingo en vivo", en: "Live Bingo" }, url: "https://stexbingo.com" },
    { name: "StexAssistant", tag: { es: "Chat de IA", en: "AI chat" }, url: "https://chat.stexcore.net" },
];

const LABELS = {
    es: { title: "Ecosistema Stexcore", subtitle: "Explorá los otros servicios" },
    en: { title: "Stexcore ecosystem", subtitle: "Explore our other services" },
};

/**
 * Ecosystem switcher: a subtle app-bar button that reveals the other
 * Stexcore services, connecting the portfolio back to the ecosystem.
 */
export default component$(() => {
    useStylesScoped$(styles);

    const lang = useLang([]);
    const open = useSignal(false);
    const rootRef = useSignal<HTMLElement>();

    // Close when clicking outside the menu.
    useOnDocument("click", $((ev) => {
        const root = rootRef.value;
        if (open.value && root && ev.target instanceof Node && !root.contains(ev.target)) {
            open.value = false;
        }
    }));

    const lt = lang.value.lang_type === "es" ? "es" : "en";
    const t = LABELS[lt];

    return (
        <li class="ecosystem" ref={rootRef}>
            <button
                class="trigger"
                type="button"
                title={t.title}
                aria-label={t.title}
                aria-expanded={open.value}
                onClick$={() => (open.value = !open.value)}
            >
                <GridIcon></GridIcon>
            </button>

            <div class={["popup", { active: open.value }]}>
                <div class="popup-head">
                    <strong>{t.title}</strong>
                    <span>{t.subtitle}</span>
                </div>
                {services.map((s) => (
                    <a
                        key={s.url}
                        class={["item", { primary: s.primary }]}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span class="name">{s.name}</span>
                        <span class="tag">{s.tag[lt]}</span>
                    </a>
                ))}
            </div>
        </li>
    );
});
