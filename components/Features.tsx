import {
  Camera,
  Mic,
  MapPin,
  Brain,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Camera,
      title: "AI Vision Analysis",
      desc: "Detect smoke, garbage, industrial waste, water pollution, and dust using Google Gemini AI.",
    },
    {
      icon: Mic,
      title: "Voice Reporting",
      desc: "Submit pollution complaints using voice in Hindi and regional languages.",
    },
    {
      icon: MapPin,
      title: "Live Hotspot Mapping",
      desc: "Visualize pollution hotspots on an interactive GIS map in real time.",
    },
    {
      icon: Brain,
      title: "AI Decision Support",
      desc: "Receive intelligent recommendations for citizens and municipal authorities.",
    },
  ];

  return (
    <section
      className="
        py-20
        bg-gray-50
        dark:bg-slate-950
        transition-colors
        duration-300
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2
          className="
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
            text-center
            text-gray-900
            dark:text-white
          "
        >
          Core Features
        </h2>

        <p
          className="
            text-center
            text-gray-600
            dark:text-gray-300
            mt-4
            max-w-3xl
            mx-auto
          "
        >
          NagrikNetra AI combines Artificial Intelligence, GIS mapping,
          and real-time analytics to help citizens and municipalities
          identify, monitor, and respond to environmental issues faster.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

          {features.map((item) => (
            <div
              key={item.title}
              className="
                p-8
                rounded-2xl
                bg-white
                dark:bg-slate-900
                border
                border-gray-200
                dark:border-slate-700
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <div
                className="
                  w-14
                  h-14
                  rounded-xl
                  bg-green-100
                  dark:bg-green-900/30
                  flex
                  items-center
                  justify-center
                  text-green-600
                  dark:text-green-400
                "
              >
                <item.icon size={30} />
              </div>

              <h3
                className="
                  mt-6
                  text-xl
                  font-semibold
                  text-gray-900
                  dark:text-white
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-3
                  text-gray-600
                  dark:text-gray-300
                  leading-7
                "
              >
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}