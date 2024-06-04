import { cn } from '@/lib/utils'

type TextWithCircleProps = {
  text: string;
  className?: string;
};

export default function TextWithCircle({
  text,
  className,
}: TextWithCircleProps) {
  return (
    <div className="">
      <h3 className={cn(`subtitle text-[14px] md:text-[16px] before:absolute before:-top-[6px] before:-left-[11px]`, className)}>
        {text}
      </h3>
    </div>
  );
}
