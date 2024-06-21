/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import Link from "next/link";
// import { Carousel } from "flowbite-react";
import { Carousel } from "nuka-carousel";
export default function HeroCarousel() {
  const items = [{}];
  return (
    <Carousel
      showArrows
      showDots
      autoplay
      className="rounded-md overflow-hidden "
    >
      <Link href="#" className="min-w-[100%] ">
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
      </Link>
    </Carousel>
  );
}
