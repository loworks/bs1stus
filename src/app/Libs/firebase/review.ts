import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  serverTimestamp,
  DocumentData,
} from "firebase/firestore";
import { firestore } from "./index";

// レビューをFirestoreに追加する関数
export const addReview = async (
  productId: string,
  userId: string,
  rating: number,
  headline: string,
  comment: string,
  authorName: string, // レビュアー名
  image: string | null, // 画像URL（オプション）
  isVerifiedBuyer: boolean, // 購入者確認フラグ
) => {
  try {
    const reviewRef = collection(firestore, "reviews");
    await addDoc(reviewRef, {
      productId,
      userId,
      rating,
      headline,
      comment,
      authorName,
      image,
      isVerifiedBuyer,
      timestamp: serverTimestamp(), // サーバー側のタイムスタンプを追加
    });
    console.log("レビューが追加されました！");
  } catch (error) {
    console.error("レビュー追加時にエラーが発生しました: ", error);
  }
};

// 特定の製品のレビューを取得する関数
export const getReviews = async (productId: string) => {
  const reviewsQuery = query(
    collection(firestore, "reviews"),
    where("productId", "==", productId),
  );

  try {
    const querySnapshot = await getDocs(reviewsQuery);
    const reviews = querySnapshot.docs.map((doc) => {
      const data = doc.data() as DocumentData;
      return {
        id: doc.id,
        rating: data.rating || 0,
        headline: data.headline || "",
        comment: data.comment || "",
        authorName: data.authorName || "匿名",
        date: data.timestamp?.toDate()?.toISOString() || "", // timestampをISO文字列に変換
        image: data.image || "", // 画像URL（オプション）
        isVerifiedBuyer: data.isVerifiedBuyer || false, // 購入者確認フラグ
      };
    });
    return reviews;
  } catch (error) {
    console.error("レビューの取得中にエラーが発生しました: ", error);
    return [];
  }
};
