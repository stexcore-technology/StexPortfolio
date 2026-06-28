import type { ILang } from "~/types/lang";

const lang: ILang = {
    "home": {
        header: "stexcore",
        phrase: "My goal when developing is not to have excessive dependencies."
    },
    "contact": {
        contacts: {
            whatsapp: {
                label: "Whatsapp",
                tooltip: "Contact us on Whatsapp"
            },
            email: {
                label: "Email",
                tooltip: "Contact us by email"
            },
            github: {
                label: "Github",
                tooltip: "Contact us on Github"
            }
        }
    },
    "projects": {
        header: {
            title: "Projects",
            description: "Products from the Stexcore ecosystem and a few open-source libraries.",
        }
    },
    "navbar:home": {
        navbar: {
            back: {
                tooltip: "Go to back"
            },
            contact: {
                label: "Contact",
                tooltip: "Contact us"
            },
            projects: {
                label: "Projects",
                tooltip: "All projects"
            }
        }
    },
    "head:home": {
        title: "Portfolio Stexcore",
        description: "Stexcore Technology portfolio, Qwik-powered, showcasing our products and projects, highlighting expertise and creativity in development.",
        author: "Stexcore Technology",
        keywords: "portfolio, developments, projects, typescript, next.js, qwik, backend, api, saas, crm"
    },
    "head:contact": {
        title: "Contact - Portfolio Stexcore",
        description: "Discover the various ways to reach us: email, WhatsApp, and GitHub, designed to make professional communication easy and efficient.",
        author: "Stexcore Technology",
        keywords: "portfolio, projects, contact, whatsapp, email, github"
    },
    "head:projects": {
        title: "Projects - Portfolio Stexcore",
        description: "Explore Stexcore Technology products and libraries: web platforms, backend systems, real-time SaaS, and open-source tools.",
        author: "Stexcore Technology",
        keywords: "portfolio, developments, projects, typescript, next.js, qwik, backend, api, saas, crm"
    }
}

export default lang;
