import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { RootLayout } from "@/components/generic/root-layout";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "DLW - créative studio",
  description: "DLW - créative studio",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-[#00221c] text-base antialiased">
    
    <body
      className={ `${ geistSans.variable } ${ geistMono.variable }` }
      data-theme="green"
    >
    <RootLayout>{children}</RootLayout>
    </body>
    </html>
  );
}