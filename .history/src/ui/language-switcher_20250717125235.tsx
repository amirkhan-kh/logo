"use client"

import { useLocale } from "next-intl"  // Tilni olish uchun hook
import { useRouter } from "next/navigation"  // Next.js Router yordamida URLni yangilash
import { usePathname } from "next/navigation"  // Hozirgi yo'lni olish
import { useTransition } from "react"  // React 18 yordamida tranzitsiyalarni optimallashtirish

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition()  // Transitsiyani boshlash va holatni saqlash
  const router = useRouter()  // Router instance
  const localActive = useLocale()  // Hozirgi tilni olish
  const pathname = usePathname()  // Hozirgi yo'lni olish

  // Tilni o'zgartirish funksiyasi
  const onSelectChange = (nextLocale: string) => {
    startTransition(() => {
      // URLda tilni almashtirish
      const newPathname = pathname.replace(`/${localActive}`, `/${nextLocale}`)
      router.replace(newPathname)  // URLni yangilash
    })
  }

  return (
    <div className="relative">
      <select
        defaultValue={localActive}  // Hozirgi tilni default qilib o'rnatish
        className="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => onSelectChange(e.target.value)}  // Tilni tanlagan paytda onSelectChange chaqiriladi
        disabled={isPending}  // Til o'zgartirilayotgan bo'lsa, selectni faollashtirmaslik
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
  )
}
