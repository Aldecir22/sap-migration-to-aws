import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import FinOpsDashboard from "@/components/FinOpsDashboard";
import EvidenceGallery from "@/components/EvidenceGallery";
import ConclusionSection from "@/components/ConclusionSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <ArchitectureSection />
      <FinOpsDashboard />
      <EvidenceGallery />
      <ConclusionSection />
      <footer className="border-t border-border py-8 text-center">
        <p className="text-xs text-muted-foreground">
          © 2025 Aldecir Santana De Andrade — Cloud Architecture & FinOps Portfolio
        </p>
      </footer>
    </div>
  );
};

export default Index;
