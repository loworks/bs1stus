"use client";
/* eslint-disable react/jsx-key */
import { useDeviceSize } from "@/components/Context/DeviceSizeProvider";
export default function LineJournal({ className }: { className?: string }) {
  const deviceSize = useDeviceSize();
  return (
    <div className={`${className}`}>
      <ul
        className={`font-ob-nar-b col-[1/2] row-[1/2] flex animate-marqueereverse items-center justify-around whitespace-nowrap uppercase leading-[100%] text-crisps-color`}
      >
        <li>Journal</li>
        <li>Journal</li>
        <li>Journal</li>
        {deviceSize === "moreTab" ? (
          <>
            <li>Journal</li>
            <li>Journal</li>
          </>
        ) : (
          <></>
        )}
      </ul>
      <ul className="font-ob-nar-b col-[1/2] row-[1/2] flex animate-marquee2reverse items-center justify-around whitespace-nowrap uppercase leading-[100%] text-crisps-color">
        <li>Journal</li>
        <li>Journal</li>
        <li>Journal</li>
        {deviceSize === "moreTab" ? (
          <>
            <li>Journal</li>
            <li>Journal</li>
          </>
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
}
