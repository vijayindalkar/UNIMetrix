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
      <body>
        <NavbarDemo></NavbarDemo>
      {children}
      </body>
    </html>
  );
}
