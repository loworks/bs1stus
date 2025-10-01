/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
"use client";
import { useDeviceSize } from "@/components/Context/DeviceSizeProvider";
import { AnimatedTextAlongPath } from "@/components/Modules";
import React, { Suspense } from "react";
import { getAllShop } from "@/Libs/contentful/api";

export default function WaveLoved({
  className,
  ...props
}: {
  className?: string;
} & React.ComponentProps<"div">) {
  const deviceSize = useDeviceSize();
  return (
    <>
      <div className="relative left-[-10vw] z-0 mx-auto grid w-[120%] items-center overflow-x-hidden">
        <div className="relative overflow-hidden">
          <AnimatedTextAlongPath
            className="absolute z-10 max-md:py-[10px] [&_.path]:max-md:stroke-[30px] [&_.path]:md:stroke-[25px]"
            pathData="M504.11,22.74c-39.76-11.97-100.6-15.72-152.43,1.29-51.83,17.01-142.29,14.49-187.85,2.52C118.27,14.58,51.19,6.36,4.11,22.74"
            viewBox="0 0 507.71 48.66"
            baseDuration={deviceSize === "lessPab" ? 50 : 30}
            kerningFactor={deviceSize === "lessPab" ? 2200 : 1500}
            strokeColor="#009565"
          >
            <div className="font-ob-nar-b font-bold uppercase leading-[100%] text-[#fffabe] max-md:text-[6.5vw] md:text-[4.5vw]">
              {deviceSize === "moreTab" ? (
                <>Loved by Vegans, Trusted by Chefs.</>
              ) : (
                <>Trusted by Chefs.</>
              )}
            </div>
          </AnimatedTextAlongPath>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 370.32 67.41"
            className="absolute top-[4vw] z-0 fill-crisps-color"
          >
            <path d="M0,7.15C34.87-4.98,69.12.15,102.86,9.02c33.74,8.87,100.74,10.73,139.13-1.87,38.39-12.6,98.88-4.67,128.33,4.2v56.06H0V7.15Z" />
          </svg>
        </div>
      </div>
    </>
  );
}
