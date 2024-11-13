import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { BackgroundLines } from "@/components/ui/background-lines";
import { NavbarDemo } from "@/components/Navbar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark:bg-black min-h-screen">
        <NavbarDemo></NavbarDemo>
      {children}
      </body>
    </html>
  );
}
