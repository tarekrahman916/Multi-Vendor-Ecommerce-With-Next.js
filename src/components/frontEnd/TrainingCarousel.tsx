// @ts-nocheck
"use client";
import { Card } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image from "../../../public/banners/2.png";

export default function TrainingCarousel({ trainings }: { trainings: [] }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="p-2"
      >
        {trainings.map((training, i) => {
          return (
            // <div key={i} className="rounded-lg">
            //   <Image
            //     src="/market.png"
            //     alt="market image"
            //     width={556}
            //     height={556}
            //     className="w-full rounded-xl"
            //   />
            //   <h3 className=" text-slate-800 dark:text-slate-200 text-center">
            //     Vegetables
            //   </h3>
            //   <p>
            //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            //     enim iste nihil! Rem neque repudiandae quibusdam nemo delectus
            //     soluta earum unde inventore reiciendis quod? Eos voluptatibus
            //     praesentium odit in facilis!
            //   </p>
            //   <div className="flex items-center justify-between">
            //     <Link
            //       href="#"
            //       className="bg-lime-900 hover:bg-lime-800 duration-300 transition-all text-slate-50 rounded-md px-4 py-2"
            //     >
            //       Read More
            //     </Link>
            //     <Link href="#">Talk to the consultancy</Link>
            //   </div>
            //   <div className="flex"></div>
            // </div>
            <Card
              key={training.id}
              className="mb-5 overflow-hidden"
              renderImage={() => (
                <Link href="#">
                  <Image
                    width={500}
                    height={500}
                    src={training.imageUrl}
                    alt={training.title}
                    className="w-full h-[250px] "
                  />
                </Link>
              )}
            >
              <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {training.title}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {training.description.slice(0, 100)}...
              </p>
              <div className="flex items-center justify-between">
                <Link
                  href="#"
                  className="bg-lime-900 hover:bg-lime-800 duration-300 transition-all text-slate-50 rounded-md px-4 py-2"
                >
                  Read More
                </Link>
                <Link href="#">Talk to the consultancy</Link>
              </div>
            </Card>
          );
        })}
      </Carousel>
    </div>
  );
}
