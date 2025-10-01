"use client";
/* eslint-disable react/jsx-key */

import { useDeviceSize } from "@/components/Context/DeviceSizeProvider";
import { AnimatedTextAlongPath } from "@/components/Modules";
export default function WaveBrownie({ className }: { className?: string }) {
  const deviceSize = useDeviceSize();
  {
    return (
      <>
        {deviceSize === null ? (
          <></>
        ) : (
          <div className={`${className} relative overflow-hidden py-5`}>
            <AnimatedTextAlongPath
              className="z-10 ml-[-5%] scale-110 [&_.path]:[vector-effect:non-scaling-stroke] [&_.path]:max-md:stroke-[30px] md:[&_.path]:translate-y-[-2px] [&_.path]:md:stroke-[40px]"
              pathData="M402.64,11.5h-10c-75.38,0-80.48,30.5-132.46,30.5s-53.64-30.5-117.72-30.5c-68.58,0-57.48,30.5-130.96,30.5H1.5"
              strokeColor="#8b5c41"
              viewBox="0 0 404.14 53.5"
              baseDuration={deviceSize === "lessPab" ? 100 : 50}
              kerningFactor={deviceSize === "lessPab" ? 2500 : 2000}
            >
              <div className="font-ob-nar-b font-bold uppercase leading-[100%] text-[#fffabe] max-md:text-[24px] md:text-[30px]">
                {deviceSize === "lessPab" ? (
                  <> Simple-Ingredient baked</>
                ) : (
                  <>Simple-Ingredient baked brownie</>
                )}
              </div>
            </AnimatedTextAlongPath>

            <svg
              className="absolute ml-[-5%] scale-110 fill-crisps-color2 max-md:top-[48px] md:top-[55px]"
              viewBox="0 0 401.14 45.36"
            >
              <path d="M0,30.5h10C83.48,30.5,72.38,0,140.96,0c64.08,0,65.74,30.5,117.72,30.5S315.76,0,391.14,0h10v45.36H0v-14.86Z" />
            </svg>
          </div>
        )}
      </>
    );
  }
}
