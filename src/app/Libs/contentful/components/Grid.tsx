/* eslint-disable react/jsx-key */
import { ReactElement } from "react";
import * as Types from "../types";
import Media from "./Media";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { TransitionLink } from "@/Libs/Transitions";
import Image from "next/image";
import { Buttons } from "@/components/Atoms";
function getChildren(grid: Types.Grid, jsons?: []): ReactElement {
  const items: Object[] = grid.itemsCollection.items;
  const len = items.length;

  return (
    <>
      {grid.itemsCollection.items.map((item: any, i) => {
        const json: string = jsons[i];
        if ("file" in item) {
          const mediaItem: Types.Media = item;
          return (
            <div
              key={`media-${i}`}
              className={`relative pb-[100%] ${json ?? ""}`}
            >
              <Media
                className="not-prose absolute h-full w-full object-cover"
                item={mediaItem.file}
              />
            </div>
          );
        } else if (item.__typename === "Text") {
          const textItem: Types.Text = item;
          return (
            <div
              key={`text-${i}`}
              className={`prose max-w-none prose-headings:text-[#000] prose-p:text-[#000] ${json ?? ""}`}
            >
              {documentToReactComponents(textItem.field.json)}
            </div>
          );
        } else if (item.__typename === "ContentShop") {
          const asset = item.mediasCollection.items[0];
          const variantNameList: string[] = [];
          const variants = item.variantCollection.items;
          for (var i = 0; i < variants.length; i++) {
            const variant = variants[i];
            if (!variant) break;
            variantNameList.push(variant.value);
          }

          const variantName: string = variantNameList.join(" / ");
          return (
            <TransitionLink
              key={`shop-${item.slug ?? i}`}
              className={`${json ?? ""} not-prose space-y-3`}
              href={`/shop/${item.slug}/`}
            >
              <Image
                className="not-prose"
                src={asset.url}
                width={asset.width / 2}
                height={asset.height / 2}
                alt={asset.title}
              />
              <div className="font-und leading-tight tracking-tight no-underline">
                <span>{item.productName}</span>
                <br />
                {variantName}
              </div>
            </TransitionLink>
          );
        }

        return null;
      })}
    </>
  );
}
export default function Grid({
  className = "",
  grid,
  ...rest
}: {
  grid: Types.Grid;
  className?: string;
} & React.ComponentProps<"div">) {
  const defaltProps = `grid-cols-[repeat(12,1fr)] md:gap-[2rem]`;
  const items: Object[] = grid.itemsCollection.items;
  const len = items.length;
  const test = {
    container: "grid md:!gap-0 md:grid-cols-[repeat(5,1fr)] border-[10px]",
    items: ["md:col-[1/2]"],
  };
  const gridCol =
    len === 1
      ? `grid-cols-[repeat(1,1fr)]`
      : len === 3
        ? `md:grid-cols-[repeat(3,1fr)]`
        : `grid-cols-[repeat(2,1fr)]`;
  const json: any = grid.json;
  const containerJson = json?.container ? json.container : "";
  return (
    <div
      className={`${className} grid ${gridCol} max-md:gap-[1rem] md:gap-[2rem] ${containerJson}`}
      {...rest}
    >
      {getChildren(grid, json && json.items ? json.items : "")}
    </div>
  );
}
