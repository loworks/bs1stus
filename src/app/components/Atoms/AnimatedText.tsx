"use client";
/* eslint-disable react/jsx-key */

import { useDeviceSize } from "@/components/Context/DeviceSizeProvider";
import { AnimatedTextAlongPath } from "@/components/Modules";
export default function AnimatedText({ className }: { className?: string }) {
  const deviceSize = useDeviceSize();
  return (
    <div className={`${className} w-screen`}>
      <div className="z-0 grid">
        <AnimatedTextAlongPath
          className="ml-[-5vw] w-[110vw] overflow-visible [&_.path]:translate-y-[-1.2px] [&_.path]:[vector-effect:non-scaling-stroke] [&_.path]:max-md:stroke-[14vw] [&_.path]:md:stroke-[50px]"
          pathData="M714.36,13.43c-93.39,9.31-158.74,32.88-184.39,86.54-25.65,53.65-66.96,89.21-136.06,89.21s-104.74,45.35-116.08,87.87c-11.34,42.52-66.46,83.62-136.06,82.21-69.6-1.42-116.36,35.43-129.12,69.45"
          viewBox="0 0 715.7 433.45"
          baseDuration={deviceSize === "lessPab" ? 50 : 60}
          kerningFactor={deviceSize === "lessPab" ? 2200 : 2500}
          strokeColor="#7a4d3c"
        >
          <div className="font-ob-nar-b font-bold uppercase leading-[100%] text-crisps-color2 max-md:text-[7vw] md:text-[40px]">
            {deviceSize === "lessPab" ? (
              <>
                Real Ingredients. Real Impact. Real Ingredients. Real Impact.
                Real Ingredients. Real Impact. Real Ingredients. Real Impact.
              </>
            ) : (
              <>Real Ingredients. Real Impact. Real Ingredients. Real Impact.</>
            )}
          </div>
        </AnimatedTextAlongPath>
      </div>
    </div>
  );
}
