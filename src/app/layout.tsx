import "./globals.css";
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
