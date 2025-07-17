// import LocalSwitcher from "@/ui/language-switcher";
// import { useLocale, useTranslations } from "next-intl";
// import { locales } from '../../../.history/config_20250717104617';

// export default function LocalSwitcherComponent(){
//     const t = useTranslations("NavLink");
//     const locale = useLocale()

//     return(
//         <LocalSwitcher defaultValue={locale} label={t("label")}>
//             {
//                 locales.map((cur) => (
//                     <option value={cur} key={cur}>
//                         {t("locale", {locale: cur})}
//                     </option>
//                 ))
//             }
//         </LocalSwitcher>
//     )
// }