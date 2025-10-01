"use server";
/* eslint-disable react/jsx-key */
import React from "react";

import { getProductById } from "@/Libs/shopify";
export default async function getPrice({ shopifyID }: { shopifyID: string }) {
  const decodeBase64ShopifyId = shopifyID.includes("gid://")
    ? shopifyID
    : atob(shopifyID);
  const product = await getProductById(decodeBase64ShopifyId, "US");

  if (!product) {
    console.log("bbbaa--- ", decodeBase64ShopifyId);
  }
  const highPrice = product?.priceRange?.maxVariantPrice.amount;
  const lowPrice = product?.priceRange?.minVariantPrice.amount;
  return (
    <p className="leading-[100%] tracking-tight">
      {highPrice === lowPrice ? (
        <span className="font-ob-nar-b max-md:text-[6.4vw] md:text-[2.2vw]">{`$ ${lowPrice}`}</span>
      ) : (
        <>
          <span className="font-ob-nar mr-2 inline-block text-[18px]">
            Starting at{" "}
          </span>
          <span className="font-ob-nar-b max-md:text-[6.4vw] md:text-[2.2vw]">{`$ ${lowPrice}`}</span>
        </>
      )}
    </p>
  );
  // {`${highPrice === lowPrice ? "$" + lowPrice : "Starting at $" + lowPrice}`}
}
