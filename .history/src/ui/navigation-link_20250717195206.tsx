"use client"
import clsx from 'clsx';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';  // usePathname dan foydalanamiz
import { ReactNode } from "react";

export default function NavigationLink({
  href,
  children,
  onClick,
  ...rest
}: LinkProps & { children: ReactNode; locale?: string; onClick?: () => void }) {
  const pathname = usePathname();  // Hozirgi to'liq yo'lni olish
  const isActive = pathname === href;  // Hozirgi yo'l bilan Linkning href qiyoslanadi
  
  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      className={clsx(
        "inline-block px-7 py-3 transition-colors", 
        isActive ? "text-[#FF9A50]" : "text-[#211F2E]"  
      )}
      href={href} 
      onClick={onClick}
      {...rest}
    >
      {children}
    </Link>
  );
}
