"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/ui/carousel";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { TextWithCircle } from "../../../entities/text-with-circle";
import { Title } from "../../../entities/title";
import { portfolio } from "../model/initial";
import { CardItem } from "./card-item";

gsap.registerPlugin(ScrollTrigger);

export function Portfolio() {
  useEffect(() => {
    gsap.to(".portfolio", {
      duration: 7,
      scale: 1.1,
      opacity: 1,
      scrollTrigger: {
        trigger: ".portfolio",
        start: "100px 100%",
        scrub: true,
      },
    });
  }, []);
  return (
    <section id="portfolio" className="container pb-[120px]">
      <div className="flex flex-col items-center">
        <TextWithCircle
          text="Portfolio"
          className="ml-0 before:left-[19%] md:before:left-[25%]"
        />
        <Title text="My Works" className="m-auto mt-[10px]" />
      </div>

      <div className="portfolio mt-[60px] hidden flex-wrap justify-between opacity-60 md:flex">
        {portfolio.map((item) => (
          <CardItem key={item.title} portfolio={item} />
        ))}
      </div>

      <div className="m-auto mt-[60px] flex md:hidden">
        <Carousel
          className="m-auto rounded-[40px] [box-shadow:0px_0px_74px_#fe42a7cc]"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="w-[320px]">
            {portfolio.map((item, index) => (
              <CarouselItem key={item.title + index} className=" ">
                <CardItem portfolio={item} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
