/* eslint-disable react-hooks/exhaustive-deps */
"use client";
/* eslint-disable react/jsx-key */
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";
import * as Utils from "@/components/utils";
import { useTransition } from "@/Libs/Transitions/TransitionContext";
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

      if (isTouch && !isCategory) {
        Transition.ShopPostTransition.killColorAnimation();
      }
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
        Transition.TransitionManager.excuteAppearAction("layout");
        Transition.CommonTransition.execute();

        if (isCategory) {
          Transition.ShopCategoryTransition.execute();
        } else {
          Transition.ShopPostTransition.execute();
        }
      });
    } else if (cont.classList.contains("now-transition")) {
      Transition.SmoothScrollbar.setTop();
      Transition.TransitionManager.excuteAppearAction("layout");
      //Transitions.Transition.getTransition().Enter(dispatch);
      Transition.CommonTransition.execute();
      Transition.HeaderTransition.HeaderScrollTrigger();
      if (isCategory) {
        Transition.ShopCategoryTransition.execute();
      } else {
        Transition.ShopPostTransition.execute();
      }
    } else {
      //For PopState
      Transition.SmoothScrollbar.setTop();
      Transition.PopStateTransition.Enter(dispatch);
      Transition.CommonTransition.execute();
      Transition.HeaderTransition.HeaderScrollTrigger();
      if (isCategory) {
        Transition.ShopCategoryTransition.execute();
      } else {
        Transition.ShopPostTransition.execute();
      }
    }

    return () => {
      Transition.SmoothScrollbar.refresh();
      Transition.HeaderTransition.restore();
      Transition.CommonTransition.revert();

      if (isCategory) {
        //  Transition.ShopCategoryTransition.cleanup();
      } else {
        Transition.ShopPostTransition.restore();
      }
    };
  }, [pathname]);
  useLayoutEffect(() => {
    //For Resize
    const cont = document.querySelector("html");
    const isCategory: boolean = cont.classList.contains("type-category");
    const isTouch = LibsUtils.Common.isTouchDevice();
    if (
      cont.classList.contains("init-loaded") &&
      !cont.classList.contains("now-transition") &&
      cont.classList.contains("resize") &&
      !isTouch
    ) {
      if (isCategory) {
        Transition.ShopCategoryTransition.cleanup();
        Transition.ShopCategoryTransition.execute();
      } else {
        Transition.ShopPostTransition.restore();
        Transition.ShopPostTransition.execute();
        cont.classList.remove("resize");
      }
    }
  }, [height, width]);
  return <>{children}</>;
}
