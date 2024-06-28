import PageHeader from "@/components/backOffice/PageHeader";
import DataTable from "@/components/data-table-components/DataTable";
import { getData } from "@/lib/getData";
import { columns } from "./columns";

export default async function Markets() {
  const markets = await getData("markets");
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading="Markets"
        linkTitle="Add Market"
        href="/dashboard/markets/new"
      />
      <div className="py-8">
        {Array.isArray(markets) && (
          <DataTable data={markets} columns={columns} />
        )}
      </div>
    </div>
  );
}
