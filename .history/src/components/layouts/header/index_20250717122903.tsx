import NavigationLink from '@/ui/navigation-link'
import { useTranslations } from 'next-intl';
import React from 'react'

export const Header = () => {
    const t = useTranslations("NavLink");
  return (
    <header>
        <nav>as
          <ul className="flex items-center gap-3">
            <NavigationLink href="/">{t("navLink1")}</NavigationLink>
            <NavigationLink href="/news">{t("navLink2")}</NavigationLink>
            <NavigationLink href="/">{t("navLink3")}</NavigationLink>
            <NavigationLink href="/contact">{t("navLink4")}</NavigationLink>
            <NavigationLink href="/contact">{t("navLink5")}</NavigationLink>
            <NavigationLink href="/contact">{t("navLink6")}</NavigationLink>
          </ul>
        </nav>
    </header>
  )
}
