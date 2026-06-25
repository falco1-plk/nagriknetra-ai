export default function DashboardPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">
          Municipal Dashboard
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="p-8 bg-white rounded-2xl shadow">
            <h3 className="text-3xl font-bold text-red-500">
              24
            </h3>
            <p>Critical Alerts</p>
          </div>

          <div className="p-8 bg-white rounded-2xl shadow">
            <h3 className="text-3xl font-bold text-green-500">
              142
            </h3>
            <p>Resolved Reports</p>
          </div>

          <div className="p-8 bg-white rounded-2xl shadow">
            <h3 className="text-3xl font-bold text-blue-500">
              18
            </h3>
            <p>Active Hotspots</p>
          </div>
        </div>
      </div>
    </section>
  );
}