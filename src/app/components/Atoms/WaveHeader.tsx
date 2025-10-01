"use client";
/* eslint-disable react/jsx-key */

import { useDeviceSize } from "@/components/Context/DeviceSizeProvider";
import { AnimatedTextAlongPath } from "@/components/Modules";
import { ReactElement } from "react";
export default function WaveHeader({
  className,
  spNode = <>AAA</>,
  pcNode = <>AAA</>,
  strokeColor = "#8b5c41",
}: {
  className?: string;
  spNode?: ReactElement;
  pcNode?: ReactElement;
  strokeColor?: string;
}) {
  const deviceSize = useDeviceSize();
  {
    return (
      <>
        {deviceSize === null ? (
          <></>
        ) : (
          <div className={`${className} relative overflow-hidden`}>
            <div className="div-bg bg-crisps-color2 max-md:h-[64px] md:h-[80px]"></div>
            <svg
              className="svg-fill ml-[-5%] scale-110 fill-crisps-color2"
              viewBox="0 0 782.27 32.6"
            >
              <path d="M782.27,12.44h-10c-73.48,0-62.38,20.16-130.96,20.16-64.08,0-65.74-20.16-117.72-20.16-51.98,0-57.08,20.16-132.46,20.16-75.38,0-80.48-20.16-132.46-20.16s-53.64,20.16-117.72,20.16c-68.58,0-57.48-20.16-130.96-20.16H0V0h782.27v12.44Z" />
            </svg>
            <AnimatedTextAlongPath
              className="relative top-[-4vw] z-10 ml-[-5%] scale-110 [&_.path]:[vector-effect:non-scaling-stroke] [&_.path]:max-md:stroke-[24px] md:[&_.path]:translate-y-[-2px] [&_.path]:md:stroke-[30px]"
              pathData="M783.65,11.38h-10c-73.48,0-62.38,20.16-130.96,20.16-64.08,0-65.74-20.16-117.72-20.16-51.98,0-57.08,20.16-132.46,20.16-75.38,0-80.48-20.16-132.46-20.16s-53.64,20.16-117.72,20.16c-68.58,0-57.48-20.16-130.96-20.16H1.38"
              strokeColor={strokeColor}
              viewBox="0 0 785.03 42.92"
              baseDuration={deviceSize === "lessPab" ? 100 : 50}
              kerningFactor={deviceSize === "lessPab" ? 2500 : 2500}
            >
              <div className="text font-ob-nar-b font-bold uppercase leading-[100%] text-[#fffabe] max-md:text-[18px] md:text-[23px]">
                {deviceSize === "lessPab" ? spNode : pcNode}
              </div>
            </AnimatedTextAlongPath>
          </div>
        )}
      </>
    );
  }
}
