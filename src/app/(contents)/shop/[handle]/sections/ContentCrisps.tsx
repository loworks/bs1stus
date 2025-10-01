/* eslint-disable react/no-unescaped-entities */

import React from "react";
import * as Atoms from "@/components/Atoms";

import Image from "next/image";
import WaveCrisps from "@/(contents)/products/crisps/components/WaveCrisps";
export default function ContentCrisps({ className }: { className?: string }) {
  return (
    <div
      className={`${className} relative bg-crisps-color2 py-[10vw] md:h-[70vw]`}
    >
      <div className="pointer-events-none absolute z-20 overflow-x-hidden max-md:top-[22vw] md:top-0">
        <WaveCrisps className="max-md:py-6" />
      </div>
      <section className="max-md:mx-[16px] md:grid md:h-[60vw] md:grid-cols-[repeat(24,1fr)]">
        <div className="col-span-12 space-y-4">
          <h1 className="md:text-center">
            <span className="font-ob-nar-b font-black uppercase leading-[100%] max-md:text-[18vw] md:text-[10vw]">
              Crisps
            </span>
            <br />
            <span className="font-ob-nar-b leading-[70%] max-md:text-[8vw] md:text-[5vw]">
              Series
            </span>
          </h1>
          <h2 className="font-ob-nar-b leading-[100%] max-md:text-[4.8vw] md:text-center md:text-[3.2vw]">
            3 Simple Ingredients. <br />
            Purely Delicious.
          </h2>
        </div>

        <div className="col-[12/-1] self-start max-md:mt-[25vw] max-md:space-y-6 md:space-y-8 md:pr-[25px]">
          <h4 className="font-ob-nar-b leading-[100%] max-md:mr-[16px] max-md:text-right max-md:text-[8vw] md:text-[4.2vw]">
            Better Food, <br />
            Better Future, <br />
            Better Humans
          </h4>

          <p>
            Great snacks do more than just taste good—they create a positive
            impact. Our crisps arecrafted with fresh, ethically sourced
            ingredients, supporting farmers, protecting the planet,and offering
            pure, guilt-free enjoyment for all. Here’s what makes them truly
            special.
          </p>
          <Atoms.Buttons.boxLink
            className="max-md:w-full md:w-[30vw]"
            href="/products/crisps/"
          >
            Read More
          </Atoms.Buttons.boxLink>
        </div>
      </section>
    </div>
  );
}
