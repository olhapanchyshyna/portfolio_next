import { cn } from "@/shared/lib/tailwind-merge";

type TextWithCircleProps = {
  text: string;
  className?: string;
};

export function TextWithCircle({
  text,
  className,
}: TextWithCircleProps) {
  return (
    <div className="">
      <h3
        className={cn(
          `subtitle text-[14px] before:absolute before:-left-[11px] before:-top-[6px] md:text-[16px]`,
          className,
        )}
      >
        {text}
      </h3>
    </div>
  );
}
