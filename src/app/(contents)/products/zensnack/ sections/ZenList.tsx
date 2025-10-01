"use server";
/* eslint-disable react/jsx-key */
import React from "react";
import { draftMode } from "next/headers";
import * as Modules from "@/components/Modules";
import Image from "next/image";
import { getProductsByCategory } from "@/Libs/contentful/api";
import { Site } from "@/components/utils";
import { LineCrisps, LineZenSnack } from "@/components/Atoms";

export default async function ZenList({
  className,
  isCategory = false,
}: {
  className?: string;
  isCategory?: boolean;
}) {
  const preview =
    process.env.NODE_ENV === "development" || (await draftMode()).isEnabled;

  const products: any = await getProductsByCategory("zensnack", preview, 0);

  const items = products.data.contentShopCollection.items;
  items.sort(function (a, b) {
    a = new Date(a.date);
    b = new Date(b.date);
    return a > b ? -1 : a < b ? 1 : 0;
  });
  const productNameArr: string[] = ["zensnack", "crisps"];
  const productMap = new Map();
  items.map(function (item: any) {
    let category = Site.getFixedProductCategory(item.productCategory);

    if (!productMap.has(category)) {
      productMap.set(category, [item]);
    } else {
      const arr: object[] = productMap.get(category);
      arr.push(item);
    }
  });

  return (
    <section className="relative w-screen">
      <div className={`${className} `}>
        <div className={`relative mx-auto`}>
          <LineZenSnack className="absolute top-0 z-[10] grid w-full overflow-hidden" />
          <div className="grid justify-items-center max-md:grid md:grid-cols-12 max-md:[&>a]:first:row-[1/2]">
            <Modules.ProductListCat items={items} />

            <div className="relative w-full px-3 pb-12 pt-6 max-md:row-[2/3] max-md:space-y-4 max-md:border-t-[1px] md:col-span-4 md:space-y-4 md:border-r-[1px]">
              <p>
                YakuZEN values lotus seeds for digestion, relaxation, and
                immunity. Traditionally used to support gut health and energy,
                they help restore balance and vitality. Zen Snack Lotus Seeds
                bring these ancient benefits in a pure, additive-free snack.
              </p>
              <div>
                <h3 className="font-ob-nar-b text-[18px] uppercase">
                  Ingredients
                </h3>
                <p className="text-[14px]">Lotus seeds / Rice oil / Salt</p>
              </div>
              <ul className="list-disc pl-[16px] text-[14px]">
                <li>Crunchy texture, mildly salty</li>
                <li>Nutrient-dense power-food</li>
                <li>
                  Source of calcium, protein, folic acid and dietary fibers
                </li>
              </ul>
            </div>
            <div className="relative w-full px-3 pb-12 pt-6 max-md:row-[4/5] max-md:space-y-4 max-md:border-t-[1px] md:col-span-4 md:space-y-4 md:border-r-[1px]">
              <p>
                Jujube is prized in YakuZEN for reducing stress, supporting
                digestion, nourishing blood, and strengthening immunity.
                Traditionally used for relaxation and gut health, Zen Snack
                Jujubes offer a pure, natural way to enjoy this superfruit.
              </p>
              <div>
                <h3 className="font-ob-nar-b text-[18px] uppercase">
                  Ingredients
                </h3>
                <p className="text-[14px]">Jujube / Palm Oil</p>
              </div>
              <ul className="list-disc pl-[16px] text-[14px]">
                <li>Crunchy pretzel-like texture</li>
                <li>Only ingredients are jujube fruits and vegetable oil</li>
                <li>Contains polyphenol, dietary fiber and iron</li>
              </ul>
            </div>
            <div className="relative w-full px-3 pb-12 pt-6 max-md:row-[6/7] max-md:space-y-4 max-md:border-t-[1px] md:col-span-4 md:space-y-4">
              <p>
                YakuZEN values jujube for relaxation and digestion, while goji
                berries support liver function, energy, and vision. This
                powerful duo promotes balance and vitality. Zen Snack Jujube &
                Goji Berries deliver these benefits in a pure, additive-free
                snack.
              </p>
              <div>
                <h3 className="font-ob-nar-b text-[18px] uppercase">
                  Ingredients
                </h3>
                <p className="text-[14px]">Jujube / Goji Berry</p>
              </div>
              <ul className="list-disc pl-[16px] text-[14px]">
                <li>Crispy texture, natural sweetness</li>
                <li>Add to hot tea for a touch of flavor</li>
                <li>Contains polyphenols, dietary fiber and iron</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
