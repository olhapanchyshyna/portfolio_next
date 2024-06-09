import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/ui/carousel";
import { TextWithCircle } from "../../../entities/text-with-circle";
import { Title } from "../../../entities/title";
import { skills } from "../model/initial";
import { CardItem } from "./card-item";

export function Skills() {
  return (
    <section id="skills" className="container pb-[120px]">
      <div className="flex flex-col items-center">
        <TextWithCircle
          text="Skills"
          className="ml-0 before:left-[-2px] md:before:left-0"
        />
        <Title text="Что я использую" className="m-auto mt-[10px]" />
      </div>
      <div className="mt-[60px] hidden flex-wrap justify-between md:flex">
        {skills.map((skill) => (
          <CardItem key={skill.title} skill={skill} />
        ))}
      </div>

      <div className="m-auto mt-[60px] flex md:hidden">
        <Carousel
          className="m-auto max-w-xs rounded-[40px] [box-shadow:0px_0px_74px_#952cffcc]"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="w-[260px]">
            {skills.map((skill) => (
              <CarouselItem key={skill.title} className=" ">
                <CardItem skill={skill} />
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
