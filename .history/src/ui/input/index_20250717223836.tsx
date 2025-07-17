import React from "react";
import { IoSearch } from "react-icons/io5";

type TInputProps = {
    className? : string;
    placeholder? :  str; 
}
export const Input: React.FC<TInputProps> = () => {
  return (
    <div className="flex items-center relative">
      <input
        className="w-60 py-2 px-2.5 border border-[#E5E8EA] rounded-md font-medium text-[14px]"
        type="text"
        placeholder={`${t("navLink9")}`}
      />
      <IoSearch size={20} className="absolute right-2 text-[#211F2E]" />
    </div>
  );
};
