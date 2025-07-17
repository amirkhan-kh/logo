"use client"
import clsx from "clsx";
import { Link } from "@/i18n/navigation";
import {LinkProps } from 'next/link';
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
          "inline-block px-7 py-3 transition-colors",
          isActive ? "text-white" : "text-white"
        )}
        href={`${href}`}
        onClick={onClick}
        {...rest}
      >
        {children}
      </Link>
    );
  }
  