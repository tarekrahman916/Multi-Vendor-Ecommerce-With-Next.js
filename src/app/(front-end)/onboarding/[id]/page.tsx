import NewSupplierForm from "@/components/backOffice/NewSupplierForm";
import { getData } from "@/lib/getData";

export default async function page({ params: { id } }: { params: any }) {
  const user = await getData(`users/${id}`);
  console.log(user);

  return (
    <div className="flex flex-col gap-6 py-16 px-3">
      <div className="max-w-4xl p-4 mx-auto">
        <h2>Hello {user.name}, Tell More About Your Self</h2>
      </div>

      <NewSupplierForm user={user} />
    </div>
  );
}
