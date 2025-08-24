"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function HeadingCarousel() {
  const plugin = React.useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      stopOnFocusIn: true,
    })
  );

  // Aspect ratio: 3552:2400 = 1.48:1 (landscape)
  const aspectRatio = 3552 / 2400;

  const images = [
    {
      src: "/images/image-1.png",
      alt: "Office gallery space",
    },
    {
      src: "/images/image-2.png",
      alt: "Office interior",
    },
    {
      src: "/images/image-3.png",
      alt: "Gallery workspace",
    },
    {
      src: "/images/image-4.png",
      alt: "Art advisory office",
    },
    {
      src: "/images/image-5.png",
      alt: "Contemporary art space",
    },
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      opts={{
        loop: true,
        align: "start",
      }}
    >
      <CarouselContent className="">
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div
              className="relative w-full overflow-hidden"
              style={{
                aspectRatio: aspectRatio,
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
