import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import TextWithCircle from "./text-with-circle";
import Title from "./title";

const skills = [
  {
    title: "HTML5",
    descr:
      "It is he who creates the framework of your site or application, and the fifth version will allow me to create a more SEO-optimized structure of your product",
    img: "/html5.png",
		bsh: '[box-shadow:0px_0px_74px_#fe42a7cc]'
  },
  {
    title: "CSS3",
    descr:
      "It is he who creates the framework of your site or application, and the fifth version will allow me to create a more SEO-optimized structure of your product",
    img: "/css3.png",
		bsh: '[box-shadow:0px_0px_74px_#952cffcc]'
  },
  {
    title: "JavaScript",
    descr:
      "It is he who creates the framework of your site or application, and the fifth version will allow me to create a more SEO-optimized structure of your product",
    img: "/js.png",
		bsh: '[box-shadow:0px_0px_74px_#fe42a7cc]'
  },
  {
    title: "React",
    descr:
      "It is he who creates the framework of your site or application, and the fifth version will allow me to create a more SEO-optimized structure of your product",
    img: "/react.png",
		bsh: '[box-shadow:0px_0px_74px_#952cffcc]'
  },
  {
    title: "TypeScript",
    descr:
      "It is he who creates the framework of your site or application, and the fifth version will allow me to create a more SEO-optimized structure of your product",
    img: "/typescript.png",
		bsh: ' [box-shadow:0px_0px_74px_#952cffcc]'
  },
  {
    title: "Next.js",
    descr:
      "It is he who creates the framework of your site or application, and the fifth version will allow me to create a more SEO-optimized structure of your product",
    img: "/nextjs.png",
		bsh: '[box-shadow:0px_0px_74px_#fe42a7cc]'
  },
  {
    title: "Wordpress",
    descr:
      "It is he who creates the framework of your site or application, and the fifth version will allow me to create a more SEO-optimized structure of your product",
    img: "/wordpress.png",
		bsh: '[box-shadow:0px_0px_74px_#952cffcc]'
  },
  {
    title: "Figma",
    descr:
      "It is he who creates the framework of your site or application, and the fifth version will allow me to create a more SEO-optimized structure of your product",
    img: "/figma.png",
		bsh: '[box-shadow:0px_0px_74px_#fe42a7cc]'
  },
  {
    title: "Tailwind",
    descr:
      "It is he who creates the framework of your site or application, and the fifth version will allow me to create a more SEO-optimized structure of your product",
    img: "/tailwind.png",
		bsh: '[box-shadow:0px_0px_74px_#fe42a7cc]'
  },
  {
    title: "Shadcn",
    descr:
      "It is he who creates the framework of your site or application, and the fifth version will allow me to create a more SEO-optimized structure of your product",
    img: "/shadcn.jpeg",
		bsh: '[box-shadow:0px_0px_74px_#952cffcc]'
  },
];

export default function Skills() {
  return (
    <section className="container pb-[120px]">
      <div className="flex flex-col items-center">
        <TextWithCircle text="Skills" className="ml-0 before:left-0" />
        <Title text="What i use" className="m-auto mt-[10px]" />
      </div>
      <div className="mt-[60px] flex flex-wrap justify-between">
        {skills.map((skill) => (
          <Card
            key={skill.title}
            className={`my-[10px] max-w-[260px] rounded-[40px] border-[0.25px] border-[#ffffffb3] bg-[#030303] py-[30px] px-[20px] text-center text-[#ffffffed] ${skill.bsh}`}
          >
            <CardHeader className='p-0'>
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
        ))}
      </div>
    </section>
  );
}
