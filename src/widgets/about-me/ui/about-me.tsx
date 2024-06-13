"use client";

import { CustomButton } from "@/features/custom-button";
import { useAboutDescAnimate } from "@/shared/hooks/use-about-desc-animate";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { MutableRefObject, useRef } from "react";
import { TextWithCircle } from "../../../entities/text-with-circle";
import { Title } from "../../../entities/title";

gsap.registerPlugin(ScrollTrigger);

export function AboutMe() {
  const spanWords = useRef<(HTMLSpanElement | null)[]>([]);
  spanWords.current = [];

  const des =
    "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.";

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

        <div className="mt-[100px] text-white">
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
