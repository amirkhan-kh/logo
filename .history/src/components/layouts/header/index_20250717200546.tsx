import LocalSwitcherComponent from '@/components/select-component';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

export const Header = () => {
    const t = useTranslations("NavLink");
    const pathname = usePathname();
  return (
    <header>
        <nav>
          <ul className="flex items-center gap-3">
            <Link className={`${pathname === "/" ? "text-[]" : ""}`} href="/">{t("navLink1")}</Link>
            <Link className={`${pathname === "/news" ? "text-[]" : ""}`} href="/news">{t("navLink2")}</Link>
            <Link className={`${pathname === "/archive" ? "text-[]" : ""}`} href="/archive">{t("navLink3")}</Link>
            <Link className={`${pathname === "/samarkand" ? "text-[]" : ""}`} href="/samarkand">{t("navLink4")}</Link>
            <Link className={`${pathname === "/fair" ? "text-[]" : ""}`} href="/fair">{t("navLink5")}</Link>
            <Link className={`${pathname === "/forum" ? "text-[]" : ""}`} href="/forum">{t("navLink6")}</Link>
          </ul>
         <LocalSwitcherComponent />
        </nav>
    </header>
  )
}
