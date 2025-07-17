import LocalSwitcherComponent from "@/ui/select-component";
import { CurrentTime } from "@/ui/timer";
import { useTranslations } from "next-intl";
import React from "react";
import { PiSunBold } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { Navbar } from "@/ui/navbar";
import { Input } from "@/ui/input";

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
              <CurrentTime />
            </div>

            <p className="font-medium text-[14px]">+34</p>
            <PiSunBold className="text-[#FFC100]" size={20} />

            <p className="font-medium text-[14px]">{t("navLink8")}</p>
          </div>

          <div className="flex items-center gap-8">
            <LocalSwitcherComponent />
            <div className="flex items-center relative">
              <Input
                className="w-60 py-2 px-2.5 border border-[#E5E8EA] rounded-md font-medium text-[14px]"
                type="text"
                placeholder={`${t("navLink9")}`}
              />
              <IoSearch size={20} className="absolute right-2 text-[#211F2E]" />
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
     <Navbar/>
    </header>
  );
};
