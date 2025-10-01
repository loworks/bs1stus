/* eslint-disable react/no-unescaped-entities */

import React from "react";

export default function Feature4({ className }: { className?: string }) {
  return (
    <section className="space-y-12 max-md:py-[18vw] md:py-[8vw]">
      <div className="max-md:space-y-8 md:space-y-12">
        <h2 className="font-ob-nar-b flex items-center justify-center max-md:gap-x-2 md:md:gap-x-4">
          <span className="leading-[80%] max-md:text-[18vw] md:text-[11vw]">
            4
          </span>
          <span className="leading-[100%] max-md:text-[8vw] md:text-[3.6vw]">
            FEATURES OF
          </span>{" "}
          <span className="text-center leading-[100%]">
            <span className="leading-[100%] max-md:text-[12vw] md:text-[8vw]">
              CRISPS
            </span>
            <br />{" "}
            <span className="leading-[80%] max-md:text-[4.8vw] md:text-[2.4vw]">
              SERIES
            </span>
          </span>
        </h2>
        <p className="max-md:mx-[16px] md:mx-auto md:w-[50vw]">
          Great snacks do more than just taste good—they create a positive
          impact. Our crisps are crafted with fresh, ethically sourced
          ingredients, supporting farmers, protecting the planet, and offering
          pure, guilt-free enjoyment for all. Here’s what makes them truly
          special.
        </p>
      </div>
      <ul className="[&_h3]:font-ob-nar-b justify-between gap-x-8 max-md:mx-[16px] max-md:space-y-10 md:mx-[25px] md:flex [&_li]:flex-1 max-md:[&_li]:space-y-4 md:[&_li]:space-y-8">
        <li>
          <h3 className="flex items-end max-md:gap-x-2 md:gap-x-4">
            <span className="leading-[100%] max-md:text-[12vw] md:text-[3.8vw]">
              1
            </span>
            <span className="leading-[100%] max-md:text-[5.4vw] md:text-[1.6vw]">
              Farm Fresh
              <br />
              Ingredients
            </span>
          </h3>
          <p>
            We use freshly harvested coconuts and cacao from trusted farms,
            processing them and cacao immediately to lock in their natural
            flavor and rich taste.
          </p>
        </li>
        <li>
          <h3 className="flex items-end max-md:gap-x-2 md:gap-x-4">
            <span className="leading-[100%] max-md:text-[12vw] md:text-[3.8vw]">
              2
            </span>
            <span className="leading-[100%] max-md:text-[5.4vw] md:text-[1.6vw]">
              10+ Years of Farmer
              <br />
              Empowerment
            </span>
          </h3>
          <p>
            For over a decade, our local partners have empowered farmers with
            sustainable, fair trade, and organic practices. We proudly support
            their mission through our brand.
          </p>
        </li>
        <li>
          <h3 className="flex items-end max-md:gap-x-2 md:gap-x-4">
            <span className="leading-[100%] max-md:text-[12vw] md:text-[3.8vw]">
              3
            </span>
            <span className="leading-[100%] max-md:text-[5.4vw] md:text-[1.6vw]">
              Naturally Sweet,
              <br />
              Low-GI
            </span>
          </h3>
          <p>
            Our organic coconut nectar provides rich sweetness without spiking
            blood sugar, perfect for mindful eaters.
          </p>
        </li>
        <li>
          <h3 className="flex items-end max-md:gap-x-2 md:gap-x-4">
            <span className="leading-[100%] max-md:text-[12vw] md:text-[3.8vw]">
              4
            </span>
            <span className="leading-[100%] max-md:text-[5.4vw] md:text-[1.6vw]">
              Shade-Grown
              <br />
              Harmony
            </span>
          </h3>
          <p>
            Nestled beneath coconut trees, cacao thrives in their natural shade,
            growing alongside the very ingredients that make this crisp
            special—harvested from the same land, in perfect harmony.
          </p>
        </li>
      </ul>
    </section>
  );
}
