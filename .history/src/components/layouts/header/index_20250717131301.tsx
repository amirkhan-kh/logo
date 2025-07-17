import LocalSwitcherComponent from '@/components/select-component';
import NavigationLink from '@/ui/navigation-link'
import { useTranslations } from 'next-intl';
import React from 'react'

export const Header = () => {
    const t = useTranslations("NavLink");
  return (
    <header>
        <nav>
          <ul className="flex items-center gap-3">
            <NavigationLink href="/">{t("navLink1")}</NavigationLink>
            <NavigationLink href="/news">{t("navLink2")}</NavigationLink>
            <NavigationLink href="/archive">{t("navLink3")}</NavigationLink>
            <NavigationLink href="/samarkand">{t("navLink4")}</NavigationLink>
            <NavigationLink href="/fair">{t("navLink5")}</NavigationLink>
            <NavigationLink href="/forum">{t("navLink6")}</NavigationLink>
          </ul>
          <LanguageSwitcher/>
        </nav>
    </header>
  )
}
