import React from 'react'
import NavigationLink from '../navigation-link'
import { useTranslations } from 'next-intl';
import TopButton from '../button';

export const Navbar = () => {
     const t = useTranslations("NavLink");
  return (
     <div className="container mx-auto flex items-center py-5">
        <div className="flex items-center gap-14">
          <h1 className="font-bold text-[32px]">
            <strong>Logo</strong>
          </h1>

          <nav>
            <ul className="flex items-center gap-6">
              <li>
                <NavigationLink href="/">{t("navLink1")}</NavigationLink>
              </li>
              <li>
                <NavigationLink href="/news">{t("navLink2")}</NavigationLink>
              </li>
              <li>
                <NavigationLink href="/archive">{t("navLink3")}</NavigationLink>
              </li>
              <li>
                <NavigationLink href="/samarkand">
                  {t("navLink4")}
                </NavigationLink>
              </li>
              <li>
                <NavigationLink href="/fair">{t("navLink5")}</NavigationLink>
              </li>
              <li>
                <NavigationLink href="/forum">{t("navLink6")}</NavigationLink>
              </li>
            </ul>
          </nav>
        </div>
        <TopButton
         className='py-2 px-6 tex-[12px] font-medium text-[#919099]'>
           {t("btn")}
        </TopButton>
      </div>
  )
}
