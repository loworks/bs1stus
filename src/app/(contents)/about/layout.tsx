/* eslint-disable react-hooks/exhaustive-deps */
"use client";
/* eslint-disable react/jsx-key */
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";
import * as Utils from "@/components/utils";
import { useTransition } from "@/Libs/Transitions/TransitionContext";
import * as Transitions from "@/Libs/Transitions";
import * as Transition from "@/components/Transition";
import * as LibsUtils from "@/Libs/utils";
export default function ContentsLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  const { state, dispatch } = useTransition();
  const [height, width] = Utils.useWindowSize();

  const pathname = usePathname();
  useEffect(() => {
    if (state.transitionState === "exsitStart") {
      const isTouch = LibsUtils.Common.isTouchDevice();
      const isCategory: boolean = document
        .querySelector("html")
        .classList.contains("type-category");
    }
  }, [state.transitionState]);
  useEffect(() => {
    Utils.Site.setType();
    const cont = document.querySelector("html");
    const isCategory: boolean = document
      .querySelector("html")
      .classList.contains("type-category");

    if (!cont.classList.contains("init-loaded")) {
      Transition.InitTransition.Start().call(function () {
        Transition.HeaderTransition.HeaderScrollTrigger();
        Transition.InitTransition.Apper();
        Transition.CommonTransition.execute();
        if (isCategory) {
        } else {
        }
      });
    } else if (cont.classList.contains("now-transition")) {
      Transition.SmoothScrollbar.setTop();
      Transitions.Transition.getTransition().Enter(dispatch);
      Transition.CommonTransition.execute();
      Transition.HeaderTransition.HeaderScrollTrigger();
      if (isCategory) {
      } else {
      }
    } else {
      //For PopState
      Transition.SmoothScrollbar.setTop();
      Transition.PopStateTransition.Enter(dispatch);
      Transition.CommonTransition.execute();
      Transition.HeaderTransition.HeaderScrollTrigger();
      if (isCategory) {
      } else {
      }
    }

    return () => {
      if (isCategory) {
      } else {
      }
      Transition.SmoothScrollbar.refresh();
      Transition.HeaderTransition.restore();
      Transition.CommonTransition.revert();
    };
  }, [pathname]);
  useLayoutEffect(() => {
    //For Resize
    const isTouch = LibsUtils.Common.isTouchDevice();
    const cont = document.querySelector("html");
    const isCategory: boolean = document
      .querySelector("html")
      .classList.contains("type-category");

    if (
      cont.classList.contains("init-loaded") &&
      !cont.classList.contains("now-transition") &&
      cont.classList.contains("resize") &&
      !isTouch
    ) {
      if (isCategory) {
      } else {
      }
      cont.classList.remove("resize");
    }
  }, [height, width]);
  return <>{children}</>;
}
