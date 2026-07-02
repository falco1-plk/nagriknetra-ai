"use client";

import { PollutionReport } from "@/types/report";

type Props = {
  reports: PollutionReport[];
};

export default function OfficerDashboard({ reports }: Props) {
  const total = reports.length;

  const pending = reports.filter(
    (report) => report.status === "Pending"
  ).length;

  const assigned = reports.filter(
    (report) => report.status === "Assigned"
  ).length;

  const inspecting = reports.filter(
    (report) => report.status === "Inspection Started"
  ).length;

  const resolved = reports.filter(
    (report) => report.status === "Resolved"
  ).length;

  const critical = reports.filter(
    (report) => report.riskScore >= 80
  ).length;

  const high = reports.filter(
    (report) =>
      report.riskScore >= 60 &&
      report.riskScore < 80
  ).length;

  return (
    <section className="space-y-8">

      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

        <div>
          <h1 className="text-4xl font-bold text-green-700">
            🏛️ NagrikNetra AI
          </h1>

          <p className="text-gray-600 mt-2">
            Municipal Environmental Command Center
          </p>
        </div>

        <div className="bg-green-100 border border-green-300 rounded-xl px-5 py-3">

          <p className="font-semibold text-green-700">
            Officer Portal
          </p>

          <p className="text-sm text-gray-600">
            Live Monitoring Enabled
          </p>

        </div>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">

        <Card
          title="Total Reports"
          value={total}
          color="bg-blue-600"
        />

        <Card
          title="Critical"
          value={critical}
          color="bg-red-600"
        />

        <Card
          title="High Risk"
          value={high}
          color="bg-orange-500"
        />

        <Card
          title="Pending"
          value={pending}
          color="bg-yellow-500"
        />

        <Card
          title="Assigned"
          value={assigned}
          color="bg-indigo-600"
        />

        <Card
          title="Resolved"
          value={resolved}
          color="bg-green-600"
        />

      </div>

      <div className="bg-white rounded-2xl shadow-lg border p-6">

        <h2 className="text-xl font-bold mb-4">
          📈 Dashboard Summary
        </h2>

        <div className="grid md:grid-cols-2 gap-4 text-gray-700">

          <p>
            <strong>Total Reports:</strong> {total}
          </p>

          <p>
            <strong>Critical Cases:</strong> {critical}
          </p>

          <p>
            <strong>Pending Cases:</strong> {pending}
          </p>

          <p>
            <strong>Assigned Cases:</strong> {assigned}
          </p>

          <p>
            <strong>Inspection Started:</strong> {inspecting}
          </p>

          <p>
            <strong>Resolved Cases:</strong> {resolved}
          </p>

        </div>

      </div>

    </section>
  );
}

function Card({
  title,
  value,
  color,
}: {
  title: string;
  value: number;
  color: string;
}) {
  return (
    <div
      className={`${color} rounded-2xl shadow-lg p-6 text-white transition hover:scale-105`}
    >
      <p className="text-sm opacity-90">
        {title}
      </p>

      <h2 className="text-4xl font-bold mt-3">
        {value}
      </h2>
    </div>
  );
}