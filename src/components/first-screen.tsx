import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HamburgerMenuIcon, ShadowInnerIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import CustomButton from "./custom-button";
import MediaLinks from "./media-links";
import SidePanel from "./side-panel";
import TextWithCircle from "./text-with-circle";

export default function FirstScreen() {
  return (
    <section className="h-[100vh] bg-[url('/first-screen-bg.jpg')] bg-cover bg-no-repeat">
      <div className="flex justify-end">
        <Sheet>
          <SheetTrigger className="mr-[30px] mt-[30px] h-[35px] w-[35px] text-[#e6e9eb]">
            <HamburgerMenuIcon className="h-[35px] w-[35px]" />
          </SheetTrigger>
          <SheetContent
            side="left"
            className="main-bg-color flex w-[230px] flex-col justify-between border-none px-[5px] md:w-[300px] md:px-[20px] xl:w-[350px]"
          >
            <SheetDescription className="mx-[15px] mt-[150px] flex flex-col text-[20px] font-medium uppercase leading-[36px] text-[#fff] md:text-[24px] xl:text-[28px]">
              <Link
                href="/"
                className="mb-[10px] flex items-center hover:text-sky-300"
              >
                <ShadowInnerIcon className="mr-[10px]" />
                <div>About me</div>
              </Link>
              <Link
                href="/"
                className="mb-[10px] flex items-center hover:text-sky-300"
              >
                <ShadowInnerIcon className="mr-[10px]" />
                <div>My Skills</div>
              </Link>
              <Link
                href="/"
                className="mb-[10px] flex items-center hover:text-sky-300"
              >
                <ShadowInnerIcon className="mr-[10px]" />
                <div>My Portfolio</div>
              </Link>
              <Link
                href="/"
                className="mb-[10px] flex items-center hover:text-sky-300"
              >
                <ShadowInnerIcon className="mr-[10px]" />
                <div>My Educations</div>
              </Link>
            </SheetDescription>

            <div className="flex justify-evenly min-[900px]:hidden">
              <MediaLinks />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="m-auto flex w-[340px] flex-col pt-[150px] min-[500px]:w-[480px] min-[500px]:pt-[200px] md:w-[600px] xl:w-[870px]">
        <TextWithCircle text="My name is Olha Panchyshyna" />
        <h1 className="mb-[60px] mt-[10px] text-[60px] font-bold leading-[70px] text-[rgba(255,_255,_255,_0.8901960784)] [text-shadow:#930196_5px_5px] min-[500px]:text-center md:text-[80px] md:leading-[90px] xl:mt-0 xl:text-[115px] xl:leading-[110px]">
          I&apos;m a Frontend developer
        </h1>

        <div className="m-auto flex w-[330px] justify-between md:w-[400px] xl:w-[500px]">
          <CustomButton text="Portfolio" href="/" />
          <CustomButton text="About me" href="/" />
        </div>
      </div>

      <SidePanel />
    </section>
  );
}
