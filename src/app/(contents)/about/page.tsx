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
  WaveHeader,
} from "@/components/Atoms";
import React from "react";

export const metadata: Metadata = {
  title: `About | ${Site.title}`,
  description:
    "Brown Sugar 1st believe every bite has a story. Our About shares the ideas, inspirations, and intentions behind our snacks—from ingredient sourcing and behind-the-scenes production, to family-friendly tips and thoughtful reflections on food, sustainability, and well-being. Here, we document the journey of making food that’s not only safe and delicious for kids, but also kind to people and the planet.",
  metadataBase: new URL("https://brownsugar1st.store"),
  alternates: {
    canonical: "/about/", // ← ここにcanonicalのパスを指定
  },
  openGraph: {
    title: `About | ${Site.title}`,
    description:
      "Brown Sugar 1st believe every bite has a story. Our About shares the ideas, inspirations, and intentions behind our snacks—from ingredient sourcing and behind-the-scenes production, to family-friendly tips and thoughtful reflections on food, sustainability, and well-being. Here, we document the journey of making food that’s not only safe and delicious for kids, but also kind to people and the planet.",
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

export default async function About() {
  const preview =
    process.env.NODE_ENV === "development" || (await draftMode()).isEnabled;

  return (
    <>
      <main
        data-categoryname={"About"}
        data-categoryslug={"About"}
        data-type={"category"}
        data-color={"#fefefe"}
        className="min-h-[100vh]"
      >
        <WaveHeader
          className="z-10 [&_.div-bg]:bg-[#eeddb7] [&_.svg-fill]:fill-[#eeddb7] [&_.text]:translate-y-[1px] [&_.text]:text-[#f8f6e9]"
          strokeColor="#009565"
          spNode={<>Woman Owned, Sasrinability</>}
          pcNode={<>Better Food, Better Future, Better Humans</>}
        />
        <section className="About relative z-0 mt-[-10vw] w-screen">
          <Image
            className={`h-full w-full object-cover max-md:aspect-[4/5] md:aspect-[16/9]`}
            src={"/about13.webp"}
            quality={70}
            priority={true}
            alt={`Organic Products`}
            width={2400}
            height={1500}
          />
          <div className="grid border-t-[1px] max-md:grid-cols-[repeat(12,1fr)] md:grid-cols-[repeat(24,1fr)]">
            <div className="max-md:col-[1/-2] max-md:border-r-[1px] md:col-[12/24] md:space-y-8 md:border-x-[1px] md:p-[2vw]">
              <h1 className="font-ob-nar-b leading-[100%] max-md:border-b-[1px] max-md:px-[16px] max-md:py-[16px] max-md:text-[8vw] md:text-[4vw]">
                BROWN SUGAR 1ST - Vision
              </h1>
              <p className="max-md:px-[16px] max-md:py-[16px]">
                BROWN SUGAR 1ST was founded in Tokyo in 2011 as a health food
                brand. Our mission is to make healthy, delicious food easily
                accessible for consumers, while maintaining a strong commitment
                to craftsmanship. At the heart of our brand is the belief in
                using the power of nature to create high-quality products in a
                sustainable manner. All of our products are made with
                environmentally friendly materials and methods, based on the
                principles of fair trade. Our goal is not only to expand in
                Japan but also to reach the U.S. market by 2025, spreading our
                high-quality products worldwide.
              </p>
            </div>
          </div>
          <div className="grid border-t-[1px] max-md:grid-cols-[repeat(12,1fr)] md:grid-cols-[repeat(24,1fr)]">
            <div className="max-md:col-[3/-1] max-md:border-l-[1px] md:col-[2/12] md:space-y-8 md:border-l-[1px] md:p-[2vw]">
              <h1 className="font-ob-nar-b leading-[100%] max-md:border-b-[1px] max-md:px-[16px] max-md:py-[16px] max-md:text-[8vw] md:text-[4vw]">
                Our Commitment
              </h1>
              <p className="max-md:px-[16px] max-md:py-[16px]">
                BROWN SUGAR 1ST is built on the philosophy that "we are made of
                what we eat." We create each product with great care, using
                carefully selected ingredients chosen by Midori, the founder.
                Every product is handmade to ensure quality. Our selection
                process is guided by one principle: "Would we feed this to our
                children?" We focus on health while ensuring that our products
                are delicious and of the highest quality.
              </p>
            </div>
            <div className="flex max-md:col-[1/-1] max-md:border-t-[1px] md:col-[12/24] md:border-x-[1px]">
              <div className="grid grid-cols-[repeat(12,1fr)]">
                <Image
                  className={`col-[1/7] aspect-[4/5] object-cover`}
                  src={"/about1.webp"}
                  quality={70}
                  priority={true}
                  alt={`Organic Products`}
                  width={2400}
                  height={1500}
                />
                <Image
                  className={`col-[7/-1] aspect-[4/5] border-black object-cover md:border-l-[1px]`}
                  src={"/about6.jpg"}
                  quality={70}
                  priority={true}
                  alt={`Organic Products`}
                  width={2400}
                  height={1500}
                />
              </div>
            </div>
          </div>
          <div className="grid grid-flow-dense border-t-[1px] max-md:grid-cols-[repeat(12,1fr)] md:grid-cols-[repeat(24,1fr)]">
            <div className="max-md:col-[1/-2] max-md:border-r-[1px] md:col-[14/24] md:space-y-8 md:border-x-[1px] md:p-[2vw]">
              <h1 className="font-ob-nar-b text-[4vw] leading-[100%] max-md:border-b-[1px] max-md:px-[16px] max-md:py-[16px] max-md:text-[8vw]">
                Sustainable <br />
                Product Creation
              </h1>
              <p className="max-md:px-[16px] max-md:py-[16px]">
                BROWN SUGAR 1ST places great importance on a production process
                that minimizes environmental impact. We constantly strive to
                improve, focusing on resource circulation and efficient use of
                materials. Our goal is to create products with minimal
                environmental burden from a long-term perspective. We also
                prioritize transparency in our marketing efforts, promoting
                products with clear information so consumers can understand the
                value of what they are purchasing, rather than encouraging
                impulsive buying.
              </p>
            </div>
            <div className="flex max-md:col-[1/-1] max-md:border-t-[1px] md:col-[2/14] md:border-l-[1px]">
              <div className="max-md:grid max-md:grid-cols-[repeat(12,1fr)]">
                <Image
                  className={`aspect-[4/5] w-full object-cover max-md:col-[2/-1] max-md:border-l-[1px] max-md:border-black`}
                  src={"/about09.webp"}
                  quality={70}
                  priority={true}
                  alt={`Organic Products`}
                  width={2400}
                  height={1500}
                />
              </div>
            </div>
          </div>
          <div className="border-t-[1px] max-md:grid-cols-[repeat(12,1fr)] md:grid md:grid-flow-dense md:grid-cols-[repeat(24,1fr)]">
            <div className="md:col-[2/-2] md:space-y-8 md:border-x-[1px] md:p-[2vw]">
              <h1 className="font-ob-nar-b leading-[100%] max-md:border-b-[1px] max-md:px-[16px] max-md:py-[16px] max-md:text-[8vw] md:text-[4vw]">
                Product Series
              </h1>
              <div className="max-md:space-y-4 max-md:px-[16px] max-md:pb-[32px] max-md:pt-[16px] md:space-y-8 md:pb-[24px]">
                <p>
                  Our products are crafted with the goal of offering the kind of
                  quality you would want to feed to your family. BROWN SUGAR 1ST
                  offers three product series, each carefully designed to
                  maximize the benefits of nature while balancing flavor and
                  health.
                </p>
                <Buttons.boxLink
                  href="/shop/"
                  className="max-md:mx-auto max-md:w-full md:w-[350px]"
                >
                  Shop All
                </Buttons.boxLink>
              </div>
            </div>
            <div className="flex w-full border-t-[1px] md:col-[2/-2] md:border-r-[1px]">
              <Image
                className="aspect-[4/5] min-w-0 flex-1 border-l-[#000] object-cover md:border-l-[1px]"
                src={"/zen-crunchy-jujube.jpg"}
                quality={70}
                priority={true}
                alt={`Organic Products`}
                width={2400}
                height={1500}
              />

              <Image
                className="aspect-[4/5] min-w-0 flex-1 border-l-[1px] border-l-[#000] object-cover"
                src={"/zen-jujube-goji.jpg"}
                quality={70}
                priority={true}
                alt={`zen-jujube-goji.jpg`}
                width={2400}
                height={1500}
              />

              <Image
                className="aspect-[4/5] min-w-0 flex-1 border-l-[1px] border-l-[#000] object-cover"
                src={"/crisps-brownie01.jpg"}
                quality={70}
                priority={true}
                alt={`Organic Products`}
                width={2400}
                height={1500}
              />
            </div>
          </div>
          <div className="grid border-t-[1px] max-md:grid-cols-[repeat(12,1fr)] md:grid-cols-[repeat(24,1fr)]">
            <div className="border-l-[1px] max-md:col-[2/-1] md:col-[2/12] md:space-y-8 md:p-[2vw]">
              <h1 className="font-ob-nar-b leading-[100%] max-md:border-b-[1px] max-md:px-[16px] max-md:py-[16px] max-md:text-[8vw] md:text-[4vw]">
                Wholesale Business
              </h1>
              <p className="max-md:px-[16px] max-md:py-[16px]">
                At BROWN SUGAR 1ST, we are dedicated to sharing our commitment
                to health and sustainability not only through direct-to-consumer
                channels but also by partnering with select wholesale clients.
                We collaborate with retailers, cafés, and specialty stores that
                share our values, ensuring that more people have access to our
                high-quality, health-focused products. We carefully choose our
                wholesale partners to maintain the integrity of our brand and to
                guarantee that our products are presented in a way that reflects
                their true value. From premium health food stores to boutique
                grocery shops, we work closely with each partner to provide
                tailored support, marketing materials, and product education to
                help them succeed. As we expand into the international market,
                especially in the United States, we are actively seeking
                like-minded partners to join us in delivering authentic,
                nourishing products to customers around the world.
              </p>
            </div>
            <div className="flex max-md:col-[1/-1] max-md:border-t-[1px] md:col-[12/24] md:border-x-[1px]">
              <div className="max-md:grid max-md:grid-cols-[repeat(12,1fr)]">
                <Image
                  className={`col-[1/-2] w-full object-cover max-md:border-r-[1px] max-md:border-black`}
                  src={"/about12.webp"}
                  quality={70}
                  priority={true}
                  alt={`Organic Products`}
                  width={2400}
                  height={1500}
                />
              </div>
            </div>
          </div>{" "}
        </section>
      </main>
    </>
  );
}
