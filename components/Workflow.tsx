"use client";

export default function Workflow() {
  const steps = [
    {
      title: "Citizen Upload",
      description:
        "Citizens upload pollution images directly through the platform using their mobile device.",
    },
    {
      title: "AI Analysis",
      description:
        "Google Gemini AI analyzes the uploaded image to identify pollution type and environmental impact.",
    },
    {
      title: "Severity Score",
      description:
        "The AI calculates a confidence level, severity, and environmental risk score.",
    },
    {
      title: "Hotspot Detection",
      description:
        "Reports are mapped geographically to identify pollution hotspots across the city.",
    },
    {
      title: "Municipal Action",
      description:
        "Authorities receive AI-generated recommendations and update the complaint status in real time.",
    },
  ];

  return (
    <section
      className="
        py-20
        bg-white
        dark:bg-slate-950
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
            How NagrikNetra AI Works
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
            A complete AI-powered workflow that transforms citizen
            complaints into actionable environmental intelligence for
            municipal authorities.
          </p>

        </div>

        {/* Workflow Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-16">

          {steps.map((step, index) => (

            <div
              key={index}
              className="
                relative
                rounded-2xl
                border
                border-gray-200
                dark:border-slate-700
                bg-gray-50
                dark:bg-slate-900
                p-6
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >

              {/* Step Number */}

              <div
                className="
                  w-14
                  h-14
                  rounded-full
                  bg-green-600
                  text-white
                  flex
                  items-center
                  justify-center
                  text-xl
                  font-bold
                  shadow-md
                "
              >
                {index + 1}
              </div>

              {/* Title */}

              <h3
                className="
                  mt-6
                  text-xl
                  font-bold
                  text-gray-900
                  dark:text-white
                "
              >
                {step.title}
              </h3>

              {/* Description */}

              <p
                className="
                  mt-4
                  leading-7
                  text-gray-600
                  dark:text-gray-300
                "
              >
                {step.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}