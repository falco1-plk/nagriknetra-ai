"use client";

export default function ProblemSection() {
  return (
    <section
      className="
        py-20
        bg-gradient-to-br
        from-orange-50
        via-white
        to-green-50
        dark:from-slate-950
        dark:via-slate-900
        dark:to-slate-950
        transition-colors
        duration-300
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center">

          <span
            className="
              inline-block
              px-4
              py-2
              rounded-full
              bg-orange-100
              dark:bg-orange-900/30
              text-orange-700
              dark:text-orange-300
              font-semibold
              text-sm
              mb-5
            "
          >
            Environmental Challenge
          </span>

          <h2
            className="
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-extrabold
              tracking-tight
              text-gray-900
              dark:text-white
            "
          >
            The Problem We Solve
          </h2>

          <p
            className="
              mt-8
              max-w-4xl
              mx-auto
              text-lg
              leading-8
              text-gray-700
              dark:text-gray-300
            "
          >
            Local pollution incidents such as garbage burning,
            construction dust, industrial smoke, illegal waste dumping,
            and water contamination often remain unnoticed until they
            become serious environmental and public health concerns.
            Traditional reporting systems are slow, fragmented, and lack
            intelligent prioritization.
          </p>

          <p
            className="
              mt-6
              max-w-4xl
              mx-auto
              text-lg
              leading-8
              text-gray-700
              dark:text-gray-300
            "
          >
            <span className="font-semibold text-green-700 dark:text-green-400">
              NagrikNetra AI
            </span>{" "}
            bridges this gap by combining Artificial Intelligence,
            Cloud Computing, and GIS mapping to help citizens report
            pollution instantly while enabling municipal authorities
            to detect, prioritize, monitor, and resolve incidents in
            real time through an intelligent environmental command center.
          </p>

        </div>

      </div>
    </section>
  );
}