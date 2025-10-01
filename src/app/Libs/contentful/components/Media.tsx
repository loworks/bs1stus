import Image from "next/image";
import * as Types from "../types";
import Video from "@/Libs/ui/Video";
export default function Media({
  className = "",
  item,
  ...rest
}: {
  item: Types.Asset;
  className?: string;
}) {
  return item?.contentType === "video/mp4" ? (
    <Video src={item.url} />
  ) : (
    <Image
      className={`${className}`}
      src={item.url}
      alt={
        item.title ? item.title : item.description ? item.description : "image"
      }
      width={item.width}
      height={item.height}
      priority={true}
      {...rest}
    />
  );
}
