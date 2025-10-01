// components/StarRating.tsx
import React from "react";

interface StarRatingProps {
  rating: number; // 0〜5の評価値
}

const ReviewStarRating = ({ rating }: StarRatingProps) => {
  const starWidth = 14.47; // 星の幅（固定）
  const gap = 3; // 星と星の間の隙間（固定）

  const floor = Math.floor(rating);
  const decimal = rating - floor;

  const totalWidth = (starWidth + gap) * 4 + starWidth;

  return (
    <div style={{ display: "inline-block", position: "relative" }}>
      <svg width={totalWidth} className="h-[14px]">
        <use x="0" href="#star-line" />
        <use x={starWidth + gap} href="#star-line" />
        <use x={(starWidth + gap) * 2} href="#star-line" />
        <use x={(starWidth + gap) * 3} href="#star-line" />
        <use x={(starWidth + gap) * 4} href="#star-line" />
      </svg>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: `${(starWidth + gap) * floor + starWidth * decimal}px`,
          overflow: "hidden",
        }}
      >
        <svg width={totalWidth}>
          <use x="0" href="#star" />
          <use x={starWidth + gap} href="#star" />
          <use x={(starWidth + gap) * 2} href="#star" />
          <use x={(starWidth + gap) * 3} href="#star" />
          <use x={(starWidth + gap) * 4} href="#star" />
        </svg>
      </div>
    </div>
  );
};

export default ReviewStarRating;
