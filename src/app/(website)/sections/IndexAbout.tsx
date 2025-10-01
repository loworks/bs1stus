/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */

"use client";
import { useDeviceSize } from "@/components/Context/DeviceSizeProvider";
import {
  AnimatedElementsAlongPath,
  AnimatedTextAlongPath,
} from "@/components/Modules";

import React from "react";

export default function IndexAbout({
  className,
  ...props
}: {
  className?: string;
} & React.ComponentProps<"div">) {
  const deviceSize = useDeviceSize();

  return (
    <>
      <section
        className={`${className} relative overflow-x-hidden max-md:space-y-8 max-md:pb-[12vw] max-md:pt-[24vw] md:pt-[8vw]`}
      >
        <div className="absolute right-[-7vw] z-0 grid w-[30%] items-center max-md:top-8 md:top-0">
          {deviceSize === null ? (
            <></>
          ) : (
            <AnimatedTextAlongPath
              className="max-md:ml-[10px] md:scale-75 [&_.path]:max-md:stroke-[40px] [&_.path]:md:stroke-[27px]"
              pathData="M55.92,231.56c1.47-47.85-30.89-76.46-24.75-154.86C35.59,20.13,99.72-5.58,133.46,29.47c17.92,18.61,9,59.61-.08,70.69-19.74,24.07-40.92,7.52-34.86-11.59,9.08-28.61,39.65-34.67,72.96-31.75,44.38,3.89,73.2,52.97,28.59,91.62-56.15,48.64-148.73,30.75-191.55,65.54"
              viewBox="0 0 235.9 231.97"
              baseDuration={deviceSize === "lessPab" ? 300 : 100}
              kerningFactor={deviceSize === "lessPab" ? 10000 : 6000}
            >
              <div className="font-ob-nar-b font-bold uppercase leading-[100%] text-[#fffabe] max-md:text-[3vw] md:text-[2.4vw]">
                Woman Owned Woman Owned Woman Owned Woman Owned
              </div>
            </AnimatedTextAlongPath>
          )}
        </div>
        {deviceSize === null ? (
          <></>
        ) : (
          <div className="absolute z-0 grid -rotate-12 items-center max-md:left-[-6vw] max-md:top-3 max-md:w-[25vw] md:left-[-2vw] md:top-[9vw] md:w-[20%]">
            <AnimatedElementsAlongPath
              className="col-[1/1] row-[1/1] h-full w-full self-center justify-self-center stroke-black [&_.path]:stroke-[1px]"
              viewBox="0 0 254.93 233.7"
              pathData="M76.77,221.85C27.08,219.74,10.51,148.2,8.58,92.39c-.89-25.62,5.97-52.72,25.7-69.09C54,6.92,84.17,3.29,106.01,16.69c21.85,13.41,30.93,44.89,27.18,70.25-1.56,10.55-17.21,10.52-19.94-6.02-2.24-13.57-1.98-28.45,4.14-40.76,10.58-21.29,45.66-31.21,68.99-26.63s42.72,22.69,52.16,44.52,9.75,46.82,4.43,70c-5.32,23.18-31.91,89.39-73.15,97.32"
              baseDuration={deviceSize === "lessPab" ? 60 : 35}
              kerningFactor={deviceSize === "lessPab" ? 5000 : 6000}
            >
              {Array.from({ length: 18 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-[#000] max-md:h-[2.8vw] max-md:w-[2vw] md:h-[1.4vw] md:w-5"
                ></div>
              ))}
            </AnimatedElementsAlongPath>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 254.93 233.7"
              className="col-[1/1] row-[1/1] self-center justify-self-center overflow-visible"
            >
              <path
                className="cls-2 fill-none stroke-black max-md:stroke-[30px] md:stroke-[24px]"
                d="M76.77,221.85C27.08,219.74,10.51,148.2,8.58,92.39c-.89-25.62,5.97-52.72,25.7-69.09C54,6.92,84.17,3.29,106.01,16.69c21.85,13.41,30.93,44.89,27.18,70.25-1.56,10.55-17.21,10.52-19.94-6.02-2.24-13.57-1.98-28.45,4.14-40.76,10.58-21.29,45.66-31.21,68.99-26.63,23.33,4.58,42.72,22.69,52.16,44.52,9.44,21.82,9.75,46.82,4.43,70-5.32,23.18-31.91,89.39-73.15,97.32"
              />
              <path
                className="cls-1 fill-none stroke-white max-md:stroke-[15px] md:stroke-[16px]"
                d="M76.77,221.85C27.08,219.74,10.51,148.2,8.58,92.39c-.89-25.62,5.97-52.72,25.7-69.09C54,6.92,84.17,3.29,106.01,16.69c21.85,13.41,30.93,44.89,27.18,70.25-1.56,10.55-17.21,10.52-19.94-6.02-2.24-13.57-1.98-28.45,4.14-40.76,10.58-21.29,45.66-31.21,68.99-26.63,23.33,4.58,42.72,22.69,52.16,44.52,9.44,21.82,9.75,46.82,4.43,70-5.32,23.18-31.91,89.39-73.15,97.32"
              />
            </svg>

            <svg
              className="absolute left-[48%] translate-x-[-50%] max-md:bottom-[-1.5vw] max-md:h-[7.5vw] md:bottom-[-1vw] md:h-[4.9vw]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 126.59 61.36"
            >
              <path d="M126.31,44.58c.66,1.22.01,1.54-1.08,2.46-4.73,3.99-13.91,5.77-19.65,6.17-15.3,13.97-36.47,5.91-54.99,6.81-2.69-.06-4.83-.66-6.62-2.16-8.06-.67-18.76-1.42-25.07-7.15-5.75.59-12.61-1.17-16.76-4.08-1.71-1.2-2.6-2.75-1.91-4.44-.72-.24,6.5-17.98,6.99-17.82.74-.97,1.55-1.35,3.17-.98,3.01.68,7.42,3.01,9.52,2.47,1.92-4.96,8.28-4.96,11.72-8.78,1.48-3.56-.85-7.79.83-11.53,1.25-5.39,9.02-7.74,12.47-2.93,3.78,5.14,3.24,12.56,1.2,18.95,6.19.81,12.91,1.07,19.1,1.24l2.28.07c3.28.1,8.54.14,13.4.21-1.8-6.42-1.1-13.54.91-17.27,4.38-8.15,14.43-7.1,14.42,3.6,0,3.06-.77,8.01.09,9.41,1.75,2.81,6.32,1.03,10.22,9.6,2.04.63,6.6-1.44,9.58-2.34,1.79-.55,2.67-.17,3.08.75.28,0,7.1,17.4,7.09,17.76ZM121.89,43.97c-.72-1.77-5.14-12.52-5.82-14.21-3.83,1.55-8.17,3.79-12.11,2.11-1.1-1.01-1.23-2.67-2.2-3.84-1.64-3.25-6.27-3.08-8.6-5.46-3.77-4.12.21-9.56-1.07-14.14-.45-2.16-2.64-3.9-4.78-2.53-7.92,7.61,1.78,21.46-3.71,21.27-11.79-.1-21.29-.46-32.65-.74-4.72-.75-5.97,4.77-1.65,6.25,5.93,1.6,18.48.96,24.18,1.32,2.63.02,2.55,4.11-.06,4.05-2.88-.29-20.42.22-25.2-1.46-3.44,1.5-2.32,7.2,1.09,7.85,3.17.35,6.81.55,10.5.66,4.77.14,9.62.12,13.64.09,2.58-.3,3.03,3.72.46,4.01-7.85.12-17.28.09-25.07-.75-3.55.1-4.7,6.01-.93,7.09,5.5,1.02,11.82.44,17.27,1.02,12.43.39,28.33,3.55,37.68-6.43.36-.53.95-.86,1.6-.9,6.26-.27,12.48-1.11,17.45-5.25ZM43.79,25.33c-1.51.04-2.93-1.34-2.27-2.87,1.44-3.51,2.07-6.77,2.15-9.55-.03-3.45-.43-8.23-3.83-8.87-6.85.78-2.22,9.57-4.19,13.96-1.44,4.64-8.67,5.72-11.32,8.37-.65.7-.68,1.08-1.23,2.21-3.24,3.22-8.98.11-12.93-.71-1.41,3.59-4.66,11.56-6.06,15.12,3.95,3.86,10.68,3.73,15.74,3.68,1.5-.03,1.67,1.27,2.88,2.07,2.42,1.67,5.18,2.48,8.42,3.3,3.52.84,7.34,1.37,10.46,1.64-.49-2.82.61-5.79,2.78-7.62-2.95-3.18-3.28-8.72.1-11.77-2.3-2.4-2.45-6.27-.71-8.97Z" />
              <path
                className="fill-white"
                d="M116.06,29.76c.69,1.69,5.1,12.44,5.82,14.21-4.97,4.15-11.19,4.99-17.45,5.25-.65.04-1.24.37-1.6.9-9.35,9.98-25.25,6.82-37.68,6.43-5.45-.58-11.77,0-17.27-1.02-3.77-1.07-2.62-6.98.93-7.09,7.79.84,17.22.87,25.07.75,2.57-.28,2.12-4.3-.46-4.01-4.02.04-8.86.05-13.64-.09-3.69-.11-7.33-.31-10.5-.66-3.41-.65-4.53-6.35-1.09-7.85,4.78,1.68,22.32,1.17,25.2,1.46,2.62.06,2.69-4.03.06-4.05-5.7-.36-18.25.28-24.18-1.32-4.32-1.48-3.08-7.01,1.65-6.25,11.36.28,20.86.64,32.65.74,5.49.19-4.21-13.66,3.71-21.27,2.15-1.37,4.33.36,4.78,2.53,1.28,4.58-2.7,10.02,1.07,14.14,2.32,2.38,6.95,2.21,8.6,5.46.98,1.17,1.1,2.83,2.2,3.84,3.95,1.69,8.28-.55,12.11-2.11Z"
              />
              <path
                className="fill-white"
                d="M41.51,22.46c-.65,1.52.76,2.91,2.27,2.87-1.74,2.7-1.59,6.57.71,8.97-3.38,3.05-3.05,8.59-.1,11.77-2.17,1.83-3.28,4.8-2.78,7.62-3.12-.26-6.95-.8-10.46-1.64-3.23-.82-6-1.64-8.42-3.3-1.22-.8-1.38-2.1-2.88-2.07-5.06.05-11.79.18-15.74-3.68,1.39-3.55,4.65-11.53,6.06-15.12,3.95.82,9.69,3.93,12.93.71.54-1.14.58-1.51,1.23-2.21,2.65-2.65,9.88-3.73,11.32-8.37,1.97-4.4-2.66-13.18,4.19-13.96,3.4.64,3.8,5.42,3.83,8.87-.08,2.78-.72,6.04-2.15,9.55Z"
              />
            </svg>
          </div>
        )}
        <div className="relative z-10 max-md:mx-[16px] max-md:space-y-[8vw] md:mx-[25px] md:space-y-[4vw]">
          <div className="space-y-4">
            <h1 className="font-ob-nar-b text-center font-extrabold leading-[90%] max-md:text-[12.5vw] md:text-[8.5vw]">
              Better Food, <br />
              Better Future, <br />
              Better Humans
            </h1>
          </div>

          <p
            className={`mx-auto md:w-[48vw] md:text-[1.4vw] md:leading-[125%]`}
          >
            At BROWN SUGAR 1ST, we believe that daily food nourishes not only
            the body but also the richness of the human spirit. It fosters
            kindness that extends to families, communities, and beyond, creating
            a cycle of care that connects the Earth's blessings to future
            generations. Guided by this belief, we grow our business, generate
            appropriate profits, and reinvest in realizing our vision,
            cultivating a virtuous cycle of smiles and well-being.
          </p>
        </div>
      </section>
    </>
  );
}
