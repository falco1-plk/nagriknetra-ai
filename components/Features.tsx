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
      desc: "Detect smoke, garbage and dust.",
    },
    {
      icon: Mic,
      title: "Voice Reporting",
      desc: "Hindi and regional language support.",
    },
    {
      icon: MapPin,
      title: "Hotspot Mapping",
      desc: "Live pollution hotspot tracking.",
    },
    {
      icon: Brain,
      title: "AI Recommendations",
      desc: "Action suggestions for authorities.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">
          Core Features
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {features.map((item) => (
            <div
              key={item.title}
              className="p-8 bg-white rounded-2xl shadow-sm"
            >
              <item.icon size={40} />
              <h3 className="mt-4 text-2xl font-semibold">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}