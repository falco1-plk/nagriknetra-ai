"use client";

import { PollutionReport } from "@/types/report";

type Props = {
  reports: PollutionReport[];
};

export default function OfficerDashboard({
  reports,
}: Props) {
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

      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6">

        <div>

          <h1 className="text-3xl md:text-5xl font-bold text-green-700 dark:text-green-400">
            🏛️ NagrikNetra AI
          </h1>

          <p className="mt-3 text-gray-600 dark:text-gray-300 text-lg">
            Municipal Environmental Command Center
          </p>

        </div>

        <div
          className="
            rounded-2xl
            border
            border-green-300
            dark:border-green-700
            bg-green-100
            dark:bg-green-900/20
            px-6
            py-4
            shadow-md
            w-fit
          "
        >
          <p className="font-bold text-green-700 dark:text-green-300">
            ● Officer Portal
          </p>

          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
            Live Monitoring Enabled
          </p>
        </div>

      </div>

      {/* KPI Cards */}

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6">

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

      {/* Summary */}

      <div
        className="
          rounded-2xl
          border
          border-gray-200
          dark:border-slate-700
          bg-white
          dark:bg-slate-900
          shadow-lg
          p-8
          transition-all
          duration-300
        "
      >

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          📈 Dashboard Summary
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <SummaryItem
            title="Total Reports"
            value={total}
          />

          <SummaryItem
            title="Critical Cases"
            value={critical}
          />

          <SummaryItem
            title="High Risk Cases"
            value={high}
          />

          <SummaryItem
            title="Pending Cases"
            value={pending}
          />

          <SummaryItem
            title="Assigned Cases"
            value={assigned}
          />

          <SummaryItem
            title="Inspection Started"
            value={inspecting}
          />

          <SummaryItem
            title="Resolved Cases"
            value={resolved}
          />

        </div>

      </div>

    </section>
  );
}

/* ========================= */

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
      className={`
        ${color}
        rounded-2xl
        p-6
        shadow-lg
        text-white
        hover:shadow-2xl
        hover:-translate-y-1
        transition-all
        duration-300
      `}
    >
      <p className="text-sm font-medium opacity-90">
        {title}
      </p>

      <h2 className="text-4xl font-bold mt-4">
        {value}
      </h2>
    </div>
  );
}

/* ========================= */

function SummaryItem({
  title,
  value,
}: {
  title: string;
  value: number;
}) {
  return (
    <div
      className="
        rounded-xl
        border
        border-gray-200
        dark:border-slate-700
        bg-gray-50
        dark:bg-slate-800
        p-5
        transition-all
        duration-300
        hover:shadow-md
      "
    >
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {title}
      </p>

      <h3 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
        {value}
      </h3>
    </div>
  );
}