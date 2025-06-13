"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function HomeCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  const images = [
  <Image
    key={1}
    src="/images/image-1.png"
    width={3552}
    height={2400}
    alt={"Cover photo"}
  />,
    <Image
    key={2}
    src="/images/image-2.png"
    width={3552}
    height={2400}
    alt={"Cover photo 2"}
  />,
];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full px-3 mx-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="">
        {Array.from({ length: 2 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="">
              <Card className="p-0 rounded-none">
                <CardContent className="p-0 rounded-none">
                  {images[index]}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
