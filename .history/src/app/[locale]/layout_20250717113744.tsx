import type { Metadata } from "next";
import { Urbanist } from 'next/font/google'
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";


const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Logo",
  description: "Путешествие в прошлое с Logo ",
  icons: {
    icon: "/lo.jpg", 
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}
type Locale = typeof routing.locales[number];

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: Locale }
}) {
  if (!routing.locales.includes(locale)) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html lang={`${locale}`}>
      <body
        className={`${urbanist.variable} ${urbanist.variable} antialiased`}
      >
       <NextIntlClientProvider messages={messages}>
        <
        {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
