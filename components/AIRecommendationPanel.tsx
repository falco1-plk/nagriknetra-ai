"use client";

import { PollutionReport } from "@/types/report";
import { generateRecommendation } from "@/lib/aiRecommendation";

type Props = {
  reports: PollutionReport[];
};

export default function AIRecommendationPanel({
  reports,
}: Props) {
  const recommendation = generateRecommendation(reports);

  if (!recommendation) {
    return (
      <div
        className="
          mt-8
          rounded-2xl
          border
          border-gray-200
          dark:border-slate-700
          bg-white
          dark:bg-slate-900
          shadow-xl
          p-6
          transition-all
          duration-300
        "
      >
        <h2 className="text-2xl font-bold text-green-700 dark:text-green-400">
          🧠 AI Environmental Intelligence
        </h2>

        <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">
          No reports are currently available. Once pollution reports are
          submitted, the AI engine will automatically analyse them and generate
          environmental intelligence for municipal officers.
        </p>
      </div>
    );
  }

  const priorityColor =
    recommendation.priority === "CRITICAL"
      ? "bg-red-600"
      : recommendation.priority === "HIGH"
      ? "bg-orange-500"
      : recommendation.priority === "MEDIUM"
      ? "bg-yellow-500 text-black"
      : "bg-green-600";

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
        p-6
        transition-all
        duration-300
      "
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-green-700 dark:text-green-400">
            🧠 AI Environmental Intelligence
          </h2>

          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Real-time environmental insights generated from live citizen reports.
          </p>
        </div>

        <span
          className={`${priorityColor} px-5 py-2 rounded-full text-sm font-bold shadow-md`}
        >
          {recommendation.priority} PRIORITY
        </span>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

        <div
          className="
            rounded-xl
            border
            border-gray-200
            dark:border-slate-700
            bg-gray-50
            dark:bg-slate-800
            p-6
            shadow-sm
            hover:shadow-lg
            transition-all
            duration-300
          "
        >
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Dominant Pollution
          </p>

          <h3 className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">
            {recommendation.dominantPollution}
          </h3>
        </div>

        <div
          className="
            rounded-xl
            border
            border-gray-200
            dark:border-slate-700
            bg-gray-50
            dark:bg-slate-800
            p-6
            shadow-sm
            hover:shadow-lg
            transition-all
            duration-300
          "
        >
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Average Risk Score
          </p>

          <h3 className="mt-3 text-2xl font-bold text-red-600">
            {recommendation.averageRisk}/100
          </h3>
        </div>

        <div
          className="
            rounded-xl
            border
            border-gray-200
            dark:border-slate-700
            bg-gray-50
            dark:bg-slate-800
            p-6
            shadow-sm
            hover:shadow-lg
            transition-all
            duration-300
          "
        >
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Reports Analysed
          </p>

          <h3 className="mt-3 text-2xl font-bold text-gray-900 dark:text-white">
            {recommendation.reportCount}
          </h3>
        </div>

      </div>

      {/* Recommendation */}
      <div
        className="
          mt-8
          rounded-2xl
          border
          border-blue-200
          dark:border-blue-700
          bg-blue-50
          dark:bg-blue-900/20
          p-6
          transition-all
          duration-300
        "
      >
        <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300">
          🤖 Recommended Municipal Action
        </h3>

        <p className="mt-4 text-gray-700 dark:text-gray-300 leading-8">
          {recommendation.recommendation}
        </p>
      </div>
    </section>
  );
}