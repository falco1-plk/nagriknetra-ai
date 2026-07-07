"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="
        min-h-[85vh]
        flex
        flex-col
        items-center
        justify-center
        text-center
        px-6
        bg-gradient-to-b
        from-white
        via-slate-50
        to-green-50
        dark:from-slate-950
        dark:via-slate-900
        dark:to-slate-950
        transition-colors
        duration-300
      "
    >
      <h1
        className="
          text-5xl
          sm:text-6xl
          lg:text-7xl
          font-extrabold
          tracking-tight
          text-gray-900
          dark:text-white
        "
      >
        NagrikNetra AI
      </h1>

      <p
        className="
          mt-6
          max-w-3xl
          text-lg
          sm:text-xl
          leading-8
          text-gray-700
          dark:text-gray-300
        "
      >
        Transforming Citizen Reports into Actionable Environmental Intelligence
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-10">
        <Link
          href="/report"
          className="
            px-7
            py-3
            rounded-xl
            bg-green-600
            hover:bg-green-700
            text-white
            shadow-lg
            transition-all
            duration-300
            hover:scale-105
          "
        >
          Report Pollution
        </Link>

        <Link
          href="/map"
          className="
            px-7
            py-3
            rounded-xl
            border
            border-gray-300
            dark:border-slate-700
            bg-white
            dark:bg-slate-900
            text-gray-800
            dark:text-white
            hover:bg-gray-100
            dark:hover:bg-slate-800
            shadow-md
            transition-all
            duration-300
          "
        >
          View Live Map
        </Link>
      </div>
    </section>
  );
}