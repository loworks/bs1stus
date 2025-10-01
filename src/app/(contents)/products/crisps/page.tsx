/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import { Metadata } from "next";
import * as Atoms from "@/components/Atoms";
import Link from "next/link";
import { Site } from "@/components/utils";
import Image from "next/image";
import {
  AnimatedElementsAlongPath,
  AnimatedTextAlongPath,
} from "@/components/Modules";
import { ProductCategory } from "@/components/Organisms";
import WaveCrisps from "./components/WaveCrisps";
import CrispsProducts from "./sections/CrispsProducts";
import Feature4 from "./sections/Feature4";
import BetterforYou from "./sections/BetterforYou";
export const metadata: Metadata = {
  title: `Guilt-Free Crisps Made with Fresh, Ethically Sourced Coconut & Cacao | ${Site.siteName}`,
  description:
    " Crafted with shade-grown cacao and fresh coconuts, our crisps support fair trade farmers, offer natural low-GI sweetness, and deliver pure, guilt-free enjoyment in perfect harmony with nature.",
  metadataBase: new URL("https://brownsugar1st.store"),
  alternates: {
    canonical: "/products/crisps/",
  },
  openGraph: {
    title: `Guilt-Free Crisps Made with Fresh, Ethically Sourced Coconut & Cacao | ${Site.siteName}`,
    description:
      "Crafted with shade-grown cacao and fresh coconuts, our crisps support fair trade farmers, offer natural low-GI sweetness, and deliver pure, guilt-free enjoyment in perfect harmony with nature.",
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
export default function CrispsPage() {
  return (
    <main
      data-categoryname={"Crisps"}
      data-categoryslug={"crisps"}
      data-type={"category"}
      data-color={"#fefefe"}
      className=""
    >
      <section className="min-h-[100vh]">
        <div className="relative z-20 space-y-[6vw] bg-crisps-color max-md:pt-[80px] md:pt-[120px]">
          <div>
            <h1 className="text-center">
              <span className="font-ob-nar-b font-black uppercase leading-[100%] max-md:text-[18vw] md:text-[10vw]">
                Crisps
              </span>
              <br />
              <span className="font-ob-nar-b leading-[70%] max-md:text-[8vw] md:text-[5vw]">
                Series
              </span>
            </h1>
            <h2 className="font-ob-nar-b text-center leading-[100%] max-md:text-[4.8vw] md:text-[2.4vw]">
              3 Simple Ingredients. Purely Delicious.
              <br />
              Better Food, Better Future, Better Humans
            </h2>
          </div>
          <div className="relative overflow-hidden">
            <div className="relative md:grid md:grid-cols-[repeat(24,1fr)]">
              <div className="space-y-[2.4vw] md:col-[1/14]">
                <div className="relative ml-[-10%] w-[110%] max-md:row-[1/2]">
                  <Image
                    className={
                      "scroll-anim relative top-0 z-10 object-contain md:h-full md:w-full"
                    }
                    data-animation-from='{"x":"-0", "y":"-0"}'
                    data-animation-type="tween"
                    data-animation-duration="1.4"
                    data-animation-scrub="true"
                    data-animation-to='{"x":"-10", "y":"-20","ease":"Circ.Out"}'
                    data-animation-start="top top+=100"
                    data-animation-end="bottom top"
                    src="/hero-crisps.webp"
                    alt="hero"
                    width={1920}
                    height={1784}
                    priority={true}
                  />
                  <Image
                    className={
                      "scroll-anim absolute left-[2.4vw] top-[2.4vw] z-0 object-contain md:h-full md:w-full"
                    }
                    data-animation-from='{"x":"-20", "y":"-10"}'
                    data-animation-type="tween"
                    data-animation-duration="1.4"
                    data-animation-scrub="true"
                    data-animation-to='{"x":"0", "y":"20","ease":"Circ.Out"}'
                    data-animation-start="top top+=100"
                    data-animation-end="bottom top"
                    src="/hero-crisps-shadow.webp"
                    alt="hero"
                    width={1920}
                    height={1813}
                    priority={true}
                  />
                </div>
              </div>
              <div className="relative max-md:row-[2/3] max-md:mt-[5vw] max-md:space-y-2 max-md:pl-[16px] md:col-[15/-1]">
                <h2 className="font-ob-nar-b text-crisps-bg-color max-md:text-[5.2vw] md:text-[2.4vw]">
                  Rich cacao brownie flavor
                </h2>
                <ul className="list-disc text-crisps-bg-color max-md:pl-[12px] max-md:text-[14px] md:pl-[16px]">
                  <li>
                    Organic Coconut Meat <br />
                    Naturally rich in MCT oil
                  </li>
                  <li>
                    Organic Coconut Nectar <br />
                    Low GI, high deliciousness
                  </li>
                  <li>
                    Organic Cacao Paste Deep, <br />
                    rich chocolate flavor
                  </li>
                </ul>
              </div>
              <div className="absolute grid items-center justify-center max-md:right-[16px] max-md:top-[80vw] max-md:w-[33vw] md:left-[55%] md:top-[17vw] md:w-[15vw]">
                <p className="font-ob-nar-b z-10 col-[1/2] row-[1/2] text-center uppercase leading-[100%] text-crisps-bg-color max-md:text-[5vw] md:text-[2.2vw]">
                  crunchy
                  <br /> texture
                </p>
                <Image
                  className={"z-0 col-[1/2] row-[1/2] object-contain"}
                  src="/crisps-circle01.png"
                  alt="hero"
                  width={800}
                  height={800}
                />
              </div>
            </div>

            <WaveCrisps className="absolute z-10 max-md:top-[130vw] md:top-[10vw]" />
            <svg
              className="absolute z-0 ml-[-5vw] w-[110vw] fill-crisps-color2 max-md:top-[130vw] md:top-[10vw]"
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 701.72 675.85"
            >
              <defs></defs>
              <path d="M0,415.28c12.76-34.02,59.51-70.87,129.12-69.45,69.61,1.42,124.73-39.68,136.06-82.21,11.34-42.52,46.98-87.87,116.08-87.87s110.41-35.56,136.06-89.21c25.65-53.65,91-77.22,184.39-86.54v675.85H0v-260.58Z" />
            </svg>
            <div className="relative max-md:mt-[40vw] max-md:bg-crisps-color2 md:mt-[-15vw] md:grid md:grid-flow-row-dense md:grid-cols-[repeat(24,1fr)]">
              <div className="absolute grid items-center justify-center max-md:right-[16px] max-md:top-[75vw] max-md:w-[33vw] md:left-[45%] md:top-[4vw] md:w-[15vw]">
                <p className="md:text-[2.2vw]uppercase font-ob-nar-b z-10 col-[1/2] row-[1/2] text-center leading-[100%] text-crisps-bg-color2 max-md:text-[5vw]">
                  Crispy
                  <br /> texture
                </p>
                <Image
                  className={"z-0 col-[1/2] row-[1/2] object-contain"}
                  src="/crisps-circle02.png"
                  alt="hero"
                  width={800}
                  height={800}
                />
              </div>
              <div className="space-y-[2.4vw] max-md:relative max-md:top-[-15vw] md:col-[11/-1]">
                <div className="relative ml-[-5%] w-[118%]">
                  <Image
                    className={
                      "scroll-anim relative top-0 z-10 object-contain md:h-full md:w-full"
                    }
                    data-animation-from='{"x":"-0", "y":"-0"}'
                    data-animation-type="tween"
                    data-animation-duration="1.4"
                    data-animation-scrub="true"
                    data-animation-to='{"x":"-10", "y":"-20","ease":"Circ.Out"}'
                    data-animation-start="top top+=100"
                    data-animation-end="bottom top"
                    src="/hero-coconuts.webp"
                    alt="hero"
                    width={1920}
                    height={1858}
                    priority={true}
                  />
                  <Image
                    className={
                      "scroll-anim absolute left-[2.4vw] top-[2.4vw] z-0 object-contain md:h-full md:w-full"
                    }
                    data-animation-from='{"x":"-20", "y":"-10"}'
                    data-animation-type="tween"
                    data-animation-duration="1.4"
                    data-animation-scrub="true"
                    data-animation-to='{"x":"0", "y":"20","ease":"Circ.Out"}'
                    data-animation-start="top top+=100"
                    data-animation-end="bottom top"
                    src="/hero-coconuts-shadow.webp"
                    alt="hero"
                    width={1920}
                    height={1860}
                    priority={true}
                  />
                </div>
              </div>

              <div className="relative max-md:ml-[16px] max-md:mt-[-5vw] max-md:space-y-2 max-md:pb-[15vw] md:col-[2/10] md:self-end md:pb-[10vw]">
                <h2 className="font-ob-nar-b text-crisps-bg-color2 max-md:text-[5.2vw] md:text-[2.4vw]">
                  Natural sweetness of coconut
                </h2>
                <ul className="list-disc text-crisps-bg-color2 max-md:pl-[12px] max-md:text-[14px] md:pl-[16px]">
                  <li>
                    Organic Coconut Meat <br />
                    Thinly shaved, roasted to crispy perfection
                  </li>
                  <li>
                    Organic Coconut Nectar <br />
                    Naturally caramelized, no refined
                  </li>
                  <li>
                    Sea Salt <br />A hint of balance for the perfect bite
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Feature4 />
      <BetterforYou />
      <CrispsProducts />
    </main>
  );
}
