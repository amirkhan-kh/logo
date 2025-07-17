import React from "react";

type TTopButtonProps = {
  className?: string; 
  children?: React.ReactNode; // children ni ham optional qilib belgilash
};

const TopButton: React.FC<TTopButtonProps> = ({ className, children }) => {
  return (
    <button className={`border-[#919099] border rounded-[8px] focus:border-[#FF9A50]
    focus:text-[#FF9A50] hover:bg-[#f5f5f5] focus:outline-amber-[#FF9A50] focus:outline-1
    ${className}`}>
      {children}
    </button>
  );
};

export default TopButton;
