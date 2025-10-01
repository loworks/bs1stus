/* eslint-disable react/jsx-key */
import { draftMode } from "next/headers";
import { Metadata } from "next";
import React from "react";
import * as Organism from "@/components/Organisms";
import { getAllShop } from "@/Libs/contentful/api";
import { Site } from "@/components/utils";
export const metadata: Metadata = {
  title: `Shop | ${Site.title}`,
  description:
    "We create plant-based, gluten-free snacks with simple, clean ingredients—made for kids, trusted by parents. Safe, tasty, and sustainable.",
  metadataBase: new URL("https://brownsugar1st.store"),
  alternates: {
    canonical: "/shop/", // ← ここにcanonicalのパスを指定
  },
  openGraph: {
    title: `Shop | ${Site.title}`,
    description:
      "We create plant-based, gluten-free snacks with simple, clean ingredients—made for kids, trusted by parents. Safe, tasty, and sustainable.",
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
export default function ProductCategoryPage() {
  return (
    <main
      data-categoryname={"Product Category"}
      data-categoryslug={"product-category"}
      data-type={"category"}
      data-color={"#fefefe"}
      className="bg-[#fefefe]"
    >
      <Organism.ProductCategory isCategory={true} className="pt-[100px]" />
    </main>
  );
}
