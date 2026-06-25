"use client";

import dynamic from "next/dynamic";

const PollutionMap = dynamic(
  () => import("@/components/PollutionMap"),
  {
    ssr: false,
  }
);

export default function MapPage() {
  return (
    <main className="min-h-screen">
      <PollutionMap />
    </main>
  );
}