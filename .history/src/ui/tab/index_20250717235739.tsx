import PaymentHistory from "@/sections/company-pages/payment-history-section";
import PaymentsMethod from "@/sections/company-pages/payments-method";
import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("plans");

  const renderContent = () => {
    if (activeTab === "plans") {
      return <PaymentsMethod />;
    } else if (activeTab === "history") {
      return <PaymentHistory />;
    }
    return null;
  };

  return (
    <div className="mb-10">
      <div className="flex gap-4 border-b border-gray-200  ">
        <button
          onClick={() => setActiveTab("plans")}
          className={`py-2 px-4 text-sm font-medium ${
            activeTab === "plans"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-600 hover:text-blue-500"
          }`}
        >
          Top-Up Credits
        </button>
        <button
          onClick={() => setActiveTab("history")}
          className={`py-2 px-4 text-sm font-medium ${
            activeTab === "history"
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

export default CompanyPaymentsTabs;