import React from "react";

type TopButtonProps = {
  className?: string; // className ni optional qilib belgilash
  children?: React.ReactNode; // children ni ham optional qilib belgilash
};

const TopButton: React.FC<TopButtonProps> = ({ className, children }) => {
  return (
    <button className={` ${className}`}>
      {children}
    </button>
  );
};

export default TopButton;
