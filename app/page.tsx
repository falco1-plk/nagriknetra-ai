import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import Features from "@/components/Features";
import Workflow from "@/components/Workflow";
import Stats from "@/components/Stats";
import AIAnalysisPreview from "@/components/AIAnalysisPreview";
import DashboardPreview from "@/components/DashboardPreview";

export default function Home() {
  return (
    <main className="bg-gray-50">

      <Hero />

      <ProblemSection />

      <Features />

      <Workflow />

      <Stats />

      <AIAnalysisPreview />

      <DashboardPreview />

    </main>
  );
}