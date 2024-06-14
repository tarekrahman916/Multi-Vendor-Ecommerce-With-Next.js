//@ts-nocheck
"use client";
import ArrayItemsInput from "@/components/FormInputs/ArrayItemsInput";
import ImageInput from "@/components/FormInputs/ImageInput";
import SelectInput from "@/components/FormInputs/SelectInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextInput from "@/components/FormInputs/TextInput";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import ToggleInput from "@/components/FormInputs/ToggleInput";
import FormHeader from "@/components/backOffice/FormHeader";
import { makePostRequest } from "@/lib/apiRequest";
import { generateSlug } from "@/lib/generateSlug";
import { Plus, X } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewProduct() {
  const [imageUrl, setImageUrl] = useState("");
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
  const suppliers = [
    {
      id: 1,
      title: "Supplier 1",
    },
    {
      id: 2,
      title: "Supplier 2",
    },
    {
      id: 3,
      title: "Supplier 3",
    },
  ];
  // Tags
  const [tags, setTags] = useState([]);

  // Tags End
  const [loading, setLoading] = useState(false);
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
    {
      /*
  id=> auto,
  title ,
  slug=> auto,
  description,
  image/images[]
  sku
  barcode
  productPrice
  salePrice
  category
  supplier
  tags[],
  isActive
  */
    }

    const slug = generateSlug(data.title);
    data.slug = slug;
    data.tags = tags;
    data.imageUrl = imageUrl;
    console.log(data);

    makePostRequest(setLoading, "api/products", data, "Product", reset);
    setImageUrl("");
  }

  return (
    <div>
      {/* Form Header */}
      <FormHeader title="New Product" />
      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 "
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Product Title"
            name="title"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Product SKU"
            name="sku"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Product Barcode"
            name="barcode"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Product Price (Before Discount)"
            name="productPrice"
            type="number"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Product Sale Price (Discounted)"
            name="salePrice"
            type="number"
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
          <SelectInput
            label="Select Supplier"
            name="supplierId"
            register={register}
            options={suppliers}
            className="w-full"
          />

          <ImageInput
            label="Product Image"
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="productImageUploader"
          />
          <ArrayItemsInput items={tags} setItems={setTags} itemTitle="Tag" />

          <TextareaInput
            label="Product Description"
            name="description"
            register={register}
            errors={errors}
          />
          <ToggleInput
            label="Publish your Product"
            name={"isActive"}
            isActive={isActive}
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="Create Product"
          loadingButtonTitle="Creating Product please wait..."
        />
      </form>
    </div>
  );
}
