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

export default function NewCategory() {
  const [imageUrl, setImageUrl] = useState("");
  const markets = [
    {
      id: 1,
      title: "Digital Electronica Markets",
    },
    {
      id: 2,
      title: "Barisal Electronica Markets",
    },
    {
      id: 3,
      title: "Dhaka Electronica Markets",
    },
  ];
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
  async function onSubmit(data: any) {
    {
      /*
  id=> auto,
  title ,
  slug=> auto,
  description,
  image
  */
    }

    const slug = generateSlug(data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;
    console.log(data);

    makePostRequest(setLoading, "api/categories", data, "Category", reset);
    setImageUrl("");
  }

  return (
    <div>
      {/* Form Header */}
      <FormHeader title="New Category" />
      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 "
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Category Title"
            name="title"
            register={register}
            errors={errors}
            // className="w-full"
          />
          {/* <SelectInput
            label="Select Markets"
            name="marketsIds"
            register={register}
            options={markets}
            className="w-full"
            multiple={true}
          /> */}

          <TextareaInput
            label="Category Description"
            name="description"
            register={register}
            errors={errors}
          />
          <ImageInput
            label="Category Image"
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="categoryImageUploader"
          />
          <ToggleInput
            label="Publish your Category"
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
