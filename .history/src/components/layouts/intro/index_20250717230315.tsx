import { Input } from "@/ui/input";
import { useTranslations } from "next-intl";
import React from "react";

export const Intro = () => {
  const t = useTranslations("Intro");
  return (
    <div className="grid place-content-center h-full text-center ">
      <h2 className="font-bold text-[40px] leading-[140%] mb-4">
        {t("title")}
      </h2>
      <p className="text-[#919099] font-medium text-[16px] leading-[150%] mb-8">
        {t("description")}
      </p>
      <div className="px-14">

      <Input
        className="w-full bg-white py-2.5 px-3.5 shadow-sm rounded-md"
        placeholder={t("placeholder")}
        />
    </div>
    </div>
  );
};
