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
          <div
            className={`${className} w-screen max-md:relative max-md:mt-[14vw]`}
          >
            <Image
              className={
                "relative origin-center max-md:top-[11.2vw] max-md:scale-110 md:top-[6.5vw]"
              }
              src="/grass.png"
              alt="Uji Matcha Ceremonial Grade"
              width={2400}
              height={111}
              priority={true}
            />
            <div className="z-0">
              <AnimatedTextAlongPath
                className="z-30 w-[110vw] overflow-visible py-[10vw] max-md:ml-[-7.5vw] md:ml-[-5vw] md:mt-[-6vw] [&_.path]:translate-y-[-1.2px] [&_.path]:[vector-effect:non-scaling-stroke] [&_.path]:max-md:stroke-[25px] [&_.path]:md:stroke-[50px]"
                pathData="M645.05,6.45c-39.52,14.93-101.73,13.76-131.18,4.9-29.45-8.87-89.94-16.8-128.33-4.2-38.39,12.6-105.39,10.73-139.13,1.87C212.67.15,178.42-4.98,143.55,7.15,108.68,19.28,49.78,23.25,0,6.45"
                viewBox="0 0 645.05 17.88"
                baseDuration={deviceSize === "lessPab" ? 100 : 60}
                kerningFactor={deviceSize === "lessPab" ? 3000 : 1400}
                strokeColor="#009565"
              >
                <div className="font-ob-nar-b font-bold uppercase leading-[100%] text-butter-color max-md:text-[20px] md:text-[40px]">
                  {deviceSize === "lessPab" ? (
                    <>Loved by Vegans, Trusted by Chefs.</>
                  ) : (
                    <>Loved by Vegans, Trusted by Chefs.</>
                  )}
                </div>
              </AnimatedTextAlongPath>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 645.05 36.85"
                className="absolute z-0 fill-[#eeb86b] max-md:top-[17vw] md:top-[10vw]"
              >
                <path d="M645.05,6.45c-39.52,14.93-101.73,13.76-131.18,4.9-29.45-8.87-89.94-16.8-128.33-4.2-38.39,12.6-105.39,10.73-139.13,1.87C212.67.15,178.42-4.98,143.55,7.15,108.68,19.28,49.78,23.25,0,6.45v30.4h645.05V6.45Z" />
              </svg>
            </div>
          </div>
        )}
      </>
    );
  }
}
