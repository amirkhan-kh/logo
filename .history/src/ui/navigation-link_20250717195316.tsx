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
  const pathname = usePathname(); 
  const isActive = pathname === href;  
  
  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      className={clsx(
        "inline-block px-7 py-3 transition-colors", 
        isActive ? "text-yellow-500" : "text-[#211F2E]"  // Active yo'lda sariq rang, boshqa yo'llar uchun qora
      )}
      href={href} 
      onClick={onClick}
      {...rest}
    >
      {children}
    </Link>
  );
}

