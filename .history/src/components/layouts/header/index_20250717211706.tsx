import LocalSwitcherComponent from "@/components/select-component";
import NavigationLink from "@/ui/navigation-link";
import { CurrentTime } from "@/ui/timer";
import { useTranslations } from "next-intl";
import React from "react";

export const Header = () => {
  const t = useTranslations("NavLink");
  return (
    <header className="">
      <div className="border-[#EEEFF0] border-b-[1px]">
        <div className="flex items-center justify-between py-[19px] container mx-auto">
          <p>{t("navLink7")}</p>
          <p className="w-[60px]">
            <CurrentTime />
          </p>
          <p>+34</p>
          <p>{t("navLink8")}</p>



          
          <LocalSwitcherComponent />
          <input
            className="w-60 py-2 px-2.5 border border-[#E5E8EA] rounded-md font-medium text-[14px]"
            type="text"
            placeholder={`${t("navLink9")}`}
          />
        </div>
      </div>

      <nav>
        <ul className="flex items-center gap-3">
          <NavigationLink href="/">{t("navLink1")}</NavigationLink>
          <NavigationLink href="/news">{t("navLink2")}</NavigationLink>
          <NavigationLink href="/archive">{t("navLink3")}</NavigationLink>
          <NavigationLink href="/samarkand">{t("navLink4")}</NavigationLink>
          <NavigationLink href="/fair">{t("navLink5")}</NavigationLink>
          <NavigationLink href="/forum">{t("navLink6")}</NavigationLink>
        </ul>
      </nav>
    </header>
  );
};
