/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
"use client";
import { useDeviceSize } from "@/components/Context/DeviceSizeProvider";
import { AnimatedTextAlongPath } from "@/components/Modules";
import React, { Suspense } from "react";
import { getAllShop } from "@/Libs/contentful/api";

export default function IndexPressTitle({
  className,
  ...props
}: {
  className?: string;
} & React.ComponentProps<"div">) {
  const deviceSize = useDeviceSize();
  return (
    <>
      <div className="relative left-[-10vw] z-0 mx-auto grid w-[120%] items-center overflow-x-hidden max-md:h-[100px]">
        <div className="relative overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 370.32 55.5"
            className="top-[4vw] z-0 fill-crisps-color"
          >
            <path d="M0,46.52c34.87-12.13,69.12-7,102.86,1.87,33.74,8.87,100.74,10.73,139.13-1.87,38.39-12.6,98.88-4.67,128.33,4.2V0H0v46.52Z" />
          </svg>
          <AnimatedTextAlongPath
            className="absolute bottom-[10vw] z-10 [&_.path]:max-md:stroke-[46px] [&_.path]:md:stroke-[25px]"
            pathData="M504.11,22.74c-39.76-11.97-100.6-15.72-152.43,1.29-51.83,17.01-142.29,14.49-187.85,2.52C118.27,14.58,51.19,6.36,4.11,22.74"
            viewBox="0 0 507.71 48.66"
            baseDuration={deviceSize === "lessPab" ? 50 : 30}
            kerningFactor={deviceSize === "lessPab" ? 2200 : 1500}
            strokeColor="#7a4d3c"
          >
            <div className="font-ob-nar-b font-bold uppercase leading-[100%] text-[#fffabe] max-md:text-[6.5vw] md:text-[4.5vw]">
              {deviceSize === "moreTab" ? (
                <>Press Press Press Press Press Press</>
              ) : (
                <>Press Press Press</>
              )}
            </div>
          </AnimatedTextAlongPath>
        </div>
      </div>
    </>
  );
}
