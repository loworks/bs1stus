"use client";
/* eslint-disable react/jsx-key */
import { useDeviceSize } from "@/components/Context/DeviceSizeProvider";
export default function LineButter({ className }: { className?: string }) {
  const deviceSize = useDeviceSize();
  return (
    <div className={`${className}`}>
      <ul
        className={`font-ob-nar-b text-butter-color col-[1/2] row-[1/2] flex animate-marqueereverse items-center justify-around whitespace-nowrap uppercase leading-[100%]`}
      >
        <li>BETTER THAN BUTTER</li>
        <li>BETTER THAN BUTTER</li>
        <li>BETTER THAN BUTTER</li>
        {deviceSize === "moreTab" ? (
          <>
            <li>BETTER THAN BUTTER</li>
            <li>BETTER THAN BUTTER</li>
          </>
        ) : (
          <></>
        )}
      </ul>
      <ul className="font-ob-nar-b text-butter-color col-[1/2] row-[1/2] flex animate-marquee2reverse items-center justify-around whitespace-nowrap uppercase leading-[100%]">
        <li>BETTER THAN BUTTER</li>
        <li>BETTER THAN BUTTER</li>
        <li>BETTER THAN BUTTER</li>
        {deviceSize === "moreTab" ? (
          <>
            <li>BETTER THAN BUTTER</li>
            <li>BETTER THAN BUTTER</li>
          </>
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
}
