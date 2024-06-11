"use client";
import ImageInput from "@/components/FormInputs/ImageInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextInput from "@/components/FormInputs/TextInput";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import FormHeader from "@/components/backOffice/FormHeader";
import { makePostRequest } from "@/lib/apiRequest";
import { generateSlug } from "@/lib/generateSlug";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewMarket() {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

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
    data.image = imageUrl;
    console.log(data);

    makePostRequest(setLoading, "api/categories", data, "Category", reset);
    setImageUrl("");
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
          />

          <ImageInput
            label="Market Logo"
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="categoryImageUploader"
          />
          <TextareaInput
            label="Market Description"
            name="description"
            register={register}
            errors={errors}
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
