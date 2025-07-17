import TopButton from "@/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  const f = useTranslations("Footer");  
  const t = useTranslations("NavLink");
  
  return (
    <footer className="bg-[#120E0F] w-full">
      <div className="container mx-auto">
        <div className="flex ">
          <div className="flex flex-col justify-between">
            <h2 className="text-[#FF9A50] text-[40px] font-bold">Logo</h2>
            <div>
              <p className="text-[#dcc7bcd8] font-medium text-[14px]">hello@logoipsum.com</p>
              <p className="text-[#DCC7BC] font-medium text-[14px]">+1 891 989-11-91</p>
            </div>
          </div>
          <ul>
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
          <ul>
            <li>FAQ</li>
            <li>Delivery</li>
          </ul>
          <TopButton className="text-[#FF9A50] border-[#FF9A50] border py-2.5 px-6 text-[14px] font-medium hover:bg-black">
            {f("footerBtn")}
          </TopButton>
        </div>

        <div className="border-[#F3742D] border-t">
          <p>© 2025 — Copyright</p>
          <p>Privacy</p>
        </div>
      </div>
    </footer>
  );
};
