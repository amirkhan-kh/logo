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
            <Link
             href="/">{t("navLink1")}
            </Link>
            <Link
             href="/news">{t("navLink2")}
            </Link>
            <Link
             href="/archive">{t("navLink3")}
            </Link>
            <Link
             href="/samarkand">{t("navLink4")}
            </Link>
            <Link
             href="/fair">{t("navLink5")}
            </Link>
            <Link
             href="/forum">{t("navLink6")}
            </Link>
          </ul>
         <LocalSwitcherComponent />
        </nav>
    </header>
  )
}
