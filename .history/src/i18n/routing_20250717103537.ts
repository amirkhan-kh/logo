import { defineRouting } from "next-intl/routing"

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "es", "fr", "de"],

  // Used when no locale matches
  defaultLocale: "en",
})

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
