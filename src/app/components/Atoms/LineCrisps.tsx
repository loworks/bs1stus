"use client";
/* eslint-disable react/jsx-key */
import { useDeviceSize } from "@/components/Context/DeviceSizeProvider";
export default function LineCrisps({ className }: { className?: string }) {
  const deviceSize = useDeviceSize();
  return (
    <div className={`${className}`}>
      <ul
        className={`font-ob-nar-b col-[1/2] row-[1/2] flex animate-marqueereverse items-center justify-around whitespace-nowrap uppercase leading-[100%] text-crisps-color`}
      >
        <li>CRISPS SERIES</li>
        <li>CRISPS SERIES</li>
        <li>CRISPS SERIES</li>
        {deviceSize === "moreTab" ? (
          <>
            <li>CRISPS SERIES</li>
            <li>CRISPS SERIES</li>
          </>
        ) : (
          <></>
        )}
      </ul>
      <ul className="font-ob-nar-b col-[1/2] row-[1/2] flex animate-marquee2reverse items-center justify-around whitespace-nowrap uppercase leading-[100%] text-crisps-color">
        <li>CRISPS SERIES</li>
        <li>CRISPS SERIES</li>
        <li>CRISPS SERIES</li>
        {deviceSize === "moreTab" ? (
          <>
            <li>CRISPS SERIES</li>
            <li>CRISPS SERIES</li>
          </>
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
}
