import React from 'react'

export const Header = () => {
  return (
    <header>
        <nav>
          <ul className="hidden lg:flex items-center gap-3">
            <NavigationLink href="/">{t("navLink1")}</NavigationLink>
            <NavigationLink href="/portfolio">{t("navLink2")}</NavigationLink>
            <NavigationLink href="/service">{t("navLink3")}</NavigationLink>
            <NavigationLink href="/contact">{t("navLink4")}</NavigationLink>
          </ul>
        </nav>
    </header>
  )
}
