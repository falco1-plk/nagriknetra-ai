"use client";

import { useEffect, useState } from "react";

import {
  subscribeReports,
  updateReportStatus,
} from "@/lib/firestore";

import { PollutionReport } from "@/types/report";

import OfficerDashboard from "@/components/OfficerDashboard";
import DashboardCharts from "@/components/DashboardCharts";
import AIRecommendationPanel from "@/components/AIRecommendationPanel";
import HotspotAlerts from "@/components/HotspotAlerts";
import LiveMapCard from "@/components/LiveMapCard";
export default function Dashboard() {
  const [reports, setReports] = useState<PollutionReport[]>([]);
  const [loading, setLoading] = useState(true);
  

 useEffect(() => {

  const unsubscribe = subscribeReports(
    (data) => {

      setReports(data);

      setLoading(false);

    }
  );

  return () => unsubscribe();

}, []);
  if (loading) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-semibold">
        Loading Dashboard...
      </h1>
    </main>
  );
}

 async function changeStatus(
  id: string,
  status: PollutionReport["status"]
) {
  await updateReportStatus(id, status);
}


  return (
    <main className="min-h-screen bg-gray-100 p-8">
<div className="mb-10">

  <div className="flex justify-between items-center flex-wrap gap-4">

    <div>

      <h1 className="text-4xl font-bold text-green-700">
        🏛 Municipal Command Center
      </h1>

      <p className="text-gray-600 mt-2">
        NagrikNetra AI
      </p>

      <p className="text-gray-500">
        Environmental Monitoring Headquarters
      </p>

    </div>

    <div className="bg-green-100 px-5 py-3 rounded-xl">

      <p className="font-semibold">
        Officer Portal
      </p>

      <p className="text-sm text-gray-600">
        Demo Session
      </p>

    </div>

  </div>

</div>
      {/* Officer Dashboard */}
      <OfficerDashboard reports={reports} />

<DashboardCharts reports={reports} />

<AIRecommendationPanel reports={reports} />

<LiveMapCard />

<HotspotAlerts reports={reports} />


      {/* Recent Reports */}
      <div className="mt-10">

        <h2 className="text-3xl font-bold mb-6">
          📋 Live Pollution Reports
        </h2>

        {reports.length === 0 ? (
         <div className="bg-white rounded-xl shadow-lg p-10 text-center">

  <h2 className="text-2xl font-bold">
    No Pollution Reports Yet
  </h2>

  <p className="mt-3 text-gray-600">
    Reports submitted by citizens will automatically
    appear here in real time.
  </p>

</div>
        ) : (
          <div className="grid gap-6">

            {reports.map((report) => (

              <div
                key={report.id}
                className="bg-white rounded-2xl shadow-xl border border-gray-200 border-l-8 border-l-green-600 p-6 hover:shadow-2xl transition-all duration-300"
              >

                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">

                  <h3  className="text-2xl font-bold text-gray-800">
                    {report.pollutionType}
                  </h3>

                  <div className="flex flex-col md:items-end gap-3">

  <span
    className={`px-5 py-2 rounded-full text-white font-semibold
    ${
      report.status === "Resolved"
        ? "bg-green-600"
        : report.status === "Assigned"
        ? "bg-blue-600"
        : report.status === "Inspection Started"
        ? "bg-orange-600"
        : "bg-yellow-500"
    }`}
  >
    {report.status}
  </span>

  <select
    value={report.status}
   onChange={(e) =>
  changeStatus(
    report.id,
    e.target.value as PollutionReport["status"]
  )
}
    className="border border-gray-300 rounded-lg px-3 py-2 bg-white shadow-sm"
  >
    <option value="Pending">Pending</option>

    <option value="Assigned">
      Assigned
    </option>

    <option value="Inspection Started">
      Inspection Started
    </option>

    <option value="Resolved">
      Resolved
    </option>

  </select>

</div>

                </div>

                <div className="grid md:grid-cols-2 gap-3">

                  <p>

<strong>Severity:</strong>{" "}

<span
className={`px-3 py-1 rounded-full text-white ml-2
${
report.severity==="Critical"
?"bg-red-600"
:report.severity==="High"
?"bg-orange-600"
:report.severity==="Medium"
?"bg-yellow-500 text-black"
:"bg-green-600"
}`}
>

{report.severity}

</span>

</p>

                  <p>

<strong>Risk Score:</strong>

<span className="font-bold text-red-600 ml-2">

{report.riskScore}/100

</span>

</p>

                  <p>
                    <strong>Confidence:</strong>{" "}
                    {report.confidence}
                  </p>

                 <p>

<strong>Tracking ID:</strong>

<span className="font-mono text-green-700 ml-2">

{report.trackingId}

</span>

</p>

                </div>

                <div className="mt-4">

                  <p className="font-semibold">
                    Citizen Advice
                  </p>

                 <p className="text-gray-700 leading-relaxed">

{report.citizenAdvice}

</p>

                </div>

                <div className="mt-4">

                  <p  className="font-semibold text-green-700">
                    Municipal Action
                  </p>

                  <p className="text-gray-700 leading-relaxed">

{report.municipalAction}

</p>

                </div>

              </div>
              

            ))}

          </div>
        )}

      </div>
<div className="mt-5 flex items-center gap-3">

  <div className="w-3 h-3 bg-green-600 rounded-full animate-pulse"></div>

  <span className="font-medium text-green-700">
    Officer Portal • Live Monitoring
  </span>

</div>
    </main>
  );
}