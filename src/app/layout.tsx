import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FingerLuck - 누가 행운의 주인공일까?",
  description: "여러 명이 동시에 화면을 터치하여 행운의 주인공을 공평하게 선택하는 재미있는 모바일 앱",
  keywords: "FingerLuck, 행운, 게임, 술래정하기, 랜덤선택, 모바일앱",
  authors: [{ name: "FingerLuck Team" }],
  openGraph: {
    title: "FingerLuck - 누가 행운의 주인공일까?",
    description: "여러 명이 동시에 화면을 터치하여 행운의 주인공을 공평하게 선택하는 재미있는 모바일 앱",
    url: "https://fingerluck.app",
    siteName: "FingerLuck",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FingerLuck App",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FingerLuck - 누가 행운의 주인공일까?",
    description: "여러 명이 동시에 화면을 터치하여 행운의 주인공을 공평하게 선택하는 재미있는 모바일 앱",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
