import Navbar from "@/components/backOffice/Navbar";
import Sidebar from "@/components/backOffice/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />
      <div className="w-full">
        {/* Header */}
        <Navbar />
        {/* Main */}
        <main className="bg-slate-100 dark:bg-slate-900 p-8 text-slate-50 min-h-screen  mt-16 ml-60">
          {children}
        </main>
      </div>
    </div>
  );
}
