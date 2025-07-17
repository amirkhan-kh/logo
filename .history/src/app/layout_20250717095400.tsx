import type { Metadata } from "next";
import { Urbanist } from 'next/font/google'
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Logo",
  description: "Путешествие в прошлое с Logo ",
  icons: {
    icon: "/", 
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
        {children}
      </body>
    </html>
  );
}
