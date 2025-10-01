"use client";

import React from "react";
import * as Atoms from "../Atoms";
import { TransitionLink } from "@/Libs/Transitions";
import { HeaderLogo } from "../Atoms/SvgElements";
export default function HeaderLogoButton({
  className = "",
  ...rest
}: {
  className?: string;
} & React.ComponentProps<"h1">) {
  return (
    <h1 className={`${className}`}>
      <TransitionLink href="/" className="">
        <HeaderLogo />
      </TransitionLink>
    </h1>
  );
}
