import DataTable from "@/components/data-table-components/DataTable";
import PageHeader from "../../../../../components/backOffice/PageHeader";
import TableActions from "@/components/backOffice/TableActions";
import { getData } from "@/lib/getData";
import { columns } from "./columns";

export default async function page() {
  const categories = await getData("categories");

  return (
    <div>
      {/* Header */}
      <PageHeader
        heading="Categories"
        linkTitle="Add Category"
        href="/dashboard/categories/new"
      />
      {/* Table Actions */}
      {/* <TableActions /> */}

      {/* Table */}
      <div className="py-8">
        {Array.isArray(categories) && (
          <DataTable data={categories} columns={columns} />
        )}
      </div>
    </div>
  );
}
