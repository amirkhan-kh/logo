import React from 'react'

export const Navbar = () => {
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
        
      </div>
  )
}
