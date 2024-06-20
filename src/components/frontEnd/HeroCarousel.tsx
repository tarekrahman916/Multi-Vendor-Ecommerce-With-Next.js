/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from "flowbite-react";
// import { Carousel } from "nuka-carousel";
export default function HeroCarousel() {
  return (
    <Carousel className="rounded-md overflow-hidden ">
      <Link href="#">
        <Image
          src="/banners/1.png"
          alt=""
          width={812}
          height={384}
          className="h-full w-full object-cover"
        />
      </Link>
      <Link href="#">
        <Image
          src="/banners/2.png"
          alt=""
          width={812}
          height={384}
          className="h-full w-full object-cover"
        />
      </Link>
      <Link href="#">
        <Image
          src="/banners/3.png"
          alt=""
          width={812}
          height={384}
          className="h-full w-full object-cover"
        />
      </Link>
      <Link href="#">
        <Image
          src="/banners/4.png"
          alt=""
          width={812}
          height={384}
          className="h-full w-full object-cover"
        />
      </Link>
    </Carousel>
  );
}
