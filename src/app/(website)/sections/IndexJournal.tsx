/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */

import * as Organism from "../../components/Organisms";
import React, { Suspense } from "react";
import { getAllJournal, getAllShop } from "@/Libs/contentful/api";
import { Buttons } from "@/components/Atoms";
import { TransitionLink } from "@/Libs/Transitions";
import IndexJournalTitle from "./IndexJournalTitle";

export default async function IndexJournal({
  className,
  ...props
}: {
  className?: string;
} & React.ComponentProps<"div">) {
  const products: any = await getAllShop(false, 3);
  const journals: any = await getAllJournal(false, 4);

  return (
    <>
      <section className={`${className} relative !mt-0 overflow-x-hidden`}>
        <IndexJournalTitle />
        <div className="bg-crisps-color max-md:py-[20vw]">
          <div className="bg-crisps-color max-md:space-y-[10vw] md:space-y-[4vw]">
            <Suspense fallback={<div>Loading...</div>}>
              <Organism.JournalList
                products={journals}
                className={`relative grid max-md:mx-[16px] max-md:grid-cols-[repeat(12,1fr)] md:grid-cols-[repeat(24,1fr)] md:border-y-[1px]`}
              />
            </Suspense>

            <Buttons.boxLink
              className="mx-auto max-md:w-[75vw] md:w-[30vw]"
              href="/journal/"
            >
              VIEW ALL
            </Buttons.boxLink>
          </div>
        </div>
      </section>
    </>
  );
}
