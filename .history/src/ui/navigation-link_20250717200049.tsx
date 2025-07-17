"use client"
import clsx from 'clsx';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from "react";

export default function NavigationLink({
  href,
  children,
  onClick,
  ...rest
}: LinkProps & { children: ReactNode; locale?: string; onClick?: () => void }) {
  const pathname = usePathname();  // Hozirgi yo'lni olish
  const isActive = pathname === href;  // Agar URL beringan hrefga teng bo'lsa, aktiv holatda bo'ladi

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      href={href}
      onClick={onClick}
      {...rest}
      className={clsx(
        "inline-block px-7 py-3 transition-colors",  // Umumiy stil
        isActive ? "font-bold text-[#90E051]" : "text-[#211F2E]"  // Aktiv bo'lsa sariq rang va qalin font
      )}
    >
      {children}
    </Link>
  );
}
