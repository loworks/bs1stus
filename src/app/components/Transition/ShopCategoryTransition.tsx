/* eslint-disable react/jsx-key */

import { gsap } from "gsap";
import * as LibsUtils from "@/Libs/utils";
const ctx = gsap.context(() => {});

export const execute = () => {
  const isTouch = LibsUtils.Common.isTouchDevice();
  const productNameArr: string[] = ["bakery", "grocery", "merchandise"];

  ctx.add(() => {
    const pins = gsap.utils.toArray(".pin");
    const itemThumbH = ((window.innerWidth - 12 * 3 - 25 * 2) / 4) * (5 / 4);
    pins.forEach((pinItem: any, i: number) => {
      const productName = productNameArr[i];
      const next = `.${productNameArr[i + 1] ? productNameArr[i + 1] : "footer"}`;
      const prev = `${productNameArr[i - 1] ? productNameArr[i - 1] : productName + " a:first-child"}`;

      gsap.timeline({
        scrollTrigger: {
          trigger: pinItem,
          endTrigger: ".footer",
          start: "top center",
          end: "top-=100 top",
          pin: pinItem,

          scrub: true,
        },
      });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: `.${prev}`,

            start: i === 0 ? "top center" : `bottom-=${itemThumbH / 2} center`,
            toggleActions: "play none none reverse",
          },
        })
        .to(`.${productName}-title`, 0.2, { opacity: 1 });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: `${productName === "merchandise" ? `.${productName} a:last-child` : `.${productName}`}`,
            start: `bottom-=${itemThumbH / 2} center`,
            toggleActions: "play none none reverse",
          },
        })
        .to(`.${productName}-title`, 0.2, { opacity: 0 });
    });
  });
};

export const cleanup = () => {
  ctx.revert();
};
