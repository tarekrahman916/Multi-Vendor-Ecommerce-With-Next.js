import PageHeader from "@/components/backOffice/PageHeader";
import TableActions from "@/components/backOffice/TableActions";

export default function Markets() {
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading="Markets"
        linkTitle="Add Market"
        href="/dashboard/markets/new"
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
