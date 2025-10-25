/* eslint-disable react/jsx-key */
import React from "react";
import * as Atoms from "@/components/Atoms";
import { Suspense } from "react";
import { TransitionLink } from "@/Libs/Transitions";
import { GetPrice } from "../Atoms";
import { Site } from "../utils";
import { isAuthenticated } from "../utils/checkAuth";
export default async function ProductListCat({
  items,
  ...props
}: { items: any } & React.ComponentProps<"div">) {
  const auth = await isAuthenticated();
  return (
    <>
      {items?.map((item: any, i: number) => {
        const media =
          item.thumbnailCollection && item.thumbnailCollection.items[0]
            ? item.thumbnailCollection.items[0]
            : item.mediasCollection.items[0];

        const variantNameList: string[] = [];
        const variants = item.variantCollection.items;
        for (var j = 0; j < variants.length; j++) {
          const variant = variants[j];

          if (!variant) break;
          variantNameList.push(variant.value);
        }

        const variantName: string = variantNameList.join(" / ");
        return item.slug.includes("for-buyer") ? (
          auth ? (
            <TransitionLink
              className={`relative inline-block max-md:border-t-[1px] md:col-span-4 md:border-[1px] md:border-l-0 md:border-t-[0px]`}
              useActiveLink={true}
              href={"/shop/" + item.slug}
              key={`${item.slug}`}
              data-poductcategory={Site.getFixedProductCategory(
                item.productCategory,
              )}
              //href={"/shop/" + item.shopifyId_data.handle}
            >
              <div className="relative aspect-[4/5]">
                <Atoms.ProductCategoryImage
                  media={media}
                  className="aspect-[4/5] object-cover"
                  index={i}
                />
              </div>
              <div className="flex w-full items-center justify-between border-t-[1px] p-3">
                <p className="font-ob-nar-b uppercase leading-tight tracking-tight">
                  <span className="font-ob-nar-b max-md:text-[6.4vw] md:text-[1.8vw]">
                    {item.productName}
                  </span>
                  <br />
                  <span className="font-ob-nar md:text-[18px]">
                    {variantName}
                  </span>
                </p>
                <Suspense
                  fallback={
                    <p className="font-ob-nar tracking-tight">LOADING</p>
                  }
                >
                  <GetPrice shopifyID={item.shopifyId} />
                </Suspense>
              </div>
            </TransitionLink>
          ) : (
            <></>
          )
        ) : (
          <TransitionLink
            className={`relative inline-block max-md:border-t-[1px] md:col-span-4 md:border-[1px] md:border-l-0 md:border-t-[0px]`}
            useActiveLink={true}
            href={"/shop/" + item.slug}
            key={`${item.slug}`}
            data-poductcategory={Site.getFixedProductCategory(
              item.productCategory,
            )}
            //href={"/shop/" + item.shopifyId_data.handle}
          >
            <div className="relative aspect-[4/5]">
              <Atoms.ProductCategoryImage
                media={media}
                className="aspect-[4/5] object-cover"
                index={i}
              />
            </div>
            <div className="flex w-full items-center justify-between border-t-[1px] p-3">
              <p className="font-ob-nar-b uppercase leading-tight tracking-tight">
                <span className="font-ob-nar-b max-md:text-[6.4vw] md:text-[1.8vw]">
                  {item.productName}
                </span>
                <br />
                <span className="font-ob-nar md:text-[18px]">
                  {variantName}
                </span>
              </p>
              <Suspense
                fallback={<p className="font-ob-nar tracking-tight">LOADING</p>}
              >
                <GetPrice shopifyID={item.shopifyId} />
              </Suspense>
            </div>
          </TransitionLink>
        );
      })}
    </>
  );
}
