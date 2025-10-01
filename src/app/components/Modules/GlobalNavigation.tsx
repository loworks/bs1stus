import Cart from "@/components/cart";
import OpenCart from "@/components/cart/open-cart";
import { Suspense } from "react";
import * as Atoms from "../Atoms";
import * as Utils from "@/components/utils";
import { TransitionLink } from "@/Libs/Transitions";
import DropdownServices from "./DropdownServices";
import DropdownAbout from "./DropdownAbout";

export default function GlobalNavigation({
  className = "",
  preview = false,
  ...rest
}: {
  className?: string;
  preview: boolean;
} & React.ComponentProps<"nav">) {
  const menu = Utils.Site.getMenu();

  return (
    <nav className={`${className}`}>
      <ul className="flex items-center space-x-4">
        {menu.map((item, i) =>
          item.slug === "about" ? (
            <li
              className="max-lg:hidden max-md:hidden [html.touch_&]:portrait:hidden"
              key={`navItem${i}`}
            >
              <TransitionLink useActiveLink={true} href={"/about/"}>
                <span className="leading-[100% font-ob-nar text-[18px] uppercase leading-[100%]">
                  {item.label}
                </span>
              </TransitionLink>
            </li>
          ) : item.slug === "products" ? (
            <li
              className="max-lg:hidden max-md:hidden [html.touch_&]:portrait:hidden"
              key={`navItem${i}`}
            >
              <DropdownServices className="leading-[100% font-ob-nar text-[18px] uppercase" />
            </li>
          ) : (
            <li
              className="max-lg:hidden max-md:hidden [html.touch_&]:portrait:hidden"
              key={`navItem${i}`}
            >
              <TransitionLink useActiveLink={true} href={item.to}>
                <span className="leading-[100% font-ob-nar text-[18px] uppercase leading-[100%]">
                  {item.label}
                </span>
              </TransitionLink>
            </li>
          ),
        )}
        <li key={`cart`}>
          <ul className={`cart-hm flex max-md:space-x-3 md:space-x-4`}>
            <li className=" ">
              <Suspense fallback={<OpenCart />}>
                <Cart />
              </Suspense>
            </li>
            <li className="">
              <Atoms.MenuModal />
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
