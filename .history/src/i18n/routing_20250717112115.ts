import { createNavigation } from "next-intl/navigation"
import { defineRouting } from "next-intl/routing"

export const routing = defineRouting({
  locales: ["en", "uz", "es", "fr", "de"],

  defaultLocale: "en",
})

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing)