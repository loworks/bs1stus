/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import * as contentful from "@/Libs/contentful";
import { Metadata } from "next";
import { gePageBySlug } from "@/Libs/contentful/api";
import { Site } from "@/components/utils";
export const metadata: Metadata = {
  title: `FAQ | ${Site.title}`,
  description:
    "Find answers to frequently asked questions about BROWN SUGAR 1ST's organic snacks, gluten-free products, shipping, orders, and more. Learn everything you need to know about our offerings and services.",
  metadataBase: new URL("https://brownsugar1st.store"),
  alternates: {
    canonical: "/faq/",
  },
  openGraph: {
    title: `FAQ | ${Site.title}`,
    description:
      "Find answers to frequently asked questions about BROWN SUGAR 1ST's organic snacks, gluten-free products, shipping, orders, and more. Learn everything you need to know about our offerings and services.",
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

export default async function Page() {
  const page = await gePageBySlug("faq", false);
  //if (!page) return notFound();

  return (
    <main
      data-categoryname={"FAQ"}
      data-categoryslug={"faq"}
      data-type={"category"}
      data-color={"#fefefe"}
      className="max-md:pt-[170px] md:pt-[170px]"
    >
      <section className="min-h-[100vh] gap-[4rem] overflow-x-hidden max-md:mx-[16px] max-md:space-y-16 max-md:pb-[20vw] md:mx-[25px] md:grid md:grid-cols-[repeat(24,1fr)]">
        <div className="relative z-10 col-[1/8]">
          <h1 className="font-und-header uppercase leading-[80%] max-md:text-[38.3vw] md:text-[13vw]">
            {page.title}
          </h1>
        </div>
        {page.body ? (
          <div className="col-[10/-1]">
            <contentful.RichText
              className={`prose-headings:font-und prose prose-xl prose-headings:leading-[1.2] prose-headings:tracking-tight prose-h1:mt-[4rem] prose-h1:leading-[1] prose-p:leading-tight md:prose-ol:text-[3vw]/tight [&_ul]:pl-[14px] [&_ul_li]:relative [&_ul_li]:list-none [&_ul_li]:!pl-0 before:[&_ul_li]:absolute before:[&_ul_li]:ml-[-14px] before:[&_ul_li]:block before:[&_ul_li]:h-[3px] before:[&_ul_li]:w-[8px] before:[&_ul_li]:bg-[#000] before:[&_ul_li]:content-[""] max-md:[&_ul_li]:text-[4vw]/tight max-md:before:[&_ul_li]:top-[2vw] md:[&_ul_li]:text-[1.2vw]/tight md:before:[&_ul_li]:top-[0.6vw] [&_ul_li_>*]:w-[95%] [&_ul_li_p]:!my-0`}
              content={page.body}
            />
          </div>
        ) : null}
      </section>
    </main>
  );
}
