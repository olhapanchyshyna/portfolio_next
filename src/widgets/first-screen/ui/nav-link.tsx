"use client";

import { ShadowInnerIcon } from "@radix-ui/react-icons";
import { Dispatch, SetStateAction } from "react";
import ScrollIntoView from "react-scroll-into-view";

type NavLinkProps = {
  href: string;
  text: string;
  setIsSheetOpen: Dispatch<SetStateAction<boolean>>;
};

export const NavLink = ({ href, text, setIsSheetOpen }: NavLinkProps) => {
  return (
    <ScrollIntoView
      selector={href}
      className="mb-[10px] flex cursor-pointer items-center hover:text-sky-300"
      onClick={() => setIsSheetOpen(false)}
    >
      <ShadowInnerIcon className="mr-[10px]" />
      <span>{text}</span>
    </ScrollIntoView>
  );
};
