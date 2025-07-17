import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/
const SUPPORTED_LOCALES = ['uz', 'en', 'ru', "de"] 

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  if (
    PUBLIC_FILE.test(pathname) ||
    pathname.startsWith('/api') ||
    SUPPORTED_LOCALES.some((locale) => pathname.startsWith(`/${locale}`))
  ) {
    return NextResponse.next()
  }

  const defaultLocale = 'uz'
  req.nextUrl.pathname = `/${defaultLocale}${pathname}`
  return NextResponse.redirect(req.nextUrl)
}
