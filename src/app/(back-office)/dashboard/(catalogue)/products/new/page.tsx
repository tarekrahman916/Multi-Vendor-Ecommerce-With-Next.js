import NewProductForm from "@/components/backOffice/NewProductForm";
import { getData } from "@/lib/getData";

export default async function NewProduct() {
  // Categories and Suppliers
  const categoriesData = await getData("categories");
  const usersData = await getData("users");
  const suppliersData = usersData.filter(
    (user: any) => user.role === "SUPPLIER"
  );
  const categories = categoriesData.map(
    (category: { id: any; title: string }) => {
      return {
        id: category.id,
        title: category.title,
      };
    }
  );

  const suppliers = suppliersData.map((supplier: any) => {
    return {
      id: supplier.id,
      title: supplier.name,
    };
  });

  return <NewProductForm categories={categories} suppliers={suppliers} />;
}
