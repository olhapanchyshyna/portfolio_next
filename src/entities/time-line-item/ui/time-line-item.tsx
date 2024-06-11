"use client";

import { useEducationAnimate } from "@/shared/hooks/use-education-animate";

import Image from "next/image";
import { useRef } from "react";
import { skillsData } from "../model/initial";


export function TimeLine() {
  const firstColRefs = useRef<(HTMLDivElement | null)[]>([]);
  const secondColRefs = useRef<(HTMLDivElement | null)[]>([]);

  firstColRefs.current = [];
  secondColRefs.current = [];

  useEducationAnimate(firstColRefs);
  useEducationAnimate(secondColRefs);

  return (
    <div className="mt-[60px] flex flex-col items-center justify-between py-[0] pl-[50px] lg:flex-row lg:items-start">
      {skillsData.map((col, colIndex) => (
        <div key={colIndex}>
          <div className="education__list max-w-[300px] sm:max-w-[360px]">
            <div className="education__li-sibtitle">h</div>
            {col.column.map((item, itemIndex) => (
              <div
                key={itemIndex}
                ref={(el) => {
                  if (colIndex === 0) {
                    firstColRefs.current[itemIndex] = el;
                  }
                  if (colIndex === 1) {
                    secondColRefs.current[itemIndex] = el;
                  }
                }}
                className="mb-[50px]"
              >
                <div className="education__item_head">
                  <div className="education__sibtitle">
                    <Image
                      src="/education-icon.png"
                      width={16}
                      height={16}
                      alt=""
                      className="absolute mb-[0] mt-[6px] h-[25px] w-[25px] text-white"
                    />
                  </div>
                  <div>
                    <div className="text-[14px] font-bold leading-[21px] text-[rgba(255,_255,_255,_0.8901960784)]">
                      {item.title}
                    </div>
                    <div className="text-[12px] font-medium leading-[18px] text-[rgba(255,_255,_255,_0.8901960784)]">
                      {item.subtitle}
                    </div>
                  </div>
                </div>
                <div className="text-[14px] font-medium leading-[18px] text-[rgba(255,_255,_255,_0.8901960784)]">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
