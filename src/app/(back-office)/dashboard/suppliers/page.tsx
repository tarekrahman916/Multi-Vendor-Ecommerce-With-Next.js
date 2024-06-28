import PageHeader from "@/components/backOffice/PageHeader";

import { getData } from "@/lib/getData";
import { columns } from "./columns";
import DataTable from "@/components/data-table-components/DataTable";

export default async function page() {
  const suppliers = await getData("suppliers");
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading="Suppliers"
        linkTitle="Add Supplier"
        href="/dashboard/suppliers/new"
      />
      {/* Table Actions */}
      <div className="py-8">
        {Array.isArray(suppliers) && (
          <DataTable data={suppliers} columns={columns} filterKeys={["name"]} />
        )}
      </div>
    </div>
  );
}
