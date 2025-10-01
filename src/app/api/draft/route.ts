// route handler with secret and slug
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
const { CONTENTFUL_PREVIEW_SECRET } = process.env;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug");

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET || !slug) {
    return new Response("Invalid token", { status: 401 });
  }
  console.log("CONTENTFUL_PREVIEW_SECRET - ", slug);
  /*const post = await getPreviewPost(slug, "SLUG");
	console.log("slug -- ", post);

	if (!post) {
		return new Response("Invalid slug", { status: 401 });
	}*/
  //https://brownsugar1st.store/api/draft/?secret=RjMa01hFm6YgwGicfe67OkoDWW5Vaz&slug=/
  (
    await /*const post = await getPreviewPost(slug, "SLUG");
      console.log("slug -- ", post);

      if (!post) {
          return new Response("Invalid slug", { status: 401 });
      }*/
    draftMode()
  ).enable();
  redirect(slug);
  //redirect("/news/" + post.slug);
}
