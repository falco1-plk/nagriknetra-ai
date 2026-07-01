import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">

      <h1 className="text-6xl font-bold text-green-700">
        404
      </h1>

      <p className="text-xl mt-4">
        Page Not Found
      </p>

      <Link
        href="/"
        className="mt-8 bg-green-600 text-white px-6 py-3 rounded-lg"
      >
        Back to Home
      </Link>

    </main>
  );
}