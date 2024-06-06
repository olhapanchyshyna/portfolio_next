import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import TextWithCircle from "./text-with-circle";
import Title from "./title";

type Skill = {
  title: string;
  descr: string;
  img: string;
  bsh: string;
};

const skills: Skill[] = [
  {
    title: "HTML5",
    descr:
      "HTML5 позволяет создавать более SEO-оптимизированную структуру вашего продукта.",
    img: "/html5.png",
    bsh: "md:[box-shadow:0px_0px_74px_#fe42a7cc]",
  },
  {
    title: "CSS3",
    descr: "CSS3 позволяет улучшить стиль и внешний вид вашего веб-приложения.",
    img: "/css3.png",
    bsh: "md:[box-shadow:0px_0px_74px_#952cffcc]",
  },
  {
    title: "JavaScript",
    descr:
      "JavaScript используется для создания интерактивных элементов на веб-страницах.",
    img: "/js.png",
    bsh: "md:[box-shadow:0px_0px_74px_#fe42a7cc]",
  },
  {
    title: "React",
    descr:
      "React используется для построения быстрых и интерактивных пользовательских интерфейсов.",
    img: "/react.png",
    bsh: "md:[box-shadow:0px_0px_74px_#952cffcc]",
  },
  {
    title: "TypeScript",
    descr: "TypeScript помогает писать более надежный и масштабируемый код.",
    img: "/typescript.png",
    bsh: "md:[box-shadow:0px_0px_74px_#952cffcc]",
  },
  {
    title: "Next.js",
    descr:
      "Next.js позволяет создавать быстрые и SEO-дружественные приложения на React.",
    img: "/nextjs.png",
    bsh: "md:[box-shadow:0px_0px_74px_#fe42a7cc]",
  },
  {
    title: "Wordpress",
    descr: "Wordpress позволяет легко управлять контентом вашего сайта.",
    img: "/wordpress.png",
    bsh: "md:[box-shadow:0px_0px_74px_#952cffcc]",
  },
  {
    title: "Figma",
    descr: "Figma используется для создания макетов и прототипов дизайна.",
    img: "/figma.png",
    bsh: "md:[box-shadow:0px_0px_74px_#fe42a7cc]",
  },
  {
    title: "Tailwind",
    descr:
      "Tailwind CSS позволяет быстро создавать красивые пользовательские интерфейсы.",
    img: "/tailwind.png",
    bsh: "md:[box-shadow:0px_0px_74px_#fe42a7cc]",
  },
  {
    title: "Shadcn",
    descr:
      "Shadcn используется для создания теней и улучшения визуальных эффектов.",
    img: "/shadcn.jpeg",
    bsh: "md:[box-shadow:0px_0px_74px_#952cffcc]",
  },
];

export default function Skills() {
  return (
    <section className="container pb-[120px]">
      <div className="flex flex-col items-center">
        <TextWithCircle text="Skills" className="ml-0 before:left-[-2px] md:before:left-0" />
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
          <CarouselContent className="w-[260px] ">
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

type CardItemProps = {
  skill: Skill;
};

const CardItem = ({ skill }: CardItemProps) => {
  return (
    <Card
      className={`m-auto h-[260px] max-w-[250px] rounded-[40px] border-[0.25px] border-[#ffffffb3] bg-[#030303] py-[30px] px-[10px] text-center text-[#ffffffed] md:my-[10px] md:mx-[5px] ${skill.bsh}`}
    >
      <CardHeader className="p-0">
        <Image
          src={skill.img}
          alt={skill.title}
          width={64}
          height={100}
          className="m-auto mb-[10px]"
        />
      </CardHeader>

      <CardTitle className="mb-[15px] text-center text-[14px] font-bold leading-[21px]">
        {skill.title}
      </CardTitle>
      <CardDescription className="p-0 text-center text-[12px] font-medium leading-[18px] text-[#ffffffed]">
        {skill.descr}
      </CardDescription>
    </Card>
  );
};
