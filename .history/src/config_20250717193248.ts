import { LocalePrefix, Pathnames } from "next-intl/routing";

export const locales = ["uz", "en", "ru"] as const
export type Locales = typeof locales ;

export const pathnames: Pathnames<Locales> = {
    "/":"/",
    "/portfolio":"/portfolio",
    "/service":"/service",
    "/contact":"contact"
};
export const localePrefix: LocalePrefix<Locales> = "always"