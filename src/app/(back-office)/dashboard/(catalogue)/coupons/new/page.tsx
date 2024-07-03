import FormHeader from "@/components/backOffice/FormHeader";
import CouponForm from "@/components/backOffice/Forms/CouponForm";

export default function NewCoupon() {
  return (
    <div>
      <FormHeader title="New Coupon" />
      <CouponForm />
    </div>
  );
}
