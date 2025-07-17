import LocalSwitcherComponent from "@/components/select-component";
import NavigationLink from "@/ui/navigation-link";
import { CurrentTime } from "@/ui/timer";
import { useTranslations } from "next-intl";
import React from "react";
import { PiSunBold } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";

export const Header = () => {
  const t = useTranslations("NavLink");
  return (
    <header className="">
      {/* Top header */}
      <div className="border-[#EEEFF0] border-b-[1px] py-[19px]">
        <div className="flex items-center justify-between py-[19px] container mx-auto">
          <div className="flex items-center gap-3">
            <div className="flex items-center border-[#EEEFF0] border-r-[1px] gap-3 pr-3">
              <p className="font-medium text-[14px]">{t("navLink7")}</p>
              <p className="w-[60px]font-medium text-[14px]">
                <CurrentTime />
              </p>
            </div>

            <p className="font-medium text-[14px]">+34</p>
            <PiSunBold className="text-[#FFC100]" size={20} />

            <p className="font-medium text-[14px]">{t("navLink8")}</p>
          </div>

          <div className="flex items-center gap-8">
            <LocalSwitcherComponent />
            <div className="flex items-center">
              <input
                className="w-60 py-2 px-2.5 border border-[#E5E8EA] rounded-md font-medium text-[14px]"
                type="text"
                placeholder={`${t("navLink9")}`}
              />
              <IoSearch size={20} className="-translate-x-8 text-[#211F2E]" />
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
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
    </header>
  );
};
