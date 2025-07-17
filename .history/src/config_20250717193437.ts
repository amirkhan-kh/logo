import { LocalePrefix, Pathnames } from "next-intl/routing";

export const locales = ["uz", "en", "ru"] as const
export type Locales = typeof locales ;

export const pathnames: Pathnames<Locales> = {
    "/":"/",
    "/news":"/news",
    "/archive":"/archive",
    "/contact":"contact"
};
export const localePrefix: LocalePrefix<Locales> = "always"