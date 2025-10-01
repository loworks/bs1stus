/* eslint-disable react/no-unescaped-entities */

import React from "react";
import * as Atoms from "@/components/Atoms";
export default function BetterforYou({ className }: { className?: string }) {
  return (
    <section className="pb-[10vw]">
      <div className="max-md:space-y-8 md:space-y-12">
        <h2 className="font-ob-nar-b text-center leading-[100%] max-md:text-[10vw] md:text-[4.8vw]">
          Better for You
          <br /> Better for the Planet
        </h2>
        <ul className="[&>li]:font-ob-nar-b max-md:relative max-md:left-[50%] max-md:inline-block max-md:w-auto max-md:translate-x-[-50%] max-md:space-y-2 md:mx-[10vw] md:flex md:justify-around [&>li]:space-x-1 md:[&>li]:text-[18px]">
          <li>
            <Atoms.SvgElements.IconCheck className="w-[30px] align-middle" />
            <span className="align-middle leading-[100%]">
              Packed with dietary fiber
            </span>
          </li>
          <li>
            <Atoms.SvgElements.IconCheck className="w-[30px] align-middle" />
            <span className="align-middle leading-[100%]">
              Fair Trade certified
            </span>
          </li>
          <li>
            <Atoms.SvgElements.IconCheck className="w-[30px] align-middle" />
            <span className="align-middle leading-[100%]">Vegan</span>
          </li>
          <li>
            <Atoms.SvgElements.IconCheck className="w-[30px] align-middle" />
            <span className="align-middle leading-[100%]">Gluten-free</span>
          </li>
          <li>
            <Atoms.SvgElements.IconCheck className="w-[30px] align-middle" />
            <span className="align-middle leading-[100%]">No sugar added</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
