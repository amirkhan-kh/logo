import TopButton from "@/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  const f = useTranslations("Footer");  
  const t = useTranslations("NavLink");
  
  return (
    <footer className="bg-[#120E0F] w-full py-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid my-7">
          <div className="">
            <h2 className="text-[#FF9A50] text-[44px] font-bold mb-11">Logo</h2>
            <div>
              <p className="text-[#DCC7BC] font-medium text-[14px] mb-3">hello@logoipsum.com</p>
              <p className="text-[#DCC7BC] font-medium text-[14px]">+1 891 989-11-91</p>
            </div>
          </div>
          <ul className="text-[#DCC7BC] font-medium text-[16px] leading-[170%]">
            <li>
              <Link href="/">{t("navLink1")}</Link>
            </li>
            <li>
              <Link href="/news">{t("navLink2")}</Link>
            </li>
            <li>
              <Link href="/archive">{t("navLink3")}</Link>
            </li>
            <li>
              <Link href="/samarkand">{t("navLink4")}</Link>
            </li>
            <li>
              <Link href="/fair">{t("navLink5")}</Link>
            </li>
            <li>
              <Link href="/forum">{t("navLink6")}</Link>
            </li>
          </ul>
          <ul className="text-[#dcc7bcce] font-medium text-[16px] leading-[140%]">
            <li>FAQ</li>
            <li>Delivery</li>
          </ul>
          <TopButton className="text-[#FF9A50] border-[#FF9A50] border py-2.5 px-6 text-[14px] font-medium hover:bg-black">
            {f("footerBtn")}
          </TopButton>
        </div>

        <div className="border-[#F3742D] border-t flex items-end justify-between pt-6">
          <p className="text-[#E7C4B1] text-[12px] font-normal">© 2025 — Copyright</p>
          <p className="text-[#E7C4B1] text-[12px] font-normal">Privacy</p>
        </div>
      </div>
    </footer>
  );
};
