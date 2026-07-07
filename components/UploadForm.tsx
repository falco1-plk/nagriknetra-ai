"use client";

import { useState } from "react";
import Image from "next/image";

import { useGeolocation } from "@/hooks/useGeolocation";
import { saveReport } from "@/lib/firestore";
import { PollutionReport } from "@/types/report";

export default function UploadForm() {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [report, setReport] =
    useState<PollutionReport | null>(null);

  const { location, loading: locationLoading } =
    useGeolocation();

  const analyzeImage = async () => {
    if (!image) {
      alert("Please select an image.");
      return;
    }

    try {
      setLoading(true);

      const reader = new FileReader();

      reader.onloadend = async () => {
        try {
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

          if (!data.success) {
            alert(data.error);
            setLoading(false);
            return;
          }

          setReport(data.report);

          const reportId = await saveReport({
            ...data.report,

            latitude: location?.latitude ?? 0,

            longitude: location?.longitude ?? 0,
          });

          console.log("Saved Report:", reportId);
        } catch (err) {
          console.error(err);
          alert("Unable to analyze image.");
        } finally {
          setLoading(false);
        }
      };

      reader.readAsDataURL(image);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <div
  className="
    max-w-4xl
    mx-auto
    bg-white
    dark:bg-slate-900
    border
    border-gray-200
    dark:border-slate-700
    rounded-3xl
    shadow-xl
    p-8
    transition-all
    duration-300
  "
>

      <div className="mb-8">

        <h1 className="text-3xl md:text-4xl font-bold text-green-700 dark:text-green-400">
          📸 Report Pollution
        </h1>

        <p className="mt-3 text-gray-600 dark:text-gray-300 leading-7">
          Upload an image and let AI analyze the
          environmental pollution automatically.
        </p>

      </div>

      <div className="space-y-6">

        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];

            if (!file) return;

            setImage(file);

            setPreview(URL.createObjectURL(file));
          }}
          className="
