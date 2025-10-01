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

export default function IndexHeader() {
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
    <section className="index-header max-md:h-[calc(150vw+60px)]">
      <div
        className={
          "index-header-grid relative grid max-md:top-[60px] max-md:h-[150vw] md:mt-[100px] md:h-[calc(100vh-100px)] md:min-h-[900px]"
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
        <div className="img-cont relative col-[1/-1] items-center justify-center overflow-hidden bg-[#fffabc]">
          <div className="mx-auto max-md:relative max-md:w-[120vw] md:w-[80%]">
            <Image
              className={
                "scroll-anim absolute top-[5rem] z-20 object-contain max-md:left-[-10vw] max-md:h-[120vw] max-md:w-auto md:left-[0] md:h-full md:w-full"
              }
              data-animation-from='{"x":"-0", "y":"-0"}'
              data-animation-type="tween"
              data-animation-duration="1.4"
              data-animation-scrub="true"
              data-animation-to='{"x":"-10", "y":"-20","ease":"Circ.Out"}'
              data-animation-start="top top+=100"
              data-animation-end="bottom top"
              src="/hero-crisps.webp"
              alt="hero"
              width={1920}
              height={1784}
              priority={true}
            />
            <Image
              className={
                "scroll-anim absolute top-[8rem] z-10 object-contain max-md:h-[120vw] max-md:w-[auto] max-md:overflow-visible md:left-[2rem] md:h-full md:w-full"
              }
              data-animation-from='{"x":"-20", "y":"-10"}'
              data-animation-type="tween"
              data-animation-duration="1.4"
              data-animation-scrub="true"
              data-animation-to='{"x":"0", "y":"20","ease":"Circ.Out"}'
              data-animation-start="top top+=100"
              data-animation-end="bottom top"
              src="/hero-crisps-shadow.webp"
              alt="hero"
              width={1920}
              height={1813}
              priority={true}
            />
          </div>
          <div className="absolute grid h-full w-full items-center text-[#7a4d3c]">
            <div className="grid">
              <ul className="font-ob-nar-b col-[1/2] row-[1/2] flex animate-marquee items-center text-[7vw] font-bold leading-[85%] tracking-tight [&_li]:whitespace-nowrap">
                <li>
                  PACKED WITH <br />
                  DIETARY FIBER
                </li>
              </ul>
              <ul className="font-ob-nar-b col-[1/2] row-[1/2] flex animate-marquee2 items-center text-[7vw] font-bold leading-[85%] tracking-tight [&_li]:whitespace-nowrap">
                <li>
                  PACKED WITH <br />
                  DIETARY FIBER
                </li>
              </ul>
            </div>
            <div className="grid">
              <ul className="font-ob-nar-b col-[1/2] row-[1/2] flex animate-marqueereverse items-center text-[min(6.5vw,7vh)] font-bold leading-[85%] [&_li:last-child]:mr-[10vw] [&_li]:whitespace-nowrap">
                <li>
                  USDA CERTIFIED <br />
                  ORGANIC
                </li>
              </ul>
              <ul className="font-ob-nar-b col-[1/2] row-[1/2] flex animate-marquee2reverse items-center text-[min(6.5vw,7vh)] font-bold leading-[85%] [&_li:last-child]:mr-[10vw] [&_li]:whitespace-nowrap">
                <li>
                  USDA CERTIFIED <br />
                  ORGANIC
                </li>
              </ul>
            </div>
            <div className="grid">
              <ul className="font-ob-nar-b col-[1/2] row-[1/2] flex animate-marquee3 items-center text-[min(6vw,6.5vh)] font-bold leading-[85%] tracking-tight [&_li:last-child]:mr-[5vw] [&_li]:whitespace-nowrap">
                <li>
                  VEGAN
                  <br />
                  GLUTEN-FREE
                </li>
              </ul>

              <ul className="font-ob-nar-b col-[1/2] row-[1/2] flex animate-marquee4 items-center text-[min(6vw,6.5vh)] font-bold leading-[85%] tracking-tight [&_li:last-child]:mr-[5vw] [&_li]:whitespace-nowrap">
                <li>
                  VEGAN
                  <br />
                  GLUTEN-FREE
                </li>
              </ul>
            </div>
          </div>
          <div className="z-1000 relative grid h-full items-center">
            {deviceSize === null ? (
              <></>
            ) : (
              <AnimatedTextAlongPath
                className="ml-[-10%] w-[120%] overflow-visible [&_.path]:max-md:stroke-[14vw] [&_.path]:md:stroke-[2.4vw]"
                pathData="M609.28,258.48c-171.27,0-247.99-38.19-335.29-140.23C186.67,16.22,108.7-6.6,10.09,50.99"
                viewBox="0 0 609.28 278.48"
                baseDuration={30}
                kerningFactor={deviceSize === "lessPab" ? 2800 : 1500}
              >
                <div className="font-ob-nar-b font-bold uppercase leading-[100%] text-[#fffabe] max-md:text-[7vw] md:text-[5vw]">
                  {deviceSize === "lessPab" ? (
                    <>ORGANIC BROWNIE CRISPS</>
                  ) : (
                    <>ORGANIC BROWNIE CRISPS ORGANIC BROWNIE CRISPS </>
                  )}
                </div>
              </AnimatedTextAlongPath>
            )}
          </div>
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
