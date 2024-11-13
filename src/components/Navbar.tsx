"use client";
import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white"></p>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Check localStorage or system preference for dark mode
    const storedTheme = localStorage.getItem("theme");
    if (
      storedTheme === "dark" ||
      (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 mt-5", className)}
    >
      <Menu setActive={setActive}>
        <Link href="/">
      <MenuItem setActive={setActive} active={null} item="Home"/>
        </Link>
        

        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="p-2 flex flex-col space-y-4 text-sm">
            <HoveredLink href="/services">Marketing Calculators</HoveredLink>
            <HoveredLink href="/services">PPC Calculator</HoveredLink>
            <HoveredLink href="/services">Web Development</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="About">
          <div className="p-2 flex flex-col space-y-4 text-sm">
            <HoveredLink href="/about">Our Story</HoveredLink>

            {/* Dark Mode Toggle Button */}
            
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="p-2 flex flex-col space-y-4 text-sm">
            <HoveredLink href="/contact">Contact Us</HoveredLink>
          </div>
        </MenuItem>
        {/* <MenuItem setActive={setActive} active={active} item="Theme">
          <button
            onClick={toggleDarkMode}
            className="p-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white rounded-full"
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
          
        </MenuItem> */}
        <button id="theme-toggle"  onClick={toggleDarkMode} type="button" className="text-black dark:text-white ">
    {isDarkMode ? "Light Mode" : "Dark Mode"}
</button>
      </Menu>
    </div>
  );
}
