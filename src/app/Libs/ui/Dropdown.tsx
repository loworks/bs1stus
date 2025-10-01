"use client";

import React, { useState, useRef, HTMLAttributes, useEffect } from "react";
import { TransitionLink } from "../Transitions";
import gsap from "gsap"; // GSAPのインポート
import Link from "next/link";

interface DropdownProps {
  label: string;
  slug: string;
  nolink?: boolean;
  items: {
    [x: string]: any;
    label: string;
    href: string;
  }[];
}
type CombinedProps = DropdownProps & HTMLAttributes<HTMLDivElement>;

export default function Dropdown({
  label,
  slug,
  items,
  nolink,
  className,
  ...rest
}: CombinedProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isBelow, setIsBelow] = useState(true);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null); // ドロップダウンメニューを参照

  // ドロップダウンを開く処理
  const handleMouseEnter = () => {
    if (buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      setIsBelow(buttonRect.bottom < windowHeight / 2); // 200px分余裕を見て判断
    }
    setIsOpen(true); // ドロップダウンを開く
  };

  // ドロップダウンを閉じる処理
  const handleMouseLeave = () => setIsOpen(false);

  useEffect(() => {
    if (dropdownRef.current) {
      if (isOpen) {
        // GSAPでアニメーション
        gsap.to(dropdownRef.current, {
          y: isBelow ? 0 : -10, // 下に表示 / 上に少し表示
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        gsap.to(dropdownRef.current, {
          y: isBelow ? -10 : 0, // アニメーションで隠す
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        });
      }
    }
  }, [isOpen, isBelow]); // isOpenまたはisBelowが変更されたときにアニメーションを実行

  return (
    <div
      className={`${className} relative inline-block`}
      {...rest}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {nolink ? (
        <>
          <div className="dropdown-menu relative z-20 flex cursor-pointer items-center">
            <span className="leading-none">{label}</span>
            <svg
              className="dropdown-icon ml-[2px] h-[15px] w-[15px] translate-y-[-2px]"
              style={{ verticalAlign: "middle" }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2v20M22 12H2"
              />
            </svg>
          </div>
        </>
      ) : (
        <TransitionLink
          ref={buttonRef}
          href={`/${slug}/`}
          useActiveLink={true}
          className="dropdown-menu relative z-20 flex items-center"
        >
          <span className="leading-none">{label}</span>
          <svg
            className="dropdown-icon ml-[2px] h-[15px] w-[15px] translate-y-[-2px]"
            style={{ verticalAlign: "middle" }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 2v20M22 12H2"
            />
          </svg>
        </TransitionLink>
      )}
      {/* ドロップダウンメニュー */}
      <div
        ref={dropdownRef} // メニューを参照するために追加
        className={`absolute left-[50%] translate-x-[-50%] text-sm opacity-0 ${isBelow ? "top-0 pt-10" : "bottom-0 pb-10"} ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        style={{
          transformOrigin: "top", // アニメーションの起点を上に設定
        }}
      >
        <div className="flex flex-col gap-2 bg-white px-10 py-7">
          {items.map((item) =>
            item.target ? (
              <Link
                key={item.href}
                href={item.href}
                target={item.target}
                className="dropdown-item block whitespace-nowrap"
              >
                {item.label}
              </Link>
            ) : (
              <TransitionLink
                key={item.href}
                href={item.href}
                className="dropdown-item block whitespace-nowrap"
              >
                {item.label}
              </TransitionLink>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
