import { LoginLogoutButton } from "../Atoms";
import OverlayMenuCsr from "./OverlayMenuCsr";
import {
  getShopForMenu,
  getAllRecipes,
  getPostsByCategory,
  getAllTags,
} from "@/Libs/contentful/api";
export default async function OverlayMenu() {
  const products: any = await getShopForMenu(true);
  const preview = process.env.NODE_ENV === "development";
  const about: Object[] = await getPostsByCategory("About", preview);

  const items: Object[] = products.data.contentShopCollection.items;
  const shopList: Object = {};
  const tags: any = await getAllTags(preview);
  shopList["bread"] = items.filter(function (item: any) {
    return item.productCategory === "bread";
  });
  shopList["pastry"] = items.filter(function (item: any) {
    return item.productCategory === "pastry";
  });
  shopList["ingredients"] = items.filter(function (item: any) {
    return item.productCategory === "ingredients";
  });

  return (
    <OverlayMenuCsr
      shopList={shopList}
      about={about}
      tags={tags}
      loginButton={
        <LoginLogoutButton className="font-ob-nar max-md:mt-2 max-md:text-[5vw] text-left uppercase leading-[100%] md:mt-4 md:text-[24px]" />
      }
    />
  );
}
