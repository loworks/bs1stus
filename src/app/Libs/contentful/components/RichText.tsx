import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import * as Types from "@/Libs/contentful/types";
import Grid from "./Grid";
import { TransitionLink } from "@/Libs/Transitions";
import Link from "next/link";
import { Buttons } from "@/components/Atoms";

interface Content {
  json: any;
  links: {
    assets: AssetLink;
    entries: EntryLink;
  };
}
interface AssetLink {
  block: Types.Asset[];
}

interface EntryLink {
  block: (Types.Grid | Types.Media)[];
  inline: Types.ContentShop[];
}
interface Entry {
  sys: {
    id: string;
  };
  __typename: string;
  title: string;
}

function RichTextAsset({
  id,
  assets,
}: {
  id: string;
  assets: Types.Asset[] | undefined;
}) {
  const asset = assets?.find((asset) => asset.sys.id === id);

  if (asset?.url) {
    return (
      <Image
        className="w-full"
        src={asset.url}
        width={asset.width / 2}
        height={asset.height / 2}
        alt={asset.title}
      />
    );
  }

  return null;
}
function RichTextEntry({
  id,
  entries,
}: {
  id: string;
  entries: (Types.Grid | Types.Media | Types.ContentShop)[];
}) {
  const entry: Types.Grid | Types.Media | Types.ContentShop = entries?.find(
    (entry) => entry.sys.id === id,
  );

  if ("itemsCollection" in entry) {
    const gridEntry: Types.Grid = entry;
    return <Grid grid={gridEntry} />;
  } else {
    return <h1>Grid02</h1>;
  }
}
export default function RichText({
  className,
  content,
  ...rest
}: {
  className?: string;
  content: Content;
} & React.ComponentProps<"ul">) {
  const website_url = "https://";
  const localhost = "http://";
  let num: number = 0;
  return (
    <>
      <div
        className={`prose max-w-none prose-headings:text-[#000] prose-p:text-[#000] ${className}`}
      >
        {documentToReactComponents(content.json, {
          renderText: (text) => {
            return text.split("\n").flatMap((text, i) => {
              return [
                i > 0 && <br key={`br-${i}`} />, // <br /> に一意の key を追加
                text,
              ];
            });
          },

          renderNode: {
            [INLINES.HYPERLINK]: (node: any) => {
              const { uri } = node.data;
              const isLocalLink =
                uri.startsWith(website_url) || uri.startsWith(localhost);

              if (isLocalLink) {
                num++;
                return (
                  <Link
                    href={uri}
                    className="rt-link"
                    target="_blank"
                    rel={
                      uri.startsWith(website_url) ? "" : "noopener noreferrer"
                    }
                    key={uri} // Link に一意の key を追加
                  >
                    {node.content[0].value}
                  </Link>
                );
              } else {
                return (
                  <TransitionLink
                    href={uri}
                    key={uri} // TransitionLink に一意の key を追加
                  >
                    {node.content[0].value}
                  </TransitionLink>
                );
              }
            },

            [INLINES.EMBEDDED_ENTRY]: (node: any) => {
              const entryId = node.data.target.sys.id;
              const entry: any = content.links?.entries.inline.find(
                (e) => e.sys.id === entryId,
              );

              if (!entry) {
                console.warn(`Entry not found: ${entryId}`);
                return null;
              }

              if (entry.__typename === "ContentShop") {
                const asset = entry.mediasCollection.items[0];
                return (
                  <TransitionLink
                    className="inline-block w-[45%]"
                    href={`/shop/${entry.slug}/`}
                    key={entry.slug} // TransitionLink に一意の key を追加
                  >
                    <Image
                      className=""
                      src={asset.url}
                      width={asset.width / 2}
                      height={asset.height / 2}
                      alt={asset.title}
                    />
                    {entry.slug}
                  </TransitionLink>
                );
              } else if (entry.__typename === "Button") {
                const ButtonComponent =
                  entry.type === "default"
                    ? Buttons.defaultButton
                    : entry.type === "line"
                      ? Buttons.lineButton
                      : entry.type === "box"
                        ? Buttons.boxLink
                        : null;

                return ButtonComponent ? (
                  <ButtonComponent
                    href={entry.href}
                    className={`${entry.className} not-prose`}
                    key={entry.slug} // ButtonComponent に一意の key を追加
                  >
                    {entry.label}
                  </ButtonComponent>
                ) : null;
              }
              return null;
            },

            [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
              return content && content.links ? (
                <RichTextAsset
                  id={node.data.target.sys.id}
                  assets={content.links.assets.block}
                  key={node.data.target.sys.id} // RichTextAsset に一意の key を追加
                />
              ) : null;
            },

            [BLOCKS.EMBEDDED_ENTRY]: (node: any) => {
              return (
                <RichTextEntry
                  id={node.data.target.sys.id}
                  entries={content.links.entries.block}
                  key={node.data.target.sys.id} // RichTextEntry に一意の key を追加
                />
              );
            },
          },
        })}
      </div>
    </>
  );
}
