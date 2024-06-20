import Navbar from "@/components/frontEnd/Navbar";
import React from "react";
import { ThemeModeScript } from "flowbite-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto py-6">{children}</div>
    </div>
  );
}