block
w-full
rounded-xl
border
border-gray-300
dark:border-slate-600
bg-white
dark:bg-slate-800
dark:text-white
p-3
"
        />

        {preview && (

          <div className="rounded-2xl overflow-hidden border shadow">

            <Image
              src={preview}
              alt="Preview"
              width={900}
              height={600}
              className="w-full h-auto"
            />

          </div>

        )}

        <button
          onClick={analyzeImage}
          disabled={loading || !image}
          className={`w-full py-4 rounded-xl font-semibold transition

          ${
            loading || !image
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700 text-white"
          }`}
        >
          {loading
            ? "🔄 AI is analyzing..."
            : "🤖 Analyze with Gemini AI"}
        </button>

        {locationLoading ? (

          <div
  className="
    bg-blue-50
    dark:bg-blue-900/20
    border
    border-blue-200
    dark:border-blue-700
    rounded-xl
    p-4
  "
>

            Detecting location...

          </div>

        ) : location ? (

          <div
  className="
    bg-blue-50
    dark:bg-blue-900/20
    border
    border-blue-200
    dark:border-blue-700
    rounded-xl
    p-5
  "
>

            <h3 className="font-bold text-lg text-blue-700 dark:text-blue-300">

              📍 Current Location

            </h3>

            <p className="mt-2 text-gray-700 dark:text-gray-300">

              <strong>Latitude:</strong>{" "}

              {location.latitude}

            </p>

             <p className="text-gray-700 dark:text-gray-300">

              <strong>Longitude:</strong>{" "}

              {location.longitude}

            </p>

          </div>

        ) : (

          <div
  className="
    bg-yellow-50
    dark:bg-yellow-900/20
    border
    border-yellow-300
    dark:border-yellow-700
    rounded-xl
    p-5
    text-gray-700
    dark:text-gray-300
  "
>

            Unable to fetch location.

          </div>

        )}

        {report && (

          <div className="mt-8 grid gap-5">

            <div className="rounded-xl
border
border-gray-200
dark:border-slate-700
bg-white
dark:bg-slate-800
shadow-lg
p-6
transition-all
duration-300
hover:shadow-xl">

              <h3 className="font-bold text-xl">

                🌫 Pollution Type

              </h3>

              <p className="mt-3 text-2xl">

                {report.pollutionType}

              </p>

            </div>
                        <div className="rounded-xl
border
border-gray-200
dark:border-slate-700
bg-white
dark:bg-slate-800
shadow-lg
p-6
transition-all
duration-300
hover:shadow-xl">

              <h3 className="font-bold text-xl">
                ⚠ Severity
              </h3>

              <span
                className={`inline-block mt-3 px-5 py-2 rounded-full text-white font-semibold
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

            <div className="rounded-xl
border
border-gray-200
dark:border-slate-700
bg-white
dark:bg-slate-800
shadow-lg
p-6
transition-all
duration-300
hover:shadow-xl">

              <h3 className="font-bold text-xl">
                📊 Risk Score
              </h3>

              <div className="w-full bg-gray-200 rounded-full h-5 mt-4">

                <div
                  className="bg-red-500 h-5 rounded-full transition-all"
                  style={{
                    width: `${report.riskScore}%`,
                  }}
                />

              </div>

              <p className="mt-3 text-xl font-bold text-red-600">

                {report.riskScore}/100

              </p>

            </div>

            <div className="rounded-xl
border
border-gray-200
dark:border-slate-700
bg-white
dark:bg-slate-800
shadow-lg
p-6
transition-all
duration-300
hover:shadow-xl">

              <h3 className="font-bold text-xl">
                🎯 AI Confidence
              </h3>

              <p className="mt-3 text-2xl">

                {report.confidence}

              </p>

            </div>

            <div className="rounded-xl
border
border-gray-200
dark:border-slate-700
bg-white
dark:bg-slate-800
shadow-lg
p-6
transition-all
duration-300
hover:shadow-xl">

              <h3 className="font-bold text-green-700">
                👤 Citizen Advice
              </h3>

              <p className="mt-3 leading-relaxed">

                {report.citizenAdvice}

              </p>

            </div>

            <div className="rounded-xl
border
border-gray-200
dark:border-slate-700
bg-white
dark:bg-slate-800
shadow-lg
p-6
transition-all
duration-300
hover:shadow-xl">

              <h3 className="font-bold text-blue-700">
                🏛 Municipal Action
              </h3>

              <p className="mt-3 leading-relaxed">

                {report.municipalAction}

              </p>

            </div>

            <div className="rounded-xl
border
border-gray-200
dark:border-slate-700
bg-white
dark:bg-slate-800
shadow-lg
p-6
transition-all
duration-300
hover:shadow-xl">

              <h3 className="font-bold">
                👮 Officer Recommendation
              </h3>

              <p className="mt-3 leading-relaxed">

                {report.officerRecommendation}

              </p>

            </div>

            <div className="rounded-xl
border
border-gray-200
dark:border-slate-700
bg-white
dark:bg-slate-800
shadow-lg
p-6
transition-all
duration-300
hover:shadow-xl bg-gray-50 dark:bg-slate-800">

              <h3 className="font-bold">
                🧠 AI Reasoning
              </h3>

              <p className="mt-3 italic text-gray-700 dark:text-gray-300 leading-relaxed">

                {report.reasoning}

              </p>

            </div>

            <div className="
rounded-xl
bg-green-50
dark:bg-green-900/20
border
border-green-300
dark:border-green-700
p-6
">

              <h3 className="font-bold text-green-700 text-xl">

                ✅ Report Submitted Successfully

              </h3>

              <p className="mt-3">

                Your complaint has been analyzed using AI and
                securely stored in the municipal database.

              </p>

              <p className="mt-2">

                Municipal officers can now review and
                update the complaint in real time.

              </p>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}