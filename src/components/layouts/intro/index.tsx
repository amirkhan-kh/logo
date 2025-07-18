import { InputElement } from "@/ui-elements/input";
import { useTranslations } from "next-intl";
import React from "react";

export const Intro = () => {
  const t = useTranslations("Intro");
  return (
      <div className="grid place-content-center h-[500px] text-center ">
        <h2 className="font-bold text-2xl sm:text-[40px] leading-[140%] mb-4">
          {t("title")}
        </h2>
        <p className="text-[#919099] font-medium text-[12px] sm:text-[16px] leading-[150%] mb-8">
          {t("description")}
        </p>
        <div className="px-2 sm:px-14">
          <InputElement
            className="w-full bg-white py-2.5 px-3.5 hover:border-[#9190992d] border-[#9190991d] border-[1px] rounded-md"
            placeholder={t("placeholder")}
          />
        </div>
      </div>
  );
};
