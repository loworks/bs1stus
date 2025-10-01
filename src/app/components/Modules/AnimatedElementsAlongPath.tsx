"use client";

import React, { useEffect, useRef, useCallback, useState } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

const AnimatedElementsAlongPath = ({
  className,
  children,
  viewBox = "0 0 515.71 58.5",
  pathData = "M515.71.5c-72.25,0-61.26,51.83-154.97,51.83S310.99.5,207.33.5,132.46,58.09,0,58.09",
  baseDuration = 10,
  staggerOffset = 1,
  kerningFactor = 1500,
  ...rest
}: {
  className?: string;
  children?: React.ReactNode;
  viewBox?: string;
  pathData?: string;
  baseDuration?: number;
  staggerOffset?: number;
  kerningFactor?: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const elementsRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);
  const [duration, setDuration] = useState(baseDuration);
  const timeline = useRef<gsap.core.Timeline | null>(null);

  const updateDuration = useCallback(() => {
    if (!containerRef.current) return;
    const width = containerRef.current.offsetWidth;
    const newDuration = Math.max(baseDuration * (width / 1000), 5);
    setDuration(newDuration);
  }, [baseDuration]);

  const applyGsapAnimation = useCallback(() => {
    if (!pathRef.current || !elementsRef.current) return;
    if (timeline.current) timeline.current.kill();
    timeline.current = gsap.timeline();
    const path = pathRef.current;
    const elements = Array.from(
      elementsRef.current.children,
    ) as HTMLDivElement[];

    const elementWidths = elements.map((element) => element.offsetWidth || 300);

    let counter = 0;
    elements.forEach((element, index) => {
      const prevelementWidth = index > 0 ? elementWidths[index - 1] : 0;
      const spacing = elementWidths[index] / 2 + prevelementWidth / 2 + 300;

      counter = spacing / (kerningFactor / baseDuration);
      gsap.set(element, { visibility: "hidden" });
      timeline.current.to(
        element,
        {
          visibility: "visible",
          duration: duration,
          repeat: -1,
          motionPath: {
            path: path,
            align: path,
            alignOrigin: [0.5, 0.5], // 中央を基準に配置
            autoRotate: true,
          },
          ease: "none",
          delay: counter, // 各文字のアニメーションをシームレスに
        },
        "<",
      );
    });

    timeline.current.play();
    timeline.current.seek(duration * 0.9);
  }, [duration]);

  useEffect(() => {
    updateDuration();
    applyGsapAnimation();

    const handleResize = () => {
      updateDuration();
      applyGsapAnimation();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [updateDuration]);

  return (
    <div ref={containerRef} className={`relative ${className}`} {...rest}>
      <svg
        className="absolute"
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="path"
          ref={pathRef}
          d={pathData}
          fill="none"
          stroke="#fff"
        />
      </svg>

      <div ref={elementsRef} className="el-cont absolute flex space-x-4">
        {children}
      </div>
    </div>
  );
};

export default AnimatedElementsAlongPath;
