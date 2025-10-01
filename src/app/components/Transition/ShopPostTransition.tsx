import * as Utils from "@/Libs/utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ctx = gsap.context(() => {});
const ctxColor = gsap.context(() => {});
export const restore = () => {
  ctx.revert();
};
export const killColorAnimation = () => {
  ctxColor.kill();
};
export const execute = () => {
  const isTouch = Utils.Common.isTouchDevice();
  const cartNumBg = document.querySelector(".cart-num-bg");

  if (isTouch) {
    ctxColor.add(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".product-description",
            start: "top-=5 top",
            end: "top+=15 top",

            scrub: true,
            anticipatePin: 1,
            immediateRender: false,
          },
          force3D: true,
        })
        .to(
          "meta[name='theme-color']",
          2,
          { attr: { ["content"]: "#fefefe" } },
          "<",
        );
    });
    ctx.add(() => {
      gsap.timeline();

      const colorTimeline = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".product-description",
            start: "top-=25 top",
            end: "top top",

            scrub: true,
            anticipatePin: 1,
            immediateRender: false,
          },
          force3D: true,
        })

        .to(
          ".global-nav ul",
          0.4,
          {
            color: "#000",
            ease: "power2.inOut",
          },
          "<",
        )
        .to(
          "header h1 svg",
          0.4,
          {
            fill: "#000",
            ease: "power2.inOut",
          },
          "<",
        )
        .to(
          ".hm-menu svg",
          0.4,
          {
            fill: "#000",
            ease: "power2.inOut",
          },
          "<",
        );

      if (cartNumBg) {
        colorTimeline
          .to(
            ".cart-num-bg",
            0.4,
            {
              backgroundColor: "#fefefe",
              ease: "power2.inOut",
            },
            "<",
          )
          .to(
            ".cart-num",
            0.4,
            {
              color: "#000",
              ease: "power2.inOut",
            },
            "<",
          );
      }
    });
  } else {
    ctx.add(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".product-images",
            start: "bottom top",

            scrub: true,
          },
        })
        .to(
          "header h1 svg",
          0.4,
          {
            fill: "#000",
            ease: "power2.inOut",
          },
          "<",
        );
      const addButton = document.querySelector(".add-cart-button");
      const varient = document.querySelector(".varient");
      const productDescriptionH = document.querySelector(
        ".product-description",
      ).clientHeight;
      const getValue = () => {
        const value =
          (document.querySelector(".product-description-inner").clientHeight +
            varient.clientHeight +
            128 +
            32 -
            productDescriptionH) *
          -1;
        return value;
      };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".product-description",
          endTrigger: ".product-images",
          start: "top top",
          end: "bottom bottom",
          pin: ".product-description",
          invalidateOnRefresh: true,
          scrub: true,
        },
      });
      console.log(
        "value -- ",

        document.querySelector(".product-description-inner").clientHeight,
        window.innerHeight - addButton.clientHeight,
      );
      if (getValue() < 0) {
        tl.to(".product-description", { y: getValue() });
      }
      let pinned = gsap.utils.toArray(".product-pin");

      pinned.forEach((element: any) => {
        ScrollTrigger.create({
          trigger: "main",
          endTrigger: ".product-images",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          invalidateOnRefresh: true,
          pin: element,
        });
      });
    });
  }
  ctx.add(() => {
    const productNameArr: string[] = ["bakery", "grocery", "merchandise"];
    const itemThumbH = ((window.innerWidth - 12 * 3 - 25 * 2) / 4) * (5 / 4);
    const pins = gsap.utils.toArray(".pin");
    pins.forEach((pinItem: any, i: number) => {
      const productName = productNameArr[i];
      const next = `.${productNameArr[i + 1] ? productNameArr[i + 1] : "footer"}`;
      const prev = `${productNameArr[i - 1] ? productNameArr[i - 1] : productName + " a:first-child"}`;
      if (!isTouch) {
        gsap.timeline({
          scrollTrigger: {
            trigger: pinItem,
            endTrigger: ".footer",
            start: "top center",
            end: "top-=100 top",
            pin: pinItem,

            scrub: true,
          },
        });
      }
      gsap
        .timeline({
          scrollTrigger: {
            trigger: `.${prev}`,

            start: i === 0 ? "top center" : `bottom-=${itemThumbH / 2} center`,
            toggleActions: "play none none reverse",
          },
        })
        .to(`.${productName}-title`, 0.2, { opacity: 1 });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: `${productName === "merchandise" ? `.${productName} a:last-child` : `.${productName}`}`,
            start: `bottom-=${itemThumbH / 2} center`,
            // start: `${productName === "ingredients" ? "bottom-=1000 center" : "bottom center"}`,
            toggleActions: "play none none reverse",
          },
        })
        .to(`.${productName}-title`, 0.2, { opacity: 0 });
    });
  });
};
