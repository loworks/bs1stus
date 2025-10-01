// app/review/page.tsx (Server Component)
import { getReviews } from "@/Libs/firebase/review";
import ReviewCustomer from "./ReviewCustomer";

type Review = {
  id: string;
  rating: number;
  headline: string;
  comment: string;
  authorName: string;
  date: string;
  image?: string;
};

const ReviewPage = async ({ productId }: { productId: string }) => {
  // productIdを取得
  const reviewsData = await getReviews(productId);

  // サーバーコンポーネント内でレビューを渡す
  return <ReviewCustomer reviews={reviewsData} />;
};

export default ReviewPage;
