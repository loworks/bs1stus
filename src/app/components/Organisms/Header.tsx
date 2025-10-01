/* eslint-disable no-unused-vars */
"use server";
/* eslint-disable react/jsx-key */
import { draftMode } from "next/headers";
import * as Modules from "@/components/Modules";
import React from "react";
import { Site } from "../utils";

export default async function Header(props: React.ComponentProps<"header">) {
  const preview =
    process.env.NODE_ENV === "development" || (await draftMode()).isEnabled;

  return (
    <>
      <header
        className="z-[1000] flex items-center justify-between max-md:fixed max-md:top-0 max-md:w-full max-md:px-[16px] max-md:pt-[10px] md:absolute md:w-screen md:px-[25px] md:pt-[20px] [html.touch_&]:md:fixed [html.touch_&]:md:top-0"
        /*data-animation-trigger="header"
        data-animation-endtrigger=".footer"
        data-animation-type="pin"
        data-animation-start="top top+=20"
        data-animation-end="top-=100 top"
        data-animation-pin="header"*/
      >
        <Modules.HeaderLogoButton className="pointer-events-auto [&_svg]:fill-black max-md:[&_svg]:h-[22px] md:[&_svg]:h-[32px]" />
        <Modules.GlobalNavigation
          preview={preview}
          className="global-nav pointer-events-auto relative z-10"
        />
      </header>
    </>
  );
}
