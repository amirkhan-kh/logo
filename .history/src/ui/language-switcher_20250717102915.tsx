import { useLocale } from "next-intl"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"
import { useTransition } from "react"

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const localActive = useLocale()
  const pathname = usePathname()

  const onSelectChange = (nextLocale: string) => {
    startTransition(() => {
      // Replace the locale in the pathname
      const newPathname = pathname.replace(`/${localActive}`, `/${nextLocale}`)
      router.replace(newPathname)
    })
  }

  return (
    <div className="relative">
      <select
        defaultValue={localActive}
        className="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => onSelectChange(e.target.value)}
        disabled={isPending}
      >
        <option value="en">🇺🇸 English</option>
        <option value="es">🇪🇸 Español</option>
        <option value="fr">🇫🇷 Français</option>
        <option value="de">🇩🇪 Deutsch</option>
      </select>
      {isPending && (
        <div className="absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
        </div>
      )}
    </div>
  )
}