"use client";
/* eslint-disable react/jsx-key */
import React from "react";
import * as Atoms from "@/components/Atoms";
import Image from "next/image";
import { TransitionLink } from "@/Libs/Transitions";
import Video from "@/Libs/ui/Video";
export default function JournalList({
  products,
  ...props
}: { products: any } & React.ComponentProps<"div">) {
  let items = products;

  return (
    <div className={`${props.className} pointer-events-auto max-md:space-y-12`}>
      {items
        ? items.map((item: any, i: number) => {
            return (
              <TransitionLink
                className="bg-white max-md:col-span-12 max-md:border-x-[1px] max-md:border-b-[1px] max-md:border-t-[1px] md:col-span-6 md:border-r-[1px] lg:col-span-6 [&:nth-child(5n)]:border-r-0"
                useActiveLink={true}
                href={`/journal/${item.slug}`}
                key={`item-${i}`}
              >
                {item.mediasCollection.items[0]?.contentType === "video/mp4" ? (
                  <Video
                    className="full aspect-[4/5] w-full [&_video]:h-full [&_video]:object-cover"
                    title={item.mediasCollection.items[0].title}
                    description={item.mediasCollection.items[0].description}
                    src={item.mediasCollection.items[0].url}
                  />
                ) : (
                  <Image
                    className="aspect-[4/5] w-full object-cover"
                    src={item.mediasCollection.items[0].url}
                    priority={true}
                    quality={80}
                    alt={item.mediasCollection.items[0].title}
                    width={item.mediasCollection.items[0].width}
                    height={item.mediasCollection.items[0].height}
                  />
                )}
                <h2 className="self-center border-t-[1px] font-obviously-narrow leading-[100%] tracking-tight max-md:p-[4vw] md:p-[1vw] md:text-[min(1.8vw,18px)]/tight lg:text-[min(1.4vw,18px)]">
                  {item.title}
                </h2>
              </TransitionLink>
            );
          })
        : ""}
    </div>
  );
}
