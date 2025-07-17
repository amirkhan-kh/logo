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
            <Link className={`${pathname === "/" ? "text-[#211F2E]" : ""}`} href="/">{t("navLink1")}</Link>
            <Link className={`${pathname === "/news" ? "text-[#211F2E]" : ""}`} href="/news">{t("navLink2")}</Link>
            <Link className={`${pathname === "/archive" ? "text-[#211F2E]" : ""}`} href="/archive">{t("navLink3")}</Link>
            <Link className={`${pathname === "/samarkand" ? "text-[#211F2E]" : ""}`} href="/samarkand">{t("navLink4")}</Link>
            <Link className={`${pathname === "/fair" ? "text-[#211F2E]" : ""}`} href="/fair">{t("navLink5")}</Link>
            <Link className={`${pathname === "/forum" ? "text-[#211F2E]" : ""}`} href="/forum">{t("navLink6")}</Link>
          </ul>
         <LocalSwitcherComponent />
        </nav>
    </header>
  )
}
