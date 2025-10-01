"use client";
import SplitType from "split-type";
import { SmoothScrollbar } from "@/components/Transition";
import gsap from "gsap/dist/gsap";
let props: any;
import * as LibsUtils from "@/Libs/utils";
import * as Utils from "@/components/utils";

const isTouch = LibsUtils.Common.isTouchDevice();

export function Execute(
  href: string,
  router: any,
  dispatch?: any,
  props?: object,
) {
  props = props;
  dispatch = dispatch;
  const cont = document.querySelector("html");
  if (
    cont.classList.contains("now-transition") ||
    !cont.classList.contains("init-loaded")
  ) {
    return false;
  }

  cont.classList.add("now-transition");
  if (dispatch) dispatch({ type: "TransitionExitStart" });
  const type = props ? props["data-type"] : null;
  const color: any =
    props && props["data-poductcategory"]
      ? Utils.Site.getColorByCategory(props["data-poductcategory"])
      : { text: "#c8ff01", bg: "#ede589" };
  if (isTouch) {
    gsap
      .timeline()
      .to({}, 0.25, {})
      .to("meta[name='theme-color']", 0.5, {
        attr: { ["content"]: color.bg },
      })
      .to("html", 0.5, { backgroundColor: color.bg }, "<");
  }

  gsap
    .timeline()
    .set(".initioal-loader ", {
      "clip-path": "polygon(0 99%, 100% 99%, 100% 100%, 0% 100%)",
    })
    .set(".initioal-loader", {
      height: "100%",
    })
    .set(".initioal-loader svg", {
      fill: color.text,
      y: 100,
    })
    .set(".initioal-loader .bg", {
      backgroundColor: color.bg,
    })
    .set(".initioal-loader .logo svg", { y: 135 });
  /*.to(
				"main",
				1,
				{
					y: 150,

					ease: "expo.inOut",
				},
				"<"
			);*/

  gsap
    .timeline()

    /* .to(
      ".initioal-loader ",
      0.5,
      {
        "clip-path": "polygon(70% 0%, 100% 0%, 100% 100%, 30% 100%)",
        ease: "expo.in",
      },
      "<",
    )*/
    .to(".initioal-loader ", 0.75, {
      "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power4.inOut",
    })
    .to(
      ".initioal-loader .logo svg",
      0.75,
      {
        y: 30,
        transformOrigin: "left bottom",
        ease: "power3.Out",
        stagger: 0.1,
      },
      "<",
    )

    .call(function () {
      router.push(href, { scroll: true });
      //const cont = document.querySelector("html");
      //cont.scrollTo(0, 1);
      if (dispatch) dispatch({ type: "TransitionExitComplete" });

      /*gsap.set("meta[name='theme-color']", {
        attr: { ["content"]: "#878145" },
      });*/
    });
}
export function Enter(dispatch?: any): any {
  const cont = document.querySelector("html");
  const splits = [];
  if (cont.classList.contains("on-menu")) {
    //gsap.set("meta[name='theme-color']", { attr: { ["content"]: "#878145" } });
    gsap.timeline().set("main", { y: -150 }).to(
      "main",
      1,
      {
        y: 0,
        ease: "Circ.inOut",
      },
      "<",
    );

    return;
  }
  const color: string = document.querySelector("main").dataset.color;
  const apperTimeline = gsap.timeline({
    onComplete: function () {
      dispatch({ type: "TransitionEntryComplete" });
      cont.classList.remove("now-transition");
      SmoothScrollbar.refresh();
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
  apperTimeline
    .set(".initioal-loader ", {
      "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);",
    })
    /*.to(".initioal-loader ", 1, {
      "clip-path": "polygon(0% 0%, 30% 0%, 70% 100%, 0% 100%)",
      ease: "expo.in",
    })*/
    .to(".initioal-loader ", 1.4, {
      "clip-path": "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      ease: "power4.inOut",
    })
    .to(
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

  gsap
    .timeline()
    //.set("meta[name='theme-color']", { attr: { ["content"]: "#878145" } })
    .to({}, 0.5, {})
    .to("meta[name='theme-color']", 0.5, { attr: { ["content"]: color } })
    .to("html", 0.5, { backgroundColor: "#fefefe" }, "<");
}
