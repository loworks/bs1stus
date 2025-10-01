"use client";

import gsap from "gsap/dist/gsap";
let dispatch: any;
let props: any;
let ctx: any;
export function Execute(
  href: string,
  router: any,
  dispatch?: any,
  props?: object,
) {
  props = props;
  dispatch = dispatch;

  ctx = gsap.context(() => {
    gsap
      .timeline({ paused: true })
      .set(".initioal-loader", {
        "clip-path": "polygon(0 0, 100% 0, 100% 0%, 0 0%)",
      })
      .to(".initioal-loader", 1, {
        "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        ease: "expo.inOut",
      })
      .to(
        "main",
        1,
        {
          y: 150,

          ease: "expo.inOut",
        },
        "<",
      )
      .call(function () {
        router.push(href);

        dispatch({ type: "TransitionExitComplete" });
      })
      .restart();
  });

  dispatch({ type: "TransitionExitStart" });
}
export function Enter(dispatch?: any): any {
  const initalLoaderBg = document.querySelectorAll(".initioal-loader");
  ctx.add(() => {
    gsap
      .timeline({
        onComplete: function () {
          ctx.revert();
        },
      })

      .set("main", { y: -150 })

      .to(".initioal-loader", 1, {
        "clip-path": "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
        ease: "expo.inOut",
      })
      .to(
        "main",
        1,
        {
          y: 0,
          ease: "Circ.inOut",
        },
        "<",
      )
      .call(function () {
        dispatch({ type: "TransitionEntryComplete" });
      });
  });

  return ctx;
}
