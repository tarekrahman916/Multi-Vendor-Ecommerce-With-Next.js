import PageHeader from "@/components/backOffice/PageHeader";
import TableActions from "@/components/backOffice/TableActions";

export default function page() {
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading="Staff"
        linkTitle="Add Staff"
        href="/dashboard/staff/new"
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
