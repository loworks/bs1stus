"use client";
import { SmoothScrollbar } from "@/components/Transition";
import gsap from "gsap/dist/gsap";
let props: any;
import * as LibsUtils from "@/Libs/utils";

const isTouch = LibsUtils.Common.isTouchDevice();

export function Enter(dispatch?: any): any {
  console.log("EnterEnterEnterEnterEnter");
  const cont = document.querySelector("html");

  if (cont.classList.contains("on-menu")) {
    gsap.timeline().set("main", { y: -500 }).to(
      "main",
      4,
      {
        y: 0,
        ease: "Circ.inOut",
      },
      "<",
    );

    return;
  }
  const color: string = document.querySelector("main").dataset.color;
  gsap
    .timeline({
      onComplete: function () {
        dispatch({ type: "TransitionEntryComplete" });
        cont.classList.remove("now-transition");
        SmoothScrollbar.refresh();
      },
    })

    .to({}, 0.5, {});

  gsap
    .timeline()

    .to({}, 0.5, {})
    .to("meta[name='theme-color']", 0.5, { attr: { ["content"]: color } })
    .to("html", 0.5, { backgroundColor: "#fefefe" }, "<")
    .set(".initioal-loader ", {
      "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);",
    });
}
