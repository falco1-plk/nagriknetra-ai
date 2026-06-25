import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(
  process.env.NEXT_PUBLIC_GEMINI_API_KEY!
);

export async function POST(req: NextRequest) {
  try {
    const { imageBase64, mimeType } = await req.json();

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const prompt = `
You are an Environmental Inspector working for an Indian Municipal Corporation.

Analyze this environmental image according to CPCB environmental inspection practices.

Return ONLY valid JSON.

{
  "pollutionType":"",
  "severity":"",
  "confidence":"",
  "riskScore":0,
  "citizenAdvice":"",
  "municipalAction":"",
  "officerRecommendation":"",
  "reasoning":""
}

Rules:

Risk Score:
0-30 = Low
31-60 = Medium
61-80 = High
81-100 = Critical

Possible pollution types:
- Smoke
- Garbage
- Construction Pollution
- Industrial Emission
- Dust
- Open Burning
- Clean Area

Do NOT include markdown.
Do NOT include explanations outside JSON.
`;

    const result = await model.generateContent([
      prompt,
      {
        inlineData: {
          data: imageBase64,
          mimeType,
        },
      },
    ]);

    const text = result.response.text();

    const cleaned = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    let report;

    try {
      report = JSON.parse(cleaned);
    } catch {
      return NextResponse.json({
        success: false,
        error: "Gemini returned invalid JSON.",
        rawResponse: cleaned,
      });
    }

    return NextResponse.json({
      success: true,
      report,
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json({
      success: false,
      error: String(error),
    });
  }
}