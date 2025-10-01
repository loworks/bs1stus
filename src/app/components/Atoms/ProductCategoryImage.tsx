"use client";
/* eslint-disable react/jsx-key */

import Image from "next/image";
import * as Transition from "@/components/Transition";
export default function ProductCategoryImage({
  className,
  media,
  index,
}: {
  className?: string;
  media?: any;
  index?: number;
}) {
  return (
    <Image
      className={`${className}`}
      src={media.url}
      alt={media.title}
      width={media.width}
      height={media.height}
      priority={true}
      onLoad={() => {
        if (index === 0) {
          Transition.TransitionManager.excuteAppearAction("page");
        }
      }}
    />
  );
}
