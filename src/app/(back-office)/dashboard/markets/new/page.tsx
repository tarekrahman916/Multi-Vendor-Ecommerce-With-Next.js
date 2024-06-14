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
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewMarket() {
  const [logoUrl, setLogoUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const categories = [
    {
      id: 1,
      title: "category 1",
    },
    {
      id: 2,
      title: "category 2",
    },
    {
      id: 3,
      title: "category 3",
    },
  ];
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isActive: true,
    },
  });
  const isActive = watch("isActive");
  async function onSubmit(data: any) {
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.logoUrl = logoUrl;
    console.log(data);

    makePostRequest(setLoading, "api/markets", data, "Market", reset);
    setLogoUrl("");
  }

  return (
    <div>
      {/* Form Header */}
      <FormHeader title="New Market" />
      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 "
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Market Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />

          <SelectInput
            label="Select Categories"
            name="categoryIds"
            register={register}
            options={categories}
            className="w-full"
            multiple={true}
          />

          <ImageInput
            label="Market Logo"
            imageUrl={logoUrl}
            setImageUrl={setLogoUrl}
            endpoint="marketLogoUploader"
          />
          <TextareaInput
            label="Market Description"
            name="description"
            register={register}
            errors={errors}
          />
          <ToggleInput
            label="Market Status"
            name={"isActive"}
            isActive={isActive}
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="Create Market"
          loadingButtonTitle="Creating Market please wait..."
        />
      </form>
    </div>
  );
}
