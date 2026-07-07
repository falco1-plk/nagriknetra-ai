"use client";

export default function Stats() {
  const stats = [
    {
      value: "1000+",
      label: "Citizen Reports",
    },
    {
      value: "250+",
      label: "Hotspots Identified",
    },
    {
      value: "94%",
      label: "AI Accuracy",
    },
    {
      value: "20+",
      label: "Municipal Areas",
    },
  ];

  return (
    <section
      className="
        py-20
        bg-gray-50
        dark:bg-slate-900
        transition-colors
        duration-300
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center mb-14">

          <h2
            className="
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-bold
              text-gray-900
              dark:text-white
            "
          >
            Platform Impact
          </h2>

          <p
            className="
              mt-4
              max-w-3xl
              mx-auto
              text-lg
              leading-8
              text-gray-600
              dark:text-gray-300
            "
          >
            Real-time environmental intelligence helping municipalities
            respond faster and make data-driven decisions.
          </p>

        </div>

        {/* Statistics */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((stat) => (

            <div
              key={stat.label}
              className="
                rounded-2xl
                border
                border-gray-200
                dark:border-slate-700
                bg-white
                dark:bg-slate-800
                p-8
                text-center
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <h2
                className="
                  text-4xl
                  lg:text-5xl
                  font-extrabold
                  text-green-600
                  dark:text-green-400
                "
              >
                {stat.value}
              </h2>

              <p
                className="
                  mt-3
                  text-gray-600
                  dark:text-gray-300
                  font-medium
                "
              >
                {stat.label}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}