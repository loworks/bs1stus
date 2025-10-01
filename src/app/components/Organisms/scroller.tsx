"use client";

import { useEffect, useRef } from "react";

import * as Transition from "../Transition";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

import { gsap } from "gsap";

export default function Scroller(props: React.ComponentProps<"div">) {
  let scrollContent = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // gsap.registerPlugin(Observer);
    // gsap.defaults({ ease: "none" });
    //gsap.config({ force3D: true });

    const scrollElement = scrollContent.current;

    let scrollBar: any = null;
    if (scrollElement) {
      Transition.SmoothScrollbar.setScrollElement(scrollElement);
    }

    return () => {
      if (scrollBar) {
        scrollBar.destroy();
        scrollBar = null;
      }
    };
  }, []);

  return (
    <>
      <div className={`scrollcont`} data-scrollbar ref={scrollContent}>
        {props.children}
      </div>
    </>
  );
}
