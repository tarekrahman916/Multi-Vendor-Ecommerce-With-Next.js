import Image from "next/image";
import Link from "next/link";
import React from "react";
import adsImg from "../../../public/ads.gif";
import HeroCarousel from "./HeroCarousel";
import { CircleDollarSign, FolderSync, HelpCircle } from "lucide-react";
import SidebarCategories from "./SidebarCategories";
import { getData } from "@/lib/getData";

export default async function Hero() {
  const banners = await getData("banners");

  return (
    <div className="grid grid-cols-12 gap-6 mb-6 ">
      <SidebarCategories />
      <div className="sm:col-span-7 col-span-full h-full rounded-md bg-blue-500">
        <HeroCarousel banners={banners} />
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
