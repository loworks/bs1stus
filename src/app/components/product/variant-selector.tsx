/* eslint-disable react/jsx-key */
"use client";

import { ProductOption, ProductVariant } from "@/Libs/shopify/types";
import { createUrl } from "@/Libs/shopify/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Combination = {
  id: string;
  availableForSale: boolean;
  [key: string]: string | boolean; // ie. { color: 'Red', size: 'Large', ... }
};

export function VariantSelector({
  options,
  variants,
}: {
  options: ProductOption[];
  variants: ProductVariant[];
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const hasNoOptionsOrJustOneOption =
    !options.length ||
    (options.length === 1 && options[0]?.values.length === 1);

  if (hasNoOptionsOrJustOneOption) {
    return null;
  }

  const combinations: Combination[] = variants.map((variant) => ({
    id: variant.id,
    availableForSale: variant.availableForSale,
    // Adds key / value pairs for each variant (ie. "color": "Black" and "size": 'M").
    ...variant.selectedOptions.reduce(
      (accumulator, option) => ({
        ...accumulator,
        [option.name.toLowerCase()]: option.value,
      }),
      {},
    ),
  }));

  return options.map((option) => {
    if (option.values.length <= 1) return null;
    return (
      <dl className="mb-8" key={option.id}>
        <dt className="font-ob-nar-b text-[36px] uppercase">
          {option.name === "スタイル"
            ? "Style"
            : option.name === "サイズ"
              ? "Size"
              : option.name}
        </dt>
        <dd className="flex items-center justify-between gap-4">
          {option.values.map((value) => {
            const optionNameLowerCase = option.name.toLowerCase();

            // Base option params on current params so we can preserve any other param state in the url.
            const optionSearchParams = new URLSearchParams(
              searchParams.toString(),
            );

            // Update the option params using the current option to reflect how the url *would* change,
            // if the option was clicked.
            optionSearchParams.set(optionNameLowerCase, value);
            const optionUrl = createUrl(pathname, optionSearchParams);

            // In order to determine if an option is available for sale, we need to:
            //
            // 1. Filter out all other param state
            // 2. Filter out invalid options
            // 3. Check if the option combination is available for sale
            //
            // This is the "magic" that will cross check possible variant combinations and preemptively
            // disable combinations that are not available. For example, if the color gray is only available in size medium,
            // then all other sizes should be disabled.
            const filtered = Array.from(optionSearchParams.entries()).filter(
              ([key, value]) =>
                options.find(
                  (option) =>
                    option.name.toLowerCase() === key &&
                    option.values.includes(value),
                ),
            );
            const isAvailableForSale = combinations.find((combination) =>
              filtered.every(
                ([key, value]) =>
                  combination[key] === value && combination.availableForSale,
              ),
            );

            // The option is active if it's in the url params.
            const isActive = searchParams.get(optionNameLowerCase) === value;

            return (
              <button
                key={value}
                aria-disabled={!isAvailableForSale}
                disabled={!isAvailableForSale}
                onClick={() => {
                  router.replace(optionUrl, { scroll: false });
                }}
                title={`${option.name} ${value}${!isAvailableForSale ? " (Out of Stock)" : ""}`}
                className={`pointer-events-auto relative w-full ${!isAvailableForSale ? "cursor-not-allowed opacity-[0.4]" : ""} before:contents-[""] pointer-events-auto flex w-full basis-[auto] flex-col items-start ${isActive ? "[ before: w-[130%] border-t-[2px] before:w-full" : "border-t-[1px] border-dashed border-black"} ${!isActive && isAvailableForSale ? "transition-all duration-300 ease-in-out hover:w-[130%]" : ""}`}
              >
                <span className="bleck font-ob-nar py-2 text-[14px] leading-[1]">
                  {value}
                </span>
              </button>
            );
          })}
        </dd>
      </dl>
    );
  });
}
