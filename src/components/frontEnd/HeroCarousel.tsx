/* eslint-disable @next/next/no-img-element */
// @ts-nocheck
"use client";
import Image from "next/image";
import Link from "next/link";
// import { Carousel } from "flowbite-react";
import { Carousel } from "nuka-carousel";
interface IBanners {
  banners;
}
export default function HeroCarousel({ banners }: { banners: [] }) {
  console.log(banners);
  const items = [{}];
  return (
    <Carousel
      showArrows
      showDots
      autoplay
      className="rounded-md overflow-hidden "
    >
      {banners.map((banner) => {
        return (
          <Link key={banner.id} href={banner.link} className="min-w-[100%] ">
            <Image
              src={banner.imageUrl}
              alt={banner.title}
              width={812}
              height={384}
              className=" w-full h-full object-cover"
            />
          </Link>
        );
      })}
      {/* <Link href="#" className="min-w-[100%] ">
        <Image
          src="/banners/1.png"
          alt="slide image"
          width={812}
          height={384}
          className=" w-full "
        />
      </Link>
      <Link href="#" className="min-w-[100%]">
        <Image
          src="/banners/2.png"
          alt="slide image"
          width={812}
          height={384}
          className=" w-full "
        />
      </Link>
      <Link href="#" className="min-w-[100%]">
        <Image
          src="/banners/3.png"
          alt="slide image"
          width={812}
          height={384}
          className=" w-full "
        />
      </Link>
      <Link href="#" className="min-w-[100%]">
        <Image
          src="/banners/4.png"
          alt="slide image"
          width={812}
          height={384}
          className=" w-full "
        />
      </Link> */}
    </Carousel>
  );
}
