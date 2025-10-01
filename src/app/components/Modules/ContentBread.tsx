/* eslint-disable react/no-unescaped-entities */

import React from "react";
import * as Atoms from "../Atoms";
import * as Modules from "@/components/Modules";
import Image from "next/image";
export default function ContentBread({ className }: { className?: string }) {
  return (
    <div className={`${className} `}>
      <div className="relative z-0 max-md:px-[16px] md:px-[25px]">
        <p className="font-ob-nar leading-[0.95] tracking-tight max-md:text-[16vw] md:text-[min(16vw,246px)]">
          Fluffy
        </p>
        <div className="flex">
          <p className="font-ob-nar leading-[0.95] tracking-tighter max-md:text-[16vw] md:text-[min(16vw,246px)]">
            &
          </p>{" "}
          <p className="font-ob-nar leading-[0.95] tracking-tighter max-md:text-[16vw] md:text-[min(16vw,246px)]">
            Sweet
          </p>
        </div>
      </div>
      <div className="grid gap-[2rem] max-md:px-[16px] md:grid-cols-[repeat(24,1fr)] md:px-[25px]">
        <div className="md:col-[1/13] md:aspect-square md:overflow-hidden">
          <Image
            className="h-full w-full object-cover"
            src={"/und-bread-03.webp"}
            alt={"und-bread-03"}
            width={2000}
            height={1630}
            quality={70}
          />
        </div>
        <div className="flex flex-col gap-6 md:col-[13/-1]">
          <p className="font-ob-nar md:text-[min(1.2vw,18px)]">
            Our bread is made with the utmost care and attention, and has a
            fluffy, sweet flavor. You can enjoy it not only as a side dish to
            complement the ingredients, but also as the star of the meal. Please
            enjoy the bread as the main ingredient without anything else.
            Butter, cheese, and honey are simple ways to taste the deliciousness
            of the bread.
          </p>
          <Atoms.Buttons.defaultButton className="flex w-[100%] items-center justify-between gap-[.5rem] md:w-[60%]">
            Almond Milk Bread
          </Atoms.Buttons.defaultButton>
        </div>
        <div className="md:col-[9/-1] md:aspect-square md:overflow-hidden">
          <Image
            className="h-full w-full object-cover"
            src={"/und-bread-05.webp"}
            alt={"und-bread-05"}
            width={2000}
            height={2000}
            quality={70}
          />
        </div>
        <div className="md:col-[1/9] md:row-[2/3] md:aspect-square md:self-end md:overflow-hidden">
          <Image
            className="h-full w-full object-cover"
            src={"/und-bread-04.webp"}
            alt={"und-bread-04"}
            width={1600}
            height={2000}
            quality={70}
          />
        </div>
        <div className="md:col-[1/9] md:aspect-square md:self-end md:overflow-hidden">
          <Image
            className="h-full w-full object-cover"
            src={"/und-bread-02.webp"}
            alt={"und-bread-02"}
            width={1600}
            height={2000}
            quality={70}
          />
        </div>
        <div className="flex flex-col gap-6 md:col-[13/-1] md:self-end">
          <Atoms.Buttons.defaultButton className="md:w-[60%]">
            Recipe
          </Atoms.Buttons.defaultButton>
          <p className="font-ob-nar md:text-[min(1.2vw,18px)]">
            When toasted, the bread becomes crispy on the outside and fluffy on
            the inside. When you sandwich meat or eggs between the bread, it
            becomes the best supporting role to enhance the deliciousness of the
            ingredients. You can enjoy unlimited flavors of this bread according
            to your taste.
          </p>
        </div>
      </div>
    </div>
  );
}
