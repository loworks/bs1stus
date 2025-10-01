/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */

import * as Organism from "../../components/Organisms";
import { AnimatedTextAlongPath } from "@/components/Modules";
import React, { Suspense } from "react";
import { getAllShop } from "@/Libs/contentful/api";
import IndexShopTitle from "./IndexShopTitle";
import { Buttons } from "@/components/Atoms";
import { TransitionLink } from "@/Libs/Transitions";

export default async function IndexShop({
  className,
  ...props
}: {
  className?: string;
} & React.ComponentProps<"div">) {
  const products: any = await getAllShop(false, 3, true);
  products;
  return (
    <>
      <section className={`${className} overflow-x-hidden`}>
        <IndexShopTitle />
        <div className="bg-crisps-color2 pt-[5vw] max-md:space-y-[10vw] max-md:pb-[10vw] md:space-y-[6vw]">
          <p className="relative z-10 mx-auto max-md:mx-[16px] md:w-[64vw] md:text-[18px]">
            At BROWN SUGAR 1ST., we create gentle, trustworthy products for the
            whole family by asking ourselves one simple question: “Would I give
            this to my own child?” From carefully chosen ingredients to every
            step of the production process, we approach each detail with care.
            We prioritize organic and fair trade practices, and work closely
            with producers we know and trust. Our lineup includes the{" "}
            <TransitionLink
              href="/products/zensnack/"
              className="font-ob-nar-b uppercase"
            >
              Zen Series
            </TransitionLink>
            , made with nourishing ingredients to bring balance to both body and
            mind; the{" "}
            <TransitionLink
              href="/products/crisps/"
              className="font-ob-nar-b uppercase"
            >
              Crisps Series{" "}
            </TransitionLink>
            , plant-based snacks that are as kind to your body as they are
            delicious; and{" "}
            <span className="font-ob-nar-b uppercase">Better Than Butter</span>,
            a rich and satisfying spread made from 96% organic, coconut-derived
            ingredients. Each series reflects our deep commitment to quality,
            transparency, and everyday wellness.
          </p>
          <div className="bg-crisps-color2 max-md:space-y-[10vw] md:space-y-[4vw]">
            <Suspense fallback={<div>Loading...</div>}>
              <Organism.ProductList
                products={products}
                className={`relative mx-auto grid items-center justify-items-center max-md:mx-[16px] md:grid-cols-12`}
              />
            </Suspense>

            <Buttons.boxLink
              className="mx-auto max-md:w-[75vw] md:w-[30vw]"
              href="/shop/"
            >
              VIEW ALL SHOP
            </Buttons.boxLink>
          </div>
        </div>
      </section>
    </>
  );
}
