"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Report Pollution",
      href: "/report",
    },
    {
      name: "Live Map",
      href: "/map",
    },
    {
      name: "Track Report",
      href: "/track",
    },
  ];

  return (
    <header
  className="
    sticky
    top-0
    z-50
    bg-white/90
    dark:bg-slate-950/90
    backdrop-blur-md
    border-b
    border-gray-200
    dark:border-slate-800
    shadow-md
    transition-all
    duration-300
  "
>
      <div
  className="
    max-w-7xl
    mx-auto
    px-4
    sm:px-6
    lg:px-8
    py-4
    flex
    items-center
    justify-between
  "
>

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <img
            src="/logo.svg"
            alt="NagrikNetra AI"
            className="h-11 w-11"
          />

          <div>
            <h1
  className="
    text-lg
    sm:text-xl
    font-bold
    text-green-700
    dark:text-green-400
  "
>
              NagrikNetra AI
            </h1>

            <p
  className="
    text-xs
    text-gray-600
    dark:text-gray-400
  "
>
              Smart Environmental Monitoring
            </p>
          </div>
        </Link>

        {/* Citizen Navigation */}
        <nav className="hidden lg:flex items-center gap-8">

          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-medium transition duration-200 ${
                pathname === item.href
  ? "text-green-700 dark:text-green-400"
  : "text-gray-700 dark:text-gray-300 hover:text-green-700 dark:hover:text-green-400"
              }`}
            >
              {item.name}
            </Link>
          ))}

        </nav>

        {/* Right Buttons */}
        <div className="flex items-center gap-3">

          <Link
            href="/officer"
            className="
border
border-green-600
text-green-700
dark:text-green-400
hover:bg-green-50
dark:hover:bg-green-900/20
px-4
py-2
rounded-lg
font-medium
transition-all
duration-300
"
          >
            Officer Portal
          
          </Link>

          <div className="flex items-center gap-3">

    <ThemeToggle />

    <Link
      href="/report"
      className="
bg-green-600
hover:bg-green-700
focus:outline-none
focus:ring-2
focus:ring-green-400
text-white
px-5
py-2
rounded-xl
shadow-lg
transition-all
duration-300
hover:scale-105
"
    >
      Report Now
    </Link>

</div>
          

        </div>

      </div>
    </header>
  );
}