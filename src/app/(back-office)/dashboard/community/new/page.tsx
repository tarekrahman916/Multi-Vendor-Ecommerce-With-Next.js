"use client";
import ImageInput from "@/components/FormInputs/ImageInput";
import QuilEditor from "@/components/FormInputs/QuilEditor";
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

export default function NewTraining() {
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");
  const categories = [
    {
      id: 1,
      title: "Category 1",
    },
    {
      id: 2,
      title: "Category 2",
    },
    {
      id: 3,
      title: "Category 3",
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

  //Quil Editor

  // quil Editor End

  const isActive = watch("isActive");
  async function onSubmit(data: any) {
    {
      /*
  id=> auto,
  title ,
  expertId,
  slug=> auto,
  description,
  content==> RichText
  image
  */
    }

    const slug = generateSlug(data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;
    data.content = content;
    console.log(data);

    makePostRequest(setLoading, "api/trainings", data, "Training", reset);
    setImageUrl("");
    setContent("");
  }

  return (
    <div>
      {/* Form Header */}
      <FormHeader title="New Training" />
      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 "
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Training Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
          <SelectInput
            label="Select Category"
            name="categoryId"
            register={register}
            options={categories}
            className="w-full"
          />

          <TextareaInput
            label="Training Description"
            name="description"
            register={register}
            errors={errors}
          />
          <ImageInput
            label="Training Thumbnail"
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="trainingImageUploader"
          />
          {/* Content */}
          <QuilEditor
            label="Training Content"
            value={content}
            onChange={setContent}
          />
          {/* Content End */}
          <ToggleInput
            label="Publish your Training"
            name={"isActive"}
            isActive={isActive}
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="Create Training"
          loadingButtonTitle="Creating Training please wait..."
        />
      </form>
    </div>
  );
}
