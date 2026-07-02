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
      <div className="bg-white rounded-2xl shadow-xl border p-6 mt-8">
        <h2 className="text-2xl font-bold text-green-700">
          🧠 AI Environmental Intelligence
        </h2>

        <p className="text-gray-500 mt-4">
          No reports available to generate recommendations.
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
    <div className="bg-white rounded-2xl shadow-xl border p-6 mt-8">

      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

        <h2 className="text-2xl font-bold text-green-700">
          🧠 AI Environmental Intelligence
        </h2>

        <span
          className={`${priorityColor} px-5 py-2 rounded-full font-bold text-white`}
        >
          {recommendation.priority}
        </span>

      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-8">

        <div className="bg-gray-50 rounded-xl p-5 border">
          <p className="text-gray-500 text-sm">
            Dominant Pollution
          </p>

          <h3 className="text-2xl font-bold mt-2">
            {recommendation.dominantPollution}
          </h3>
        </div>

        <div className="bg-gray-50 rounded-xl p-5 border">
          <p className="text-gray-500 text-sm">
            Average Risk
          </p>

          <h3 className="text-2xl font-bold text-red-600 mt-2">
            {recommendation.averageRisk}/100
          </h3>
        </div>

        <div className="bg-gray-50 rounded-xl p-5 border">
          <p className="text-gray-500 text-sm">
            Reports Analysed
          </p>

          <h3 className="text-2xl font-bold mt-2">
            {recommendation.reportCount}
          </h3>
        </div>

      </div>

      <div className="mt-8 rounded-xl border border-blue-200 bg-blue-50 p-6">

        <h3 className="text-lg font-bold text-blue-700">
          🤖 Recommended Municipal Action
        </h3>

        <p className="mt-3 text-gray-700 leading-relaxed">
          {recommendation.recommendation}
        </p>

      </div>

    </div>
  );
}