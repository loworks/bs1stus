import { draftMode } from "next/headers";
import { MetadataRoute } from "next";
import {
  getAllShop,
  getAllAbout,
  getAllJournal,
  getAllTags,
} from "@/Libs/contentful/api";
type Route = {
  url: string;
  lastModified: string;
};

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://brownsugar1st.store`
  : "http://localhost:3000";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const preview =
    process.env.NODE_ENV === "development" || (await draftMode()).isEnabled;
  const routesMap = [""].map((route) => ({
    url: `${baseUrl}${route}/`,
    lastModified: new Date().toISOString(),
  }));
  const products: any = await getAllShop(preview);
  const shopRoutes = products.data.contentShopCollection.items.map(
    (product: any) => ({
      url: `${baseUrl}/shop/${product.slug}/`,
      lastModified: product.sys.publishedAt,
    }),
  );

  const journal: any = await getAllJournal(preview);
  const journalRoutes = journal.map((journal: any) => ({
    url: `${baseUrl}/journal/${journal.slug}/`,
    lastModified: journal.sys.publishedAt,
  }));
  const about: any = await getAllAbout(preview);
  const aboutRoutes = about.map((about: any) => ({
    url: `${baseUrl}/about/${about.slug}/`,
    lastModified: about.sys.publishedAt,
  }));
  const categories: any = await getAllTags(preview);
  const categoriesRoutes = categories.map((category: any) => ({
    url: `${baseUrl}/category/${category.slug}/`,
    lastModified: category.sys.publishedAt,
  }));
  let fetchedRoutes: Route[] = [];

  try {
    fetchedRoutes = (
      await Promise.all([
        shopRoutes,
        journalRoutes,
        aboutRoutes,
        categoriesRoutes,
      ])
    ).flat();
  } catch (error) {
    throw JSON.stringify(error, null, 2);
  }
  return [
    ...routesMap,
    {
      url: "https://brownsugar1st.store/shop/",
      lastModified: new Date(),
    },
    {
      url: "https://brownsugar1st.store/products/zensnack/",
      lastModified: new Date(),
    },
    {
      url: "https://brownsugar1st.store/products/crisps/",
      lastModified: new Date(),
    },
    {
      url: "https://brownsugar1st.store/journal/",
      lastModified: new Date(),
    },

    {
      url: "https://brownsugar1st.store/contact/",
      lastModified: new Date(),
    },
    ...fetchedRoutes,
  ];
}
