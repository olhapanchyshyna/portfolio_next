"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MutableRefObject, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export const useEducationAnimate = (
  educationRefs: MutableRefObject<(HTMLDivElement | null)[]>,
) => {
  useEffect(() => {
    educationRefs.current.forEach((ref, index) => {
      if (ref) {
        const initialX = index % 2 === 0 ? 200 : -200; // Четные индексы справа, нечетные слева
        gsap.set(ref, { x: initialX, opacity: 0 });

        ScrollTrigger.create({
          trigger: ref,
          start: "top 85%",
          end: "top 20%",
          scrub: true,
					onEnter: () => gsap.to(ref, { x: 0, opacity: 1, duration: 1 }),
          onLeaveBack: () => gsap.to(ref, { x: initialX, opacity: 0, duration: 1 }), 
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [educationRefs]);
};
