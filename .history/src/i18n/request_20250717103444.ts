import { getRequestConfig } from "next-intl/server"
import { routing } from "./routing"

export default getRequestConfig(async ({ locale }) => {
  if (!routing.locales.includes(locale as any)) {
    throw new Error(`Invalid locale: ${locale}`)
  }

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  }
})
