import NewMarketForm from "@/components/backOffice/NewMarketForm";
import { getData } from "@/lib/getData";
import React from "react";

export default async function NewMarket() {
  const categoriesData = await getData("categories");

  const categories = categoriesData.map(
    (category: { id: any; title: string }) => {
      return {
        id: category.id,
        title: category.title,
      };
    }
  );
  return <NewMarketForm categories={categories} />;
}
