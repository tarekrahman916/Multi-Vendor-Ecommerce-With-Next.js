import FormHeader from "@/components/backOffice/FormHeader";
import NewCategoryForm from "@/components/backOffice/Forms/NewCategoryForm";

export default function NewCategory() {
  return (
    <div>
      <FormHeader title="New Category" />
      <NewCategoryForm updateData={""} />
    </div>
  );
}
