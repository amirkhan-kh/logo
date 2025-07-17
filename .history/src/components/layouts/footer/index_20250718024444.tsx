import TopButton from '@/ui/button'
import { useTranslations } from 'next-intl'
import React from 'react'

export const Footer = () => {
  const t = useTranslations("Footer")
  return (
    <footer className='bg-[#120E0F] w-full'>
      <div className="container mx-auto">
        <div className="flex ">
          <div></div>
          <ul>
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
          <ul>
            <li>FAQ</li>
            <li>Delivery</li>
          </ul>
          <TopButton className='text-[#FF9A50] border-[#FF9A50] border py-2.5 px-6 text-[14px] font-medium'>
            {t("footerBtn")}
          </TopButton>
        </div>


        <div className='border-[#F3742D] border-t'>
        <p>© 2025 — Copyright</p>
        </div>
      </div>
    </footer>
  )
}
