"use client";
import { ArchiveCard } from "@/components/sections/archive-sections";
import { FairCard } from "@/components/sections/fair-sections";
import { ForumCard } from "@/components/sections/forum-sections";
import React, { useState } from "react";

export const Tab = () => {
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
        <div className="container mx-auto">
          <button
            onClick={() => setActiveTab("archive")}
            className={`py-2 px-4 text-sm font-medium ${
              activeTab === "archive"
                ? "border-t-2 border-[#FF9A50] text-[#FF9A50]"
                : "text-[#FF9A50]"
            }`}
          >
            1991 1992
          </button>
          <button
            onClick={() => setActiveTab("fair")}
            className={`py-2 px-4 text-sm font-medium ${
              activeTab === "fair"
                ? "border-t-2 border-[#FF9A50] text-[#FF9A50]"
                : "text-[#FF9A50]"
            }`}
          >
            2004 2006
          </button>
          <button
            onClick={() => setActiveTab("forum")}
            className={`py-2 px-4 text-sm font-medium ${
              activeTab === "forum"
                ? "border-t-2 border-[#FF9A50] text-[#FF9A50]"
                : "text-[#FF9A50]"
            }`}
          >
            2008 2010
          </button>
        </div>

        <div className="container mx-auto mb-6">
          <h3>{t("title")}</h3>
          <div>{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};
