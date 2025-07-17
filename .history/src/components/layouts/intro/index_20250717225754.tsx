import { Input } from "@/ui/input";
import { useTranslations } from "next-intl";
import React from "react";

export const Intro = () => {
  const t = useTranslations("Intro");
  return (
    <div className="">
      <h2>{t("title")}</h2>
      <p>{t("description")}</p>
      <Input
        className="w-full bg-white py-2.5 px-3.5 shadow-sm rounded-md"
        placeholder={t("placeholder")}
      />
    </div>
  );
};
