import { locales } from "@/config";
import LocalSwitcher from "@/ui/select-switcher";
import { useLocale, useTranslations } from "next-intl";

export default function LocalSwitcherComponent(){
    const t = useTranslations("SelectSwitcher");
    const locale = useLocale()

    return(
        <LocalSwitcher defaultValue={locale} label={t("label")}>
            {
                locales.map((cur) => (
                    <option value={cur} key={cur}>
                        {t("locale", {locale: cur})}
                    </option>
                ))
            }
        </LocalSwitcher>
    )
}