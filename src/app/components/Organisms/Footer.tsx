"use client";

/* eslint-disable react/jsx-key */
import { TransitionLink } from "@/Libs/Transitions";
import * as Atoms from "../Atoms";
import * as Utils from "@/components/utils";
import Link from "next/link";
import Image from "next/image";
import { HeaderLogo } from "../Atoms/SvgElements";
import { NewsletterForm } from "../Modules";
import React from "react";
export default function Footer(props: React.ComponentProps<"footer">) {
  const menu = Utils.Site.getMenu();
  return (
    <div className="footer relative w-screen overflow-hidden">
      <ul className="items-center max-md:w-[200vw]">
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
      <div className="grid max-md:mt-[2vw]">
        <ul className="font-ob-nar-b col-[1/2] row-[1/2] flex animate-marqueereverse items-center font-bold leading-[100%] max-md:gap-[10vw] max-md:text-[10vw] md:space-x-6 md:text-[6vw] [&_li]:whitespace-nowrap">
          <li>Better Food, </li>
          <li>Better Future, </li>
          <li>Better Humans. </li>
        </ul>
        <ul className="font-ob-nar-b col-[1/2] row-[1/2] flex animate-marquee2reverse items-center space-x-6 font-bold leading-[100%] max-md:text-[10vw] md:text-[6vw] [&_li]:whitespace-nowrap">
          <li>Better Food, </li>
          <li>Better Future, </li>
          <li>Better Humans. </li>
        </ul>
      </div>
      <div className="pb-[4vw] max-md:mx-[16px] max-md:space-y-[16vw] max-md:pt-[20vw] md:mx-[25px] md:space-y-[5vw] md:pt-[6vw]">
        <div className="max-md:space-y-8 md:flex md:items-end md:justify-between">
          <div className="md:space-y-4">
            <div className="flex items-center space-x-3 max-md:pb-8">
              <Link
                href={"https://www.instagram.com/brownsugar1st/"}
                target="_new"
              >
                <Atoms.SvgElements.IconIg className="h-[32px] fill-black" />
              </Link>
              <Link
                href={"https://bsky.app/profile/brownsugar1st.bsky.social"}
                target="_new"
              >
                <Image
                  className="h-[32px] w-auto"
                  src="/logo-bluesky.svg"
                  alt="bluesky-logo"
                  width={600}
                  height={530}
                />
              </Link>
              <Link
                href={"https://www.linkedin.com/company/brown-sugar-1st/"}
                target="_new"
              >
                <Image
                  className="h-[32px] w-auto"
                  src="/logo-linked-in.svg"
                  alt="bluesky-logo"
                  width={50}
                  height={30}
                />
              </Link>
            </div>

            <nav className="footer-nav">
              <ul className="font-ob-nar uppercase">
                <li>
                  <TransitionLink useActiveLink={true} href={"/"}>
                    <span>HOME</span>
                  </TransitionLink>
                </li>
                {menu.map((item, i) =>
                  item.label === "Products" ? (
                    <React.Fragment key={`menuItem-group-${i}`}>
                      <li className="text-[#999]">PRODUCTS</li>
                      <li>
                        <TransitionLink
                          useActiveLink={true}
                          href={"/products/zensnack/"}
                        >
                          <span>ZEN SNACK</span>
                        </TransitionLink>
                      </li>
                      <li>
                        <TransitionLink
                          useActiveLink={true}
                          href={"/products/crisps/"}
                        >
                          <span>CRISPS SERIES</span>
                        </TransitionLink>
                      </li>
                      <li>
                        <Link href={"/btb.pdf"} target="_new">
                          <span>BETTER THAN BUTTER</span>
                        </Link>
                      </li>
                    </React.Fragment>
                  ) : (
                    <li className="" key={`navItem${i}`}>
                      <TransitionLink
                        useActiveLink={true}
                        href={item.label === "About" ? "/about/" : item.to}
                      >
                        <span>{item.label}</span>
                      </TransitionLink>
                    </li>
                  ),
                )}{" "}
                <li key={`menuItem-contact`}>
                  <TransitionLink useActiveLink={true} href={"/contact/"}>
                    <span>Contact</span>
                  </TransitionLink>
                </li>
                <li key={`menuItem-wholesale`}>
                  <Link
                    target="_new"
                    href={"https://www.faire.com/brand/b_cy5fkfterr"}
                  >
                    <span>Wholesale</span>
                  </Link>
                </li>
                <li className="text-[14px]" key={`faq`}>
                  <TransitionLink useActiveLink={true} href={"/faq/"}>
                    <span>FAQ</span>
                  </TransitionLink>
                </li>
                <li className="text-[14px]" key={`policy`}>
                  <TransitionLink useActiveLink={true} href={"/policy/"}>
                    <span>Privacy Policy</span>
                  </TransitionLink>
                </li>
              </ul>
            </nav>
          </div>
          <NewsletterForm className="md:w-[40vw]" />
        </div>

        <div className="flex justify-between max-md:flex-col-reverse max-md:gap-y-[16vw]">
          <div className="flex flex-col justify-between max-md:gap-y-[4vw]">
            <h1 className={`max-md:[&_svg]:h-[24px] md:[&_svg]:h-[42px]`}>
              <TransitionLink href="/" className="">
                <HeaderLogo />
              </TransitionLink>
            </h1>
            <div>
              <address>
                <Link
                  href={"https://maps.app.goo.gl/LQmPxKrzC1W86DKAA"}
                  target="_new"
                >
                  <span className="not-italic leading-[100%] max-md:text-[14px]">
                    575 Lexington Ave FL 14 #113 New York, NY 10022
                  </span>
                </Link>
              </address>
              <div>
                <span className="max-md:text-[14px]">
                  ©2025 BROWN SUGAR 1ST. INC.
                </span>
              </div>
            </div>
          </div>

          <p className="md:w-[40vw]">
            Founded in 2011 as a farmers’ market vendor by a mother wondering
            what food would be best for her baby, we have since grown into a
            leading food brand in Japan, supplying wholesalers, supermarkets,
            hotels, and restaurants. Our mission is to create food with a
            parent’s perspective and pass on healthy eating habits to the next
            generation.
          </p>
        </div>
      </div>
    </div>
  );
}
