import { db } from "./firebase";
import { PollutionReport } from "@/types/report";

import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  query,
  orderBy,
  doc,
  updateDoc,
  where,
  limit,
  onSnapshot,
  DocumentData,
} from "firebase/firestore";

/**
 * Save a new pollution report
 */
export async function saveReport(
  report: Omit<
    PollutionReport,
    "id" | "trackingId" | "status" | "createdAt"
  >
) {
  const docRef = await addDoc(collection(db, "reports"), {
    ...report,
    trackingId: `NNAI-${Date.now()}`,
    status: "Pending",
    createdAt: serverTimestamp(),
  });

  return docRef.id;
}

/**
 * Fetch all reports
 */
export async function getReports(): Promise<PollutionReport[]> {
  const q = query(
    collection(db, "reports"),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as DocumentData),
  })) as PollutionReport[];
}

/**
 * Real-time Firestore listener
 */
export function subscribeReports(
  callback: (reports: PollutionReport[]) => void
) {
  const q = query(
    collection(db, "reports"),
    orderBy("createdAt", "desc")
  );

  return onSnapshot(q, (snapshot) => {
    const reports = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as DocumentData),
    })) as PollutionReport[];

    callback(reports);
  });
}

/**
 * Update report status
 */
export async function updateReportStatus(
  id: string,
  status: PollutionReport["status"]
) {
  await updateDoc(doc(db, "reports", id), {
    status,
  });
}

/**
 * Find report using Tracking ID
 */
export async function getReportByTrackingId(
  trackingId: string
): Promise<PollutionReport | null> {
  const q = query(
    collection(db, "reports"),
    where("trackingId", "==", trackingId),
    limit(1)
  );

  const snapshot = await getDocs(q);

  if (snapshot.empty) {
    return null;
  }

  return {
    id: snapshot.docs[0].id,
    ...(snapshot.docs[0].data() as DocumentData),
  } as PollutionReport;
}