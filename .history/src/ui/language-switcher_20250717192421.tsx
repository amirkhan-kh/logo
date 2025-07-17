"use client"

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTransition } from "react";

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();  
  const router = useRouter();
  const localActive = useLocale(); 
  const pathname = usePathname(); 

  const onSelectChange = (nextLocale: string) => {
    startTransition(() => {
      const newPathname = pathname.replace(`/${localActive}`, `/${nextLocale}`);
      router.replace(newPathname);  // Routerni yangilash
    });
  };

  return (
    <div className="relative">
      <select
        defaultValue={localActive}  // Default value for the current locale
        className="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => onSelectChange(e.target.value)}  // Trigger locale change
        disabled={isPending}  // Disable select during transition
      >
        <option value="en">Eng</option>
        <option value="ru">Rus</option>
        <option value="de">Det</option>
        <option value="uz">Uzb</option>
      </select>
      
      {/* Loading spinner */}
      {isPending && (
        <div className="absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
        </div>
      )}
    </div>
  );
}
