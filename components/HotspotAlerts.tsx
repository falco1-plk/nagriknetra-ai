"use client";

import { detectHotspots } from "@/lib/hotspot";

export default function HotspotAlerts({
  reports,
}: {
  reports: any[];
}) {
  const hotspots = detectHotspots(reports);

  if (hotspots.length === 0) {
    return (
      <div className="bg-green-100 border border-green-300 rounded-xl p-6 mt-8">
        <h2 className="text-2xl font-bold text-green-700">
          ✅ No Major Pollution Hotspots
        </h2>

        <p className="mt-2">
          Reports are currently scattered across the city.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-8">

      <h2 className="text-2xl font-bold mb-4">
        🚨 AI Hotspot Alerts
      </h2>

      {hotspots.map((cluster, index) => (

        <div
          key={index}
          className="bg-red-50 border-l-8 border-red-600 rounded-xl p-6 mb-4 shadow"
        >
          <h3 className="font-bold text-xl">
            Hotspot #{index + 1}
          </h3>

          <p className="mt-2">
            {cluster.length} reports detected within
            1 km.
          </p>

          <p className="mt-2">
            Dominant Pollution:
            {" "}
            <strong>
              {cluster[0].pollutionType}
            </strong>
          </p>

          <p className="mt-2">
            Recommended Action:
          </p>

          <ul className="list-disc ml-6 mt-2">
            <li>Deploy municipal inspection team.</li>
            <li>Verify pollution source.</li>
            <li>Take corrective action.</li>
          </ul>

        </div>

      ))}

    </div>
  );
}