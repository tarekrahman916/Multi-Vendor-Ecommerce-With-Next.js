import Image from "next/image";
import Link from "next/link";
import React from "react";
import image from "../../../public/vegetables.webp";
import HeroCarousel from "./HeroCarousel";

export default function Hero() {
  const categories = [{}, {}, {}, {}, {}];
  return (
    <div className="flex gap-6 mb-6">
      <div className="w-1/3  bg-white border border-gray-300 rounded-lg   dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
        <h2 className="bg-gray-100 dark:bg-slate-700 py-3 px-6 font-semibold border-gray-300 dark:border-gray-600 border-b text-gray-800 dark:text-slate-100">
          Shop By Category
        </h2>
        <div className="py-3 px-6 flex flex-col gap-2 h-[300px] overflow-y-auto">
          {categories.map((category, i) => {
            return (
              <Link
                key={i}
                href="#"
                className="flex items-center gap-3 rounded-lg hover:bg-slate-50 dark:hover:bg-gray-700 duration-500 transition-all"
              >
                <Image
                  src={image}
                  alt="category_image"
                  width={556}
                  height={556}
                  className="w-12 h-12 rounded-full object-cover border border-lime-400"
                />
                <span className="text-sm">Vegetables</span>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="w-2/3 rounded-md ">
        <HeroCarousel />
      </div>
    </div>
  );
}
