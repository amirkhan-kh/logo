import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import { hasLocale } from "next-intl";  // hasLocaleni import qilamiz

export default getRequestConfig(async ({ locale }) => {
  // locale'ni hasLocale yordamida tekshiramiz
  if (!hasLocale(routing.locales, locale)) {  // tekshiruv
    throw new Error(`Invalid locale: ${locale}`);
  }

  return {
    messages: (await import(`../messages/${locale}.json`)).default, // mos xabarlarni yuklash
  };
});
