"use server";
/* eslint-disable react/jsx-key */
import React from "react";
import { draftMode } from "next/headers";
import * as Modules from "@/components/Modules";
import Image from "next/image";
import { getProductsByCategory } from "@/Libs/contentful/api";
import { Site } from "@/components/utils";
import { LineCrisps, LineZenSnack } from "@/components/Atoms";

export default async function ChefList({
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
          <div className="grid max-md:grid md:grid-cols-12 max-md:[&>a]:first:row-[1/2]">
            <div
              className={`relative inline-block max-md:border-t-[1px] md:col-span-4 md:border-[1px] md:border-l-0 md:border-t-[0px]`}

              //href={"/shop/" + item.shopifyId_data.handle}
            >
              <div className="relative">
                <Image
                  className={"aspect-[4/5] object-cover md:h-full md:w-full"}
                  src="/profile-ishii3.jpg"
                  alt="hero"
                  width={1920}
                  height={1414}
                  priority={true}
                />
              </div>
              <div className="border-t-[1px] p-3">
                <p className="font-ob-nar-b uppercase leading-tight tracking-tight">
                  <span className="font-ob-nar-b max-md:text-[6.4vw] md:text-[1.8vw]">
                    Shuu Ishii
                  </span>
                  <br />
                  <span className="font-ob-nar md:text-[1.4vw]">
                    French Cuisine
                  </span>
                </p>
              </div>
              <div className="border-t-[1px] p-3 md:h-[18vw] md:space-y-2">
                <h2 className="font-ob-nar-b md:text-[1.6vw]">Profile</h2>
                <p className="leading-tight md:text-[1.2vw]">
                  A master of seasonal ingredients, Chef Shuu Ishii trained in
                  Switzerland before opening his Kobe restaurant, earning
                  Zagat’s No.1 ranking for four years. Now Grand Chef at Value
                  Management Co., Ltd., he leads menu development for fine
                  dining establishments. A key member of Toques Blanches and the
                  Escoffier Society of Japan, he blends French culinary
                  tradition with Japan’s rich heritage.
                </p>
              </div>{" "}
              <div className="border-t-[1px] p-3 md:h-[11vw] md:space-y-2">
                <h2 className="font-ob-nar-b md:text-[1.4vw]">Comment</h2>
                <p className="leading-tight md:text-[1.2vw]">
                  From vegetable braising to maître d'hôtel butter, it enhances
                  dish quality.
                  <br />
                  Perfect for confit lotus root and beef—ideal for vegan main
                  dishes too.
                </p>
              </div>{" "}
              {/*<div className="relative aspect-[4/4] border-t-[1px] p-9">
                <Image
                  className={"object-cover md:h-full md:w-full"}
                  src="/btb-recipe01.webp"
                  alt="hero"
                  width={1920}
                  height={1414}
                  priority={true}
                />
              </div>*/}
            </div>
            <div
              className={`relative inline-block max-md:border-t-[1px] md:col-span-4 md:border-[1px] md:border-l-0 md:border-t-[0px]`}

              //href={"/shop/" + item.shopifyId_data.handle}
            >
              <div className="relative">
                <Image
                  className={"aspect-[4/5] object-cover md:h-full md:w-full"}
                  src="/profile-komb.webp"
                  alt="hero"
                  width={1920}
                  height={1414}
                  priority={true}
                />
              </div>
              <div className="border-t-[1px] p-3">
                <p className="font-ob-nar-b uppercase leading-tight tracking-tight">
                  <span className="font-ob-nar-b max-md:text-[6.4vw] md:text-[1.8vw]">
                    Tomonari Kombu
                  </span>
                  <br />
                  <span className="font-ob-nar md:text-[1.4vw]">
                    Pastry Chef
                  </span>
                </p>
              </div>
              <div className="border-t-[1px] p-3 md:h-[18vw] md:space-y-2">
                <h2 className="font-ob-nar-b md:text-[1.6vw]">Profile</h2>
                <p className="leading-tight md:text-[1.2vw]">
                  Trained at top patisseries like Pierre Hermé and Joël
                  Robuchon, Chef Kombu blends French techniques with Japan’s
                  wagashi tradition. Now leading his family’s 240-year-old
                  confectionery, he creates innovative pastries bridging both
                  worlds.
                </p>
              </div>{" "}
              <div className="border-t-[1px] p-3 md:h-[11vw] md:space-y-2">
                <h2 className="font-ob-nar-b md:text-[1.4vw]">Comment</h2>
                <p className="leading-tight md:text-[1.2vw]">
                  Highlights the natural flavors of flour better than butter,
                  making it a game changer.
                </p>
              </div>{" "}
              {/*<div className="relative aspect-[4/4] border-t-[1px] p-9">
                <Image
                  className={"object-cover md:h-full md:w-full"}
                  src="/btb-recipe01.webp"
                  alt="hero"
                  width={1920}
                  height={1414}
                  priority={true}
                />
              </div>*/}
            </div>
            <div
              className={`relative inline-block max-md:border-t-[1px] md:col-span-4 md:border-[1px] md:border-l-0 md:border-t-[0px]`}

              //href={"/shop/" + item.shopifyId_data.handle}
            >
              <div className="relative">
                <Image
                  className={"aspect-[4/5] object-cover md:h-full md:w-full"}
                  src="/profile-kodama.webp"
                  alt="hero"
                  width={1920}
                  height={1414}
                  priority={true}
                />
              </div>
              <div className="border-t-[1px] p-3">
                <p className="font-ob-nar-b uppercase leading-tight tracking-tight">
                  <span className="font-ob-nar-b max-md:text-[6.4vw] md:text-[1.8vw]">
                    Keisuke Kodama
                  </span>
                  <br />
                  <span className="font-ob-nar md:text-[1.4vw]">
                    Bakery Chef
                  </span>
                </p>
              </div>
              <div className="border-t-[1px] p-3 md:h-[18vw] md:space-y-2">
                <h2 className="font-ob-nar-b md:text-[1.6vw]">Profile</h2>
                <p className="leading-tight md:text-[1.2vw]">
                  Founder of Bon Vivant bakery, he is known for award-winning
                  baked goods including croissants and his signature fresh cream
                  anpan. He represented Japan in the Mondial du Pain in the
                  croissant and baguette categories, and now promotes Japanese
                  baked goods globally as a developer and industry leader.
                </p>
              </div>{" "}
              <div className="border-t-[1px] p-3 md:h-[11vw] md:space-y-2">
                <h2 className="font-ob-nar-b md:text-[1.4vw]">Comment</h2>
                <p className="leading-tight md:text-[1.2vw]">
                  Perfect flakiness and rise in croissants—worth choosing even
                  outside of vegan applications.
                </p>
              </div>
              {/*<div className="relative aspect-[4/4] border-t-[1px] p-9">
                <Image
                  className={"object-cover md:h-full md:w-full"}
                  src="/btb-recipe01.webp"
                  alt="hero"
                  width={1920}
                  height={1414}
                  priority={true}
                />
              </div>*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
