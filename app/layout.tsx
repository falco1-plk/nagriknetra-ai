import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NagrikNetra AI",

  description:
    "AI-powered Smart City Environmental Monitoring & Pollution Reporting Platform",

  authors: [
    {
      name: "Aishwary Jaiwal",
    },
  ],

  creator: "Aishwary Jaiwal",

  publisher: "Aishwary Jaiwal",

  applicationName: "NagrikNetra AI",

  keywords: [
    "AI",
    "Smart City",
    "Pollution",
    "Environment",
    "Gemini",
    "Firebase",
    "NagrikNetra",
    "Next.js",
    "TypeScript",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body
        className="
          min-h-screen
          flex
          flex-col
          bg-gray-100
          text-gray-900
          transition-colors
          duration-300
          dark:bg-slate-950
          dark:text-white
        "
      >
        <ThemeProvider>
          <Navbar />

          <main className="flex-1">
            {children}
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}