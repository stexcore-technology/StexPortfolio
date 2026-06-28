import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";

/**
 * Markdown renderer with syntax highlighting.
 *
 * Runs on the server (inside route loaders), so the full highlight.js
 * bundle never reaches the client. Output is trusted HTML produced from
 * our own content files under `src/content/projects`.
 */
const marked = new Marked(
    markedHighlight({
        emptyLangClass: "hljs",
        langPrefix: "hljs language-",
        highlight(code, lang) {
            const language = hljs.getLanguage(lang) ? lang : "plaintext";
            return hljs.highlight(code, { language }).value;
        },
    }),
);

marked.setOptions({
    gfm: true,
    breaks: false,
});

/**
 * Render a Markdown string to an HTML string.
 * @param md Markdown source
 * @returns HTML markup wrapped in an <article> element
 */
export function renderMarkdown(md: string): string {
    return `<article>${marked.parse(md, { async: false })}</article>`;
}
