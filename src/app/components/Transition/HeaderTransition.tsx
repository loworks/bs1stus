import * as Utils from "@/Libs/utils";
import { gsap } from "gsap";
let headerTimeline: GSAPTimeline;
let ctx = gsap.context(() => {});
export const restore = () => {
  ctx.revert();
  ctx = gsap.context(() => {});
};
export const HeaderScrollTrigger = () => {
  const isTouch = Utils.Common.isTouchDevice();
  const deviceSize = Utils.Common.getDeviceSize();
  if (isTouch || deviceSize === "lessPab") {
    ctx.add(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".footer",
            start: "top-=200 top",
            end: "top-=25 top",
            scrub: true,
            anticipatePin: 1,
            immediateRender: false,
          },
          force3D: true,
        })
        .to(
          "header",
          0.4,
          {
            opacity: 0,
            ease: "power2.inOut",
          },
          "<",
        );
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".footer",
            start: "top-=5 bottom",
            end: "top+=15 bottom",
            //toggleActions: "play none none reverse",
            scrub: true,
            anticipatePin: 1,
            immediateRender: false,
          },
          force3D: true,
        })
        .to("html", 2, { backgroundColor: "#fefefe" }, "<");
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".footer",
            start: "top-=25 top",
            end: "top top",
            scrub: true,
            anticipatePin: 1,
            immediateRender: false,
          },
          force3D: true,
        })
        .to(
          "meta[name='theme-color']",
          1,
          { attr: { ["content"]: "#fefefe" } },
          "<",
        );
      const isIndex: boolean = document
        .querySelector("html")
        .classList.contains("category-index");
    });
    return;
  }

  ctx.add(() => {
    gsap.timeline({
      scrollTrigger: {
        id: "trigger",
        trigger: "header",
        endTrigger: ".footer",
        start: "top top",
        end: "top-=100 top",
        scrub: true,
        pin: "header",
      },
    });
  });
};
