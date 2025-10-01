/* eslint-disable react/no-unescaped-entities */

import React from "react";
import * as Atoms from "@/components/Atoms";
import Image from "next/image";
export default function BetterforYou({ className }: { className?: string }) {
  return (
    <section className="pb-[10vw]">
      <article
        className={`grid grid-flow-dense auto-rows-[1.9583vw] grid-cols-[repeat(48,1fr)] max-md:mx-[16px] max-md:gap-1 max-md:pt-[58vw] md:mx-[25px] md:gap-4`}
      >
        {/*  <div className="h-full space-y-4 max-md:col-[1/-1] max-md:row-[1/span_1] max-md:mt-[-58vw] max-md:text-[3.6vw] md:col-[13/-1] md:row-[23/span_5]">
         <div>
            <h2 className="font-bold">Mtn Dew x NBA</h2>
            <p>
              The Courtside Project Campaign and
              <br />
              NBA All-Star Weekend Experience{" "}
            </p>
          </div>
          <ul>
            <li>Creative Direction: Kristen Shenk</li>{" "}
            <li>Design: Kristen Shenk, Burn & Broad</li>{" "}
            <li>Experience Design: Kristen Shenk, Della Tosin, Motive</li>
            <li>Production: Motive</li>
            <li>Photography: Jared Ryder</li>
            <li>Campaign Strategy: Richie Cruz, Motive</li>
          </ul>
        </div>*/}
        <div className="relative col-[1/25] row-[1/span_20]">
          <Image
            src={"/btb-package1.webp"}
            alt={"mtn-nba01"}
            width={2400}
            height={1600}
            className={`h-full w-full object-cover`}
            priority
          />
        </div>{" "}
        <div className="relative col-[25/-1] row-[1/span_20]">
          <Image
            src={"/btb-package2.webp"}
            alt={"mtn-nba02"}
            width={2400}
            height={1600}
            className="h-full w-[100%] object-cover"
            priority
          />
        </div>
      </article>
    </section>
  );
}
