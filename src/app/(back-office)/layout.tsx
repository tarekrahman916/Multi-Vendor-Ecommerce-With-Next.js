"use client";
import Navbar from "@/components/backOffice/Navbar";
import Sidebar from "@/components/backOffice/Sidebar";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div className="lg:ml-64 ml-0 flex-grow bg-slate-100 min-h-screen">
        {/* Header */}
        <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        {/* Main */}
        <main className="bg-slate-100 dark:bg-slate-900 p-8 min-h-screen text-slate-50   mt-16 min-w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
