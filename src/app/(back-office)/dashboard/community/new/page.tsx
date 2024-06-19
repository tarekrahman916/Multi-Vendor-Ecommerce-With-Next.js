import NewTrainingForm from "@/components/backOffice/NewTrainingForm";
import { getData } from "@/lib/getData";

export default async function NewTraining() {
  const categoriesData = await getData("categories");

  const categories = categoriesData.map(
    (category: { id: any; title: string }) => {
      return {
        id: category.id,
        title: category.title,
      };
    }
  );
  return <NewTrainingForm categories={categories} />;
}
