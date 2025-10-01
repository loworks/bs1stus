/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
import { Metadata } from "next";
import * as Atoms from "@/components/Atoms";
import Link from "next/link";
import { Site } from "@/components/utils";
import WorkWithUs from "./sections/WorkWithUs";

export const metadata: Metadata = {
  title: `Contact | ${Site.title}`,
  description:
    "Contact BROWN SUGAR 1ST for inquiries about our organic, gluten-free snacks, sustainable sourcing, collaborations, and more.",
  metadataBase: new URL("https://brownsugar1st.store"),
  alternates: {
    canonical: "/contact/",
  },
  openGraph: {
    title: `Contact | ${Site.title}`,
    description:
      "Contact BROWN SUGAR 1ST for inquiries about our organic, gluten-free snacks, sustainable sourcing, collaborations, and more.",
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

export default function ContactPage() {
  return (
    <main
      data-categoryname={"Contact"}
      data-categoryslug={"contact"}
      data-type={"category"}
      data-color={"#fefefe"}
      className="flex flex-col max-md:gap-[12rem] max-md:pt-[170px] md:gap-[12rem]"
    >
      <section className="flex min-h-[100vh] flex-col gap-[8rem] overflow-x-hidden max-md:mx-[16px] md:mx-[25px]">
        <WorkWithUs />
      </section>
    </main>
  );
}
