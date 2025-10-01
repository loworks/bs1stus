/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */

import * as Modules from "@/components/Modules";

import React from "react";

export default function ReviewSection({
  productId,
  className,
  ...props
}: {
  productId?: string;
  className?: string;
} & React.ComponentProps<"section">) {
  return (
    <>
      <section
        className={`${className} pb-[5vw] pt-[10vw] max-md:px-[16px] md:mt-[-5vw] md:grid md:grid-cols-[repeat(24,1fr)] md:px-[25px]`}
      >
        <div className="max-md:flex max-md:justify-between md:col-[1/6]">
          <div>
            <h1 className="font-ob-nar uppercase tracking-tight md:text-[min(1.75vw,26px)]">
              Customer reviews
            </h1>
            <Modules.ReviewSummary productId={productId} />
          </div>
          <Modules.ReviewFormModal
            productId={productId}
            className="md:text-[min(1.75vw,18px) md:mt-[14px] md:w-[250px]"
          />
        </div>
        <div className="max-md:mt-[20px] md:col-[7/-1]">
          <Modules.ReviewPage productId={productId} />
        </div>
      </section>
    </>
  );
}
