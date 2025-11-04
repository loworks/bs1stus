/* eslint-disable react/no-unescaped-entities */

import React from "react";
import * as Atoms from "@/components/Atoms";

import Certifocations from "@/(contents)/products/better-than-butter/components/Certifications";
import WaveButter from "@/(contents)/products/better-than-butter/components/WaveButter";
export default function ContentBetterThanButter({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={`${className} relative overflow-x-hidden bg-butter-color max-md:pt-[12vw] md:pt-[3vw]`}
    >
      <div className="pointer-events-none absolute z-20 scale-[1.2] max-md:top-[60vw] md:top-[23vw]">
        <WaveButter className="w-screen overflow-x-hidden" />
      </div>
      <section className="">
        <div className="grid max-md:mx-[16px] max-md:grid-cols-[repeat(12,1fr)] md:mx-[25px] md:grid-cols-[repeat(24,1fr)]">
          <h1 className="max-md:col-[1/6] max-md:row-[1/3] md:col-[1/15] md:row-[1/4]">
            <span className="font-ob-nar-b font-black uppercase leading-[60%] max-md:text-[14vw] md:text-[10vw]">
              Better
              <br /> Than
              <br />
              Butter
            </span>
          </h1>
          <h2 className="font-ob-nar leading-[120%] max-md:col-[1/-1] max-md:mt-[5vw] md:col-[-11/-1] md:text-[1.75vw]">
            Loved by Vegans, Trusted by Chefs. A vegan butter made from 96%
            coconut—simple, clean, and irresistibly delicious. It delivers the
            rich satisfaction of dairy butter, without compromise.
          </h2>
          <Certifocations className="justify-self-end max-md:col-[7/-1] max-md:row-[2/3] max-md:w-[80%] md:col-[-11/-1]" />
          <ul className="[&>li]:font-ob-nar-b justify-self-end max-md:relative max-md:col-[7/-1] max-md:row-[1/2] max-md:inline-block max-md:space-y-2 max-md:justify-self-end md:col-[-11/-1] md:space-y-2 max-md:[&>li]:text-[14px] md:[&>li]:text-[18px]">
            <li>
              <Atoms.SvgElements.IconCheck className="align-middle max-md:w-[20px] md:w-[30px]" />
              <span className="align-middle leading-[100%]">
                For Professionals
              </span>
            </li>
            <li>
              <Atoms.SvgElements.IconCheck className="align-middle max-md:w-[20px] md:w-[30px]" />
              <span className="align-middle leading-[100%]">
                Beyond Substitution
              </span>
            </li>
            <li>
              <Atoms.SvgElements.IconCheck className="align-middle max-md:w-[20px] md:w-[30px]" />
              <span className="align-middle leading-[100%]">
                Superior Performance
              </span>
            </li>
          </ul>
        </div>
        <div className="bg-[#eeb86b] max-md:mt-[20vw] max-md:space-y-10 max-md:px-[15px] max-md:py-[15vw] md:mt-[10vw] md:py-[5vw]">
          <div className="self-start max-md:row-[2/3] max-md:space-y-6 md:col-[3/12] md:mx-[25px] md:space-y-8 md:self-end md:pr-[25px]">
            <div className="space-y-2">
              <h2 className="font-ob-nar-b leading-[100%] max-md:text-[7.2vw] md:text-[2.8vw]">
                Coconut, But Tottaly Butter
              </h2>
            </div>
            <h2 className="leading-[120%] max-md:mt-[5vw] md:w-[40vw]">
              96% coconut-based, organic, and meticulously crafted for culinary
              professionals. Designed to enhance flavor, texture, and
              versatility in high-level kitchens. It’s more than an
              alternative—it’s a revolution in plant-based butter.
            </h2>
          </div>
          <div className="max-md:row-[4/5] md:col-[3/12] md:mx-[25px] md:pt-6">
            <Atoms.Buttons.boxLink
              className="max-md:w-full md:w-[30vw]"
              href="/products/better-than-butter/"
            >
              Read More
            </Atoms.Buttons.boxLink>
          </div>
        </div>
      </section>
    </div>
  );
}
