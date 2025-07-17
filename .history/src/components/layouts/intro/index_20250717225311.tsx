import { useTranslations } from "next-intl";
import React from "react";

export const Intro = () => {
  const t = useTranslations("Intro");
  return (
    <div>
      <h2>{t("title")}</h2>
      <p>{t("description")}</p>
      <Input/>
    </div>
  );
};
