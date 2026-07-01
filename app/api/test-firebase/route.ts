import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "Firestore Connected Successfully",
  });
}