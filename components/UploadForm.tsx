"use client";

import { useState } from "react";
import { useGeolocation } from "@/hooks/useGeolocation";

export default function UploadForm() {
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState<any>(null);

  const { location } = useGeolocation();


  const analyzeImage = async () => {
    if (!image) {
      alert("Please select an image.");
      return;
    }

    setLoading(true);

    const reader = new FileReader();

    reader.onloadend = async () => {
      const base64 = (reader.result as string).split(",")[1];

      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          imageBase64: base64,
          mimeType: image.type,
        }),
      });

      const data = await response.json();

      if (data.success) {
    setReport(data.report);
} else {
    alert(data.error);
}
      setLoading(false);
    };

    reader.readAsDataURL(image);
  };

  return (
    <div className="max-w-2xl mx-auto p-8 border rounded-2xl shadow">

      <h2 className="text-3xl font-bold mb-6">
        Report Pollution
      </h2>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files?.[0] || null)}
      />

      <button
        onClick={analyzeImage}
        className="mt-6 bg-green-600 text-white px-6 py-3 rounded-xl"
      >
        {loading ? "Analyzing..." : "Analyze with AI"}
      </button>
{
  report && (
    <div className="mt-8 grid gap-4">

      <div className="rounded-xl border p-5 shadow">
        <h3 className="font-bold text-lg">
          🌫 Pollution Type
        </h3>
        <p className="text-xl mt-2">
          {report.pollutionType}
        </p>
      </div>

      <div className="rounded-xl border p-5 shadow">
        <h3 className="font-bold text-lg">
          ⚠ Severity
        </h3>

        <span
          className={`inline-block mt-2 px-4 py-2 rounded-full text-white ${
            report.severity === "Critical"
              ? "bg-red-600"
              : report.severity === "High"
              ? "bg-orange-500"
              : report.severity === "Medium"
              ? "bg-yellow-500"
              : "bg-green-600"
          }`}
        >
          {report.severity}
        </span>
      </div>

      <div className="rounded-xl border p-5 shadow">
        <h3 className="font-bold text-lg">
          📊 Risk Score
        </h3>

        <div className="w-full bg-gray-200 rounded-full h-4 mt-3">
          <div
            className="bg-red-500 h-4 rounded-full"
            style={{
              width: `${report.riskScore}%`,
            }}
          />
        </div>

        <p className="mt-2 font-semibold">
          {report.riskScore}/100
        </p>
      </div>

      <div className="rounded-xl border p-5 shadow">
        <h3 className="font-bold">
          👤 Citizen Advice
        </h3>

        <p className="mt-2">
          {report.citizenAdvice}
        </p>
      </div>

      <div className="rounded-xl border p-5 shadow">
        <h3 className="font-bold">
          🏛 Municipal Action
        </h3>

        <p className="mt-2">
          {report.municipalAction}
        </p>
      </div>

      <div className="rounded-xl border p-5 shadow">
        <h3 className="font-bold">
          👮 Officer Recommendation
        </h3>

        <p className="mt-2">
          {report.officerRecommendation}
        </p>
      </div>

      <div className="rounded-xl border p-5 shadow bg-gray-50">
        <h3 className="font-bold">
          🧠 AI Reasoning
        </h3>

        <p className="mt-2 italic">
          {report.reasoning}
        </p>
      </div>

    </div>
  )
}
{location && (
  <div className="rounded-xl border p-5 shadow mt-4">
    <h3 className="font-bold text-lg">
      📍 Current Location
    </h3>

    <p>Latitude: {location.latitude}</p>
    <p>Longitude: {location.longitude}</p>
  </div>
)}
      

    </div>
  );
}