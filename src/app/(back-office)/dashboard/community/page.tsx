import PageHeader from "@/components/backOffice/PageHeader";

import { getData } from "@/lib/getData";
import { columns } from "./columns";
import DataTable from "@/components/data-table-components/DataTable";

export default async function page() {
  const trainings = await getData("trainings");
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading="EFY Community Trainings"
        linkTitle="Add Training"
        href="/dashboard/community/new"
      />
      <div className="py-8">
        {Array.isArray(trainings) && (
          <DataTable data={trainings} columns={columns} />
        )}
      </div>
    </div>
  );
}
