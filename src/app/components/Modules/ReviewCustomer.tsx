// components/ReviewCustomer.tsx (Client Component)
"use client";

import { useState } from "react";
import ReviewStarRating from "./ReviewStarRating";
import ReviewPagination from "./ReviewPagination";

type Review = {
  id: string;
  rating: number;
  headline: string;
  comment: string;
  authorName: string;
  date: string;
  image?: string;
  isVerifiedBuyer?: boolean; // 追加
};

type ReviewCustomerProps = {
  reviews: Review[];
};

const ReviewCustomer = ({ reviews }: ReviewCustomerProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 5;

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  // ページごとに空白のdivを追加（2ページ目以降かつ5件未満の場合のみ）
  const placeholders =
    currentPage > 1 && currentReviews.length < reviewsPerPage
      ? Array(reviewsPerPage - currentReviews.length).fill(null)
      : [];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {currentReviews.length === 0 ? (
        <p className="font-ob-nar text-right uppercase tracking-tight max-md:text-center max-md:text-[14px] md:text-[min(1.75vw,26px)]">
          No Customer Reviews yet
        </p>
      ) : (
        <></>
      )}
      {currentReviews.map((review, index) => (
        <div
          key={review.id}
          className={`review min-h-[140px] border-t-[1px] border-t-[#ccc] px-[1.2vw] max-md:py-[4.8vw] md:flex md:justify-between md:py-[1.6vw] ${
            index === currentReviews.length - 1 && placeholders.length === 0
              ? "border-b-[1px] border-b-[#ccc]"
              : ""
          }`}
        >
          <div className="max-md:flex max-md:justify-between md:basis-[33.1%]">
            <div>
              <p className="text-[14px]">
                Date: {new Date(review.date).toLocaleDateString()}
              </p>
              <p className="font-ob-nar uppercase leading-tight tracking-tight md:text-[min(1.2vw,20px)]">
                {review.authorName}
              </p>
            </div>
            <div>
              {review.isVerifiedBuyer && (
                <p className="text-[12px] font-bold max-md:text-right">
                  Verified Buyer
                </p>
              )}
              <ReviewStarRating rating={review.rating} />
            </div>
          </div>
          <div className="max-md:mt-[14px] md:basis-[53.1%]">
            <h4 className="font-ob-nar leading-tight max-md:mb-[4px] md:text-[max(1.1vw,16px)]">
              {review.headline}
            </h4>
            <p className="leading-tight md:text-[max(1vw,14px)]">
              {review.comment}
            </p>

            {review.image && <img src={review.image} alt="Review Image" />}
          </div>
        </div>
      ))}

      {/* 空白のdiv（2ページ目以降かつ5件未満の場合のみ） */}
      {placeholders.map((_, index) => (
        <div
          key={`placeholder-${index}`}
          className={`review flex min-h-[140px] justify-between border-t-[1px] border-t-[#ccc] px-[1.2vw] pt-[1.6vw] ${
            index === placeholders.length - 1
              ? "border-b-[1px] border-b-[#ccc]"
              : ""
          }`}
        />
      ))}

      <ReviewPagination
        className="max-md:mt-[12px] md:mt-[22px]"
        currentPage={currentPage}
        totalItems={reviews.length}
        itemsPerPage={reviewsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ReviewCustomer;
