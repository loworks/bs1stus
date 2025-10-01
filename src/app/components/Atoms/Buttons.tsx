/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState } from "react";
import { TransitionLink } from "@/Libs/Transitions";
export function borderButton({
  className = "",
  children = "Button",

  ...rest
}: {
  className?: string;
  children?: React.ReactNode;
} & React.ComponentProps<"button">) {
  return (
    <button
      className={` ${className} grid h-[80px] w-[100%] grid-cols-[auto_1fr_auto] items-center justify-between gap-[.5rem]`}
      {...rest}
    >
      <div className="font-ob-nar col-[1/-1] row-[1/-1] whitespace-nowrap">
        {children}
      </div>
      <div className="col-[1/-1] row-[1/-1] h-full w-full rounded-full border-[3px]"></div>
    </button>
  );
}
export function tagButton({
  className = "",
  children = "Button",
  slug = "/",
  ...rest
}: {
  className?: string;
  children?: React.ReactNode;
  slug?: string;
} & React.ComponentProps<"a">) {
  return (
    <TransitionLink
      href={`${slug}`}
      key={`${slug}`}
      className={
        "pointer-events-auto inline-block bg-[#e4e4e4] px-3 py-2 text-[14px] leading-[100%] tracking-tight"
      }
    >
      {`${children}`}
    </TransitionLink>
  );
}
export function boxButton({
  className = "",
  children = "Button",
  href = "/",
  colorClass = "bg-[#c9967c]",
  ...rest
}: {
  className?: string;
  href?: string;
  children?: React.ReactNode;
  colorClass?: string;
} & React.ComponentProps<"button">) {
  return (
    <button
      type="submit"
      className={` ${className} grid min-w-[300px] space-y-[-1px]`}
      {...rest}
    >
      <div
        className={`${colorClass} h-[10px] w-full rounded border-[1px]`}
      ></div>
      <div
        className={`z-10 mx-auto h-[6px] w-[calc(100%-12px)] border-l-[1px] border-r-[1px] ${colorClass}`}
      >
        <div className="mt-[2px] border-t-[1px] border-dotted"></div>
      </div>
      <div
        style={{ boxShadow: ".125rem .1875rem 0 #000" }}
        className={`font-ob-nar-b w-full rounded border-[1px] pb-[12px] pt-[6px] text-[22px] leading-[100%] ${colorClass} text-center`}
      >
        {children}
      </div>
    </button>
  );
}
export function boxLink({
  className = "",
  children = "Button",
  href = "/",
  colorClass = "bg-[#c9967c]",
  ...rest
}: {
  className?: string;
  href?: string;
  children?: React.ReactNode;
  colorClass?: string;
} & React.ComponentProps<"button">) {
  return (
    <TransitionLink
      href={href}
      className={` ${className} grid w-[30vw] space-y-[-1px] pb-[5px] [&>span]:block`}
      {...rest}
    >
      <span
        className={`${colorClass} h-[10px] w-full rounded border-[1px]`}
      ></span>
      <span
        className={`z-10 mx-auto h-[6px] w-[calc(100%-12px)] border-l-[1px] border-r-[1px] ${colorClass}`}
      >
        <span className="mt-[2px] block border-t-[1px] border-dotted"></span>
      </span>
      <span
        style={{ boxShadow: ".125rem .1875rem 0 #000" }}
        className={`font-ob-nar-b w-full rounded border-[1px] pb-[12px] pt-[6px] text-[22px] leading-[100%] ${colorClass} text-center`}
      >
        {children}
      </span>
    </TransitionLink>
  );
}

export function boxInnerButton({
  className = "",
  children = "Button",
  href = "/",
  ...rest
}: {
  className?: string;
  href?: string;
  children?: React.ReactNode;
} & React.ComponentProps<"button">) {
  return (
    <button
      className={`${className} grid grid-cols-[auto_1fr_auto] items-center justify-between`}
      {...rest}
    >
      <TransitionLink
        useActiveLink={true}
        href={href}
        className="[html.product-bakery_&]:bg-bakery-color [html.product-grocery_&]:bg-grocery-color [html.product-grocery_&]:text-grocery-color font-ob-nar col-[1/-1] row-[1/-1] w-full whitespace-nowrap max-md:py-[16px] md:py-[25px] [html.product-merchandise_&]:bg-merchandise-color [html.product-merchandise_&]:text-white"
      >
        {children}
      </TransitionLink>
    </button>
  );
}

