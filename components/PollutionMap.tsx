"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function PollutionMap() {
  const position: [number, number] = [23.2599, 77.4126]; // Bhopal

  return (
    <MapContainer
      center={position}
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

      <Marker position={position}>
        <Popup>
          NagrikNetra AI
          <br />
          Sample Pollution Report
        </Popup>
      </Marker>
    </MapContainer>
  );
}