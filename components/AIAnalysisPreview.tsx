export default function AIAnalysisPreview() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">
          AI Pollution Analysis
        </h2>

        <div className="mt-10 rounded-3xl border p-8 shadow-lg">
          <div className="space-y-4">
            <p>
              <strong>Pollution Type:</strong> Smoke Emission
            </p>

            <p>
              <strong>Severity:</strong> High
            </p>

            <p>
              <strong>Confidence:</strong> 94%
            </p>

            <p>
              <strong>Suggested Action:</strong>
              Deploy inspection team immediately.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}