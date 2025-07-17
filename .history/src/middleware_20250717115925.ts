import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/
const SUPPORTED_LOCALES = ['uz', 'en', 'ru'] // mavjud tillaringiz

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Public fayllar, API route yoki allaqachon locale bor bo‘lsa, hech nima qilmaymiz
  if (
    PUBLIC_FILE.test(pathname) ||
    pathname.startsWith('/api') ||
    SUPPORTED_LOCALES.some((locale) => pathname.startsWith(`/${locale}`))
  ) {
    return NextResponse.next()
  }

  // Default locale (masalan, 'uz') ga yo‘naltiramiz
  const defaultLocale = 'uz'
  req.nextUrl.pathname = `/${defaultLocale}${pathname}`
  return NextResponse.redirect(req.nextUrl)
}
