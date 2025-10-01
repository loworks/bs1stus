/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import { Metadata } from "next";
import * as Atoms from "@/components/Atoms";
import { Site } from "@/components/utils";
import Image from "next/image";
import ZenList from "./ sections/ZenList";
import Feature from "./ sections/Feature";
export const metadata: Metadata = {
  title: `Zen Snack - Vegan, No Sugar Added, Chemical-Free Mindful Snacks | ${Site.siteName}`,
  description:
    "Zen Snack offers vegan, no sugar added, and chemical-free snacks crafted with the highest quality ingredients. Mindful, safe, and delicious treats perfect for the whole family.",
  metadataBase: new URL("https://brownsugar1st.store"),
  alternates: {
    canonical: "/products/zensnack/",
  },
  openGraph: {
    title: `Zen Snack - Vegan, No Sugar Added, Chemical-Free Mindful Snacks | ${Site.siteName}`,
    description:
      "Zen Snack offers vegan, no sugar added, and chemical-free snacks crafted with the highest quality ingredients. Mindful, safe, and delicious treats perfect for the whole family.",
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
export default function ZensnackPage() {
  return (
    <main
      data-categoryname={"ZenSnack"}
      data-categoryslug={"zensnack"}
      data-type={"category"}
      data-color={"#fefefe"}
      className="bg-zensnack-color max-md:space-y-16 max-md:pt-[170px] md:space-y-24 md:pt-[120px]"
    >
      <section className="space-y-[6vw] max-md:mx-[16px] md:mx-[25px]">
        <div className="relative z-20">
          <h1 className="text-center">
            <span className="font-ob-nar-b font-black uppercase leading-[100%] max-md:text-[18vw] md:text-[10vw]">
              Zen Snack
            </span>

            <br />
            <span className="font-ob-nar-b leading-[70%] max-md:text-[8vw] md:text-[5vw]">
              Series
            </span>
          </h1>
          <h2 className="font-ob-nar-b text-center leading-[100%] max-md:text-[4.8vw] md:text-[2.4vw]">
            A Tasty moment of Mindfulness
          </h2>
        </div>
        <section className="grid md:grid-cols-[repeat(24,1fr)]">
          <div className="space-y-[2.4vw] max-md:row-[2/3] md:col-span-8">
            <div className="space-y-[1.4vw]">
              <div className="space-y-2">
                <h2 className="font-ob-nar-b leading-[100%] max-md:text-[7.2vw] md:text-[3.6vw]">
                  Zen Snacking
                </h2>
                <h4 className="font-ob-nar-b leading-[100%] max-md:text-[4.8vw] md:text-[2.4vw]">
                  Simple, Intentional, Nourishing
                </h4>
              </div>
              <p>
                Crafted with intention, Zen Snack transforms everyday snacking
                into a nourishing ritual—bringing harmony to both mind and body.
              </p>
            </div>

            <div className="space-y-[1.4vw]">
              <div className="space-y-2">
                <h2 className="font-ob-nar-b leading-[100%] max-md:text-[7.2vw] md:text-[3.6vw]">
                  For the Mind
                </h2>
                <h4 className="font-ob-nar-b leading-[100%] max-md:text-[4.8vw] md:text-[2.4vw]">
                  A mindful pause in your busy day.
                </h4>
              </div>
              <p>
                Slow down, savor each bite, and be present. Zen Snacking is more
                than just eating—it’s an opportunity to reset and reconnect.
              </p>
              <ol
                start={1}
                className="font-ob-nar-b list-decimal space-y-2 pl-[20px] text-[22px] [&_p]:font-sans [&_p]:text-[16px]"
              >
                <li>
                  <h4 className="">Pause & Breathe</h4>

                  <p>Shift into mindful eating mode.</p>
                </li>
                <li>
                  <h4>Savor Each Bite</h4>
                  <p>Appreciate the natural ingredients with all 5 senses.</p>
                </li>
                <li>
                  <h4>Be Present</h4>
                  <p>Slow down and enjoy the moment.</p>
                </li>
              </ol>
            </div>
          </div>
          <div className="relative max-md:row-[1/2] max-md:mb-[5vw] md:col-[9/-1] md:mb-[-10vw]">
            <div className="z-10 mt-[-8vw] justify-self-center">
              <Image
                className={
                  "drop-shadow-[10px_10px_10px_rgba(0,0,0,0.8)] filter md:w-[min(62.5vw,75vh)]"
                }
                src="/natsume-f.webp"
                alt="hero"
                width={2777}
                height={1600}
                priority={true}
              />
            </div>
          </div>
        </section>
      </section>
      <Atoms.WaveZenSnack className="w-screen overflow-x-hidden" />
      <Feature />
      <section>
        <div className="max-md: max-md:mx-[16px] max-md:space-y-6 md:space-y-8">
          <h2 className="font-ob-nar-b text-center leading-[100%] max-md:text-[6vw] md:text-[3.6vw]">
            For the Body: <br />
            Nourishment Rooted in Tradition
          </h2>
          <p className="mx-auto tracking-tight md:w-[45%]">
            Inspired by Yaku-Zen, an ancient Eastern philosophy that values food
            for its natural benefits, Zen Snack brings balance and nourishment
            with time-honored ingredients, carefully selected to support your
            well-being.
          </p>
        </div>
      </section>
      <ZenList />
    </main>
  );
}
