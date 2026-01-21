import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import OverviewPanel from "@/components/dashboard/OverviewPanel";
import LessonPanel from "@/components/dashboard/LessonPanel";
import ComparePanel from "@/components/dashboard/ComparePanel";
import DatasetPanel from "@/components/dashboard/DatasetPanel";
import HistoryPanel from "@/components/dashboard/HistoryPanel";

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const renderPanel = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewPanel />;
      case "lesson":
        return <LessonPanel />;
      case "compare":
        return <ComparePanel />;
      case "dataset":
        return <DatasetPanel />;
      case "history":
        return <HistoryPanel />;
      default:
        return <OverviewPanel />;
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="flex-1 p-8 overflow-auto">
        {renderPanel()}
      </main>
    </div>
  );
};

export default Index;
