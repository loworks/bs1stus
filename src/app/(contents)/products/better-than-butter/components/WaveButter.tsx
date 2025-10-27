"use client";
/* eslint-disable react/jsx-key */

import { useDeviceSize } from "@/components/Context/DeviceSizeProvider";
import { AnimatedTextAlongPath } from "@/components/Modules";
import Image from "next/image";
export default function WaveButter({ className }: { className?: string }) {
  const deviceSize = useDeviceSize();
  console.log("deviceSize -- ", deviceSize);
  {
    return (
      <>
        {deviceSize === null ? (
          <></>
        ) : (
          <div className={`${className} w-screen`}>
            <Image
              className={""}
              src="/test.png"
              alt="Uji Matcha Ceremonial Grade"
              width={2400}
              height={111}
              priority={true}
            />
            <div className="z-0">
              <AnimatedTextAlongPath
                className="w-[110vw] overflow-visible py-[10vw] max-md:ml-[-7.5vw] md:ml-[-5vw] [&_.path]:translate-y-[-1.2px] [&_.path]:[vector-effect:non-scaling-stroke] [&_.path]:max-md:stroke-[40px] [&_.path]:md:stroke-[50px]"
                pathData="M645.05,6.45c-39.52,14.93-101.73,13.76-131.18,4.9-29.45-8.87-89.94-16.8-128.33-4.2-38.39,12.6-105.39,10.73-139.13,1.87C212.67.15,178.42-4.98,143.55,7.15,108.68,19.28,49.78,23.25,0,6.45"
                viewBox="0 0 645.05 17.88"
                baseDuration={deviceSize === "lessPab" ? 100 : 60}
                kerningFactor={deviceSize === "lessPab" ? 2800 : 1800}
                strokeColor="#009565"
              >
                <div className="font-ob-nar-b font-bold uppercase leading-[100%] text-butter-color max-md:text-[30px] md:text-[40px]">
                  {deviceSize === "lessPab" ? (
                    <>Loved by Vegans, Trusted by Chefs.</>
                  ) : (
                    <>Loved by Vegans, Trusted by Chefs.</>
                  )}
                </div>
              </AnimatedTextAlongPath>
            </div>
          </div>
        )}
      </>
    );
  }
}
