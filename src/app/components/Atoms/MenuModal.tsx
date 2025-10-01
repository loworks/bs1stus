"use client";

import gsap from "gsap/dist/gsap";
import HamburgerMenu from "./HamburgerMenu";
import * as Utils from "@/components/utils";
import { useTransition } from "@/Libs/Transitions/TransitionContext";
export default function MenuModal() {
  const { dispatch } = useTransition();
  const handleOpen = async () => {
    Utils.Site.addDisableScrollListener();
    Utils.Site.setCurrentBgColor();

    gsap.timeline().call(function () {
      if (dispatch) dispatch({ type: "TransitionMenuOpen" });

      gsap
        .timeline()
        .set(".overlay-menu", {
          display: "block",
          width: "100%",
          opacity: 1,
          "clip-path": "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
        })

        .to(
          ".overlay-menu ",
          0.75,
          {
            "clip-path": "polygon(70% 0%, 100% 0%, 100% 100%, 30% 100%)",
            ease: "expo.in",
          },
          "<",
        )
        .to(".overlay-menu ", 0.75, {
          "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "expo.out",
        })
        .to(
          "meta[name='theme-color']",
          0.75,
          { attr: { ["content"]: "#fefefe" } },
          "-=1.2",
        )
        .to("html", 0.75, { backgroundColor: "#fefefe" }, "<");
    });
    return;
  };

  return (
    <>
      <HamburgerMenu
        onClick={() => {
          if (!Utils.Site.isOpenMenu) handleOpen();
        }}
      />
    </>
  );
}
