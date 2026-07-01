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
    <div className="bg-white rounded-2xl shadow-xl p-6 mt-8">

      <h2 className="text-2xl font-bold mb-4">
        🗺 Live Pollution Map
      </h2>

      <div className="rounded-xl overflow-hidden h-[500px]">
        <PollutionMap />
      </div>

    </div>
  );
}