/* eslint-disable react/no-unescaped-entities */

import React from "react";
import * as Atoms from "@/components/Atoms";
export default function Feature({ className }: { className?: string }) {
  return (
    <section className="space-y-8">
      <h2 className="font-ob-nar-b text-center leading-[100%] max-md:text-[6.2vw] md:text-[3.6vw]">
        We are passionate about sourcing
        <br />
        only the best ingredients
      </h2>
      <p className="max-md:mx-[16px] md:mx-auto md:w-[40vw]">
        All of our products begin with the question, 'Would we want to feed this
        to our own children?' <br />
        To bring this vision to life, we are committed to ensuring the quality
        and safety of our products, upholding 5 promises.
      </p>
      <ul className="[&>li]:font-ob-nar-b max-md:relative max-md:left-[50%] max-md:inline-block max-md:w-auto max-md:translate-x-[-50%] max-md:space-y-2 md:mx-[10vw] md:flex md:justify-around [&>li]:space-x-1 md:[&>li]:text-[18px]">
        <li>
          <Atoms.SvgElements.IconCheck className="w-[30px] align-middle" />
          <span className="align-middle leading-[100%]">Vegan</span>
        </li>
        <li>
          <Atoms.SvgElements.IconCheck className="w-[30px] align-middle" />
          <span className="align-middle leading-[100%]">No sugar added</span>
        </li>
        <li>
          <Atoms.SvgElements.IconCheck className="w-[30px] align-middle" />
          <span className="align-middle leading-[100%]">No chemicals</span>
        </li>
        <li>
          <Atoms.SvgElements.IconCheck className="w-[30px] align-middle" />
          <span className="align-middle leading-[100%]">
            No artificial colors
          </span>
        </li>
        <li>
          <Atoms.SvgElements.IconCheck className="w-[30px] align-middle" />
          <span className="align-middle leading-[100%]">
            No artificial flavors
          </span>
        </li>
      </ul>
    </section>
  );
}
