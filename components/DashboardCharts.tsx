"use client";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

import { Pie, Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

export default function DashboardCharts({
  reports,
}: {
  reports: any[];
}) {

  const severityCount = {
    Low: 0,
    Medium: 0,
    High: 0,
    Critical: 0,
  };

  const pollutionTypes: Record<string, number> = {};

  reports.forEach((report) => {

    severityCount[
      report.severity as keyof typeof severityCount
    ]++;

    pollutionTypes[report.pollutionType] =
      (pollutionTypes[report.pollutionType] || 0) + 1;
  });

  return (
    <div className="grid lg:grid-cols-2 gap-8 mt-10">

      <div className="bg-white rounded-xl shadow-lg p-6">

        <h2 className="text-xl font-bold mb-4">
          Severity Distribution
        </h2>

        <Pie
          data={{
            labels: Object.keys(severityCount),
            datasets: [
              {
                data: Object.values(severityCount),
                backgroundColor: [
                  "#22c55e",
                  "#eab308",
                  "#f97316",
                  "#dc2626",
                ],
              },
            ],
          }}
        />

      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">

        <h2 className="text-xl font-bold mb-4">
          Pollution Types
        </h2>

        <Bar
          data={{
            labels: Object.keys(pollutionTypes),
            datasets: [
              {
                label: "Reports",
                data: Object.values(pollutionTypes),
                backgroundColor: "#2563eb",
              },
            ],
          }}
        />

      </div>

    </div>
  );
}