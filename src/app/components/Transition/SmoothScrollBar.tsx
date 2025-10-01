/* eslint-disable react/jsx-key */
import SmoothScrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import * as Utils from "@/Libs/utils";

//import * as ReactScroll from "react-scroll";
let scrollElement: any;
let scrollBar: any = null;
export function setScroll() {
  const isTouch = Utils.Common.isTouchDevice();
  const size = Utils.Common.getDeviceSize();
  if (isTouch || size === "lessPab") {
    return;
  }
  const overscrollOptions = {
    enable: true,
    effect: "bounce",
    damping: 0.15,
    maxOverscroll: 150,
    glowColor: "#fff",
  };
  SmoothScrollbar.use(OverscrollPlugin);

  scrollBar = SmoothScrollbar.init(scrollElement, {
    // renderByPixels: false,
    damping: 0.1,
    delegateTo: document,
    plugins: {
      overscroll: { ...overscrollOptions },
    },
  });

  ScrollTrigger.scrollerProxy(scrollElement, {
    scrollTop(value) {
      if (arguments.length) {
        scrollBar.scrollTop = value;
      }

      return scrollBar && scrollBar.scrollTop ? scrollBar.scrollTop : 0;
    },
  });
  scrollBar.setPosition(0, 0);
  scrollBar.track.xAxis.element.remove();
  scrollBar.addListener(ScrollTrigger.update);

  ScrollTrigger.defaults({ scroller: scrollElement });
}
export function addListener(func: Function) {
  scrollBar.addListener((status: any) => {
    func && func(status);
    //  console.log(status.offset);
  });
}
export function getScrollTop(): number {
  if (scrollBar) {
    return scrollBar.scrollTop;
  } else {
    return window.scrollY;
  }
}

export function setTop() {
  //window.scrollTo(0, 0);

  if (scrollBar) {
    scrollBar.setPosition(0, 0);
  } else {
    // window.scrollTo(0, 0);
  }
}
export function refresh() {
  ScrollTrigger.refresh();
}
export function getScrollBar(): any {
  return scrollElement;
}
export function scrollTo(targetName: string) {
  const tl = gsap.timeline();
  tl.to({}, 0.5, {}, "<").call(function () {
    const target: any = document.querySelector(targetName);
    if (!scrollBar) {
      gsap.to(window, { duration: 1, scrollTo: targetName });
    } else {
      scrollBar.scrollTo(
        0,
        scrollBar.scrollTop + target.getBoundingClientRect().top,
        1200,
        {
          callback: () => console.log("done!"),
        },
      );
    }
  });
}
export function setPosition(x: number, y: number) {
  if (scrollBar) {
    //scrollBar.scrollTo(0, 0, 500, {});
    scrollBar.setPosition(x, y);
  } else {
    if (typeof window !== `undefined`) {
      window.scrollTo(x, y);
    }
  }

  /*
	Utils.Site.setType();
	const tl = gsap.timeline();
	tl.to({}, 0.5, {}, "<").call(function () {
		const cont: any = document.querySelector("html");
		cont.classList.remove("init-load");

	});*/
}
export function setScrollElement(element: any) {
  if (scrollBar) {
    //scrollBar.scrollTo(0, 0, 500, {});
    scrollBar.setPosition(0, 0);
  } else {
    if (typeof window !== `undefined`) {
      window.scrollTo(0, 0);
    }
  }
  scrollElement = element;
  /*
	Utils.Site.setType();
	const tl = gsap.timeline();
	tl.to({}, 0.5, {}, "<").call(function () {
		const cont: any = document.querySelector("html");
		cont.classList.remove("init-load");

	});*/
}
