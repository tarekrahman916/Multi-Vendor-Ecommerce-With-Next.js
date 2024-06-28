import DataTable from "@/components/data-table-components/DataTable";
import PageHeader from "../../../../../components/backOffice/PageHeader";
import TableActions from "@/components/backOffice/TableActions";
import { getData } from "@/lib/getData";
import { columns } from "./columns";

export default async function Coupons() {
  const coupons = await getData("coupons");
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading="Coupons"
        linkTitle="Add Coupon"
        href="/dashboard/coupons/new"
      />

      {/* Table */}
      <div className="py-8">
        {Array.isArray(coupons) && (
          <DataTable data={coupons} columns={columns} />
        )}
      </div>
    </div>
  );
}
