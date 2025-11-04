/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import { Metadata } from "next";
import * as Atoms from "@/components/Atoms";
import Link from "next/link";
import { Site } from "@/components/utils";
import Image from "next/image";
import Certifocations from "./components/Certifications";
import WaveLoved from "./components/WaveLoved";
import UsageGuidelinesTable from "./components/UsageGuidelinesTable";
import ChefList from "./sections/ChefList";
import Circle96Percent from "./components/Circle96Percent";
import BetterforYou from "./sections/BetterforYou";

export const metadata: Metadata = {
  title: `Better Than Butter | ${Site.siteName}`,
  description:
    "96% coconut-based, organic, and meticulously crafted for culinary professionals. Designed to enhance flavor, texture, and versatility in high-level kitchens. It’s more than an alternative—it’s a revolution in plant-based butter.",
  metadataBase: new URL("https://brownsugar1st.store"),
  alternates: {
    canonical: "/products/better-than-batter/",
  },
  openGraph: {
    title: `Better Than Butter | ${Site.siteName}`,
    description:
      "96% coconut-based, organic, and meticulously crafted for culinary professionals. Designed to enhance flavor, texture, and versatility in high-level kitchens. It’s more than an alternative—it’s a revolution in plant-based butter.",
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
export default function ButterPage() {
  return (
    <main
      data-categoryname={"Crisps"}
      data-categoryslug={"crisps"}
      data-type={"category"}
      data-color={"#fefefe"}
      className=""
    >
      <section className="min-h-[100vh]">
        <div className="relative z-20 max-md:space-y-[18vw] max-md:pt-[80px] md:space-y-[6vw] md:pt-[120px]">
          <div className="grid max-md:mx-[16px] max-md:grid-cols-[repeat(12,1fr)] md:mx-[25px] md:grid-cols-[repeat(24,1fr)]">
            <h1 className="max-md:col-[1/6] max-md:row-[1/3] md:col-[1/15] md:row-[1/4]">
              <span className="font-ob-nar-b font-black uppercase leading-[60%] max-md:text-[14vw] md:text-[10vw]">
                Better
                <br /> Than
                <br />
                Butter
              </span>
            </h1>

            <h2 className="font-ob-nar leading-[120%] max-md:col-[1/-1] max-md:mt-[5vw] md:col-[-11/-1] md:text-[1.75vw]">
              96% coconut-based, organic, and meticulously crafted for culinary
              professionals. Designed to enhance flavor, texture, and
              versatility in high-level kitchens. It’s more than an
              alternative—it’s a revolution in plant-based butter.
            </h2>
            <Certifocations className="justify-self-end max-md:col-[7/-1] max-md:row-[2/3] max-md:w-[80%] md:col-[-11/-1]" />
            <ul className="[&>li]:font-ob-nar-b max-md:relative max-md:col-[7/-1] max-md:row-[1/2] max-md:inline-block max-md:space-y-2 max-md:justify-self-end md:col-[-11/-1] md:space-y-2 max-md:[&>li]:text-[14px] md:[&>li]:text-[18px]">
              <li>
                <Atoms.SvgElements.IconCheck className="align-middle max-md:w-[20px] md:w-[30px]" />
                <span className="align-middle leading-[100%]">
                  For Professionals
                </span>
              </li>
              <li>
                <Atoms.SvgElements.IconCheck className="align-middle max-md:w-[20px] md:w-[30px]" />
                <span className="align-middle leading-[100%]">
                  Beyond Substitution
                </span>
              </li>
              <li>
                <Atoms.SvgElements.IconCheck className="align-middle max-md:w-[20px] md:w-[30px]" />
                <span className="align-middle leading-[100%]">
                  Superior Performance
                </span>
              </li>
            </ul>
          </div>
          <div className="relative max-md:space-y-8 md:space-y-8">
            <Circle96Percent className="absolute left-[50%] z-[1000] translate-x-[-50%] translate-y-[-50%]" />

            <Image
              className={
                "scroll-anim relative top-0 z-10 object-contain max-md:aspect-[3/4] max-md:object-cover md:h-full md:w-full"
              }
              data-animation-from='{"x":"-0", "y":"-0"}'
              data-animation-type="tween"
              data-animation-duration="1.4"
              data-animation-scrub="true"
              data-animation-to='{"x":"-10", "y":"-20","ease":"Circ.Out"}'
              data-animation-start="top top+=100"
              data-animation-end="bottom top"
              src="/btb-hero.webp"
              alt="hero"
              width={1920}
              height={1414}
              priority={true}
            />
            <div className="text-center max-md:space-y-4 md:space-y-4">
              <h2 className="font-ob-nar-b leading-[100%] max-md:text-[7.2vw] md:text-[3.6vw]">
                96% Coconut, Pure & Simple
              </h2>
              <ul className="[&>li]:font-ob-nar-b flex max-md:relative max-md:w-auto max-md:justify-around md:mx-[10vw] md:justify-around [&>li]:space-x-1 max-md:[&>li]:text-[14px] md:[&>li]:text-[18px]">
                <li>
                  <Atoms.SvgElements.IconCheck className="align-middle max-md:w-[20px] md:w-[30px]" />
                  <span className="align-middle leading-[100%]">
                    No Trans-FAT
                  </span>
                </li>
                <li>
                  <Atoms.SvgElements.IconCheck className="align-middle max-md:w-[20px] md:w-[30px]" />
                  <span className="align-middle leading-[100%]">
                    No Cholesterol
                  </span>
                </li>
                <li>
                  <Atoms.SvgElements.IconCheck className="align-middle max-md:w-[20px] md:w-[30px]" />
                  <span className="align-middle leading-[100%]">
                    No Animal Products
                  </span>
                </li>
              </ul>
              <p>KETO-Friendly:Contains MCT Oil Derived from Coconut.</p>
            </div>
          </div>
          <BetterforYou />
          <div className="">
            <div className="w-full overflow-hidden">
              <WaveLoved />
            </div>
            <div className="relative overflow-hidden bg-crisps-color py-[5vw] max-md:space-y-[10vw] md:mx-auto md:space-y-[10vw]">
              <div className="space-y-6 text-center max-md:mx-[16px]">
                <h2 className="font-ob-nar-b leading-[100%] max-md:text-[10vw] md:text-[min(8vw,64px)]">
                  Loved by Vegans, Trusted by Chefs.
                </h2>
                <div className="mx-auto md:w-[50vw] md:text-[1.4vw]">
                  <p>
                    We didnʼt just make another substitute, we created a butter
                    chefs truly want. Refined with Japanʼs top pastry chefs, its
                    melting, texture, and flakiness were perfected to craft the
                    ultimate croissant.
                  </p>
                  <p className="font-ob-nar">Now, what will you create?</p>
                </div>
                <ul className="[&>li]:font-ob-nar-b max-md:relative max-md:left-[50%] max-md:w-auto max-md:translate-x-[-50%] max-md:space-y-2 md:mx-[10vw] md:flex md:justify-around [&>li]:space-x-1 max-md:[&>li]:text-[14px] md:[&>li]:text-[18px]">
                  <li>
                    <Atoms.SvgElements.IconCheck className="align-middle max-md:w-[20px] md:w-[30px]" />
                    <span className="align-middle leading-[100%]">
                      For Professionals
                    </span>
                  </li>
                  <li>
                    <Atoms.SvgElements.IconCheck className="align-middle max-md:w-[20px] md:w-[30px]" />
                    <span className="align-middle leading-[100%]">
                      Beyond Substitution
                    </span>
                  </li>
                  <li>
                    <Atoms.SvgElements.IconCheck className="align-middle max-md:w-[20px] md:w-[30px]" />
                    <span className="align-middle leading-[100%]">
                      Superior Performance
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <Image
                  className={
                    "relative top-0 z-10 mx-auto object-contain md:h-full md:w-[70vw]"
                  }
                  src="/btb-graphic.webp"
                  alt="hero"
                  width={1920}
                  height={280}
                />
                <UsageGuidelinesTable />
              </div>{" "}
              <ChefList />
            </div>
          </div>
        </div>{" "}
      </section>
    </main>
  );
}
