/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
"use client";
import { useState, useEffect, useRef } from "react";

import gsap from "gsap/dist/gsap";

import * as Utils from "@/components/utils";
import * as Atoms from "@/components/Atoms";
import { TransitionLink } from "@/Libs/Transitions";
import { useTransition } from "@/Libs/Transitions/TransitionContext";
import Link from "next/link";
interface MenuItem {
  to: string;
  label: string;
  slug: string;
}
export default function OverlayMenuCsr({
  tags,
  shopList,
  about,
  loginButton,

  ...rest
}: {
  shopList: Object;
  tags: Object[];
  about: Object[];
  loginButton: React.ReactNode;
}) {
  const { state, dispatch } = useTransition();
  let [isOpen, setIsOpen] = useState(false);

  const menu: Array<MenuItem> = [
    {
      to: "/about",
      label: "About",
      slug: "about",
    },
  ];

  useEffect(() => {
    if (state.transitionState === "exitComplete") {
      const color = Utils.Site.getCurrentBgColor();
      if (isOpen) {
        gsap
          .timeline({})
          .set(".overlay-menu", {
            opacity: 0,
            display: "none",
          })
          .set("meta[name='theme-color']", { attr: { ["content"]: color } });
        //.set("html", { backgroundColor: color });
        setIsOpen(false);
        Utils.Site.removeDisableScrollListener();
      }
    }
    if (state.transitionState === "TransitionMenuOpen") {
      setIsOpen(true);
    }
  }, [state.transitionState]);

  const handleClose = async () => {
    const color = Utils.Site.getCurrentBgColor();
    gsap
      .timeline({
        onComplete: function () {
          Utils.Site.removeDisableScrollListener();
          setIsOpen(false);
        },
      })

      .to(".overlay-menu", 0.5, {
        opacity: 0,
        display: "none",
      })
      .to(
        "meta[name='theme-color']",
        0.75,
        { attr: { ["content"]: color } },
        "<",
      );
    // .to("html", 0.75, { backgroundColor: color }, "<");

    return;
  };
  const { groupedTags, groupNames } = tags.reduce(
    (
      acc: { groupedTags: Record<string, any[]>; groupNames: string[] },
      tag: any,
    ) => {
      if (!acc.groupedTags[tag.group]) {
        acc.groupedTags[tag.group] = [];
        acc.groupNames.push(tag.group);
      }
      acc.groupedTags[tag.group].push(tag);
      return acc;
    },
    { groupedTags: {}, groupNames: [] },
  );
  return (
    <>
      <div
        className={
          "overlay-menu fixed top-0 z-[10000] hidden h-[100dvh] w-full overflow-hidden bg-white"
        }
        //open={isOpen}
        //onClose={() => setIsOpen(false)}
      >
        <div className="relative z-[20] mb-0 ml-[auto] mr-[auto] mt-0 grid h-[calc(100vh-100px)] w-screen items-center justify-center overflow-hidden max-md:px-[16px] max-md:py-[25px] max-md:pt-[75px] md:px-[25px] md:pt-[100px]">
          <div className="flex gap-x-8">
            <nav className="ol-menu-nav md:self-start">
              {menu.length ? (
                <div className="leading-[1] tracking-tighter max-md:grid max-md:grid-cols-[repeat(2,1fr)] max-md:gap-[1rem] md:flex md:gap-[5vw]">
                  <div className="[&>div>a_span]:font-ob-nar-b flex flex-col max-md:gap-[.5rem] md:gap-[0.5rem] [&>div>a_span]:inline-block [&>div>a_span]:uppercase [&>div>a_span]:leading-[0.85] [&>div>a_span]:max-md:text-[6vw] [&>div>a_span]:md:text-[min(3vw,3.5vh)] [&_a]:inline-block">
                    <div className="">
                      <TransitionLink
                        useActiveLink={true}
                        href={"/"}
                        cleckHandler={() => {
                          handleClose();
                        }}
                      >
                        <span>Home</span>
                      </TransitionLink>
                    </div>
                    <div className="">
                      <TransitionLink
                        useActiveLink={true}
                        href={"/shop/"}
                        cleckHandler={() => {
                          handleClose();
                        }}
                      >
                        <span>Shop</span>
                      </TransitionLink>
                    </div>
                    <div className="">
                      <TransitionLink
                        useActiveLink={true}
                        href={"/journal/"}
                        cleckHandler={() => {
                          handleClose();
                        }}
                      >
                        <span>Journal</span>
                      </TransitionLink>
                    </div>
                    <div className="">
                      <TransitionLink
                        useActiveLink={true}
                        href={"/about/"}
                        cleckHandler={() => {
                          handleClose();
                        }}
                      >
                        <span>About</span>
                      </TransitionLink>
                    </div>
                    <div className="">
                      <TransitionLink
                        useActiveLink={true}
                        href={"/contact/"}
                        cleckHandler={() => {
                          handleClose();
                        }}
                      >
                        <span>Contact</span>
                      </TransitionLink>
                    </div>
                    <div className="">
                      <h2
                        className={
                          "font-ob-nar-b uppercase text-[#999] max-md:text-[6vw] md:text-[2vw]"
                        }
                      >
                        Products
                      </h2>
                      <div>
                        <TransitionLink
                          useActiveLink={true}
                          className={
                            "font-ob-nar-b !block whitespace-nowrap uppercase max-md:text-[6vw] md:text-[min(3vw,3.5vh)]"
                          }
                          href={"/products/zensnack/"}
                          cleckHandler={() => {
                            handleClose();
                          }}
                        >
                          <span>Zen Snacks</span>
                        </TransitionLink>
                        <TransitionLink
                          useActiveLink={true}
                          className={
                            "font-ob-nar-b !block whitespace-nowrap uppercase max-md:text-[6vw] md:text-[min(3vw,3.5vh)]"
                          }
                          href={"/products/crisps/"}
                          cleckHandler={() => {
                            handleClose();
                          }}
                        >
                          <span>CRISPS SERIES</span>
                        </TransitionLink>
                        <TransitionLink
                          useActiveLink={true}
                          className={
                            "font-ob-nar-b !block whitespace-nowrap uppercase max-md:text-[6vw] md:text-[min(3vw,3.5vh)]"
                          }
                          href={"/products/better-than-butter/"}
                          cleckHandler={() => {
                            handleClose();
                          }}
                        >
                          <span>Better Than Butter</span>
                        </TransitionLink>
                      </div>
                    </div>

                    {loginButton}
                    {/*
                    <div className="">
                      <TransitionLink
                        useActiveLink={true}
                        href={"/contact/"}
                        cleckHandler={() => {
                          handleClose();
                        }}
                      >
                        <span>CONTACT</span>
                      </TransitionLink>
                    </div>
                    <div className="">
                      <TransitionLink
                        useActiveLink={true}
                        href={"/faq/"}
                        cleckHandler={() => {
                          handleClose();
                        }}
                      >
                        <span>FAQ</span>
                      </TransitionLink>
                    </div>
                    <div className="font-ob-nar-b tracking-tight max-md:text-[6vw] md:text-[2vw]">
                      {" "}
                      <TransitionLink
                        useActiveLink={true}
                        href={"/policy/"}
                        cleckHandler={() => {
                          handleClose();
                        }}
                      >
                        <span>Privacy Policy</span>
                      </TransitionLink>
                    </div> */}
                  </div>
                </div>
              ) : null}

              <Atoms.SvgElements.IconIg className="absolute fill-black max-md:left-[15px] max-md:top-[6px] max-md:h-[45px] md:left-[25px] md:top-[25px] md:h-[50px]" />
              {/*
            <div
              className={
                "ol-menu-logo max-md:mb-[-60px] max-md:w-[100vw] max-md:[&>div]:w-full [&_svg]:fill-black max-md:[&_svg]:h-[calc((100vw-32px)*0.794)] md:[&_svg]:h-[42.5vh]"
              }
            >
              <Atoms.SvgElements.FooterLogo />
            </div>*/}
            </nav>
            <nav className="space-y-2">
              <h2 className="font-ob-nar-b flex items-center gap-x-1 md:text-[24px]">
                Categories
                <svg viewBox="0 0 11.67 7.21" className="h-[10px]">
                  <path d="M11.67,1.37l-5.83,5.83L0,1.37,1.37,0l4.46,4.46L10.29,0l1.37,1.37Z" />
                </svg>
              </h2>

              {groupNames.map((group) => (
                <div key={group} className="">
                  <h2 className="font-ob-nar text-sm">{group}</h2>
                  <ul>
                    {groupedTags[group].map((tag: any) => (
                      <li key={tag.slug} className="leading-[1]">
                        <TransitionLink
                          href={`/${group.toLowerCase()}/${tag.slug}`}
                          useActiveLink={true}
                          className="font-ob-nar-b"
                        >
                          <span className="] font-ob-nar-b leading-[1] max-md:text-[18px] md:text-[24px]">
                            {tag.name}
                          </span>
                        </TransitionLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
          <Atoms.SvgElements.FooterLogo
            className={`pointer-events-none absolute z-[1000] max-md:bottom-[0px] max-md:ml-[16px] max-md:translate-y-[50%] md:left-[25px] md:top-[calc(60svh+25px+25px)] max-md:[&_svg]:h-[calc((100vw-26px)*0.794)] md:[&_svg]:w-[30.6vw]`}
          />
          <div className="font-ob-nar-b absolute right-[0px] z-[1000] px-[16px] uppercase max-md:top-[6px] max-md:text-[6vw] md:top-[12px] md:text-[2vw]">
            <button
              onClick={() => {
                handleClose();
              }}
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
