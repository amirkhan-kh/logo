"use client"

import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";
import { useLocale } from "next-intl";
import { ChangeEvent, ReactNode, useTransition } from "react";

type TPropsSelect = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocalSwitcher({ children, defaultValue, label }: TPropsSelect) {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const [isPending, startTransition] = useTransition();

  function onSelectedChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, "");

    startTransition(() => {
      router.replace(`/${nextLocale}${pathWithoutLocale}`);
    });
  }

  return (
    <label className={clsx("hi outline-none focus:outline-none focus:ring-0 focus:border-none", isPending && "opacity-50")}>
      <p className="hidden">{label}</p>
      <div className="relative outline-none focus:outline-none focus:ring-0 focus:border-none">
        <select
          className=" appearance-none bg-transparent text-white outline-none focus:outline-none focus:ring-0 focus:border-none"
          defaultValue={defaultValue}
          disabled={isPending}
          onChange={onSelectedChange}
        >
          {children}
        </select>
      </div>
    </label>
  );
}
