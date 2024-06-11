"use client";

import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextInput from "@/components/FormInputs/TextInput";
import FormHeader from "@/components/backOffice/FormHeader";
import { makePostRequest } from "@/lib/apiRequest";
import { generateCouponCode } from "@/lib/generateCouponCode";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewCoupon() {
  const [loading, setLoading] = useState(false);
  const [couponCode, setCouponCode] = useState();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  // const title = watch("title");
  // const expiry = watch("expiryDate");
  // const coupon = generateCouponCode(title, expiry);
  // console.log(coupon);
  async function onSubmit(data: any) {
    {
      /*
  id=> auto,
  title ,
  code=>auto,
  slug=> auto,
  expiryDate,

  */
    }

    const couponCode = generateCouponCode(data.title, data.expiryDate);
    data.couponCode = couponCode;
    console.log(data);
    makePostRequest(setLoading, "api/coupons", data, "Coupon", reset);
  }

  return (
    <div>
      {/* Form Header */}
      <FormHeader title="New Coupon" />
      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 "
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Coupon Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
          {/* <TextInput
            label="Coupon Code"
            name="couponCode"
            register={register}
            errors={errors}
            defaultValue="efy916"
            className="w-full"
          /> */}
          <TextInput
            label="Coupon Expiry Date"
            name="expiryDate"
            type="date"
            register={register}
            errors={errors}
            className="w-full"
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="Create Coupon"
          loadingButtonTitle="Creating Coupon please wait..."
        />
      </form>
    </div>
  );
}
