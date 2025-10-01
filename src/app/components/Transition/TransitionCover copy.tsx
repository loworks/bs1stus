"use client";
import { SmoothScrollbar } from "@/components/Transition";
import gsap from "gsap/dist/gsap";
import * as Transition from "@/components/Transition";
let dispatch: any;
let props: any;
let cloneNode: any;
let scrollTop: number = 0;
export function Execute(
  href: string,
  router: any,
  dispatch?: any,
  props?: object,
) {
  console.log("AAABBBABABABAB");
  return;
  props = props;
  dispatch = dispatch;

  const main: any = document.querySelector("main");
  scrollTop = main.scrollTop * -1;
  cloneNode = main.cloneNode(true);
  cloneNode.style.position = `absolute`;
  cloneNode.style.zIndex = 1;
  main.style.zIndex = 0;
  main.style.position = "relative";
  cloneNode.classList.add("clone");
  //scrollTop = SmoothScrollbar.getScrollTop() * -1;
  main.parentNode.insertBefore(cloneNode, main.nextSibling);
  cloneNode.scrollTop = main.scrollTop;

  //Transition.IndexScrollTrigger.cleanup();

  router.push(href, { scroll: false });

  //main.remove();
  if (dispatch) dispatch({ type: "TransitionExitStart" });

  gsap.timeline().set("main:not(.clone)", {
    "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  });

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
    .to({}, 0.1, {})
    .call(function () {
      //router.push(href);
      const newMain = document.querySelector("main:not(.clone)");
      console.log("newMain -- ", newMain);
    })

    .to("main:not(.clone)", 1.5, {
      "clip-path": "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
      ease: "expo.inOut",
    })
    .to({}, 1.5, {})
    .call(
      function () {
        //router.push(href);

        gsap.set("meta[name='theme-color']", {
          attr: { ["content"]: "#878145" },
        });
      },
      null,
      "-=.1",
    );
}
export function Enter(dispatch?: any): any {
  console.log("ENTER");

  // cloneNode.style.transform = `translateY(${scrollTop}px)`;
  Transition.SmoothScrollbar.setTop();

  // gsap.set(cloneNode, { y: 0 });
  const newMain: any = document.querySelector("main:not(.clone)");

  //gsap.set("meta[name='theme-color']", { attr: { ["content"]: "#878145" } });

  const color: string = newMain.dataset.color;
  gsap
    .timeline({
      onComplete: function () {
        if (dispatch) dispatch({ type: "TransitionExitComplete" });
        dispatch({ type: "TransitionEntryComplete" });
        cloneNode.remove();
        //ctx.revert();
        SmoothScrollbar.refresh();
      },
    })

    .set(newMain, {
      "clip-path": "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
      position: "relative",
      zIndex: 3,
      opacity: 1,
    })

    .to(newMain, 1, {
      "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "expo.in",
    })
    .to("meta[name='theme-color']", 0.5, { attr: { ["content"]: color } }, "<");
}
