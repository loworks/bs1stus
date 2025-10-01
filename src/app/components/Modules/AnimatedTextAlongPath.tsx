"use client";

import React, { useEffect, useRef, useCallback, useState } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import SplitType from "split-type";

gsap.registerPlugin(MotionPathPlugin);

const AnimatedTextAlongPath = ({
  className,
  children,
  viewBox = "0 0 609.28 278.48",
  pathData = "M609.28,258.48c-171.27,0-247.99-38.19-335.29-140.23C186.67,16.22,108.7-6.6,10.09,50.99",
  baseDuration = 10,
  strokeColor = "#eb5a2e",
  kerningFactor = 1500,
  ...rest
}: {
  className?: string;
  children?: React.ReactNode;
  viewBox?: string;
  pathData?: string;
  baseDuration?: number;
  strokeColor?: string;
  kerningFactor?: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const [duration, setDuration] = useState(baseDuration);
  const timeline = useRef<gsap.core.Timeline | null>(null);

  // コンテナ幅に応じた duration を計算
  const updateDuration = useCallback(() => {
    if (!containerRef.current) return;
    const width = containerRef.current.offsetWidth;
    const newDuration = Math.max(baseDuration * (width / 1000), 5); // 幅 500px を基準にする
    setDuration(newDuration);
  }, [baseDuration]);

  const applyGsapAnimation = useCallback(() => {
    if (!pathRef.current || !textRef.current) return;

    // 既存のアニメーションを全て殺す

    if (timeline.current) timeline.current.kill();
    timeline.current = gsap.timeline();
    const path = pathRef.current;
    const textElement = textRef.current;

    // SplitTypeでテキストを分割
    const split = new SplitType(textElement, { types: "chars" });
    const spaces = [];
    const text = textElement.textContent;
    let num = 0;
    text.split("").forEach((char, index) => {
      if (char === " ") {
        spaces.push(num);
        num = num - 1;
      }
      num++;
    });

    // 分割後の文字とスペースを結びつける
    const charsWithSpaces = split.chars.map((char, index) => {
      return {
        content: char.textContent,
        isSpace: spaces.includes(index),
      };
    });

    split.chars.forEach((char) => {
      const span = document.createElement("div");
      span.textContent = char.textContent;
      char.textContent = "";
      char.appendChild(span);
      gsap.set(char, {
        visibility: "hidden",
      });
      // 文字を上下反転
      gsap.set(span, { rotate: 180, marginTop: "1vw" });
    });

    const kerning = 0;
    // 文字の幅を事前に計算
    const charWidths = split.chars.map(
      (char) => char.offsetWidth + kerning || 300,
    );

    let counter = 0;

    // シームレスなアニメーションを実現するための複数の GSAP アニメーション
    split.chars.forEach((char, index) => {
      const prevCharWidth = index > 0 ? charWidths[index - 1] : 0;
      const spacing = charsWithSpaces[index].isSpace
        ? 100
        : charWidths[index] / 2 + prevCharWidth / 2 + 20;

      counter = spacing / (kerningFactor / baseDuration);
      // duration 5 - 300,  10 - 150, 20 - 75, 30 - 50
      timeline.current.to(
        char,
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
      timeline.current.seek(duration * 0.7);
    });
  }, [duration]);

  useEffect(() => {
    updateDuration(); // 初回の duration 設定
    applyGsapAnimation();
    const isTouchDevice = "ontouchstart" in window;
    const handleResize = () => {
      updateDuration();
      applyGsapAnimation();
    };

    if (isTouchDevice) {
      // タッチデバイスでは orientationchange のみ監視
      window.addEventListener("orientationchange", handleResize);
    } else {
      // PC では resize を監視
      window.addEventListener("resize", handleResize);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, [updateDuration, applyGsapAnimation]);

  return (
    <div ref={containerRef} className={`relative ${className}`} {...rest}>
      <svg
        className="overflow-visible"
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="path overflow-visible"
          ref={pathRef}
          d={pathData}
          fill="none"
          stroke={strokeColor}
        />
      </svg>

      <div ref={textRef} className="text-container absolute">
        {children}
      </div>
    </div>
  );
};

export default AnimatedTextAlongPath;
