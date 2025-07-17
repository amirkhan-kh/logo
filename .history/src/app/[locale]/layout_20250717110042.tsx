import type { Metadata } from "next";
import { Urbanist } from 'next/font/google'
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.variable} ${urbanist.variable} antialiased`}
      >
       <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
