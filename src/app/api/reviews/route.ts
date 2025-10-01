import { NextResponse } from "next/server";
import { addReview } from "@/Libs/firebase/review";

// POSTリクエストの処理
export async function POST(req: Request) {
  try {
    // リクエストボディから必要なデータを取得
    const {
      productId,
      userId,
      rating,
      headline,
      comment,
      authorName,
      image,
      isVerifiedBuyer,
    } = await req.json();

    // Firestoreにレビューを追加
    await addReview(
      productId,
      userId,
      rating,
      headline,
      comment,
      authorName,
      image,
      isVerifiedBuyer,
    );

    // 成功時のレスポンス
    return NextResponse.json(
      { message: "レビューが追加されました!" },
      { status: 200 },
    );
  } catch (error) {
    // エラー発生時の処理
    console.error("エラー: ", error);

    // エラーレスポンス
    return NextResponse.json(
      { error: "レビューの追加に失敗しました。" },
      { status: 500 },
    );
  }
}
