import { cn } from "@/shared/lib/tailwind-merge";

type TitleProps = {
  text: string;
  className?: string;
};

export function Title({ text, className }: TitleProps) {
  return (
    <div className="">
      <h2 className="text-[28px] font-bold leading-[60px] text-[#ffffffe3] md:text-[36px] md:leading-[60px]">
        {text}
      </h2>
      <div
        className={cn(
          `h-0 w-[60px] border-[3px] border-[#930196] border-[solid] md:mt-[10px]`,
          className,
        )}
      ></div>
    </div>
  );
}
