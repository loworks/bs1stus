import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
let headerTimeline: GSAPTimeline;
import SplitType from "split-type";
const ctx = gsap.context(() => {});
export const revert = () => {
  ctx.revert();
  ScrollTrigger.killAll();
};

export const execute = () => {
  ctx.add(() => {
    const splits = [];
    const animationElms = document.querySelectorAll(".scroll-anim");
    animationElms.forEach((element: any, i: number) => {
      const animationTrigger = element.dataset.animationTrigger
        ? element.dataset.animationTrigger
        : element;
      const animationEndtrigger = element.dataset.animationEndtrigger
        ? element.dataset.animationEndtrigger
        : element;
      const animationType = element.dataset.animationType;
      const animationPin =
        animationType === "pin" && !element.dataset.animationPin
          ? element
          : element.dataset.animationPin;
      const animationDuration = element.dataset.animationDuration
        ? Number(element.dataset.animationDuration)
        : 2;
      const animationDelay = element.dataset.animationDelay;
      const animationScrub =
        !element.dataset.animationScrub ||
        element.dataset.animationScrub === "false"
          ? false
          : true;
      const animationToggleactions = element.dataset.animationToggleactions
        ? element.dataset.animationToggleactions
        : "play none none reverse";
      const animationStart = element.dataset.animationStart
        ? element.dataset.animationStart
        : "top bottom";
      const animationEnd = element.dataset.animationEnd
        ? element.dataset.animationEnd
        : "bottom center";

      const animationFrom = element.dataset.animationFrom
        ? JSON.parse(element.dataset.animationFrom)
        : { y: 100 };
      const targetElement = element.dataset.animationTarget
        ? element.dataset.animationTarget
        : element;
      if (animationType !== "tween" && animationType !== "pin") {
        let split: any;
        split = new SplitType(targetElement, {
          types: animationType,
        });
        splits[i] = split;
      }

      const typesArr = animationType.split(",");
      const target =
        animationType !== "tween" &&
        animationType !== "pin" &&
        typesArr.length > 1
          ? splits[i][typesArr[typesArr.length - 1]]
          : animationType !== "tween" && animationType !== "pin"
            ? splits[i][animationType]
            : element.dataset.animationTarget
              ? element.dataset.animationTarget
              : element;
      if (animationType !== "pin") gsap.set(target, animationFrom);

      const animationObj = element.dataset.animationTo
        ? JSON.parse(element.dataset.animationTo)
        : { y: 0, ease: "power4.out" };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: animationTrigger,
          endTrigger: animationEndtrigger,
          start: animationStart,
          end: animationEnd,
          scrub: animationScrub,
          anticipatePin: 1,
          pin: animationPin,
          immediateRender: false,
          toggleActions: animationToggleactions,
        },
        force3D: true,
      });
      if (animationType !== "pin") {
        tl.to(target, animationDuration, animationObj, animationDelay);
      }
    });

    const images = document.querySelectorAll(".res-image");
    images.forEach((element) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom+=100 center",
            scrub: true,
            anticipatePin: 1,
            immediateRender: false,
          },
          force3D: true,
        })
        .set(element.querySelector("img"), { scale: 1, y: 60 })
        .to(element.querySelector("img"), { scale: 1.1, y: -60 });
    });
  });
};
