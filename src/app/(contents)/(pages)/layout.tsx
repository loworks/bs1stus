/* eslint-disable react-hooks/exhaustive-deps */
"use client";
/* eslint-disable react/jsx-key */
import { usePathname } from "next/navigation";
import { useEffect } from "react";
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
  const pathname = usePathname();
  useEffect(() => {
    if (state.transitionState === "exsitStart") {
      const isTouch = LibsUtils.Common.isTouchDevice();
    }
  }, [state.transitionState]);
  useEffect(() => {
    Utils.Site.setType();
    const cont = document.querySelector("html");

    if (!cont.classList.contains("init-loaded")) {
      Transition.InitTransition.Start().call(function () {
        Transition.HeaderTransition.HeaderScrollTrigger();
        Transition.InitTransition.Apper();
      });
    } else if (cont.classList.contains("now-transition")) {
      Transition.SmoothScrollbar.setTop();
      Transitions.Transition.getTransition().Enter(dispatch);
      Transition.CommonTransition.execute();
      Transition.HeaderTransition.HeaderScrollTrigger();
    } else {
      //For PopState
      Transition.SmoothScrollbar.setTop();
      Transition.PopStateTransition.Enter(dispatch);
      Transition.CommonTransition.execute();
      Transition.HeaderTransition.HeaderScrollTrigger();
    }

    return () => {
      Transition.SmoothScrollbar.refresh();
      Transition.HeaderTransition.restore();
      Transition.CommonTransition.revert();
    };
  }, [pathname]);

  return <>{children}</>;
}
