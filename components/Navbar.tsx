"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
    <header className="sticky top-0 z-50 bg-white border-b shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

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
            <h1 className="text-xl font-bold text-green-700">
              NagrikNetra AI
            </h1>

            <p className="text-xs text-gray-500">
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
                  ? "text-green-700"
                  : "text-gray-700 hover:text-green-700"
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
            className="border border-green-600 text-green-700 hover:bg-green-50 px-4 py-2 rounded-lg font-medium transition"
          >
            Officer Portal
          
          </Link>

          <Link
            href="/report"
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-medium transition"
          >
            Report Now
          </Link>

        </div>

      </div>
    </header>
  );
}