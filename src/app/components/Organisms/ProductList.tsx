"use client";
/* eslint-disable react/jsx-key */
import React from "react";
import * as Atoms from "@/components/Atoms";
import Image from "next/image";
import { TransitionLink } from "@/Libs/Transitions";
export default function ProductList({
  products,
  ...props
}: { products: any } & React.ComponentProps<"div">) {
  let items = null;

  if (products.data && products.data.contentShopCollection) {
    items = products.data.contentShopCollection.items;
    items.sort(function (a, b) {
      a = new Date(a.date);
      b = new Date(b.date);
      return a > b ? -1 : a < b ? 1 : 0;
    });
  }

  return (
    <div className={`${props.className} pointer-events-auto max-md:space-y-8`}>
      {items
        ? items.map((item: any, i: number) => {
            const variantNameList: string[] = [];
            const variants = item.variantCollection.items;
            for (var j = 0; j < variants.length; j++) {
              const variant = variants[j];

              if (!variant) break;
              variantNameList.push(variant.value);
            }
            const variantName: string = variantNameList.join(" / ");
            return (
              <TransitionLink
                className={`relative inline-block max-md:border-x-[1px] max-md:border-b-[1px] max-md:border-t-[1px] md:col-span-4 md:border-[1px] md:border-l-0 md:[&:nth-child(3)]:border-r-0`}
                useActiveLink={true}
                href={"/shop/" + item.slug}
                data-poductcategory={item.productCategory}
                key={`product${i}`}
                //href={"/shop/" + item.shopifyId_data.handle}
              >
                <div className="relative aspect-[4/5]">
                  <Atoms.ProductCategoryImage
                    media={item.mediasCollection.items[0]}
                    className="aspect-[4/5] object-cover"
                    index={i}
                  />
                </div>
                <div className="flex w-full items-center justify-between border-t-[1px] bg-white p-3">
                  <p className="leading-tight tracking-tight">
                    <span className="font-ob-nar-b max-md:text-[6.4vw] md:text-[1.8vw]">
                      {item.productName}
                    </span>
                    <br />
                    <span className="font-ob-nar md:text-[18px]">
                      {variantName}
                    </span>
                  </p>
                </div>
              </TransitionLink>
            );
          })
        : ""}
    </div>
  );
}
