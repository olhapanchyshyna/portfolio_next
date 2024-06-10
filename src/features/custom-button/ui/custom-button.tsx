import { cn } from "@/shared/lib/tailwind-merge";
import Link from "next/link";
import { Button } from "@/shared/ui/button";

type ButtonProps = {
  text: string;
  className?: string;
  href: string;
  targetBlank?: boolean;
};

export function CustomButton({ text, className, href, targetBlank }: ButtonProps) {
  return (
    <Button
      className={cn(
        `main-gradient main-btn-hover min-w-[135px] rounded-[10px] px-[26px] py-[12px] text-[14px] font-bold text-white [box-shadow:2px_2px_20px_rgb(1,_0,_1)] [transition:all_500ms_ease-in-out]`,
        className,
      )}
    >
      <Link href={href} target={targetBlank ? '_blank' : '' }>{text}</Link>
    </Button>
  );
}
