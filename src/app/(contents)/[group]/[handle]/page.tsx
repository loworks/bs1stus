import { Buttons, ProductCategoryImage } from "@/components/Atoms";
import { draftMode } from "next/headers";
import { Site } from "@/components/utils";
import { getAllTags, getContentsByTag, getTag } from "@/Libs/contentful/api";
import { TransitionLink } from "@/Libs/Transitions";
import * as contentful from "@/Libs/contentful";
import Video from "@/Libs/ui/Video";
import Image from "next/image";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";
import { TagNavigation } from "@/components/Modules";
export async function generateStaticParams() {
  const tags: any = await getAllTags(false); // タグデータを取得

  return tags.map((tag: { group: string; slug: string }) => {
    return {
      group: tag.group.toLowerCase(),
      handle: tag.slug,
    };
  });
}

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ group: string; handle: string }>;
}): Promise<Metadata> => {
  const { group, handle } = await params;

  const preview =
    process.env.NODE_ENV === "development" || (await draftMode()).isEnabled;

  const post: any = await getTag(handle, preview);
  const postGroupLower = post?.group?.toLowerCase();
  if (!post || post.group.toLowerCase() !== group.toLowerCase()) {
    return notFound(); // 一致しない場合は404
  }
  const canonicalUrl = `https://https://brownsugar1st.store//${group}/${handle}`;

  return {
    title: `${post.siteTitle} | ${Site.siteName}`,
    description: `${post.siteDescription?.json?.content[0]?.content[0]?.value}`,
    metadataBase: new URL("https://https://brownsugar1st.store/"),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${post.siteTitle} | ${Site.siteName}`,
      description: `${post.siteDescription?.json?.content[0]?.content[0]?.value}`,
      url: canonicalUrl,
      images: [
        {
          url: "/ogp.png",
          width: 1200,
          height: 630,
          alt: Site.title,
        },
      ],
    },
  };
};

export default async function TagPage({
  params,
}: {
  params: Promise<{ group: string; handle: string }>;
}) {
  const { group, handle } = await params;

  const preview =
    process.env.NODE_ENV === "development" || (await draftMode()).isEnabled;
  const { shopItems, journalItems } = await getContentsByTag(handle, preview);

  const tag: any = await getTag(handle, preview);

  return (
    <main
      data-categoryname={"Tag"}
      data-categoryslug={"tag"}
      data-type={"category"}
      className="min-h-[100vh] space-y-[6vw] max-md:mx-[16px] max-md:py-[100px] md:px-[25px] md:py-[12vw]"
    >
      <TagNavigation preview={preview} />

      <div className="flex max-md:flex-col-reverse max-md:gap-y-6 md:justify-between">
        <div className="max-md:space-y-4 md:space-y-8">
          <h1
            className={`font-ob-nar-b leading-[100%] tracking-tight max-md:text-[12vw] md:text-[2.4vw]`}
          >
            {tag.name}
          </h1>
          <contentful.RichText
            className="prose-sm max-md:text-[5vw]/tight md:w-[47vw] md:text-[min(1.4vw,18px)]/tight"
            content={tag.description}
          />
        </div>
      </div>
      {shopItems?.length > 0 && (
        <section>
          <h2 className="font-ob-nar-b uppercase max-md:text-[12vw] md:text-[3vw]">
            Shop
          </h2>
          <div className="padding-12 mx-auto grid items-center justify-items-center max-md:gap-y-[50px] md:grid-cols-12 md:gap-x-[.75rem] md:gap-y-[2rem]">
            {shopItems.map((item: any, i: number) => {
              const media =
                item.thumbnailCollection && item.thumbnailCollection.items[0]
                  ? item.thumbnailCollection.items[0]
                  : item.mediasCollection.items[0];
              const variantNameList: string[] = [];
              const variants = item.variantCollection.items;
              for (var i = 0; i < variants.length; i++) {
                const variant = variants[i];

                if (!variant) break;
                variantNameList.push(variant.value);
              }

              const variantName: string = variantNameList.join(" / ");
              return (
                <React.Fragment key={`${item.slug}`}>
                  <TransitionLink
                    className={`relative inline-block md:col-span-3`}
                    useActiveLink={true}
                    href={`/shop/${item.slug}/`}
                    key={`${item.slug}`}
                    data-poductcategory={Site.getFixedProductCategory(
                      item.productCategory,
                    )}
                  >
                    <div className="relative aspect-[4/5]">
                      <ProductCategoryImage
                        media={media}
                        className="h-full w-full object-cover"
                        index={i}
                      />
                    </div>
                    <div className="flex w-full justify-between pt-3">
                      <p className="font-und leading-tight tracking-tight">
                        <span>{item.productName}</span>
                        <br />
                        {variantName}
                      </p>
                    </div>
                  </TransitionLink>
                </React.Fragment>
              );
            })}
          </div>
        </section>
      )}

      <section>
        <h2 className="font-ob-nar-b uppercase max-md:text-[12vw] md:text-[3vw]">
          Articles
        </h2>
        <div className="grid max-md:grid-cols-[repeat(12,1fr)] max-md:gap-[8vw] md:grid-cols-[repeat(24,1fr)] md:gap-[2vw] lg:gap-x-[.75rem] lg:gap-y-[5vw]">
          {journalItems.map((item: any) => {
            return (
              <React.Fragment key={`${item.slug}`}>
                <TransitionLink
                  className="] aspect-[4/5] space-y-4 max-md:col-span-12 md:col-span-12 lg:col-span-6"
                  useActiveLink={true}
                  href={`/journal/${item.slug}`}
                >
                  {item.mediasCollection.items[0]?.contentType ===
                  "video/mp4" ? (
                    <Video
                      className="full aspect-[4/5] w-full [&_video]:h-full [&_video]:object-cover"
                      title={item.mediasCollection.items[0].title}
                      description={item.mediasCollection.items[0].description}
                      src={item.mediasCollection.items[0].url}
                    />
                  ) : (
                    <Image
                      className="h-full w-full object-cover"
                      src={item.mediasCollection.items[0].url}
                      priority={true}
                      quality={80}
                      alt={item.mediasCollection.items[0].title}
                      width={item.mediasCollection.items[0].width}
                      height={item.mediasCollection.items[0].height}
                    />
                  )}

                  <h2 className="font-und leading-tight tracking-tight">
                    {item.title}
                  </h2>
                </TransitionLink>
              </React.Fragment>
            );
          })}
        </div>
      </section>
    </main>
  );
}
