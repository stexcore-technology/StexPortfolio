import { $, component$, useOnDocument, useSignal, useStylesScoped$ } from "@builder.io/qwik";
import useLang from "~/hooks/useLang";
import { GridIcon } from "~/icons/icons";
import styles from "./ecosystem-menu.css?inline";

interface IService {
    name: string;
    tag: { es: string; en: string };
    url: string;
    /** Marks this entry as the current site: shown disabled with a "you're here" label. */
    current?: boolean;
}

/** The Stexcore ecosystem — keep in sync as new services launch. */
const services: IService[] = [
    { name: "Stexcore", tag: { es: "Agencia", en: "Agency" }, url: "https://stexcore.net" },
    { name: "StexCRM", tag: { es: "CRM a medida", en: "Custom CRM" }, url: "https://stexcrm.com" },
    { name: "StexAcademy", tag: { es: "Cursos online", en: "Online courses" }, url: "https://academy.stexcore.net" },
    { name: "StexBingo", tag: { es: "Bingo en vivo", en: "Live Bingo" }, url: "https://stexbingo.com" },
    { name: "StexAssistant", tag: { es: "Chat de IA", en: "AI chat" }, url: "https://chat.stexcore.net" },
    { name: "Portafolio", tag: { es: "Portafolio", en: "Portfolio" }, url: "https://portfolio.stexcore.net", current: true },
];

const LABELS = {
    es: { title: "Ecosistema Stexcore", subtitle: "Explorá los otros servicios", here: "Estás aquí" },
    en: { title: "Stexcore ecosystem", subtitle: "Explore our other services", here: "You're here" },
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
                    s.current ? (
                        <div key={s.url} class="item current" aria-current="page">
                            <span class="name">{s.name}</span>
                            <span class="tag">{t.here}</span>
                        </div>
                    ) : (
                        <a
                            key={s.url}
                            class="item"
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span class="name">{s.name}</span>
                            <span class="tag">{s.tag[lt]}</span>
                        </a>
                    )
                ))}
            </div>
        </li>
    );
});
