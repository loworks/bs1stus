// components/ReviewSummary.tsx
"use client";

import { useEffect, useState } from "react";
import { getReviews } from "@/Libs/firebase/review"; // Function to fetch reviews
import ReviewStarRating from "./ReviewStarRating"; // 修正後のStarRatingコンポーネントをインポート

const ReviewSummary = ({
  productId,
  isDescription,
}: {
  productId: string;
  isDescription?: boolean;
}) => {
  const [averageRating, setAverageRating] = useState<number>(0);
  const [reviewCount, setReviewCount] = useState<number>(0);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsData = await getReviews(productId);

        if (reviewsData && reviewsData.length > 0) {
          const totalRating = reviewsData.reduce(
            (sum, review) => sum + review.rating,
            0,
          );
          const average = totalRating / reviewsData.length;
          setAverageRating(average);
          setReviewCount(reviewsData.length);
        } else {
          setAverageRating(0);
          setReviewCount(0);
        }
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      }
    };

    fetchReviews();
  }, [productId]);

  return (
    <>
      {reviewCount === 0 && isDescription === true ? (
        <></>
      ) : (
        <div>
          {isDescription ? (
            <div className="flex gap-2 text-[14px] leading-[1] ">
              <div className="flex gap-2">
                <ReviewStarRating rating={averageRating} />
                <span>({averageRating.toFixed(1)})</span>
              </div>
              <p>{reviewCount} Reviews</p>
            </div>
          ) : (
            <div className="flex gap-2 text-[14px] leading-[1] max-lg:flex-col">
              <div className="flex gap-2">
                <ReviewStarRating rating={averageRating} />
                <span>({averageRating.toFixed(1)})</span>
              </div>
              <p>{reviewCount} Reviews</p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ReviewSummary;
