"use client";
/* eslint-disable react/jsx-key */

import { useEffect, useState } from "react";
import { LineCrisps, LineZenSnack, WaveHeader } from "@/components/Atoms";
export default function CategoryLine({ className }: { className?: string }) {
  const [category, setCategory] = useState<string | null>(null);
  const [isInit, setInit] = useState(false);

  useEffect(() => {
    setInit(true);
  }, []);
  useEffect(() => {
    const htmlClassList = document.documentElement.classList;
    console.log("htmlClassList -- ", htmlClassList);
    if (htmlClassList.contains("product-crisps")) {
      setCategory("crisps");
    } else if (htmlClassList.contains("product-zensnack")) {
      setCategory("zensnack");
    }
  }, [isInit]);

  return !category ? (
    <></>
  ) : category === "crisps" ? (
    <WaveHeader
      className="z-10 [&_.text]:translate-y-[4px]"
      pcNode={
        <>Real Ingredients. Real Impact. Real Ingredients. Real Impact.</>
      }
      spNode={<>Real Ingredients. Real Impact. </>}
    />
  ) : (
    <WaveHeader
      className={`${className} [&_.div-bg]:bg-[#eeddb7] [&_.svg-fill]:fill-[#eeddb7] [&_.text]:translate-y-[0.3vw] [&_.text]:text-[#f8f6e9]`}
      strokeColor="#343233"
      pcNode={
        <>A Tasty moment of Mindfulness. A Tasty moment of Mindfulness.</>
      }
      spNode={<>A Tasty moment of Mindfulness.</>}
    />
  );
}
