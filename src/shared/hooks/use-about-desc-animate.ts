"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MutableRefObject, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export const useAboutDescAnimate = (
  aboutRefs: MutableRefObject<(HTMLSpanElement | null)[]>,
) => {
  useEffect(() => {
    aboutRefs.current.forEach((ref, index) => {
      if (ref) {
        ScrollTrigger.create({
          trigger: ref,
          start: "top 95%",
          end: "top 20%",
          scrub: true,
          markers: true,
          onEnter: () =>
            gsap.to(ref, { opacity: 1, duration: 0.3, delay: index * 0.03 }), // Зменшена затримка та тривалість
          onLeaveBack: () => gsap.to(ref, { opacity: 0, duration: 0.3 }),
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [aboutRefs]);
};
