import DataTable from "@/components/data-table-components/DataTable";
import PageHeader from "../../../../../components/backOffice/PageHeader";
import TableActions from "@/components/backOffice/TableActions";
import { getData } from "@/lib/getData";
import { columns } from "./columns";

export default async function page() {
  const products = await getData("products");
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading="Products"
        linkTitle="Add Product"
        href="/dashboard/products/new"
      />
      {/* Table */}
      <div className="py-8">
        {Array.isArray(products) && (
          <DataTable data={products} columns={columns} />
        )}
      </div>
    </div>
  );
}
