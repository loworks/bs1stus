interface MenuItem {
  to: string;
  label: string;
  slug: string;
}
export const siteName = "Brown Suger 1st";
export const title =
  "Brown Sugar 1st.: Organic, Vegan, No Sugar Added Snacks & Butters for a Mindful Lifestyle";
let preview: boolean = false;

export function getUrlPrefix() {
  return process.env.NEXT_PUBLIC_URL_PREFIX;
}
let scrollPosition: number = 0;
export const setscrollPosition = (value: number) => {
  scrollPosition = value;
};

export const getFixedProductCategory = (productCategory: string) => {
  let category = productCategory;
  if (productCategory === "bread" || productCategory === "pastry") {
    category = "bakery";
  } else if (productCategory === "ingredients") {
    category = "grocery";
  } else {
    category = productCategory;
  }
  return category;
};
export const getscrollPosition = (): number => {
  return scrollPosition;
};

/* Disable Scroll for iOS */
const disableScroll = (event) => {
  event.preventDefault();
};

export let isOpenMenu: boolean = false;
export const addDisableScrollListener = () => {
  isOpenMenu = true;
  document.addEventListener("touchmove", disableScroll, { passive: false });
};
export const removeDisableScrollListener = () => {
  isOpenMenu = false;
  document.removeEventListener("touchmove", disableScroll);
};

/* Keep Color Value for Overlay Transition */

let currentBgColor: any;
export const setCurrentBgColor = () => {
  currentBgColor = document.querySelector('meta[name="theme-color"]')[
    "content"
  ];
};
export const getCurrentBgColor = (): any => {
  return currentBgColor;
};
export const getColorByCategory = (productCategory: string): object => {
  const color =
    productCategory === "bakery"
      ? { text: "#c8ff01", bg: "#fffabc" }
      : productCategory === "grocery"
        ? { text: "#234922", bg: "#ddc383" }
        : { text: "#071342", bg: "#fccbbe" };
  return color;
};
const menu: Array<MenuItem> = [
  {
    to: "/shop",
    label: "Shop",
    slug: "shop",
  },

  {
    to: "/products",
    label: "Products",
    slug: "products",
  },

  {
    to: "/journal",
    label: "Journal",
    slug: "journal",
  },

  {
    to: "/about",
    label: "About",
    slug: "about",
  },
];

const classList = [
  "type-category",
  "type-page",
  "type-post",
  "category-faq",
  "category-notfound",
  "category-index",
  "category-shop",
  "category-about",
  "category-contact",
  "category-products",
  "category-product-category",
  "product-crisps",
  "product-zensnack",
  "product-merchandise",
];
export const getMenu = (): Array<MenuItem> => {
  return menu;
};

export const setDeviceType = (element: any = null) => {
  let type: boolean = null;
  if (typeof window !== `undefined`) {
    type = "ontouchstart" in window;
  }
  const cont: any = document.querySelector("html");
  type ? cont.classList.add(`touch`) : cont.classList.add(`no-touch`);
};
export const setType = (element: any = null) => {
  const node = element ? element : document.querySelector("main");
  const dataset = node.dataset;
  const categoryslug = dataset.categoryslug ? dataset.categoryslug : "index";
  const categoryClass = "category-" + categoryslug;
  const productCategory = dataset.product ? "product-" + dataset.product : null;
  const type = dataset.type ? "type-" + dataset.type : "data-index";

  const cont: any = document.querySelector("html");
  cont.classList.remove(...classList);
  cont.classList.add(categoryClass, type);
  if (productCategory) cont.classList.add(productCategory);

  return;
};
let scrollTarget: string;
export const setScrollTarget = (target: string) => {
  scrollTarget = target;
};
export const getScrollTarget = (): string => {
  return scrollTarget;
};
export const restoreScrollTarget = () => {
  scrollTarget = "";
};
