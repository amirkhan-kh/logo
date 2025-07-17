import { Input } from "@/ui/input";
import { useTranslations } from "next-intl";
import React from "react";

export const Intro = () => {
  const t = useTranslations("Intro");
  return (
    <div className="grid place-content-center text-center">
      <h2 className="font-bold text-[40px] leading-[140%]">
        {t("title")}
      </h2>
      <p cl>
        {t("description")}
      </p>
      <Input
        className="w-full bg-white py-2.5 px-3.5 shadow-sm rounded-md"
        placeholder={t("placeholder")}
      />
    </div>
  );
};
