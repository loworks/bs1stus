import { gsap } from "gsap";
import * as LibsTransition from "@/Libs/Transitions";
import * as Transition from "./";
let init = true;
import SplitType from "split-type";
import * as Utils from "@/components/utils";
export const Start = (): GSAPTimeline => {
  Utils.Site.setDeviceType();

  const timeline: any = gsap.timeline();
  console.log("StartStartStartStartStart");
  const isIndex: boolean = document
    .querySelector("html")
    .classList.contains("category-index");

  timeline.add("elem");
  timeline.add("bg");
  if (isIndex) timeline.set(".index-header .logo-un svg", { y: 30 });
  if (isIndex) timeline.set(".index-header .logo-d svg", { y: 30 });

  timeline
    .to(
      ".initioal-loader .logo svg",
      1,
      {
        y: 30,
        transformOrigin: "left bottom",
        ease: "power2.inOut",
        stagger: 0.1,
      },
      "+=.5",
    )

    .call(
      function () {
        window.scrollTo(0, 0);
        Transition.SmoothScrollbar.setScroll();
        LibsTransition.Transition.setTransition(Transition.TransitionCover);
      },
      null,
      this,
      "<",
    );
  return timeline;
};

export const Apper = () => {
  console.log("ApperApperApperApper");
  const splits = [];
  const initalLoaderBg = document.querySelectorAll(".initioal-loader");
  const isIndex: boolean = document
    .querySelector("html")
    .classList.contains("category-index");
  const main: any = document.querySelector("main");
  const color: string = main.dataset.color;
  main.style.opacity = 1;
  const apperTimeline = gsap.timeline({
    onComplete: function () {
      if (splits.length > 1) {
        for (let i = 0; i < splits.length; i++) {
          const split = splits[i];
          if (split) split.revert();
        }
      }
    },
  });

  const animationElms = gsap.utils.toArray(".init-anim");
  animationElms.forEach((element: any, i: number) => {
    const animationType = element.dataset.animationType;
    const animationFrom = element.dataset.animationFrom
      ? JSON.parse(element.dataset.animationFrom)
      : { y: 100 };
    const targetElement = element.dataset.animationTarget
      ? element.dataset.animationTarget
      : element;
    if (animationType !== "tween") {
      let split: any;
      split = new SplitType(targetElement, {
        types: animationType,
      });
      splits[i] = split;
    }
    const typesArr = animationType.split(",");
    const target =
      animationType !== "tween" && typesArr.length > 1
        ? splits[i][typesArr[typesArr.length - 1]]
        : animationType !== "tween"
          ? splits[i][animationType]
          : element.dataset.animationTarget
            ? element.dataset.animationTarget
            : element;

    apperTimeline.set(target, animationFrom);
  });
  apperTimeline.to(
    initalLoaderBg,
    1.4,
    { height: 0, ease: "expo.inOut" },
    "-=.2",
  );

  apperTimeline.to(
    ".initioal-loader .logo svg",
    1.4,
    {
      y: 0,
      ease: "power3.inOut",

      stagger: {
        each: 0.06,
        from: "edges",
      },
    },
    "<",
  );

  animationElms.forEach((element: any, i: number) => {
    const animationType = element.dataset.animationType;
    const animationDuration = element.dataset.animationDuration
      ? Number(element.dataset.animationDuration)
      : 2;
    const animationDelay = element.dataset.animationDelay;
    const typesArr = animationType.split(",");
    const target =
      animationType !== "tween" && typesArr.length > 1
        ? splits[i][typesArr[typesArr.length - 1]]
        : animationType !== "tween"
          ? splits[i][animationType]
          : element.dataset.animationTarget
            ? element.dataset.animationTarget
            : element;

    const animationObj = element.dataset.animationTo
      ? JSON.parse(element.dataset.animationTo)
      : { y: 0, ease: "power4.out" };

    apperTimeline.to(target, animationDuration, animationObj, animationDelay);
  });

  apperTimeline
    .call(function () {
      /*document
				.querySelector("meta[name='theme-color']")
				.setAttribute("content", "#fefefe");*/
      const cont = document.querySelector("html");
      cont.classList.add("init-loaded");
      cont.classList.remove("init-load");
    })
    .to(
      "meta[name='theme-color']",
      0.5,
      { attr: { ["content"]: color } },
      "-=1.2,",
    );
};
