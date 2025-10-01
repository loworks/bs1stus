/* eslint-disable react/jsx-key */
import { Metadata } from "next";
import { draftMode } from "next/headers";
import { getJournalBySlug } from "@/Libs/contentful/api";
import * as contentful from "@/Libs/contentful";
import Image from "next/image";
import { Site } from "@/components/utils";
import { Buttons, SvgElements } from "@/components/Atoms";
import Link from "next/link";
import { TransitionLink } from "@/Libs/Transitions";
import Video from "@/Libs/ui/Video";

export const generateMetadata = async ({ params }): Promise<Metadata> => {
  const { handle } = await params;
  const preview =
    process.env.NODE_ENV === "development" || (await draftMode()).isEnabled;

  const postObj = await getJournalBySlug(handle, preview);
  const post = postObj.post;
  return {
    title: `${post.siteTitle} | ${Site.siteName}`,
    description: `${post.siteDescription.json.content[0].content[0].value}`,
    metadataBase: new URL("https://brownsugar1st.store"),
    alternates: {
      canonical: `/journal/${handle}/`,
    },
    openGraph: {
      title: `${post.siteTitle} | ${Site.siteName}`,
      description: `${post.siteDescription.json.content[0].content[0].value}`,
      images: [
        {
          url: post.mediasCollection.items[0].url,
          width: post.mediasCollection.items[0].width,
          height: post.mediasCollection.items[0].height,
          alt: Site.title,
        },
      ],
    },
  };
};

export default async function JournalDetail({ params }) {
  const { handle } = await params;
  const preview =
    process.env.NODE_ENV === "development" || (await draftMode()).isEnabled;
  const postObj = await getJournalBySlug(handle, preview);
  const post = postObj.post;

  return (
    <>
      <main
        data-categoryname={"Shop"}
        data-categoryslug={"shop"}
        data-color={"#fefefe"}
        data-type={"post"}
        className="section min-h-screen"
      >
        <div className="max-md:mb-[140px] md:mx-auto md:max-w-[1540px]">
          <div className="grid gap-y-[min(10vw,136px)] max-md:mx-[16px] max-md:mt-[170px] max-md:grid-cols-[repeat(12,1fr)] md:mx-[25px] md:mt-[170px] md:grid-cols-[repeat(24,1fr)] md:overflow-x-hidden [&_.pin-spacer]:!h-[auto] [&_.pin-spacer]:!p-[0]">
            <div className="content-area overflow-hidden max-md:col-[1/-1] md:col-[1/12]">
              <div className="inner-content-area flex flex-col gap-[2rem]">
                {post.mediasCollection.items.map((item: any, num: number) => {
                  return (
                    <div
                      className="init-anim"
                      data-animation-from='{"y":"100"}'
                      data-animation-type="tween"
                      data-animation-duration="1.4"
                      data-animation-delay="<"
                      data-animation-to='{"y":"0","ease":"power4.out"}'
                      key={`item${num}`}
                    >
                      {item?.contentType === "video/mp4" ? (
                        <Video
                          src={item.url}
                          title={item.title}
                          description={item.description}
                        />
                      ) : (
                        <Image
                          className="h-full w-full object-cover"
                          src={item.url}
                          priority={true}
                          quality={80}
                          alt={item.title}
                          width={item.width}
                          height={item.height}
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="content-area-r pointer-events-auto flex flex-col gap-[5rem] max-md:col-[1/-1] md:col-[14/-1]">
              <div className="inner-content-area-r body-cont flex flex-col gap-[2rem]">
                <div className="col-[1/-1] space-y-2 justify-self-center">
                  <h1 className="font-ob-nar-b col-[1/-1] justify-self-center font-black uppercase leading-[0.85] max-md:text-[10vw] md:text-[min(8vw,64px)]">
                    {post.title}
                  </h1>
                  <div className="flex items-center space-x-2 py-2">
                    {post.tagsCollection.items.map(
                      (
                        item: { name: string; slug: string; group: string },
                        num: number,
                      ) => {
                        return (
                          <Buttons.tagButton
                            key={item.slug}
                            slug={`/${item.group}/${item.slug}`}
                          >
                            {`${item.name}`}
                          </Buttons.tagButton>
                        );
                      },
                    )}
                  </div>
                </div>
                {post.body ? (
                  <contentful.RichText
                    className={`prose-headings:font-ob-nar prose-ol:font-ob-nar prose prose-headings:font-normal prose-headings:tracking-tight prose-ol:!pl-0 before:prose-ol:list-none prose-img:my-[3vw] max-md:prose-ol:text-[5vw]/tight md:prose-ol:text-[min(3vw,45px)]/tight [&_ol_li]:table-row [&_ol_li]:!pl-0 before:[&_ol_li]:table-cell before:[&_ol_li]:pr-3 before:[&_ol_li]:tracking-tight before:[&_ol_li]:text-[#000] [&_ol_li_>*]:w-[95%] [&_ol_li_u]:my-[1.4rem] [&_ol_li_u]:inline-block [&_ol_li_u]:font-sans [&_ol_li_u]:no-underline [&_ol_li_u]:max-md:text-[14px]/tight [&_ol_li_u]:md:text-[min(1.4vw,26px)]/tight [&_ul]:!pl-[1em] [&_ul_li]:!my-0 [&_ul_li]:!pl-0 [&_ul_li]:marker:text-[#000] [&_ul_li_p]:!my-0`}
                    content={post.body}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
        {
          <div className="paging-area items-start justify-between pb-[12vw] pt-[6vw] max-md:flex max-md:grid-cols-[repeat(12,1fr)] max-md:px-[16px] md:mx-auto md:grid md:max-w-[1540px] md:grid-cols-[repeat(24,1fr)] md:px-[25px]">
            <TransitionLink
              className="cursor-pointer items-center align-middle uppercase leading-[1] tracking-tight md:col-[1/12]"
              href={`/journal/${postObj.paging.prev.slug}/`}
            >
              <div className="font-ob-nar-b font-black max-md:text-[16vw] md:text-[12vw]">
                Prev
              </div>

              <div className="font-ob-nar inline-block w-[max(20vw,300px)] max-md:mt-2 max-md:w-[35vw] max-md:text-[3vw]">{`${postObj.paging.prev.title}`}</div>
            </TransitionLink>

            <TransitionLink
              className="cursor-pointer items-center align-middle uppercase leading-[1] tracking-tight md:col-[14/-1]"
              href={`/journal/${postObj.paging.next.slug}/`}
            >
              <div className="font-ob-nar-b font-black max-md:text-[16vw] md:text-[12vw]">
                Next
              </div>
              <div className="font-ob-nar inline-block w-[max(20vw,300px)] max-md:mt-2 max-md:w-[35vw] max-md:text-[3vw]">{`${postObj.paging.next.title}`}</div>
            </TransitionLink>
          </div>
        }
      </main>
    </>
  );
}
