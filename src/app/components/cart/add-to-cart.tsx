"use client";

import { PlusIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { addItem } from "@/components/cart/actions";
import LoadingDots from "@/components/cart/loading-dots";
import { ProductVariant } from "@/Libs/shopify/types";
import { useRouter, useSearchParams } from "next/navigation";
import { useTransition, useState } from "react";
import Price from "@/components/cart/price";
export function AddToCart({
  variants,
  amount,
  currencyCode,
  availableForSale,
  isExclusive,
}: {
  variants: ProductVariant[];
  amount: string;
  currencyCode: string;
  availableForSale: boolean;
  isExclusive: boolean;
}) {
  const [variantErrortext, setVariantErrortext] = useState<string>("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined;
  console.log("availableForSale -- ", availableForSale);
  const variant = variants.find((variant: ProductVariant) =>
    variant.selectedOptions.every(
      (option) => option.value === searchParams.get(option.name.toLowerCase()),
    ),
  );
  let date = new Date();

  const isExclusiveTime =
    date.getDay() == 2 && date.getHours() >= 10 && date.getHours() <= 18
      ? true
      : true;
  const selectedVariantId = variant?.id || defaultVariantId;
  const cartButtonTitleElm = !availableForSale ? (
    <span className="font-ob-nar-b uppercase tracking-tight max-md:text-[16px] md:text-[min(2vw,28px)]">
      Out of stock
    </span>
  ) : (
    <>
      <div className="relative mx-1 inline-block">
        {!isPending ? (
          <PlusIcon className="h-5" />
        ) : (
          <LoadingDots className="mb-3 bg-white" />
        )}
      </div>
      <span className="font-ob-nar-b uppercase tracking-tight max-md:text-[16px] md:text-[min(2vw,28px)]">
        Add To Cart
      </span>
    </>
  );

  return (
    <button
      aria-label="Add item to cart"
      disabled={
        isPending || !availableForSale || (isExclusive && !isExclusiveTime)
      }
      onClick={() => {
        // Safeguard in case someone messes with `disabled` in devtools.
        if (!availableForSale) return;
        if (!selectedVariantId) {
          setVariantErrortext("Please select options");
          return;
        }
        startTransition(async () => {
          const error = await addItem(selectedVariantId);

          if (error) {
            // Trigger the error boundary in the root error.js
            throw new Error(error.toString());
          }

          router.refresh();
        });
      }}
      className={clsx(
        "product-pin add-cart-button pointer-events-auto bottom-0 right-0 w-screen bg-[#8b5c41] p-4 tracking-wide text-[#fff] hover:opacity-90 max-md:sticky md:absolute md:z-[1000] [html.product-crisps_&]:bg-crisps-bg-color [html.product-crisps_&]:text-crisps-color [html.product-zensnack_&]:bg-zensnack-bg-color [html.product-zensnack_&]:text-zensnack-color",
        {
          /*
          "cursor-not-allowed opacity-60 hover:opacity-60":
            !availableForSale || !selectedVariantId,
          "cursor-not-allowed": isPending,*/
        },
      )}
    >
      <div className="flex items-center justify-between">
        {variants.length === 1 || (variant && variants.length > 1) ? (
          <Price
            className="font-ob-nar-b text-[min(2vw,30px)] uppercase tracking-tight max-md:text-[16px]"
            amount={variant ? variant.price.amount : amount}
            currencyCode={currencyCode}
          />
        ) : (
          <p className="font-ob-nar-b text-[min(2vw,30px)] tracking-tight max-md:text-[16px]">
            {`Starting at $${amount} USD`}
          </p>
        )}
        <div className="flex items-center max-md:flex-col">
          <span className="font-ob-nar-b mr-[1vw] inline-block uppercase tracking-tight max-md:text-[12px]">
            {variantErrortext}
          </span>
          <div className="flex items-center">{cartButtonTitleElm}</div>
        </div>
      </div>
    </button>
  );
}
