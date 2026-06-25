export interface PollutionReport {
  pollutionType: string;
  severity: string;
  confidence: string;
  riskScore: number;
  citizenAdvice: string;
  municipalAction: string;
  officerRecommendation: string;
  reasoning: string;

  latitude: number;
  longitude: number;

  createdAt: string;
}