"use client";

import { PollutionReport } from "@/types/report";
import { detectHotspots } from "@/lib/hotspot";

type Props = {
  reports: PollutionReport[];
};

export default function HotspotAlerts({
  reports,
}: Props) {
  const hotspots = detectHotspots(reports);

  if (hotspots.length === 0) {
    return (
      <div className="bg-green-100 border border-green-300 rounded-2xl shadow-lg p-6 mt-8">
        <h2 className="text-2xl font-bold text-green-700">
          ✅ No Major Pollution Hotspots
        </h2>

        <p className="mt-3 text-gray-700">
          Reports are currently scattered across the city.
          No critical pollution clusters have been detected.
        </p>
      </div>
    );
  }

  return (
    <section className="mt-8">

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-2xl font-bold text-red-600">
          🚨 AI Hotspot Alerts
        </h2>

        <span className="bg-red-600 text-white px-4 py-2 rounded-full font-semibold">
          {hotspots.length} Hotspot
          {hotspots.length > 1 ? "s" : ""}
        </span>

      </div>

      <div className="space-y-5">

        {hotspots.map((cluster, index) => (

          <div
            key={index}
            className="bg-red-50 border-l-8 border-red-600 rounded-2xl shadow-lg p-6"
          >

            <div className="flex justify-between items-center flex-wrap gap-3">

              <h3 className="text-xl font-bold">
                🔥 Hotspot #{index + 1}
              </h3>

              <span className="bg-red-600 text-white px-4 py-2 rounded-full">
                High Priority
              </span>

            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-5">

              <div>

                <p className="text-gray-500">
                  Reports Detected
                </p>

                <h4 className="text-3xl font-bold mt-2">
                  {cluster.length}
                </h4>

              </div>

              <div>

                <p className="text-gray-500">
                  Dominant Pollution
                </p>

                <h4 className="text-2xl font-bold mt-2">
                  {cluster[0].pollutionType}
                </h4>

              </div>

            </div>

            <div className="mt-6 bg-white rounded-xl border p-5">

              <h4 className="font-bold text-lg">
                🏛 Recommended Municipal Action
              </h4>

              <ul className="list-disc ml-6 mt-4 space-y-2 text-gray-700">

                <li>Deploy municipal inspection team.</li>

                <li>Verify the pollution source.</li>

                <li>Collect environmental samples.</li>

                <li>Issue public safety advisory if required.</li>

                <li>Monitor the hotspot for the next 24 hours.</li>

              </ul>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}