"use client";
/* eslint-disable react/jsx-key */

import Image from "next/image";
import * as Transition from "@/components/Transition";
export function ProductImages({
  images,
}: {
  images: { src: string; title: string; width: number; height: number }[];
}) {
  return (
    <>
      {images.length > 0 ? (
        <>
          {images.map((image, index) => {
            return (
              <div
                className={`w-full ${index === 0 ? "md:h-[70vh]" : ""} `}
                key={"productimage" + index}
              >
                <div className="relative h-full w-full overflow-hidden bg-[#fefefe]">
                  {image.src ? (
                    // eslint-disable-next-line jsx-a11y/alt-text -- `alt` is inherited from `props`, which is being enforced with TypeScript
                    /*< <PlaceImage.blur
                      src={image.src}
                      className="h-full w-full object-cover"
                      width={image.width}
                      height={image.height}
                    />*/ <>
                      <Image
                        className={`h-full w-full border-[1px] border-[#000] ${index === 0 ? "object-cover" : "object-contain"}`}
                        src={image.src}
                        quality={70}
                        priority={true}
                        alt={`${image.title ? image.title : "image" + index}`}
                        onLoad={(e: any) => {
                          if (index === 0) {
                            Transition.TransitionManager.excuteAppearAction(
                              "page",
                            );
                          }
                        }}
                        width={image.width}
                        height={image.height}
                      />
                    </>
                  ) : null}
                </div>
              </div>
            );
          })}
        </>
      ) : null}
    </>
  );
}
