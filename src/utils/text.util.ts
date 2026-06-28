/**
 * Format an ISO date (yyyy-mm-dd) into a localized, human-readable string.
 * @param iso ISO date string
 * @param lang Language code ("es" | "en")
 * @returns Localized date, e.g. "June 26, 2026" / "26 de junio de 2026"
 */
export function formatDate(iso: string, lang: string) {
    const date = new Date(iso + "T00:00:00");
    if (isNaN(date.getTime())) return iso;
    return new Intl.DateTimeFormat(lang === "es" ? "es-ES" : "en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(date);
}

/**
 * Format views
 * @param views Views count
 * @returns Views formated
 */
export function formatViews(views: number) {
    if (views >= 1_000_000) {
      return (views / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
    } else if (views >= 1_000) {
      return (views / 1_000).toFixed(1).replace(/\.0$/, '') + 'k';
    }
    return views.toString();
}