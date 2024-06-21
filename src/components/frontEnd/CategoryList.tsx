import Link from "next/link";
import CategoryCarousel from "./CategoryCarousel";

export default function CategoryList() {
  return (
    <div className="bg-white border border-gray-300 rounded-lg   dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
      <div className="bg-gray-100 dark:bg-slate-700 py-3 px-6 font-semibold border-gray-300 dark:border-gray-600 border-b text-gray-800 dark:text-slate-100 flex justify-between items-center">
        <h2 className="">Vegetables</h2>
        <Link
          href="#"
          className="bg-lime-900 hover:bg-lime-800 duration-300 transition-all text-slate-50 rounded-md px-4 py-2"
        >
          See All
        </Link>
      </div>
      <div className="bg-white p-4 dark:bg-slate-700">
        <CategoryCarousel />
      </div>
    </div>
  );
}
