"use client"
import { ArchiveCard } from "@/components/sections/archive-sections";
import { FairCard } from "@/components/sections/fair-sections";
import { ForumCard } from "@/components/sections/forum-sections";
import React, { useState } from "react";

export const Tab = () => {
  const [activeTab, setActiveTab] = useState("plans");

  const renderContent = () => {
    if (activeTab === "archive") {
      return <ArchiveCard />;
    } else if (activeTab === "fair") {
      return <FairCard />;
    } else if (activeTab === "forum"){
        return <ForumCard
    }
    return null;
  };

  return (
    <div className="mb-10">
      <div className="flex gap-4 border-b border-gray-200  ">
        <button
          onClick={() => setActiveTab("plans")}
          className={`py-2 px-4 text-sm font-medium ${
            activeTab === "archive"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-600 hover:text-blue-500"
          }`}
        >
          Top-Up Credits
        </button>
        <button
          onClick={() => setActiveTab("history")}
          className={`py-2 px-4 text-sm font-medium ${
            activeTab === "fair"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-600 hover:text-blue-500"
          }`}
        >
          History
        </button>
        <button
          onClick={() => setActiveTab("history")}
          className={`py-2 px-4 text-sm font-medium ${
            activeTab === "forum"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-600 hover:text-blue-500"
          }`}
        >
          History
        </button>
      </div>

      <div>{renderContent()}</div>
    </div>
  );
};
