import { draftMode } from "next/headers";
import { Metadata } from "next";
import Image from "next/image";
import { getAllJournal } from "@/Libs/contentful/api";
import { TransitionLink } from "@/Libs/Transitions";
import { Site } from "@/components/utils";
import Video from "@/Libs/ui/Video";
import {
  Buttons,
  LineCrisps,
  LineJournal,
  LineZenSnack,
} from "@/components/Atoms";
import React from "react";

export const metadata: Metadata = {
  title: `Journal | ${Site.title}`,
  description:
    "Brown Sugar 1st believe every bite has a story. Our journal shares the ideas, inspirations, and intentions behind our snacks—from ingredient sourcing and behind-the-scenes production, to family-friendly tips and thoughtful reflections on food, sustainability, and well-being. Here, we document the journey of making food that’s not only safe and delicious for kids, but also kind to people and the planet.",
  metadataBase: new URL("https://brownsugar1st.store"),
  alternates: {
    canonical: "/journal/", // ← ここにcanonicalのパスを指定
  },
  openGraph: {
    title: `Journal | ${Site.title}`,
    description:
      "Brown Sugar 1st believe every bite has a story. Our journal shares the ideas, inspirations, and intentions behind our snacks—from ingredient sourcing and behind-the-scenes production, to family-friendly tips and thoughtful reflections on food, sustainability, and well-being. Here, we document the journey of making food that’s not only safe and delicious for kids, but also kind to people and the planet.",
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

export default async function JournalCategory() {
  const preview =
    process.env.NODE_ENV === "development" || (await draftMode()).isEnabled;

  const items: any = await getAllJournal(preview);
  items.sort(function (a, b) {
    a = new Date(a.date);
    b = new Date(b.date);
    return a > b ? -1 : a < b ? 1 : 0;
  });

  return (
    <>
      <main
        data-categoryname={"Journal"}
        data-categoryslug={"journal"}
        data-type={"category"}
        data-color={"#fefefe"}
        className="flex flex-col max-md:gap-[8rem] max-md:pt-[170px] md:gap-[12rem] md:pt-[120px]"
      >
        <section className="journal relative w-screen">
          {items
            .reduce((chunks: any[][], item: any, index: number) => {
              const chunkIndex = Math.floor(index / 4);
              if (!chunks[chunkIndex]) chunks[chunkIndex] = [];
              chunks[chunkIndex].push(item);
              return chunks;
            }, [])
            .map((chunk: any, chunkIndex: number) => (
              <div
                key={`chunk-${chunkIndex}`}
                className="relative grid max-md:grid-cols-[repeat(12,1fr)] max-md:gap-[8vw] max-md:py-[16vw] md:grid-cols-[repeat(24,1fr)]"
              >
                {chunkIndex % 2 != 0 ? (
                  <LineZenSnack
                    className="absolute top-0 z-[10] grid w-full overflow-hidden"
                    direction={"right"}
                  />
                ) : (
                  <LineJournal className="absolute top-0 z-[10] grid w-full overflow-hidden bg-crisps-bg-color max-md:pb-[3vw] max-md:pt-[2vw] md:pb-[3px]" />
                )}

                {chunk.map((item: any, i: number) => (
                  <div className="max-md:col-span-12 max-md:mx-[16px] max-md:border-[1px] md:col-span-6 md:border-r-[1px] lg:col-span-6 [&:nth-child(5n)]:md:border-r-0">
                    <TransitionLink
                      useActiveLink={true}
                      href={`/journal/${item.slug}`}
                      key={`item-${chunkIndex * 4 + i}`}
                    >
                      {item.mediasCollection.items[0]?.contentType ===
                      "video/mp4" ? (
                        <Video
                          className="full aspect-[4/5] w-full [&_video]:h-full [&_video]:object-cover"
                          title={item.mediasCollection.items[0].title}
                          description={
                            item.mediasCollection.items[0].description
                          }
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
                      <h2
                        className="init-anim self-center border-t-[1px] font-obviously-narrow leading-[100%] tracking-tight max-md:col-[1/-1] max-md:p-[4vw] md:h-[80px] md:p-[1vw] md:text-[min(1.8vw,18px)]/tight lg:text-[min(1.4vw,18px)]"
                        data-animation-from='{"y":"100%"}'
                        data-animation-duration="1"
                        data-animation-type="lines,words"
                        data-animation-delay="-=1"
                        data-animation-to='{"y":"0","ease":"power3.out", "stagger":{"each":"0.01","from":"random"}}'
                      >
                        {item.title}
                      </h2>
                    </TransitionLink>
                    <div
                      className={`${item.tagsCollection.items.length > 0 ? "border-t-[1px]" : ""}`}
                    >
                      {item.tagsCollection.items.map(
                        (
                          item: { name: string; slug: string; group: string },
                          num: number,
                        ) => {
                          return (
                            <Buttons.tagButton
                              slug={`/${item.group}/${item.slug}/`}
                            >
                              {`${item.name}`}
                            </Buttons.tagButton>
                          );
                        },
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}
        </section>
      </main>
    </>
  );
}
