/* eslint-disable react/jsx-key */

import { gsap } from "gsap";
import * as LibsUtils from "@/Libs/utils";
import SplitType from "split-type";

const ctx = gsap.context(() => {});

export const execute = () => {
  const isTouch = LibsUtils.Common.isTouchDevice();

  ctx.add(() => {
    const headerElement: any = document.querySelector(".service-header h1");
    if (!headerElement) return;
    const descElement: any = document.querySelector(".service-description");
    const button: any = document.querySelector(".wh-header-button");
    const headerH = headerElement.clientHeight;

    if (!isTouch) {
      gsap.timeline({
        scrollTrigger: {
          trigger: ".service-header h1",
          start: "top center",
          end: "bottom center",
          pin: ".service-description-cont",
        },
      });
    } else {
      gsap.set(".next-cont", {
        marginTop:
          headerH + descElement.clientHeight + button.clientHeight + 150,
      });
    }
    let split = SplitType.create(".service-description", {
      types: "lines,words",
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".service-header h1",
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
          scrub: true,
        },
      })
      .to(".service-description", { opacity: 1 });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".service-description",
          start: "bottom bottom",
          toggleActions: "play none none reverse",
        },
      })
      // .to(".service-description", { opacity: 0.2 })
      .fromTo(
        split.words,
        1,
        { y: 20 },
        {
          y: 0,
          ease: "power3.out",
          stagger: {
            each: 0.005,
            from: "random",
          },
        },
        "<",
      );
  });
};

export const cleanup = () => {
  ctx.revert();
};
