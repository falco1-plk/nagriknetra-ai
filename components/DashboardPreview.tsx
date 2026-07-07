"use client";

export default function DashboardPreview() {
  const stats = [
    {
      value: "24",
      label: "Critical Alerts",
      color: "text-red-500",
      bg: "bg-red-50 dark:bg-red-900/20",
    },
    {
      value: "142",
      label: "Resolved Reports",
      color: "text-green-500",
      bg: "bg-green-50 dark:bg-green-900/20",
    },
    {
      value: "18",
      label: "Active Hotspots",
      color: "text-blue-500",
      bg: "bg-blue-50 dark:bg-blue-900/20",
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

        <div className="text-center">

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
            Municipal Command Center
          </h2>

          <p
            className="
              mt-5
              max-w-3xl
              mx-auto
              text-lg
              leading-8
              text-gray-600
              dark:text-gray-300
            "
          >
            A real-time dashboard that enables municipal officers to
            monitor environmental incidents, prioritize critical cases,
            and coordinate rapid response using AI-powered insights.
          </p>

        </div>

        {/* Dashboard Preview Cards */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">

          {stats.map((item) => (

            <div
              key={item.label}
              className={`
                ${item.bg}
                rounded-2xl
                border
                border-gray-200
                dark:border-slate-700
                p-8
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
              `}
            >
              <h3
                className={`
                  text-5xl
                  font-extrabold
                  ${item.color}
                `}
              >
                {item.value}
              </h3>

              <p
                className="
                  mt-4
                  text-lg
                  font-medium
                  text-gray-700
                  dark:text-gray-300
                "
              >
                {item.label}
              </p>
            </div>

          ))}

        </div>

      </div>
    </section>
  );
}