import Navbar from "@/components/frontEnd/Navbar";
import React from "react";
import { ThemeModeScript } from "flowbite-react";
import Footer from "@/components/frontEnd/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto py-6 px-8 lg:px-0">{children}</div>
      <Footer />
    </div>
  );
}
