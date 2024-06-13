import PageHeader from "../../../../../components/backOffice/PageHeader";
import TableActions from "@/components/backOffice/TableActions";

export default function Coupons() {
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading="Coupons"
        linkTitle="Add Coupon"
        href="/dashboard/coupons/new"
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