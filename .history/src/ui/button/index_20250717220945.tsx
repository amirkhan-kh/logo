import React from "react";

type TopButtonProps = {
  className?: string; // className ni optional qilib belgilash
  children?: React.ReactNode; // children ni ham optional qilib belgilash
};

const TopButton: React.FC<TopButtonProps> = ({ className, children }) => {
  return (
    <button className={`border-[#919099] border rounded-[8px] focus:border-[#FF9A50] ${className}`}>
      {children}
    </button>
  );
};

export default TopButton;
