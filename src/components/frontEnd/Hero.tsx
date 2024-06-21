import Image from "next/image";
import Link from "next/link";
import React from "react";
import image from "../../../public/vegetables.webp";
import adsImg from "../../../public/ads.gif";

import HeroCarousel from "./HeroCarousel";
import { CircleDollarSign, FolderSync, HelpCircle } from "lucide-react";

export default function Hero() {
  const categories = [{}, {}, {}, {}, {}, {}, {}];
  return (
    <div className="grid grid-cols-12 gap-6 mb-6 ">
      <div className="col-span-3 hidden sm:block  bg-white border border-gray-300 rounded-lg   dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
        <h2 className="bg-gray-100 dark:bg-slate-700 py-3 px-6 font-semibold border-gray-300 dark:border-gray-600 border-b text-gray-800 dark:text-slate-100">
          Shop By Category
        </h2>
        <div className="py-3 px-6 flex flex-col gap-2 h-[325px] overflow-y-auto">
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
                  className="w-10 h-10 rounded-full object-cover border border-lime-400"
                />
                <span className="text-sm">Vegetables</span>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="sm:col-span-7 col-span-full h-full rounded-md bg-blue-500">
        <HeroCarousel />
      </div>
      <div className="col-span-2 hidden sm:block bg-white p-3 dark:bg-slate-800 rounded-md">
        <Link href="#" className="flex items-center space-x-3 mb-3">
          <HelpCircle className="shrink-0 w-5 h-5 dark:text-lime-500 text-slate-900" />
          <div className="flex flex-col">
            <h2 className="uppercase text-sm">Help Center</h2>
            <p className="text-[0.6rem]">Guide to customer care</p>
          </div>
        </Link>
        <Link href="#" className="flex items-center space-x-3 mb-3">
          <FolderSync className="shrink-0 w-5 h-5 dark:text-lime-500 text-slate-900" />
          <div className="flex flex-col">
            <h2 className="uppercase text-sm">Easy Return</h2>
            <p className="text-[0.6rem]">Quick Return</p>
          </div>
        </Link>
        <Link
          href="/register-supplier"
          className="flex items-center space-x-3 mb-6"
        >
          <CircleDollarSign className="shrink-0 w-5 h-5 dark:text-lime-500 text-slate-900" />
          <div className="flex flex-col">
            <h2 className="uppercase text-sm">Sell on EFY</h2>
            <p className="text-[0.6rem]">Million of Visitors</p>
          </div>
        </Link>
        <Image
          src={adsImg}
          alt="advertise image"
          className="w-full rounded-lg object-cover"
        />
      </div>
    </div>
  );
}
