import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TextWithCircle from "./text-with-circle";
import Title from "./title";

type TPortfolio = {
  title: string;
  descr: string;
  img: string;
  link: string;
};

const portfolio: TPortfolio[] = [
  {
    descr: "This is an e-commerce website where users can buy products online.",
    title: "Portfolio",
    img: "bg-[url('/bestAndPeople.png')]",
    link: "",
  },
  {
    descr: "This is an e-commerce website where users can buy products online.",
    title: "Portfolio",
    img: "bg-[url('/bestAndPeople.png')]",
    link: "",
  },
  {
    descr: "This is an e-commerce website where users can buy products online.",
    title: "Portfolio",
    img: "bg-[url('/bestAndPeople.png')]",
    link: "",
  },
  {
    descr: "This is an e-commerce website where users can buy products online.",
    title: "Portfolio",
    img: "bg-[url('/bestAndPeople.png')]",
    link: "",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="container pb-[120px]">
      <div className="flex flex-col items-center">
        <TextWithCircle
          text="Portfolio"
          className="ml-0 before:left-[19%] md:before:left-[25%]"
        />
        <Title text="My Works" className="m-auto mt-[10px]" />
      </div>

      <div className="mt-[60px] hidden flex-wrap justify-between md:flex">
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

type CardItemProps = {
  portfolio: TPortfolio;
};

const CardItem = ({ portfolio }: CardItemProps) => {
  return (
    <Card
      className={`m-auto h-[320px] w-[300px] md:w-[340px] rounded-[40px] md:mx-[5px] md:my-[10px] ${portfolio.img} bg-cover bg-no-repeat`}
    ></Card>
  );
};
