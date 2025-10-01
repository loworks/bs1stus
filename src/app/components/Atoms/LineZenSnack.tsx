"use client";
/* eslint-disable react/jsx-key */
import Image from "next/image";

export default function LineZenSnack({
  className,
  direction = "left",
}: {
  className?: string;
  direction?: string;
}) {
  return (
    <div className={`${className}`}>
      <ul
        className={`${direction === "left" ? "animate-marqueereverse" : "animate-marquee"} col-[1/2] row-[1/2] flex items-center max-md:w-[200vw]`}
      >
        <li>
          <Image
            className={""}
            src="/line.jpg"
            alt="hero"
            width={2777}
            height={1600}
            priority={true}
          />
        </li>
      </ul>
      <ul
        className={`col-[1/2] row-[1/2] flex ${direction === "left" ? "animate-marquee2reverse" : "animate-marquee2"} items-center max-md:w-[200vw]`}
      >
        <li>
          <Image
            className={""}
            src="/line.jpg"
            alt="hero"
            width={2777}
            height={1600}
            priority={true}
          />
        </li>
      </ul>
    </div>
  );
}
