import { cn } from "@/lib/utils";

type TitleProps = {
  text: string;
  className?: string;
};

export default function Title({ text, className }: TitleProps) {
  return (
    <div className="">
      <h2 className='font-bold text-[28px] leading-[60px] md:text-[36px] md:leading-[60px] text-[#ffffffe3]'>{text}</h2>
      <div
        className={cn(
          `w-[60px] h-0 border-[3px] border-[solid] border-[#930196] md:mt-[10px]`,
          className,
        )}
      ></div>
    </div>
  );
}
