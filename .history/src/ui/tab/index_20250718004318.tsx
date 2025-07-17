"use client";
import { ArchiveCard } from "@/components/sections/archive-sections";
import { FairCard } from "@/components/sections/fair-sections";
import { ForumCard } from "@/components/sections/forum-sections";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

export const Tab:React.FC = () => {
const t = useTranslations("Tab");

  const [activeTab, setActiveTab] = useState("archive"); 
  const renderContent = () => {
    if (activeTab === "archive") {
      return <ArchiveCard />;
    } else if (activeTab === "fair") {
      return <FairCard />;
    } else if (activeTab === "forum") {
      return <ForumCard />;
    }
    return null;
  };

  return (
    <div className="mb-10">
      <div className="flex flex-col gap-4 border-t border-gray-300">
        <div className="container mx-auto flex items-center justify-between px-20">
          <button
            onClick={() => setActiveTab("archive")}
            className={`py-2 px-2  -translate-y-0.5 w-[220px] flex items-center justify-between ${
              activeTab === "archive"
                ? "border-t-2 border-[#FF9A50] text-[#FF9A50] text-[28px] font-semibold"
                : "text-[#3d3a39] text-[18px] font-normal"
            }`}
          >
            <span>
            1991
            </span>
            <span>
             1992
            </span>
          </button>
          <button
            onClick={() => setActiveTab("fair")}
            className={`py-2 px-2  -translate-y-0.5 w-[220px] flex items-center justify-between ${
              activeTab === "fair"
                ? "border-t-2 border-[#FF9A50] text-[#FF9A50] text-[28px] font-semibold"
                :"text-[#3d3a39] text-[18px] font-normal"
            }`}
          >
            <span>
            2004
            </span>
            <span>
             2006
            </span>
          </button>
          <button
            onClick={() => setActiveTab("forum")}
            className={`py-2 px-2  -translate-y-0.5 flex items-center justify-between ${
              activeTab === "forum"
                ? "border-t-2 border-[#FF9A50] text-[#FF9A50] text-[28px] font-semibold  w-[220px]"
                : "text-[#3d3a39] text-[18px] font-normal"
            }`}
          >
            <span>
            2008
            </span>
            <span>
             2010
            </span>
          </button>
        </div>

        <div className="container mx-auto mb-6">
          <h3 className="text-[#211F2E] font-normal text-3xl">{t("title")}</h3>
          <div>{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};
