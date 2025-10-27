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
      className={`${className} relative overflow-x-hidden bg-butter-color max-md:pb-[20vw] max-md:pt-[12vw] md:h-[70vw] md:py-[10vw]`}
    >
      <div className="pointer-events-none absolute z-20 scale-[1.2] max-md:top-[60vw] md:top-[23vw]">
        <WaveButter className="w-screen overflow-x-hidden" />
      </div>
      <section className="grid max-md:mx-[16px] max-md:gap-y-12 md:h-[60vw] md:grid-flow-dense md:grid-cols-[repeat(24,1fr)]">
        <div className="space-y-4 max-md:row-[1/2] md:col-span-12">
          <h1 className="max-md:col-[1/6] max-md:row-[1/3] md:col-[1/15] md:row-[1/4]">
            <span className="font-ob-nar-b font-black uppercase leading-[60%] max-md:text-[14vw] md:text-[10vw]">
              Better
              <br /> Than
              <br />
              Butter
            </span>
          </h1>
          <Certifocations className="justify-self-end max-md:col-[7/-1] max-md:row-[2/3] max-md:w-[80%] md:col-[-11/-1]" />
          <ul className="[&>li]:font-ob-nar-b max-md:relative max-md:col-[7/-1] max-md:row-[1/2] max-md:inline-block max-md:space-y-2 max-md:justify-self-end md:col-[-11/-1] md:space-y-2 max-md:[&>li]:text-[14px] md:[&>li]:text-[18px]">
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

        <div className="self-start max-md:row-[2/3] max-md:mt-[25vw] max-md:space-y-6 md:col-[3/12] md:space-y-8 md:self-end md:pr-[25px]">
          <div className="space-y-2">
            <h2 className="font-ob-nar-b leading-[100%] max-md:text-[7.2vw] md:text-[3.6vw]">
              Zen Snacking
            </h2>
            <h4 className="font-ob-nar-b leading-[100%] max-md:text-[4.8vw] md:text-[2.4vw]">
              Simple, Intentional, Nourishing
            </h4>
          </div>
          <p>
            Crafted with intention, Zen Snack transforms everyday snacking into
            a nourishing ritual—bringing harmony to both mind and body.
          </p>
        </div>
        <div className="max-md:row-[4/5] md:col-[3/12] md:pt-6">
          <Atoms.Buttons.boxLink
            className="max-md:w-full md:w-[30vw]"
            href="/products/zensnack/"
          >
            Read More
          </Atoms.Buttons.boxLink>
        </div>
        <div className="space-y-[1.4vw] max-md:row-[3/4] md:col-[14/-1] md:row-[2/4] md:mx-[25px] md:self-center">
          <div className="space-y-2">
            <h2 className="font-ob-nar-b leading-[100%] max-md:text-[7.2vw] md:text-[3.6vw]">
              For the Mind
            </h2>
            <h4 className="font-ob-nar-b leading-[100%] max-md:text-[4.8vw] md:text-[2.4vw]">
              A mindful pause in your busy day.
            </h4>
          </div>
          <p>
            Slow down, savor each bite, and be present. Zen Snacking is more
            than just eating—it’s an opportunity to reset and reconnect.
          </p>
          <ol
            start={1}
            className="font-ob-nar-b list-decimal space-y-2 pl-[20px] text-[22px] [&_p]:font-sans [&_p]:text-[16px]"
          >
            <li>
              <h4 className="">Pause & Breathe</h4>

              <p>Shift into mindful eating mode.</p>
            </li>
            <li>
              <h4>Savor Each Bite</h4>
              <p>Appreciate the natural ingredients with all 5 senses.</p>
            </li>
            <li>
              <h4>Be Present</h4>
              <p>Slow down and enjoy the moment.</p>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}
