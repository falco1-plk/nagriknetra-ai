import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h2 className="text-2xl font-bold text-green-400">
              NagrikNetra AI
            </h2>

            <p className="mt-4 text-gray-300">
              AI-powered Smart City Environmental Monitoring
              platform for citizens and municipal authorities.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2">

              <Link href="/">Home</Link>

              <Link href="/report">Report</Link>

              <Link
  href="/officer"
  className="hover:text-green-600 transition-colors"
>
  Headquarters
</Link>
              <Link href="/map">Live Map</Link>

              <Link href="/track">Track Report</Link>

            </div>
          </div>

          <div>

            <h3 className="font-bold mb-4">
              Project
            </h3>

            <p className="text-gray-300">
              Built using Next.js, Firebase,
              Google Gemini AI and Leaflet Maps.
            </p>

          </div>

        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">

          © 2026 Aishwary | NagrikNetra AI | Built with Next.js + Firebase + Gemini AI

        </div>

      </div>
    </footer>
  );
}