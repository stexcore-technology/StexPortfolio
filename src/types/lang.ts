export interface ILangNavbar_Home {
    navbar: {
        back: {
            tooltip: string
        }
        projects: {
            label: string,
            tooltip: string
        },
        contact: {
            label: string,
            tooltip: string
        }
    }
}

export interface ILangHome {
    header: string,
    phrase: string
}

export interface ILangContact {
    contacts: {
        whatsapp: {
            label: string,
            tooltip: string
        },
        email: {
            label: string,
            tooltip: string
        },
        github: {
            label: string,
            tooltip: string
        }
    }
}

export interface ILangProjects {
    header: {
        title: string,
        description: string,
    }
}

export interface IHeadPage {
    title: string,
    description: string,
    author: string,
    keywords: string
}

export interface ILang {
    "home": ILangHome,
    "projects": ILangProjects,
    "contact": ILangContact
    "navbar:home": ILangNavbar_Home,
    "head:home": IHeadPage,
    "head:projects": IHeadPage,
    "head:contact": IHeadPage
}

export type ILangType = "es" | "en";
