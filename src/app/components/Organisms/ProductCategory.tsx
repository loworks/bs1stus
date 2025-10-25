"use server";
/* eslint-disable react/jsx-key */
import React from "react";
import { draftMode } from "next/headers";
import * as Modules from "@/components/Modules";
import Image from "next/image";
import { getAllShop } from "@/Libs/contentful/api";
import { Site } from "../utils";
import { LineCrisps, LineZenSnack } from "../Atoms";
import LineButter from "../Atoms/LineButter";

export default async function ProductCategory({
  className,
  isCategory = false,
}: {
  className?: string;
  isCategory?: boolean;
}) {
  const preview =
    process.env.NODE_ENV === "development" || (await draftMode()).isEnabled;

  const products: any = await getAllShop(preview);

  const items = products.data.contentShopCollection.items;
  items.sort(function (a, b) {
    a = new Date(a.date);
    b = new Date(b.date);
    return a > b ? -1 : a < b ? 1 : 0;
  });
  const productNameArr: string[] = ["crisps", "zensnack", "betterthanbutter"];
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
        {productNameArr.map((name: string) => {
          const items = productMap.get(name);

          return (
            <div
              className={`${name} relative mx-auto grid items-center justify-items-center md:grid-cols-12`}
              key={name}
            >
              {name === "zensnack" ? (
                <LineZenSnack className="absolute top-0 z-[10] grid w-full overflow-hidden" />
              ) : name === "crisps" ? (
                <LineCrisps className="absolute top-0 z-[10] grid w-full overflow-hidden bg-crisps-bg-color pb-[3px]" />
              ) : (
                <LineButter className="bg-butter-bg-color absolute top-0 z-[10] grid w-full overflow-hidden pb-[3px]" />
              )}

              <Modules.ProductListCat items={items} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
