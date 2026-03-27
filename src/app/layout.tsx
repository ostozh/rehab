import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "НаркоПомощь 24 — Вывод из запоя на дому и в стационаре в Москве",
  description:
    "Профессиональный вывод из запоя на дому и в стационаре. Круглосуточно, анонимно. Выезд нарколога за 30 минут по Москве и МО.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen font-sans bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
