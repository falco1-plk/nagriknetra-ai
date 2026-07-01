"use client";

import { generateRecommendation } from "@/lib/aiRecommendation";

export default function AIRecommendationPanel({
  reports,
}: {
  reports: any[];
}) {
  const recommendation = generateRecommendation(reports);

  if (!recommendation) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-6 mt-8">
        <h2 className="text-2xl font-bold">
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
    <div className="bg-white rounded-2xl shadow-xl p-6 mt-8">

      <div className="flex justify-between items-center">

        <h2 className="text-2xl font-bold">
          🧠 AI Environmental Intelligence
        </h2>

        <span
          className={`${priorityColor} px-4 py-2 rounded-full font-bold text-white`}
        >
          {recommendation.priority}
        </span>

      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-6">

        <div>

          <p className="text-gray-500">Dominant Pollution</p>

          <h3 className="text-2xl font-bold">
            {recommendation.dominantPollution}
          </h3>

        </div>

        <div>

          <p className="text-gray-500">Average Risk</p>

          <h3 className="text-2xl font-bold text-red-600">
            {recommendation.averageRisk}/100
          </h3>

        </div>

        <div>

          <p className="text-gray-500">Reports Analysed</p>

          <h3 className="text-2xl font-bold">
            {recommendation.reportCount}
          </h3>

        </div>

      </div>

      <div className="mt-8 p-5 bg-blue-50 rounded-xl border border-blue-200">

        <h3 className="font-bold text-lg">
          🤖 Recommended Municipal Action
        </h3>

        <p className="mt-3 text-gray-700 leading-relaxed">
          {recommendation.recommendation}
        </p>

      </div>

    </div>
  );
}