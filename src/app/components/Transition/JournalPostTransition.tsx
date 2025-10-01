/* eslint-disable react/jsx-key */

import { gsap } from "gsap";
import * as LibsUtils from "@/Libs/utils";
const ctx = gsap.context(() => {});

export const execute = () => {
  const isTouch = LibsUtils.Common.isTouchDevice();
  const windowH = window.innerHeight - 170;
  const leftH = document.querySelector(".inner-content-area").clientHeight;
  const rightH = document.querySelector(".inner-content-area-r").clientHeight;
  if (windowH > leftH && windowH > rightH) return;
  const pagingAreaH = document.querySelector(".paging-area").clientHeight;
  const key: string = leftH < rightH ? "" : "-r";

  const value =
    (document.querySelector(".inner-content-area" + key).clientHeight -
      windowH) *
      -1 -
    pagingAreaH;

  //console.log(leftH, rightH, windowH, key, value);

  ctx.add(() => {
    if (!isTouch) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".content-area" + key,
            endTrigger: ".footer",
            start: "top-=150 top",
            end: "top bottom",
            pin: ".content-area" + key,
            scrub: true,
          },
        })
        .to(".content-area" + key, {
          y: value > 0 ? 0 : value,
        });
    }
  });
};

export const cleanup = () => {
  ctx.revert();
};
