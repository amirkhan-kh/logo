import type { Metadata } from "next";
import { Urbanist } from 'next/font/google';
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layouts/footer";
import { Header } from "@/components/layouts/header";

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
  return routing.locales.map((locale) => ({ locale }));
}


export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${urbanist.variable} ${urbanist.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main c>
            
          {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
