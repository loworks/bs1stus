/* eslint-disable react/jsx-key */

import { gsap } from "gsap";
import * as LibsUtils from "@/Libs/utils";
const ctx = gsap.context(() => {});

export const execute = () => {
  const isTouch = LibsUtils.Common.isTouchDevice();

  const value =
    (document.querySelector(".inner-content-area").clientHeight -
      window.innerHeight) *
    -1;

  ctx.add(() => {
    if (!isTouch) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".content-area",
            endTrigger: ".footer",
            start: "top-=150 top",
            end: "top-=100 bottom",
            pin: ".content-area",
            scrub: true,
          },
        })
        .to(".content-area", { y: value > 0 ? 0 : value - 150 });
    }
  });
};

export const cleanup = () => {
  ctx.revert();
};
