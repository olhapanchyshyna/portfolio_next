"use client";

import { CustomButton } from "@/features/custom-button";
import { useAboutDescAnimate } from "@/shared/hooks/use-about-desc-animate";
import Image from "next/image";
import { MutableRefObject, useRef } from "react";
import { TextWithCircle } from "../../../entities/text-with-circle";
import { Title } from "../../../entities/title";

export function AboutMe() {
  const spanWords = useRef<(HTMLSpanElement | null)[]>([]);
  spanWords.current = [];

  const des =
    "Im an Frontend  developer with over a 2 years of professional experience. My journey as a developer began in early 2022, and since then, I have been continuously expanding my skills and knowledge in the field. I am passionate about creating responsive and user-friendly websites, and I strive for excellence in every project I undertake. I am dedicated to staying up-to-date with the latest industry trends and technologies, ensuring that I deliver high-quality solutions to meet client requirements. I also live abroad, which provides constant access to the Internet and the ability to always be in touch without interruptions caused by power outages.";

  const createSpans = (
    text: string,
    spanWords: MutableRefObject<(HTMLSpanElement | null)[]>,
  ) =>
    text.split(/\s+/).map((word, index) => (
      <span
        key={word + index}
        ref={(el) => {
          spanWords.current[index] = el;
        }}
        className="inline-block opacity-0"
      >
        {word === "|" ? (
          <>
            {" "}
            <br />
            <br />
          </>
        ) : (
          <>{word} &nbsp;</>
        )}
      </span>
    ));

  const spans = createSpans(des, spanWords);

  useAboutDescAnimate(spanWords);

  return (
    <section
      id="aboutMe"
      className="aboutMe container flex flex-col items-center justify-between py-[50px] sm:py-[80px] lg:flex-row lg:items-start lg:py-[120px]"
    >
      <div className="mb-[20px] sm:mb-[40px] lg:hidden">
        <TextWithCircle text="About me" />
        <Title text="My name is Olha" />
      </div>
      <Image
        src="/about-me.jpg"
        alt="About me"
        width={400}
        height={590}
        className="h-[360px] w-[250px] rounded-[60px] brightness-[80%] filter [box-shadow:26px_30px_129px_0_#b621fe61,_-46px_-51px_60px_0_#f91fa145] sm:h-[430px] sm:w-[300px] sm:rounded-[80px] lg:h-[590px] lg:w-[400px]"
      />
      <div className="max-w-[600px] lg:ml-[40px]">
        <div className="mt-[10px] hidden flex-col lg:flex">
          <TextWithCircle text="About me" />
          <Title text="My name is Olha" />
        </div>

        <div className="descr mt-[20px] text-[14px] font-medium leading-[21px] text-[#ffffffe3] lg:text-[16px]">
          <p>{spans}</p>
        </div>

        <div className="mt-[50px] text-white lg:mt-[100px]">
          <CustomButton
            className="btn"
            text="Download Resume"
            href="/resume.pdf"
            targetBlank={true}
          />
        </div>
      </div>
    </section>
  );
}
