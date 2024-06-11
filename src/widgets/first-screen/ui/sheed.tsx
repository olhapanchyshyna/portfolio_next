"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "@/shared/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { MediaLinks } from "../../../features/media-links";
import { navItems } from "../model/initial";
import { NavLink } from "./nav-link";

export default function Sheed() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger className="mr-[30px] mt-[30px] h-[35px] w-[35px] text-[#e6e9eb]">
        <HamburgerMenuIcon className="h-[35px] w-[35px]" />
      </SheetTrigger>
      <SheetContent
        onCloseAutoFocus={(e) => {
          e.preventDefault();
        }}
        side="left"
        className=" main-bg-color flex w-[230px] flex-col justify-between border-none px-[5px] md:w-[300px] md:px-[20px] xl:w-[350px]"
      >
        <SheetDescription className="animate__animated animate__fadeInLeft mx-[15px] mt-[150px] flex flex-col text-[20px] font-medium uppercase leading-[36px] text-[#fff] md:text-[24px] xl:text-[28px]">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              href={item.path}
              text={item.label}
              setIsSheetOpen={setIsSheetOpen}
            />
          ))}
        </SheetDescription>

        <div className="flex justify-evenly min-[900px]:hidden">
          <MediaLinks />
        </div>
      </SheetContent>
    </Sheet>
  );
}
