"use client"
import clsx from "clsx";
import Link, {LinkProps } from 'next/link';
import { useSelectedLayoutSegment,  } from 'next/navigation';
import { ReactNode } from "react";

export default function NavigationLink({
    href,
    children,
    onClick,
    ...rest
  }: LinkProps & { children: ReactNode; locale?: string; onClick?: () => void }) {
    const selectedLayoutSegment = useSelectedLayoutSegment();
    const pathname = selectedLayoutSegment ? `${selectedLayoutSegment}` : "/";
    const isActive = pathname === href;
  
    return (
      <Link
        aria-current={isActive ? "page" : undefined}
        className={clsx(
          "inline-block px-7 py-3 transition-colors text-[15px]",
          isActive ? "text-[#FF9A50] font-semibold" : "text-[#211F2E] font-medium"
        )}
        href={`${href}`}
        onClick={onClick}
        {...rest}
      >
        {children}
      </Link>
    );
  }
  