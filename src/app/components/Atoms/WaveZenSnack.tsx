"use client";
/* eslint-disable react/jsx-key */

import { AnimatedElementsAlongPath } from "../Modules";
import { useDeviceSize } from "@/components/Context/DeviceSizeProvider";
export default function WaveZenSnack({ className }: { className?: string }) {
  const deviceSize = useDeviceSize();
  return (
    <>
      {deviceSize === null ? (
        <></>
      ) : (
        <div className={`${className} w-screen overflow-x-hidden`}>
          <div className="z-0 grid scale-[110%] max-md:py-[2vw]">
            <AnimatedElementsAlongPath
              className="col-[1/1] row-[1/1] mt-[2vw] h-full w-full [&_.path]:stroke-[1px]"
              pathData="M.16,7.65C35.03-4.48,69.28.65,103.02,9.52c33.74,8.87,100.74,10.73,139.13-1.87,38.39-12.6,98.88-4.67,128.33,4.2"
              viewBox="0 0 370.63 17.13"
              baseDuration={deviceSize === "lessPab" ? 60 : 30}
              kerningFactor={deviceSize === "lessPab" ? 5000 : 6000}
            >
              {Array.from({ length: deviceSize === "lessPab" ? 17 : 19 }).map(
                (_, index) => (
                  <div
                    key={index}
                    className="bg-[#000] max-md:h-[3.2vw] max-md:w-[2vw] md:h-[2vw] md:w-5"
                  ></div>
                ),
              )}
            </AnimatedElementsAlongPath>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 375.56 33.13"
              className="col-[1/1] row-[1/1] overflow-visible"
            >
              <path
                className="cls-2 fill-none stroke-black max-md:stroke-[20px] md:stroke-[10px]"
                d="M2.79,15.65c34.87-12.13,69.12-7,102.86,1.87,33.74,8.87,100.74,10.73,139.13-1.87,38.39-12.6,98.88-4.67,128.33,4.2"
              />
              <path
                className="fill-none stroke-white max-md:stroke-[10px] md:stroke-[5px]"
                d="M2.79,15.65c34.87-12.13,69.12-7,102.86,1.87,33.74,8.87,100.74,10.73,139.13-1.87,38.39-12.6,98.88-4.67,128.33,4.2"
              />
            </svg>
          </div>
        </div>
      )}
    </>
  );
}
