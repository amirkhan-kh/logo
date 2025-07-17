import LocalSwitcherComponent from '@/components/select-component';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react'

export const Header = () => {
    const t = useTranslations("NavLink");
    
  return (
    <header>
        <nav>
          <ul className="flex items-center gap-3">
            <Link className={`${pathname === "/" ? "active" : ""}`} href="/">{t("navLink1")}</Link>
            <Link className={`${pathname === "/" ? "active" : ""}`} href="/news">{t("navLink2")}</Link>
            <Link className={`${pathname === "/" ? "active" : ""}`} href="/archive">{t("navLink3")}</Link>
            <Link className={`${pathname === "/" ? "active" : ""}`} href="/samarkand">{t("navLink4")}</Link>
            <Link className={`${pathname === "/" ? "active" : ""}`} href="/fair">{t("navLink5")}</Link>
            <Link className={`${pathname === "/" ? "active" : ""}`} href="/forum">{t("navLink6")}</Link>
          </ul>
         <LocalSwitcherComponent />
        </nav>
    </header>
  )
}
