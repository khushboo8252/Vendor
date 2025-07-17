import React, { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Jobs from "./pages/Jobs";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Sidebar from "./Sidebar";


export default function AdminLayout() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderComponent = () => {
    switch (activeTab) {
      case "Dashboard":
        return <Dashboard />;
      case "Customers":
        return <Customers />;
      case "Jobs":
        return <Jobs />;
      case "Reports":
        return <Reports />;
      case "Settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen  bg-gray-50">
      {/* Sidebar toggle button */}
      <button
        className="absolute top-4 left-4 md:hidden z-50 bg-gray-800 text-white px-3 py-1 rounded"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        ☰
      </button>

      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <main className="flex-1 p-6 overflow-y-auto w-full dark:dark:bg-gray-700 dark:text-white">
        {renderComponent()}
      </main>
    </div>
  );
}