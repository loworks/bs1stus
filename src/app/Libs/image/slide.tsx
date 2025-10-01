/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Image from "next/image";

import { useInView } from "react-intersection-observer";

export default function slide() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const src =
    "https://images.unsplash.com/photo-1621961458348-f013d219b50c?auto=format&fit=crop&w=1000&q=80";

  return (
    <>
      <p>Custom Slide Animation</p>
      <div style={{ overflow: "hidden" }}>
        <Image
          ref={ref}
          src={src}
          fill
          alt="image"
          sizes="300px"
          style={{
            opacity: inView ? 1 : 0,
          }}
        />
        <div
          style={{
            left: inView ? "100%" : "0%",
            top: 0,
            width: "100%",
            height: "100%",
            position: "relative",
            zIndex: 1,
            backgroundColor: "#e9c6b0",
            transition: "left 0.2s cubic-bezier(0.3, 0.2, 0.2, 0.8)",
          }}
        ></div>
      </div>
    </>
  );
}
