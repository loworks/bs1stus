import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const secret = request.headers.get("Authorization");

  if (!secret) {
    return NextResponse.json(
      { message: "Authorization header is missing" },
      { status: 400 },
    );
  }

  // トークンの形式を柔軟に判定する
  const token = secret.startsWith("Bearer ") ? secret.slice(7) : secret;
  if (token !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  const body = await request.json();
  const { tag } = body;

  if (!tag) {
    return NextResponse.json({ message: "Tag is required" }, { status: 400 });
  }

  revalidateTag(tag);

  return NextResponse.json({ revalidated: true, now: Date.now(), tag });
}
