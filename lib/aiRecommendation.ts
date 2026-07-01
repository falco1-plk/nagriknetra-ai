export function generateRecommendation(reports: any[]) {
  if (reports.length === 0) {
    return null;
  }

  const avgRisk =
    reports.reduce(
      (sum, report) => sum + report.riskScore,
      0
    ) / reports.length;

  const pollutionCounts: Record<string, number> = {};

  reports.forEach((report) => {
    pollutionCounts[report.pollutionType] =
      (pollutionCounts[report.pollutionType] || 0) + 1;
  });

  const dominantPollution = Object.keys(pollutionCounts).reduce(
    (a, b) =>
      pollutionCounts[a] > pollutionCounts[b] ? a : b
  );

  let priority = "LOW";

  if (avgRisk >= 80) priority = "CRITICAL";
  else if (avgRisk >= 60) priority = "HIGH";
  else if (avgRisk >= 40) priority = "MEDIUM";

  return {
    priority,
    dominantPollution,
    averageRisk: Math.round(avgRisk),
    reportCount: reports.length,
    recommendation:
      priority === "CRITICAL"
        ? "Deploy emergency inspection team immediately."
        : priority === "HIGH"
        ? "Schedule municipal inspection within 24 hours."
        : priority === "MEDIUM"
        ? "Monitor the area and issue public advisory."
        : "Continue routine monitoring.",
  };
}