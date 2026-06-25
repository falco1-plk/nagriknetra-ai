export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-6xl font-bold">
        NagrikNetra AI
      </h1>

      <p className="mt-6 text-xl max-w-3xl text-gray-600">
        Transforming Citizen Reports into Actionable Environmental Intelligence
      </p>

      <div className="flex gap-4 mt-8">
        <button className="px-6 py-3 rounded-xl bg-green-600 text-white">
          Report Pollution
        </button>

        <button className="px-6 py-3 rounded-xl border">
          View Live Map
        </button>
      </div>
    </section>
  )
}