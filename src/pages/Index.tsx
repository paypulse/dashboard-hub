import Header from "@/components/dashboard/Header";
import ProjectOverview from "@/components/dashboard/ProjectOverview";
import FeatureCards from "@/components/dashboard/FeatureCards";
import ArchitectureFlow from "@/components/dashboard/ArchitectureFlow";
import DatasetGuide from "@/components/dashboard/DatasetGuide";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container max-w-6xl mx-auto px-4 py-10">
        <ProjectOverview />
        <FeatureCards />
        <ArchitectureFlow />
        <DatasetGuide />
        
        <footer className="text-center text-muted-foreground text-sm py-6 border-t border-border mt-10">
          AI 튜터 시스템 개발 가이드 © 2024
        </footer>
      </main>
    </div>
  );
};

export default Index;
