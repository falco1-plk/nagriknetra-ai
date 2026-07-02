import { PollutionReport } from "@/types/report";

export type AIRecommendation = {
  priority: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
  dominantPollution: string;
  averageRisk: number;
  reportCount: number;
  recommendation: string;
};

export function generateRecommendation(
  reports: PollutionReport[]
): AIRecommendation | null {
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

  const dominantPollution = Object.keys(
    pollutionCounts
  ).reduce((a, b) =>
    pollutionCounts[a] > pollutionCounts[b] ? a : b
  );

  let priority: AIRecommendation["priority"] = "LOW";

  if (avgRisk >= 80) {
    priority = "CRITICAL";
  } else if (avgRisk >= 60) {
    priority = "HIGH";
  } else if (avgRisk >= 40) {
    priority = "MEDIUM";
  }

  let recommendation = "";

  switch (priority) {
    case "CRITICAL":
      recommendation =
        "Deploy emergency inspection team immediately and initiate public safety measures.";
      break;

    case "HIGH":
      recommendation =
        "Schedule a municipal inspection within 24 hours and monitor the affected area closely.";
      break;

    case "MEDIUM":
      recommendation =
        "Continue monitoring the area and issue a public advisory if conditions worsen.";
      break;

    default:
      recommendation =
        "No immediate action required. Continue routine environmental monitoring.";
  }

  return {
    priority,
    dominantPollution,
    averageRisk: Math.round(avgRisk),
    reportCount: reports.length,
    recommendation,
  };
}