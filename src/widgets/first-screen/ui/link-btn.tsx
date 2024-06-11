"use client";
import { cn } from "@/shared/lib/tailwind-merge";
import { Button } from "@/shared/ui/button";
import ScrollIntoView from "react-scroll-into-view";

type ButtonProps = {
  text: string;
  className?: string;
  href: string;
  targetBlank?: boolean;
};

export default function LinkBtn({ text, href }: ButtonProps) {
  return (
    <Button
      className={cn(
        `animate__animated animate__zoomIn main-gradient main-btn-hover item-center min-w-[135px] cursor-pointer rounded-[10px] px-[26px] py-[12px] text-[14px] font-bold text-white [box-shadow:2px_2px_20px_rgb(1,_0,_1)] [transition:all_500ms_ease-in-out]`,
      )}
    >
      <ScrollIntoView selector={href}>
        <span>{text}</span>
      </ScrollIntoView>
    </Button>
  );
}
