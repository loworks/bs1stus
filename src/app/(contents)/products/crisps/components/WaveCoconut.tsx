"use client";
/* eslint-disable react/jsx-key */

import { useDeviceSize } from "@/components/Context/DeviceSizeProvider";
import { AnimatedTextAlongPath } from "@/components/Modules";
export default function WaveCoconut({ className }: { className?: string }) {
  const deviceSize = useDeviceSize();
  {
    return (
      <>
        {deviceSize === null ? (
          <></>
        ) : (
          <div className="relative overflow-hidden py-5">
            <AnimatedTextAlongPath
              className="z-10 mr-[-5%] scale-110 [&_.path]:[vector-effect:non-scaling-stroke] [&_.path]:max-md:stroke-[30px] md:[&_.path]:translate-y-[-2px] [&_.path]:md:stroke-[40px]"
              pathData="M402.64,42h-10c-73.48,0-62.38-30.5-130.96-30.5-64.08,0-65.74,30.5-117.72,30.5S86.88,11.5,11.5,11.5H1.5"
              viewBox="0 0 404.14 53.5"
              baseDuration={deviceSize === "lessPab" ? 100 : 50}
              kerningFactor={deviceSize === "lessPab" ? 2400 : 2000}
            >
              <div className="font-ob-nar-b font-bold uppercase leading-[100%] text-[#fffabe] max-md:text-[24px] md:text-[30px]">
                {deviceSize === "lessPab" ? (
                  <> Fragrant roasted coconuts</>
                ) : (
                  <> Fragrant roasted coconut crisps</>
                )}
              </div>
            </AnimatedTextAlongPath>
            <svg
              className="absolute top-[55px] mr-[-5%] scale-110 fill-crisps-color max-md:top-[48px]"
              viewBox="0 0 401.14 45.36"
            >
              <path d="M401.14,30.5h-10C317.66,30.5,328.76,0,260.18,0c-64.08,0-65.74,30.5-117.72,30.5S85.38,0,10,0H0s0,45.36,0,45.36h401.14s0-14.86,0-14.86Z" />
            </svg>
          </div>
        )}
      </>
    );
  }
}
