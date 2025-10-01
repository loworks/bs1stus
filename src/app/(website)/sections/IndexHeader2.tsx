/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useState } from "react";
import { useTransition } from "@/Libs/Transitions/TransitionContext";
import Image from "next/image";
import * as Utils from "@/components/utils";
import { useDeviceSize } from "@/components/Context/DeviceSizeProvider";

import * as Transition from "@/components/Transition";
import * as Transitions from "@/Libs/Transitions";
import * as LibsUtils from "@/Libs/utils";
import { AnimatedTextAlongPath } from "@/components/Modules";

export default function IndexHeader2() {
  const { state, dispatch } = useTransition();
  const [height, width] = Utils.useWindowSize();
  const deviceSize = useDeviceSize();

  useEffect(() => {
    if (state.transitionState === "exsitStart") {
      const isTouch = LibsUtils.Common.isTouchDevice();
      if (isTouch) {
        Transition.IndexScrollTrigger.killColorAnimation();
      }
    }
  }, [state.transitionState]);

  useEffect(() => {
    Utils.Site.setType();

    const cont = document.querySelector("html");

    if (!cont.classList.contains("init-loaded")) {
      //For Direct
      Transition.InitTransition.Start().call(function () {
        Transition.IndexScrollTrigger.IndexInitScrollTrigger();
        Transition.HeaderTransition.HeaderScrollTrigger();
        Transition.CommonTransition.execute();
        Transition.InitTransition.Apper();
      });
    } else if (cont.classList.contains("now-transition")) {
      //For From Other Pages
      Transition.SmoothScrollbar.setTop();
      Transitions.Transition.getTransition().Enter(dispatch);
      Transition.CommonTransition.execute();
      Transition.IndexScrollTrigger.IndexInitScrollTrigger();
      Transition.HeaderTransition.HeaderScrollTrigger();
    } else {
      //For PopState

      Transition.SmoothScrollbar.setTop();
      Transition.PopStateTransition.Enter(dispatch);
      Transition.IndexScrollTrigger.IndexInitScrollTrigger();
      Transition.CommonTransition.execute();
      Transition.HeaderTransition.HeaderScrollTrigger();
    }

    return () => {
      // cancel the request before component unmounts
      Transition.IndexScrollTrigger.cleanup();
      Transition.CommonTransition.revert();
      Transition.SmoothScrollbar.refresh();
      Transition.HeaderTransition.restore();
    };
  }, []);
  useEffect(() => {
    //For Resize
    const isTouch = LibsUtils.Common.isTouchDevice();
    const cont = document.querySelector("html");
    if (
      cont.classList.contains("init-loaded") &&
      !cont.classList.contains("now-transition") &&
      cont.classList.contains("resize") &&
      !isTouch
    ) {
      Transition.IndexScrollTrigger.cleanup();
      Transition.IndexScrollTrigger.IndexInitScrollTrigger();
      cont.classList.remove("resize");
    }
  }, [height, width]);
  return (
    <section className="index-header max-md:pb-[20vw]">
      <div
        className={
          "index-header-grid relative grid max-md:top-[60px] md:mt-[100px]"
        }
      >
        <div className="absolute z-[10] grid w-full overflow-hidden">
          <ul className="col-[1/2] row-[1/2] flex animate-marqueereverse items-center max-md:w-[200vw]">
            <li>
              <Image
                className={""}
                src="/line.jpg"
                alt="hero"
                width={2777}
                height={1600}
                priority={true}
              />
            </li>
          </ul>
          <ul className="col-[1/2] row-[1/2] flex animate-marquee2reverse items-center max-md:w-[200vw]">
            <li>
              <Image
                className={""}
                src="/line.jpg"
                alt="hero"
                width={2777}
                height={1600}
                priority={true}
              />
            </li>
          </ul>
        </div>
        <Transitions.TransitionLink
          href="/shop/"
          className="pointer-events-auto"
        >
          <video
            className="inset-0 z-0 col-[1/2] row-[1/2] h-full w-full object-cover portrait:hidden"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/zen-anim-cover.jpg" // fallback画像
          >
            <source src="/video-file.webm" type="video/webm" />
            <source src="/zen-animation.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video
            className="inset-0 z-0 col-[1/2] row-[1/2] h-full w-full object-cover landscape:hidden"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/zen-anim-poster-sp.jpg" // fallback画像
          >
            <source src="/video-file.webm" type="video/webm" />
            <source src="/zen-anim-3-4.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Transitions.TransitionLink>
        <div className="absolute bottom-[0px] left-0 z-[10] grid w-full translate-y-[100%] overflow-hidden">
          <ul className="col-[1/2] row-[1/2] flex animate-marquee items-center max-md:w-[200vw]">
            <li>
              <Image
                className={""}
                src="/line.jpg"
                alt="hero"
                width={2777}
                height={1600}
                priority={true}
              />
            </li>
          </ul>
          <ul className="col-[1/2] row-[1/2] flex animate-marquee2 items-center max-md:w-[200vw]">
            <li>
              <Image
                className={""}
                src="/line.jpg"
                alt="hero"
                width={2777}
                height={1600}
                priority={true}
              />
            </li>
          </ul>
        </div>
      </div>
      {/*
      <div className="">
        <AnimatedElementsAlongPath className="w-full [&_.path]:stroke-[30px]">
          <div className="h-10 w-3 bg-[#f00]"></div>
          <div className="h-10 w-3 bg-[#f00]"></div>
          <div className="h-10 w-3 bg-[#f00]"></div>
          <div className="h-10 w-3 bg-[#f00]"></div>
          <div className="h-10 w-3 bg-[#f00]"></div>
          <div className="h-10 w-3 bg-[#f00]"></div>
        </AnimatedElementsAlongPath>
      </div>*/}
    </section>
  );
}
