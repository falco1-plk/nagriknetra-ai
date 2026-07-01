"use client";

import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

import { getReports } from "@/lib/firestore";

// ===============================
// Fix Leaflet marker icons
// ===============================

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function PollutionMap() {
  const [reports, setReports] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadReports() {
      try {
        const data = await getReports();

        console.log("Firestore Reports:", data);

        setReports(data);
      } catch (error) {
        console.error("Error loading reports:", error);
      } finally {
        setLoading(false);
      }
    }

    loadReports();
  }, []);

  // Default Center (Bhopal)
  let center: [number, number] = [23.2599, 77.4126];

  // If reports exist, center on latest report
  if (
    reports.length > 0 &&
    reports[0].latitude &&
    reports[0].longitude
  ) {
    center = [
      Number(reports[0].latitude),
      Number(reports[0].longitude),
    ];
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-2xl">
        Loading Pollution Map...
      </div>
    );
  }

  return (
    <MapContainer
      center={center}
      zoom={13}
      style={{
        height: "100vh",
        width: "100%",
      }}
    >
      <TileLayer
        attribution="© OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {reports.map((report) => {
        if (!report.latitude || !report.longitude) return null;

        return (
          <Marker
            key={report.id}
            position={[
              Number(report.latitude),
              Number(report.longitude),
            ]}
          >
            <Popup>
              <div className="space-y-2">

                <h2 className="font-bold text-lg">
                  {report.pollutionType}
                </h2>

                <p>
                  <strong>Severity:</strong>{" "}
                  {report.severity}
                </p>

                <p>
                  <strong>Risk Score:</strong>{" "}
                  {report.riskScore}
                </p>

                <p>
                  <strong>Status:</strong>{" "}
                  {report.status}
                </p>

                <p>
                  <strong>Tracking ID:</strong>
                  <br />
                  {report.trackingId}
                </p>

              </div>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}