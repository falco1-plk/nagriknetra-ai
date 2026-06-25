import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Workflow from "@/components/Workflow";
import Footer from "@/components/Footer";
import ProblemSection from "@/components/ProblemSection";
import AIAnalysisPreview from "@/components/AIAnalysisPreview";
import DashboardPreview from "@/components/DashboardPreview";

export default function Home() {
  return (
    <>
  <Hero />
  <ProblemSection />
  <Stats />
  <Features />
  <AIAnalysisPreview />
  <Workflow />
  <DashboardPreview />
  <Footer />
</>
  );
}