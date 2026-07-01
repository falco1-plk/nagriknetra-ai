export interface PollutionReport {
  // Firestore
  id: string;

  trackingId: string;

  status:
    | "Pending"
    | "Assigned"
    | "Inspection Started"
    | "Resolved";

  createdAt: any;

  // AI Analysis
  pollutionType: string;

  severity:
    | "Low"
    | "Medium"
    | "High"
    | "Critical";

  confidence: string;

  riskScore: number;

  citizenAdvice: string;

  municipalAction: string;

  officerRecommendation: string;

  reasoning: string;

  // Location
  latitude: number;

  longitude: number;

  // Optional Citizen Information
  address?: string;

  description?: string;

  imageUrl?: string;
}