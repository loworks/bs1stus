"use client";

import { useState } from "react";
import { firestore } from "@/Libs/firebase/index";
import { addDoc, collection } from "firebase/firestore";
import { Buttons } from "../Atoms";

export default function ReviewForm({
  productId,
  onSuccess,
}: {
  productId: string;
  onSuccess: () => void;
}) {
  const [rating, setRating] = useState<number>(0);
  const [hoveredRating, setHoveredRating] = useState<number>(0);
  const [comment, setComment] = useState<string>("");
  const [authorName, setAuthorName] = useState<string>("");
  const [headline, setHeadline] = useState<string>("");
  const [isVerifiedBuyer, setIsVerifiedBuyer] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      setError("Please select a rating before submitting your review.");
      return;
    }
    if (!authorName || !comment) {
      setError("Name and Comment are required fields.");
      return;
    }

    try {
      const reviewData = {
        productId,
        rating,
        comment,
        authorName,
        headline,
        isVerifiedBuyer,
        timestamp: new Date(),
      };

      await addDoc(collection(firestore, "reviews"), reviewData);

      setMessage("Review submitted successfully!");
      setError("");
      setRating(0);
      setHoveredRating(0);
      setComment("");
      setAuthorName("");
      setHeadline("");
      setIsVerifiedBuyer(false);
      onSuccess();
    } catch (err) {
      setMessage("");
      setError("Failed to submit the review. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Rating Section */}
      <div>
        <label className="block text-sm font-medium">Rating</label>
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <div
              key={star}
              className={`star ${star <= (hoveredRating || rating) ? "filled" : ""}`}
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoveredRating(star)}
              onMouseLeave={() => setHoveredRating(0)}
              style={{
                width: "40px",
                height: "40px",
                cursor: "pointer",
                display: "inline-block",
              }}
            >
              <div
                className="star-icon"
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor:
                    star <= (hoveredRating || rating) ? "black" : "#cccccc",
                  clipPath:
                    "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Reviewer Name */}
      <div>
        <label className="block text-sm font-medium" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="border-gray-300 w-full border p-2"
          placeholder="Your Name"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
        />
      </div>

      {/* Headline Section */}
      <div>
        <label className="block text-sm font-medium" htmlFor="headline">
          Review Title
        </label>
        <input
          type="text"
          id="headline"
          className="border-gray-300 w-full border p-2"
          placeholder="Write a catchy headline"
          value={headline}
          onChange={(e) => setHeadline(e.target.value)}
        />
      </div>

      {/* Comment */}
      <div>
        <label className="block text-sm font-medium" htmlFor="review">
          Review
        </label>
        <textarea
          id="review"
          className="border-gray-300 w-full border p-2"
          rows={4}
          placeholder="Write your review here"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>

      {/* Verified Buyer Checkbox */}
      <div>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={isVerifiedBuyer}
            onChange={() => setIsVerifiedBuyer(!isVerifiedBuyer)}
          />
          <span className="tracking-tight">Verified Buyer</span>
        </label>
      </div>

      {/* Error and Message Display */}
      {error && <div className="text-sm text-red-500">{error}</div>}
      {message && <div className="text-sm text-green-500">{message}</div>}

      <div className="mt-4">
        <Buttons.boxButton
          type="submit"
          className="font-ob-nar w-full uppercase tracking-tight"
        >
          Submit Review
        </Buttons.boxButton>
        {/*<button
          type="submit"
          className="w-full bg-blue-500 px-4 py-2 text-white"
        >
          Submit Review
        </button>*/}
      </div>
    </form>
  );
}
