/* eslint-disable react/jsx-key */

import { gsap } from "gsap";
import SplitType from "split-type";
import * as Utils from "@/Libs/utils";

const ctx = gsap.context(() => {});
const ctxColor = gsap.context(() => {});

export const IndexInitScrollTrigger = () => {
  console.log("IndexInitScrollTrigger");
  IndexAnimation();
};
export const killColorAnimation = () => {
  ctxColor.kill();
};
export const cleanup = () => {
  console.log("Index - Crean Up");

  //IndexAboutCleanup();
  //IndexCoffeeCleanup();
  //ctx.kill(true);
  ctx.revert();
};

const IndexAnimation = () => {
  console.log("IndexAnimation");
  const isTouch = Utils.Common.isTouchDevice();
  const deviceSize = Utils.Common.getDeviceSize();
  const cartNumBg = document.querySelector(".cart-num-bg");
  ////////////////////////////////////////////////////////////////////////////////////////
  //For Touch Device
  ////////////////////////////////////////////////////////////////////////////////////////
  /*const test = gsap.timeline({
    scrollTrigger: {
      trigger: ".eyes",

      start: "top-=150 top",
      end: "+=400",
      invalidateOnRefresh: true,
      scrub: true,
    },

    ease: "power2.inOut",
  });
  EyeTransition(test);

 */
  if (deviceSize === "lessPab") {
    ctxColor.add(() => {
      //  IndexAboutTransitionSp();
      // IndexCoffeeTransitionSp();
    });
  } else {
    ctx.add(() => {
      //  IndexAboutTransition();
      // IndexCoffeeTransition();
    });
  }
  return;
  if (isTouch || deviceSize === "lessPab") {
    ctxColor.add(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".index-header",
            start: "bottom-=5 top",
            end: "bottom+=15 top",
            //toggleActions: "play none none reverse",
            scrub: true,
            anticipatePin: 1,
            immediateRender: false,
          },
          force3D: true,
        })
        .to(
          "meta[name='theme-color']",
          2,
          { attr: { ["content"]: "#878145" } },
          "<",
        );
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".index-header",
            start: "bottom-=5 bottom",
            end: "bottom+=15 bottom",
            //toggleActions: "play none none reverse",
            scrub: true,
            anticipatePin: 1,
            immediateRender: false,
          },
          force3D: true,
        })
        .to("html", 2, { backgroundColor: "#878145" }, "<");

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".index-grocery-cont .first-cont",
            start: "bottom-=25 top",
            end: "bottom top",

            scrub: true,
            anticipatePin: 1,
            immediateRender: false,
          },
          force3D: true,
        })
        .to(
          "meta[name='theme-color']",
          2,
          { attr: { ["content"]: "#ddc383" } },
          "<",
        );
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".index-bakery-cont",
            start: "bottom-=5 bottom",
            end: "bottom+=15 bottom",
            //toggleActions: "play none none reverse",
            scrub: true,
            anticipatePin: 1,
            immediateRender: false,
          },
          force3D: true,
        })
        .to("html", 2, { backgroundColor: "#ddc383" }, "<");
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".index-soup-cont .first-cont",
            start: "bottom-=25 top",
            end: "bottom top",

            scrub: true,
            anticipatePin: 1,
            immediateRender: false,
          },
          force3D: true,
        })
        .to(
          "meta[name='theme-color']",
          2,
          { attr: { ["content"]: "#fccbbe" } },
          "<",
        );
    });
    ctx.add(() => {
      let split = SplitType.create(".ih-bakery-title h1", {
        types: "chars",
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".index-bakery-cont .first-cont",
            endTrigger: ".index-header",
            start: "top top",
            end: "bottom top",
            //toggleActions: "play none none reverse",
            scrub: true,
          },
          //	force3D: true,
        })

        .to(
          split.chars,
          1,
          {
            fontSize: `${
              Utils.Common.getDeviceSize() !== "lessPab" ? "16.3vw" : "48.3vw"
            }`,
            ease: "power4.inOut",
            stagger: 0.05,
          },
          "-=.1",
        );

      const colorTimeline = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".index-header",
            start: "bottom-=25 top",
            end: "bottom top",

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
            color: "#c8ff01",
            ease: "power2.inOut",
          },
          "<",
        )
        .to(
          ".hm-menu svg",
          0.4,
          {
            fill: "#c8ff01",
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
              backgroundColor: "#c8ff01",
              ease: "power2.inOut",
            },
            "<",
          )
          .to(
            ".cart-num",
            0.4,
            {
              color: "#878145",
              ease: "power2.inOut",
            },
            "<",
          );
      }
      let splitFrikake = SplitType.create(".grocery-title h1", {
        types: "chars",
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".index-grocery-cont .first-cont",
            endTrigger: ".index-bakery-cont",

            start: "top top",
            end: "bottom top",
            scrub: true,
          },
          //force3D: false,
        })
        .to(
          splitFrikake.chars,
          0.5,
          {
            fontSize: `${
              Utils.Common.getDeviceSize() !== "lessPab" ? "14.2vw" : "40.5vw"
            }`,
            ease: "power4.inOut",
            stagger: 0.01,
          },
          "-=.1",
        );

      const ColorTimeline2 = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".index-grocery-cont .first-cont",
            start: "bottom-=25 top",
            end: "bottom top",

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
            color: "#234922",
            ease: "power2.inOut",
          },
          "<",
        )
        .to(
          ".hm-menu svg",
          0.4,
          {
            fill: "#234922",
            ease: "power2.inOut",
          },
          "<",
        );
      if (cartNumBg) {
        ColorTimeline2.to(
          ".cart-num-bg",
          0.4,
          {
            backgroundColor: "#234922",
            ease: "power2.inOut",
          },
          "<",
        ).to(
          ".cart-num",
          0.4,
          {
            color: "#ddc383",
            ease: "power2.inOut",
          },
          "<",
        );
      }
      let splitIngredientTitle = SplitType.create(".merchandise-title h1", {
        types: "chars",
      });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".index-soup-cont .first-cont",
            endTrigger: ".index-grocery-cont",

            start: "top top",
            end: "bottom top",
            scrub: true,
          },
          force3D: false,
        })
        .to(
          splitIngredientTitle.chars,
          0.5,
          {
            fontSize: `${
              Utils.Common.getDeviceSize() !== "lessPab" ? "10.5vw" : "26.6vw"
            }`,

            ease: "power4.inOut",
            stagger: 0.01,
          },
          "-=.1",
        );
      gsap
        .timeline({
          scrollTrigger: {
            id: "test",
            trigger: ".index-grocery-cont",
            start: "bottom-=5 bottom",
            end: "bottom+=15 bottom",
            //toggleActions: "play none none reverse",
            scrub: true,
            anticipatePin: 1,
            immediateRender: false,
          },
          force3D: true,
        })
        .to("html", 2, { backgroundColor: "#fccbbe" }, "<");
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".others-cont",
            start: "top-=5 bottom",
            end: "top+=15 bottom",
            //toggleActions: "play none none reverse",
            scrub: true,
            anticipatePin: 1,
            immediateRender: false,
          },
          force3D: true,
        })
        .to("html", 2, { backgroundColor: "#fefefe" }, "<");
      const ColorTimeline3 = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".index-soup-cont .first-cont",
            start: "bottom-=25 top",
            end: "bottom top",

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
            color: "#071342",
            ease: "power2.inOut",
          },
          "<",
        )
        .to(
          ".hm-menu svg",
          0.4,
          {
            fill: "#071342",
            ease: "power2.inOut",
          },
          "<",
        );
      if (cartNumBg) {
        ColorTimeline3.to(
          ".cart-num-bg",
          0.4,
          {
            backgroundColor: "#071342",
            ease: "power2.inOut",
          },
          "<",
        ).to(
          ".cart-num",
          0.4,
          {
            color: "#fccbbe",
            ease: "power2.inOut",
          },
          "<",
        );
      }
      const ColorTimeline4 = gsap
        .timeline({
          scrollTrigger: {
            trigger: ".others-cont",
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
          ".hm-menu svg",
          0.4,
          {
            fill: "#000",
            ease: "power2.inOut",
          },
          "<",
        );
      if (cartNumBg) {
        ColorTimeline4.to(
          ".cart-num-bg",
          0.4,
          {
            backgroundColor: "#000",
            ease: "power2.inOut",
          },
          "<",
        ).to(
          ".cart-num",
          0.4,
          {
            color: "#fff",
            ease: "power2.inOut",
          },
          "<",
        );
      }
    });

    return;
  }
  ////////////////////////////////////////////////////////////////////////////////////////
  //For Not Touch Device
  ////////////////////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////
  //Index Header Section
  ///////////////////////////////////////////////

  ctx.add(() => {
    //Logo Shape Animation for IndexPage

    const cont = document.querySelector("html");
    cont.classList.remove("init-animation");
    if (Utils.Common.getDeviceSize() !== "lessPab") {
      gsap.timeline().set(".dummy", { display: "none" });
      // .set(".un-and-title", { y: -200 })
      // .set(".und-about-desc-cont ", { y: 200 });
      /*  gsap
        .timeline({
          scrollTrigger: {
            trigger: ".index-header-about-grid ",
            scrub: true,
            start: "top bottom",
            end: "top+=200% top",
            invalidateOnRefresh: true,
          },
          force3D: true,
        })
        .to(".un-and-title", { y: 200 })
        .to(".und-about-desc-cont", { y: -200 }, "<");*/
    }
    gsap.timeline({
      scrollTrigger: {
        trigger: ".index-header .next-cont .first-cont",
        start: "top top",
        end: "bottom top-=1000",
        pin: ".index-header .next-cont .first-cont",
        invalidateOnRefresh: true,
        //scrub: true,
        anticipatePin: 1,
        immediateRender: false,
      },
      force3D: true,
    });
    gsap.timeline({
      scrollTrigger: {
        trigger: ".logo-h1",
        endTrigger: ".footer",
        id: "trigger2",
        start: `top top+=${
          Utils.Common.getDeviceSize() !== "lessPab" ? 19 : 10
        }`,
        end: "bottom top-=1000",
        pin: ".logo-h1",
        invalidateOnRefresh: true,
        //scrub: true,
        anticipatePin: 1,
        immediateRender: false,
      },
      force3D: true,
    });
    ////////////////////////////////////////////////////////////////////////////////////////
    //Index Bakery Section
    ////////////////////////////////////////////////////////////////////////////////////////
    let split = SplitType.create(".ih-bakery-title h1", {
      types: "chars",
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".index-bakery-cont .first-cont",
          endTrigger: ".index-header",

          start: "top top",
          end: "bottom top",
          pin: ".index-bakery-cont .first-cont",
          //toggleActions: "play none none reverse",
          scrub: true,
          anticipatePin: 1,
          immediateRender: false,
        },
        force3D: true,
      })
      .to(
        split.chars,
        0.5,
        {
          fontSize: `${
            Utils.Common.getDeviceSize() !== "lessPab"
              ? window.innerWidth <= 2000
                ? "16.3vw"
                : "314px"
              : "36.3vw"
          }`,
          ease: "power4.inOut",
          stagger: 0.01,
        },
        "-=.1",
      );
    gsap.timeline({
      scrollTrigger: {
        trigger: ".index-bread-title",
        endTrigger: ".index-grocery-cont",

        start: "center center",
        end: "top-=100 center",
        pin: ".index-bread-title",

        scrub: true,
        anticipatePin: 1,
        immediateRender: false,
      },
      force3D: true,
    });

    const colorChangeTimeline = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".index-header",
          start: "bottom-=100 top",
          end: "bottom top",
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
          color: "#c8ff01",
          ease: "power2.inOut",
        },
        "<",
      )
      .to(
        ".hm-menu svg",
        0.4,
        {
          fill: "#c8ff01",
          ease: "power2.inOut",
        },
        "<",
      );
    if (cartNumBg) {
      colorChangeTimeline
        .to(
          ".cart-num-bg",
          0.4,
          {
            backgroundColor: "#c8ff01",
            ease: "power2.inOut",
          },
          "<",
        )
        .to(
          ".cart-num",
          0.4,
          {
            color: "#878145",
            ease: "power2.inOut",
          },
          "<",
        );
    }

    gsap.timeline({
      scrollTrigger: {
        trigger: ".index-bakery-cont .next-cont .first-cont",

        start: "top top",
        end: "bottom top-=1000",
        pin: ".index-bakery-cont .next-cont .first-cont",

        //scrub: true,
        anticipatePin: 1,
        immediateRender: false,
      },
      force3D: true,
    });
    gsap.timeline({
      scrollTrigger: {
        trigger: ".index-bakery-cont .logo-h1-2",
        endTrigger: ".index-bakery-cont",

        start: `top top+=${
          Utils.Common.getDeviceSize() !== "lessPab" ? 19 : 10
        }`,
        end: "bottom top",
        pin: ".index-bakery-cont .logo-h1-2",

        //scrub: true,
        anticipatePin: 1,
        immediateRender: false,
      },
      force3D: true,
    });
    /*gsap.timeline({
		scrollTrigger: {
		  trigger: '.index-header',
		  endTrigger: '.index-bakery-cont .ih-bakery-img01',

		  start: 'bottom top',
		  end: 'bottom+=1000 top',
		  pin: '.index-bakery-cont .ih-bakery-title',

		  scrub: true,
		  anticipatePin: 1,
		  immediateRender: false
		},
		force3D: true
	  })*/

    ////////////////////////////////////////////////////////////////////////////////////////
    //Index grocery Section
    ////////////////////////////////////////////////////////////////////////////////////////
    let splitFrikake = SplitType.create(".grocery-title h1", {
      types: "chars",
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".index-grocery-cont .first-cont",
          endTrigger: ".index-bakery-cont",

          pin: ".index-grocery-cont .first-cont",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        force3D: false,
      })
      .to(
        splitFrikake.chars,
        0.5,
        {
          fontSize: `${
            Utils.Common.getDeviceSize() !== "lessPab"
              ? window.innerWidth <= 2000
                ? "14.2vw"
                : "290px"
              : "39vw"
          }`,
          ease: "power4.inOut",
          stagger: 0.01,
        },
        "-=.1",
      );
    gsap.timeline({
      scrollTrigger: {
        trigger: ".index-pastry-title",
        endTrigger: ".index-soup-cont",

        start: "center center",
        end: "top-=200 center",
        pin: ".index-pastry-title",

        scrub: true,
        anticipatePin: 1,
        immediateRender: false,
      },
      force3D: true,
    });
    const colorChangeTimeline2 = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".index-bakery-cont",

          start: "bottom-=100 top",
          end: "bottom top",

          scrub: true,
          anticipatePin: 1,
          immediateRender: false,
        },

        ease: "power2.inOut",
      })

      .to(
        ".global-nav ul",
        0.4,
        {
          color: "#234922",
          ease: "power2.inOut",
        },
        "<",
      )
      .to(
        ".hm-menu svg",
        0.4,
        {
          fill: "#234922",
          ease: "power2.inOut",
        },
        "<",
      );
    if (cartNumBg) {
      colorChangeTimeline2
        .to(
          ".cart-num-bg",
          0.4,
          {
            backgroundColor: "#234922",
            ease: "power2.inOut",
          },
          "<",
        )
        .to(
          ".cart-num",
          0.4,
          {
            color: "#ddc383",
            ease: "power2.inOut",
          },
          "<",
        );
    }

    gsap.timeline({
      scrollTrigger: {
        trigger: ".index-grocery-cont .logo-h1-2",
        endTrigger: ".index-grocery-cont",

        start: `top top+=${
          Utils.Common.getDeviceSize() !== "lessPab" ? 19 : 10
        }`,
        end: "bottom top",
        pin: ".index-grocery-cont .logo-h1-2",

        //scrub: true,
        anticipatePin: 1,
        immediateRender: false,
      },
      force3D: true,
    });
    gsap.timeline({
      scrollTrigger: {
        trigger: ".index-grocery-cont .next-cont .first-cont",

        start: "top top",
        end: "bottom top-=1000",
        pin: ".index-grocery-cont .next-cont .first-cont",

        //scrub: true,
        anticipatePin: 1,
        immediateRender: false,
      },
      force3D: true,
    });

    ////////////////////////////////////////////////////////////////////////////////////////
    //Index Ingredients Section
    ////////////////////////////////////////////////////////////////////////////////////////

    //--------------------------------------
    //  Ingredients-cont
    //--------------------------------------
    let splitIngredientTitle = SplitType.create(".merchandise-title h1", {
      types: "chars",
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".index-soup-cont .first-cont",
          endTrigger: ".index-grocery-cont",

          pin: ".index-soup-cont .first-cont",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
        force3D: false,
      })
      .to(
        splitIngredientTitle.chars,
        0.5,
        {
          fontSize: `${
            Utils.Common.getDeviceSize() !== "lessPab"
              ? window.innerWidth <= 2000
                ? "8.8vw"
                : "200px"
              : "28vw"
          }`,

          ease: "power4.inOut",
          stagger: 0.01,
        },
        "-=.1",
      );
    gsap.timeline({
      scrollTrigger: {
        trigger: ".index-ingredients-title",
        endTrigger: ".index-soup-cont",

        start: "center center",
        end: "bottom-=300 center",
        pin: ".index-ingredients-title",

        scrub: true,
        anticipatePin: 1,
        immediateRender: false,
      },
      force3D: true,
    });
    const colorChangeTimeline3 = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".index-grocery-cont",

          start: "bottom-=100 top",
          end: "bottom top",

          scrub: true,
          anticipatePin: 1,
          immediateRender: false,
        },

        ease: "power2.inOut",
      })
      .to(
        ".global-nav ul",
        0.4,
        {
          color: "#071342",
          ease: "power2.inOut",
        },
        "<",
      )
      .to(
        ".hm-menu svg",
        0.4,
        {
          fill: "#071342",
          ease: "power2.inOut",
        },
        "<",
      );
    if (cartNumBg) {
      colorChangeTimeline3
        .to(
          ".cart-num-bg",
          0.4,
          {
            backgroundColor: "#071342",
            ease: "power2.inOut",
          },
          "<",
        )
        .to(
          ".cart-num",
          0.4,
          {
            color: "#fccbbe",
            ease: "power2.inOut",
          },
          "<",
        );
    }

    gsap.timeline({
      scrollTrigger: {
        trigger: ".index-soup-cont .logo-h1-2",
        endTrigger: ".index-soup-cont",

        start: `top top+=${
          Utils.Common.getDeviceSize() !== "lessPab" ? 19 : 10
        }`,
        end: "bottom-=200  top",
        pin: ".index-soup-cont .logo-h1-2",

        //scrub: true,
        anticipatePin: 1,
        immediateRender: false,
      },
      force3D: true,
    });
  });
  const colorChangeTimeline4 = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".index-soup-cont",

        start: "bottom-=100 top",
        end: "bottom top",

        scrub: true,
        anticipatePin: 1,
        immediateRender: false,
      },

      ease: "power2.inOut",
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
      ".hm-menu svg",
      0.4,
      {
        fill: "#000",
        ease: "power2.inOut",
      },
      "<",
    );

  if (cartNumBg) {
    colorChangeTimeline4
      .to(
        ".cart-num-bg",
        0.4,
        {
          backgroundColor: "#000",
          ease: "power2.inOut",
        },
        "<",
      )
      .to(
        ".cart-num",
        0.4,
        {
          color: "#fff",
          ease: "power2.inOut",
        },
        "<",
      );
  }
};
