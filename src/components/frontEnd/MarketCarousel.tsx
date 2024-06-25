// @ts-nocheck
"use client";
import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function MarketCarousel({ markets }: { markets: [] }) {
  console.log(markets);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
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
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="p-4"
      >
        {markets.map((market) => {
          return (
            <Link key={market.id} href="#" className="rounded-lg">
              <Image
                src={market.logoUrl}
                alt={market.title}
                width={556}
                height={556}
                className="w-full h-[150px] rounded-2xl"
              />
              <h3 className=" text-slate-800 dark:text-slate-200 text-center">
                {market.title}
              </h3>
            </Link>
          );
        })}
      </Carousel>
    </div>
  );
}