export function defaultButton({
  className = "",
  children = "Button",
  href = "/",
  ...rest
}: {
  className?: string;
  children?: React.ReactNode;
  href?: string;
} & React.ComponentProps<"button">) {
  return (
    <button
      className={` ${className} pointer-events-auto cursor-pointer md:text-[18px]`}
      {...rest}
    >
      <TransitionLink
        useActiveLink={true}
        href={href}
        className="grid w-full grid-cols-[auto_1fr_auto] items-center justify-between gap-[.5rem]"
      >
        <div className="font-ob-nar whitespace-nowrap tracking-tighter">
          Learn More
        </div>
        <div className="div-border-cont relative z-0 h-[1px] w-full after:absolute after:left-[0px] after:top-[50%] after:h-[1px] after:w-full after:translate-y-[-50%] after:bg-[#000]">
          <div
            className="div-border scroll-anim [html.product-bakery_&]:bg-bakery-color [html.product-grocery_&]:bg-grocery-color relative top-[50%] z-[10] h-[7px] w-full translate-y-[-50%] bg-[#000] [html.product-merchandise_&]:bg-merchandise-color"
            data-animation-from='{"width":"0"}'
            data-animation-type="tween"
            data-animation-toggleactions="play none none reverse"
            data-animation-duration="1"
            data-animation-to='{"width":"100%","ease":"power4.inOut"}'
            data-animation-delay="<"
          ></div>
        </div>
        <div className="font-ob-nar whitespace-nowrap tracking-tight">
          {children}
        </div>
      </TransitionLink>
    </button>
  );
}
export function lineButton({
  className = "",
  children = "Button",
  href = "/",
  ...rest
}: {
  className?: string;
  children?: React.ReactNode;
  href?: string;
} & React.ComponentProps<"button">) {
  return (
    <button
      className={` ${className} pointer-events-auto cursor-pointer md:text-[18px]`}
      {...rest}
    >
      <TransitionLink
        useActiveLink={true}
        href={href}
        className="grid grid-cols-[1fr_auto] items-center justify-between gap-[.5rem]"
      >
        <div className="div-border-cont relative z-0 h-[1px] w-[50px] after:absolute after:left-[0px] after:top-[50%] after:h-[1px] after:w-full after:translate-y-[-50%] after:bg-[#000]">
          <div
            className="div-border scroll-anim [html.product-bakery_&]:bg-bakery-color [html.product-grocery_&]:bg-grocery-color relative top-[50%] z-[10] h-[7px] w-full translate-y-[-50%] bg-[#000] [html.product-merchandise_&]:bg-merchandise-color"
            data-animation-from='{"width":"0"}'
            data-animation-type="tween"
            data-animation-toggleactions="play none none reverse"
            data-animation-duration="1"
            data-animation-to='{"width":"100%","ease":"power4.inOut"}'
            data-animation-delay="<"
          ></div>
        </div>
        <div className="font-ob-nar whitespace-nowrap tracking-tight">
          {children}
        </div>
      </TransitionLink>
    </button>
  );
}
export function AddCartButton({
  className = "",
  children = "Button",
  variant,
  ...rest
}: {
  className?: string;
  children?: React.ReactNode;
  variant?: any;
} & React.ComponentProps<"button">) {
  const [loading, setLoading] = useState(false);

  const available = true;
  const productAvailable = true;

  return (
    <button
      className="pointer-events-auto! [html.product-bakery_&]:bg-bakery-color [html.product-grocery_&]:bg-grocery-color absolute bottom-0 right-0 h-[80px] w-[50vw] [html.product-merchandise_&]:bg-merchandise-color"
      disabled={!available || !productAvailable}
      {...rest}
    >
      {!available || !productAvailable ? "SOLD OUT" : "Add To Cart"}
    </button>
  );
}
