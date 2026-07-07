"use client";

import dynamic from "next/dynamic";

const PollutionMap = dynamic(
  () => import("./PollutionMap"),
  {
    ssr: false,
  }
);

export default function LiveMapCard() {
  return (
    <section
      className="
        mt-8
        rounded-2xl
        border
        border-gray-200
        dark:border-slate-700
        bg-white
        dark:bg-slate-900
        shadow-xl
        transition-all
        duration-300
      "
    >
      {/* Header */}

      <div className="p-6 border-b border-gray-200 dark:border-slate-700">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">

          <div>

            <h2 className="text-2xl md:text-3xl font-bold text-green-700 dark:text-green-400">
              🗺 Live Pollution Map
            </h2>

            <p className="mt-2 text-gray-600 dark:text-gray-300 leading-7">
              Monitor real-time pollution reports submitted by citizens.
              Interactive GIS visualization helps identify environmental
              hotspots and supports faster municipal response.
            </p>

          </div>

          <div
            className="
              px-4
              py-2
              rounded-full
              bg-green-100
              dark:bg-green-900/30
              text-green-700
              dark:text-green-300
              font-semibold
              text-sm
              w-fit
            "
          >
            ● Live Monitoring
          </div>

        </div>

      </div>

      {/* Map */}

      <div
        className="
          h-[350px]
          sm:h-[450px]
          lg:h-[550px]
          overflow-hidden
          rounded-b-2xl
        "
      >
        <PollutionMap />
      </div>
    </section>
  );
}