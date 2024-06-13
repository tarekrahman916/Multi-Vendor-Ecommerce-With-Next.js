import PageHeader from "@/components/backOffice/PageHeader";
import TableActions from "@/components/backOffice/TableActions";

export default function page() {
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading="Suppliers"
        linkTitle="Add Supplier"
        href="/dashboard/suppliers/new"
      />
      {/* Table Actions */}
      <TableActions />

      {/* Table */}
      <div className="py-8">
        <h2>Table</h2>
      </div>
    </div>
  );
}
