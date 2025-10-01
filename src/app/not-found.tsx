"use client";
import { useLayoutEffect } from "react";
import * as Transition from "@/components/Transition";
import * as Utils from "@/components/utils";
import { useTransition } from "@/Libs/Transitions/TransitionContext";
import * as Transitions from "@/Libs/Transitions";

export default function NotFoundPage() {
  const { state, dispatch } = useTransition();

  useLayoutEffect(() => {
    Utils.Site.setType();
    const cont = document.querySelector("html"); // ← ここに移動

    if (cont && !cont.classList.contains("init-loaded")) {
      Transition.InitTransition.Start().call(function () {
        Transition.HeaderTransition.HeaderScrollTrigger();
        Transition.InitTransition.Apper();
      });
    } else {
      Transition.SmoothScrollbar.setTop();
      Transitions.Transition.getTransition().Enter(dispatch);
    }
  }, []);

  return (
    <main
      data-categoryname={"notfound"}
      data-categoryslug={"notfound"}
      data-type={"category"}
      data-color={"#fefefe"}
      className="flex min-h-[100vh] flex-col max-md:gap-[8rem] max-md:pt-[170px] md:gap-[12rem] md:pt-[120px]"
    >
      <section className="flex flex-col gap-[4rem] overflow-x-hidden max-md:mx-[16px] md:mx-[25px]">
        <h1 className="font-ob-nar-b whitespace-nowrap text-center text-[24vw] uppercase">
          Page not found
        </h1>
      </section>
    </main>
  );
}
