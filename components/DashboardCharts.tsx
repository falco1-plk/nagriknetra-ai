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

import { PollutionReport } from "@/types/report";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

type Props = {
  reports: PollutionReport[];
};

export default function DashboardCharts({
  reports,
}: Props) {

  const severityCount = {
    Low: 0,
    Medium: 0,
    High: 0,
    Critical: 0,
  };

  const pollutionTypes: Record<string, number> = {};

  reports.forEach((report) => {

    if (
      report.severity === "Low" ||
      report.severity === "Medium" ||
      report.severity === "High" ||
      report.severity === "Critical"
    ) {
      severityCount[report.severity]++;
    }

    pollutionTypes[report.pollutionType] =
      (pollutionTypes[report.pollutionType] || 0) + 1;
  });

  return (
    <div className="grid lg:grid-cols-2 gap-8 mt-10">

      <div className="bg-white rounded-2xl shadow-lg border p-6">

        <h2 className="text-xl font-bold text-green-700 mb-6">
          📊 Severity Distribution
        </h2>

        <Pie
          data={{
            labels: Object.keys(severityCount),
            datasets: [
              {
                label: "Severity",
                data: Object.values(severityCount),
                backgroundColor: [
                  "#22c55e",
                  "#eab308",
                  "#f97316",
                  "#dc2626",
                ],
                borderWidth: 2,
              },
            ],
          }}
        />

      </div>

      <div className="bg-white rounded-2xl shadow-lg border p-6">

        <h2 className="text-xl font-bold text-blue-700 mb-6">
          🌍 Pollution Types
        </h2>

        <Bar
          data={{
            labels: Object.keys(pollutionTypes),
            datasets: [
              {
                label: "Reports",
                data: Object.values(pollutionTypes),
                backgroundColor: "#2563eb",
                borderRadius: 8,
              },
            ],
          }}
          options={{
            responsive: true,
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
        />

      </div>

    </div>
  );
}