import { createNavigation } from "next-intl/navigation"
import { defineRouting } from "next-intl/routing"

export const routing = defineRouting({
  locales: [ "ru", "en", "uz", ],

  defaultLocale: "ru",
})

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing)