"use client";

export default function AIAnalysisPreview() {
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

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
            AI Pollution Analysis
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
            Google Gemini AI analyzes citizen-submitted images to identify
            pollution type, estimate environmental risk, calculate confidence,
            and recommend appropriate municipal actions.
          </p>

        </div>

        {/* AI Result Card */}

        <div
          className="
            mt-14
            rounded-3xl
            border
            border-gray-200
            dark:border-slate-700
            bg-white
            dark:bg-slate-900
            shadow-xl
            p-8
            transition-all
            duration-300
          "
        >

          <div className="grid md:grid-cols-2 gap-8">

            {/* Left Column */}

            <div className="space-y-6">

              <InfoCard
                title="Pollution Type"
                value="Smoke Emission"
                color="text-red-600"
              />

              <InfoCard
                title="Severity"
                value="High"
                color="text-orange-500"
              />

              <InfoCard
                title="Confidence"
                value="94%"
                color="text-green-600"
              />

            </div>

            {/* Right Column */}

            <div>

              <div
                className="
                  rounded-2xl
                  border
                  border-blue-200
                  dark:border-blue-700
                  bg-blue-50
                  dark:bg-blue-900/20
                  p-6
                "
              >

                <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300">
                  🤖 AI Recommendation
                </h3>

                <p className="mt-4 leading-8 text-gray-700 dark:text-gray-300">
                  Deploy an environmental inspection team immediately.
                  Verify the pollution source, issue public safety
                  advisories if required, and begin corrective action
                  to reduce environmental impact.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

/* ============================ */

function InfoCard({
  title,
  value,
  color,
}: {
  title: string;
  value: string;
  color: string;
}) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-gray-200
        dark:border-slate-700
        bg-gray-50
        dark:bg-slate-800
        p-5
        hover:shadow-lg
        transition-all
        duration-300
      "
    >
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {title}
      </p>

      <h3 className={`mt-2 text-2xl font-bold ${color}`}>
        {value}
      </h3>
    </div>
  );
}