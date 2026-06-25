export default function Workflow() {
  const steps = [
    "Citizen Upload",
    "AI Analysis",
    "Severity Score",
    "Hotspot Detection",
    "Municipal Action",
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold">
          How NagrikNetra AI Works
        </h2>

        <p className="mt-4 text-gray-600">
          Turning citizen reports into environmental action.
        </p>

        <div className="grid md:grid-cols-5 gap-4 mt-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="border rounded-2xl p-6 shadow-sm"
            >
              <div className="text-2xl font-bold text-green-600">
                {index + 1}
              </div>

              <div className="mt-2 font-medium">
                {step}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}