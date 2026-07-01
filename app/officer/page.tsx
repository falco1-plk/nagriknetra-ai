import Link from "next/link";

export default function OfficerPortal() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-gray-100 flex items-center justify-center px-6">

      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-2xl w-full text-center">

        <div className="text-6xl mb-6">
          🏛️
        </div>

        <h1 className="text-4xl font-bold text-green-700">
          Municipal Officer Portal
        </h1>

        <p className="mt-4 text-gray-600 text-lg">
          Welcome to the NagrikNetra AI Municipal Command Center.
        </p>

        <p className="mt-2 text-gray-500">
          This portal is intended for authorized municipal officers to monitor
          pollution reports, review AI recommendations, and update complaint
          status.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

          <Link
            href="/officer/login"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold transition"
          >
            Enter Command Center
          </Link>

          <Link
            href="/"
            className="border border-green-600 text-green-700 hover:bg-green-50 px-8 py-3 rounded-xl font-semibold transition"
          >
            Back to Citizen Portal
          </Link>

        </div>

        <div className="mt-8 text-sm text-gray-500">
          Authentication will be enabled in the next release.
        </div>

      </div>

    </main>
  );
}