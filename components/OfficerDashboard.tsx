"use client";

type Report = {
  id: string;
  pollutionType: string;
  severity: string;
  riskScore: number;
  status: string;
  trackingId: string;
};

type Props = {
  reports: Report[];
};

export default function OfficerDashboard({ reports }: Props) {
  const total = reports.length;

  const pending = reports.filter(
    (r) => r.status === "Pending"
  ).length;

  const resolved = reports.filter(
    (r) => r.status === "Resolved"
  ).length;

  const critical = reports.filter(
    (r) => r.riskScore >= 80
  ).length;

  const high = reports.filter(
    (r) => r.riskScore >= 60 && r.riskScore < 80
  ).length;

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold">
          🏛️ NagrikNetra AI
        </h1>

        <p className="text-gray-500">
          Municipal Environmental Command Center
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-5">

        <Card title="Total Reports" value={total} color="bg-blue-600" />

        <Card title="Critical" value={critical} color="bg-red-600" />

        <Card title="High Risk" value={high} color="bg-orange-500" />

        <Card title="Pending" value={pending} color="bg-yellow-500" />

        <Card title="Resolved" value={resolved} color="bg-green-600" />

      </div>

    </div>
  );
}

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
      className={`${color} rounded-xl p-6 text-white shadow-lg`}
    >
      <p className="text-sm">{title}</p>

      <h2 className="text-4xl font-bold mt-3">
        {value}
      </h2>
    </div>
  );
}