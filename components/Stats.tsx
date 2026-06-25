export default function Stats() {
  const stats = [
    { value: "1000+", label: "Citizen Reports" },
    { value: "250+", label: "Hotspots Identified" },
    { value: "92%", label: "AI Accuracy" },
    { value: "20+", label: "Municipal Areas" },
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 px-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border p-8 text-center shadow-sm"
          >
            <h2 className="text-4xl font-bold text-green-600">
              {stat.value}
            </h2>
            <p className="mt-2 text-gray-600">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}