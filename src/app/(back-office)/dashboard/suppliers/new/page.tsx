"use client";
import ImageInput from "@/components/FormInputs/ImageInput";
import SelectInput from "@/components/FormInputs/SelectInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextInput from "@/components/FormInputs/TextInput";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import ToggleInput from "@/components/FormInputs/ToggleInput";
import FormHeader from "@/components/backOffice/FormHeader";
import { makePostRequest } from "@/lib/apiRequest";
import { generateSlug } from "@/lib/generateSlug";
import { generateUserCode } from "@/lib/generateUserCode";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewSupplier() {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isActive: true,
    },
  });
  const isActive = watch("isActive");
  const router = useRouter();

  function redirect() {
    router.push("/dashboard/suppliers");
  }
  async function onSubmit(data: any) {
    {
      /*
  name,
  phone,
  physicalAddress,
  contactPerson,
  contactPersonPhone,
  terms,
  notes,
  code,
  isActive
  */
    }

    const code = generateUserCode("EMSL", data.name);
    data.code = code;
    data.profileImageUrl = imageUrl;
    makePostRequest(
      setLoading,
      "api/suppliers",
      data,
      "Supplier",
      reset,
      redirect
    );
  }

  return (
    <div>
      {/* Form Header */}
      <FormHeader title="New Supplier" />
      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 "
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Supplier's Full Name"
            name="name"
            register={register}
            errors={errors}
            className="w-full"
          />

          <TextInput
            label="Suppliers's Phone"
            name="phone"
            type="tel"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Suppliers's Email"
            name="phone"
            type="email"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Suppliers's Physical Address"
            name="physicalAddress"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Suppliers's Contact Person"
            name="contactPerson"
            register={register}
            errors={errors}
            className="w-full"
            isRequired={false}
          />
          <TextInput
            label="Suppliers's Contact Person Phone"
            name="contactPersonPhone"
            type="tel"
            register={register}
            errors={errors}
            className="w-full"
            isRequired={false}
          />
          <ImageInput
            label="Supplier Profile Image"
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="farmerProfileUploader"
          />

          <TextareaInput
            label="Suppliers Payment Terms"
            name="terms"
            register={register}
            errors={errors}
            isRequired={false}
          />
          <TextareaInput
            label="Notes"
            name="notes"
            register={register}
            errors={errors}
            isRequired={false}
          />

          <ToggleInput
            label="Supplier Status"
            name={"isActive"}
            isActive={isActive}
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="Create Category"
          loadingButtonTitle="Creating Category please wait..."
        />
      </form>
    </div>
  );
}
