import React from "react";
import { IoSearch } from "react-icons/io5";

type TInputProps = {
    className? : string;
    placeholder? :  string; 
    type?: string
}
export const InputElement: React.FC<TInputProps> = ({className, placeholder, type}) => {
  return (
    <div className="flex items-center relative">
      <input
        className={`rounded-md font-medium text-[14px] ${className}`}
        type={type}
        placeholder={placeholder}
      />
      <IoSearch size={20} className="absolute right-2 text-[#211F2E] hidden sm:block" />
    </div>
  );
};
