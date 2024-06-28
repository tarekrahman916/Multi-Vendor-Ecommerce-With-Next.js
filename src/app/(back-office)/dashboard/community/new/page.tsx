import NewTrainingForm from "@/components/backOffice/NewTrainingForm";
import { getData } from "@/lib/getData";

export default async function NewTraining() {
  const categoriesData = await getData("categories");

  if (!categoriesData) {
    return <div>Error loading data</div>;
  }

  const categories = Array.isArray(categoriesData)
    ? categoriesData.map((category: { id: any; title: string }) => {
        return {
          id: category.id,
          title: category.title,
        };
      })
    : [];
  return <NewTrainingForm categories={categories} />;
}
