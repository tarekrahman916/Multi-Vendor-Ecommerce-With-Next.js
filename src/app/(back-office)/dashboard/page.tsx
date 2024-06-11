import CustomDataTable from "@/components/backOffice/CustomDataTable";
import DashboardCharts from "@/components/backOffice/DashboardCharts";
import Heading from "@/components/backOffice/Heading";
import LargeCards from "@/components/backOffice/LargeCards";
import SmallCards from "@/components/backOffice/SmallCards";
import React from "react";

export default function page() {
  return (
    <div className="">
      <Heading title="Dashboard Overview" />
      {/* Large Cards */}
      <LargeCards />
      {/* Small Cards */}
      <SmallCards />
      {/* Charts */}
      <DashboardCharts />
      {/* Recent Orders Table */}
      <CustomDataTable />
    </div>
  );
}
