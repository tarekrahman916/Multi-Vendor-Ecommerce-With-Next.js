import DataTable from "@/components/data-table-components/DataTable";
import PageHeader from "../../../../../components/backOffice/PageHeader";
import { getData } from "@/lib/getData";
import { columns } from "./columns";

export default async function Banners() {
  const banners = await getData("banners");
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading="Banners"
        linkTitle="Add Banners"
        href="/dashboard/banners/new"
      />

      {/* Table */}
      <div className="py-8">
        {Array.isArray(banners) && (
          <DataTable data={banners} columns={columns} />
        )}
      </div>
    </div>
  );
}
