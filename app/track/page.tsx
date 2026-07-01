"use client";

import { useState } from "react";

import { getReportByTrackingId } from "@/lib/firestore";
import { PollutionReport } from "@/types/report";

export default function TrackReport() {
  const [trackingId, setTrackingId] = useState("");
  const [loading, setLoading] = useState(false);

  const [report, setReport] =
    useState<PollutionReport | null>(null);

  const [notFound, setNotFound] =
    useState(false);

  async function searchReport() {
    if (!trackingId.trim()) {
      alert("Please enter a Tracking ID.");
      return;
    }

    try {
      setLoading(true);

      const data =
        await getReportByTrackingId(
          trackingId.trim()
        );

      if (!data) {
        setNotFound(true);
        setReport(null);
      } else {
        setReport(data);
        setNotFound(false);
      }
    } catch (err) {
      console.error(err);
      alert("Unable to fetch report.");
    } finally {
      setLoading(false);
    }
  }

  function statusColor() {
    if (!report) return "";

    switch (report.status) {
      case "Resolved":
        return "bg-green-600";

      case "Assigned":
        return "bg-blue-600";

      case "Inspection Started":
        return "bg-orange-500";

      default:
        return "bg-yellow-500";
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-gray-100 py-12 px-6">

      <div className="max-w-5xl mx-auto">

        <div className="bg-white rounded-3xl shadow-xl border p-10">

          <div className="text-center">

            <h1 className="text-4xl font-bold text-green-700">

              🔍 Track Your Pollution Report

            </h1>

            <p className="text-gray-600 mt-3">

              Enter your Tracking ID to check the
              latest municipal response.

            </p>

          </div>

          <div className="mt-10">

            <label className="font-semibold">

              Tracking ID

            </label>

            <input
              value={trackingId}
              onChange={(e) =>
                setTrackingId(e.target.value)
              }
              placeholder="Example: NNAI-1748946372"
              className="mt-3 w-full border rounded-xl p-4"
            />

            <button
              onClick={searchReport}
              disabled={loading}
              className={`mt-6 w-full rounded-xl py-4 text-white font-semibold transition

              ${
                loading
                  ? "bg-gray-400"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              {loading
                ? "Searching..."
                : "🔍 Search Report"}
            </button>

          </div>

          {notFound && (

            <div className="mt-8 bg-red-50 border border-red-300 rounded-xl p-6 text-center">

              <h2 className="text-2xl font-bold text-red-600">

                Report Not Found

              </h2>

              <p className="mt-3">

                Please verify your Tracking ID.

              </p>

            </div>

          )}

          {report && (

            <div className="mt-10 space-y-6">

              <div className="bg-gray-50 rounded-2xl border p-6">

                <div className="flex flex-col md:flex-row md:justify-between gap-4">

                  <div>

                    <h2 className="text-3xl font-bold">

                      {report.pollutionType}

                    </h2>

                    <p className="mt-2 text-gray-600">

                      Tracking ID

                    </p>

                    <p className="font-mono text-green-700">

                      {report.trackingId}

                    </p>

                  </div>

                  <div>

                    <span
                      className={`${statusColor()} px-5 py-2 rounded-full text-white font-semibold`}
                    >
                      {report.status}
                    </span>

                  </div>

                </div>

              </div>
                            <div className="grid md:grid-cols-3 gap-5">

                <div className="bg-white rounded-2xl border shadow p-6">

                  <h3 className="font-bold text-lg">
                    ⚠ Severity
                  </h3>

                  <span
                    className={`inline-block mt-4 px-5 py-2 rounded-full text-white font-semibold
                    ${
                      report.severity === "Critical"
                        ? "bg-red-600"
                        : report.severity === "High"
                        ? "bg-orange-500"
                        : report.severity === "Medium"
                        ? "bg-yellow-500 text-black"
                        : "bg-green-600"
                    }`}
                  >
                    {report.severity}
                  </span>

                </div>

                <div className="bg-white rounded-2xl border shadow p-6">

                  <h3 className="font-bold text-lg">
                    📊 Risk Score
                  </h3>

                  <div className="w-full bg-gray-200 rounded-full h-4 mt-4">

                    <div
                      className="bg-red-500 h-4 rounded-full"
                      style={{
                        width: `${report.riskScore}%`,
                      }}
                    />

                  </div>

                  <p className="mt-3 text-red-600 text-xl font-bold">

                    {report.riskScore}/100

                  </p>

                </div>

                <div className="bg-white rounded-2xl border shadow p-6">

                  <h3 className="font-bold text-lg">
                    🎯 AI Confidence
                  </h3>

                  <p className="mt-4 text-2xl font-semibold">

                    {report.confidence}

                  </p>

                </div>

              </div>

              <div className="bg-white rounded-2xl border shadow p-6">

                <h3 className="text-xl font-bold mb-6">

                  📈 Complaint Progress

                </h3>

                <div className="flex justify-between items-center flex-wrap gap-4">

                  {[
                    "Pending",
                    "Assigned",
                    "Inspection Started",
                    "Resolved",
                  ].map((step) => (

                    <div
                      key={step}
                      className="flex flex-col items-center"
                    >

                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold
                        ${
                          report.status === step
                            ? "bg-green-600"
                            : "bg-gray-400"
                        }`}
                      >
                        ✓
                      </div>

                      <p className="text-sm mt-2 text-center">

                        {step}

                      </p>

                    </div>

                  ))}

                </div>

              </div>

              <div className="grid md:grid-cols-2 gap-5">

                <div className="bg-green-50 rounded-2xl border p-6">

                  <h3 className="font-bold text-green-700 text-xl">

                    👤 Citizen Advice

                  </h3>

                  <p className="mt-3 leading-relaxed">

                    {report.citizenAdvice}

                  </p>

                </div>

                <div className="bg-blue-50 rounded-2xl border p-6">

                  <h3 className="font-bold text-blue-700 text-xl">

                    🏛 Municipal Action

                  </h3>

                  <p className="mt-3 leading-relaxed">

                    {report.municipalAction}

                  </p>

                </div>

              </div>

              <div className="bg-yellow-50 rounded-2xl border p-6">

                <h3 className="font-bold text-xl">

                  👮 Officer Recommendation

                </h3>

                <p className="mt-3 leading-relaxed">

                  {report.officerRecommendation}

                </p>

              </div>

              <div className="bg-gray-50 rounded-2xl border p-6">

                <h3 className="font-bold text-xl">

                  🧠 AI Reasoning

                </h3>

                <p className="mt-3 italic leading-relaxed text-gray-700">

                  {report.reasoning}

                </p>

              </div>

            </div>

          )}

        </div>

      </div>

    </main>

  );
}