/* eslint-disable react/jsx-key */
import { draftMode } from "next/headers";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import * as LibsUtils from "@/Libs/utils";

import { getReviews } from "@/Libs/firebase/review";
import { getPreviewPostBySlug, getAllShop } from "@/Libs/contentful/api";
import { AddToCart } from "@/components/cart/add-to-cart";
import { ProductImages } from "@/components/product/ProductImages";
import { ProductDescription } from "@/components/product/product-description";
import * as Utils from "@/components/utils";
import { getProductById } from "@/Libs/shopify";
import { Image as ShopifyImage } from "@/Libs/shopify/types";
import Image from "next/image";
import CategoryLine from "./components/CategoryLine";
import ContentZenSnack from "./sections/ContentZenSnack";
import ContentCrisps from "./sections/ContentCrisps";
import { ProductCategory } from "@/components/Organisms";
import { WaveHeader } from "@/components/Atoms";
import { isAuthenticated } from "@/components/utils/checkAuth";
import ReviewSection from "./sections/ReviewSection";
export async function generateStaticParams() {
  // プレビュー用フラグを環境変数に基づいて設定
  const preview = process.env.NODE_ENV === "development";

  // 公開済みデータを取得
  const products: any = await getAllShop(preview);

  if (!products || !products.data || !products.data.contentShopCollection) {
    return [];
  }

  const items = products.data.contentShopCollection.items;

  return items.map((product: any) => ({
    handle: product.slug,
  }));
}

/*
export async function generateMetadata({
	params,
}: {
	params: { handle: string };
}): Promise<Metadata> {
	const product = await getProduct(params.handle, "US");

	if (!product) return notFound();

	const { url, width, height, altText: alt } = product.featuredImage || {};
	const indexable = !product.tags.includes(HIDDEN_PRODUCT_TAG);

	return {
		title: product.seo.title || product.title,
		description: product.seo.description || product.description,
		robots: {
			index: indexable,
			follow: indexable,
			googleBot: {
				index: indexable,
				follow: indexable,
			},
		},
		openGraph: url
			? {
					images: [
						{
							url,
							width,
							height,
							alt,
						},
					],
			  }
			: null,
	};
}
*/

export const generateMetadata = async ({ params }): Promise<Metadata> => {
  const { handle } = await params;
  const preview =
    process.env.NODE_ENV === "development" || (await draftMode()).isEnabled;

  const post = await getPreviewPostBySlug(handle, preview);

  const isBuyerPage = handle.includes("for-buyer");

  return {
    title: `${post.siteTitle} | ${Utils.Site.siteName}`,
    description: `${post.siteDescription.json.content[0].content[0].value}`,
    metadataBase: new URL("https://brownsugar1st.store"),
    alternates: {
      canonical: `/shop/${handle}/`,
    },

    openGraph: {
      title: `${post.siteTitle} | ${Utils.Site.siteName}`,
      description: `${post.siteDescription.json.content[0].content[0].value}`,
      images: [
        {
          url: post.mediasCollection.items[0].url,
          width: post.mediasCollection.items[0].width,
          height: post.mediasCollection.items[0].height,
          alt: Utils.Site.title,
        },
      ],
    },
    robots: isBuyerPage
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
  };
};

export default async function ProductPage({ params }) {
  const { handle } = await params;
  const auth = await isAuthenticated();
  const isBuyerPage = handle.includes("for-buyer");
  if (isBuyerPage && !auth) return notFound();
  const preview =
    process.env.NODE_ENV === "development" || (await draftMode()).isEnabled;

  const post = await getPreviewPostBySlug(handle, preview);

  if (!post) return notFound();
  const shopifyID = post.shopifyId;

  const decodeBase64ShopifyId = shopifyID.includes("gid://")
    ? shopifyID
    : atob(shopifyID);

  //const product2 = await getProduct(handle, "US");

  const product = await getProductById(decodeBase64ShopifyId, "US");

  const images = post.mediasCollection.items;
  //const contentfulData3 = await getPostAndMorePosts(handle, true);
  //const testData = await getPreviewPostBySlug(handle);

  //console.log("testData -- 2", contentfulData.post.description.json.content[0]);

  const highPrice = product?.priceRange?.maxVariantPrice.amount;
  const lowPrice = product?.priceRange?.minVariantPrice.amount;

  const reviewsData = await getReviews(handle);

  const imgLength = images.length;
  const variantNameList: string[] = [];
  const variants = post.variantCollection.items;
  const variantWeight = product.variants[0]["weight"];
  const varientWeightUnit = product.variants[0]["weightUnit"];
  // console.log("product.images -- ", variantWeight, varientWeightUnit);
  for (var i = 0; i < variants.length; i++) {
    const variant = variants[i];

    if (!variant) break;
    variantNameList.push(variant.value);
  }
  const variantName: string = variantNameList.join(" / ");
  const productCategory = Utils.Site.getFixedProductCategory(
    post.productCategory,
  );

  const color: any = Utils.Site.getColorByCategory(productCategory);

  const isTouch = LibsUtils.Common.isTouchDevice();
  const deviceSize = LibsUtils.Common.getDeviceSize();
  deviceSize !== "lessPab" ? "12vw" : "36.3vw";
  const isExclusive: boolean =
    post.productName === "Almond Milk Bread" ||
    post.productName === "Melon Bread"
      ? false
      : false;

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${post.productName} | ${variantName}`,
    description: `${post.siteDescription.json.content[0].content[0].value}`,
    image: post.mediasCollection.items.map((media: any) => media.url),
    sku: `${handle}`,
    mpn: `${handle}`,
    brand: {
      "@type": "Brand",
      name: "Brown Sugar 1st", // ブランド名
    },
    review: reviewsData.map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.authorName,
      },
      datePublished: review.date,
      reviewBody: review.comment,
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
        bestRating: 5,
      },
    })),
    aggregateRating:
      reviewsData.length > 0
        ? {
            "@type": "AggregateRating",
            ratingValue:
              reviewsData.reduce((acc, review) => acc + review.rating, 0) /
              reviewsData.length,
            reviewCount: reviewsData.length,
            bestRating: 5,
          }
        : {
            ratingValue: 5,
            reviewCount: 1,
            "@type": "AggregateRating",
            bestRating: 5,
          },
    offers: {
      "@type": "Offer",
      url: `https://brownsugar1st.store/shop/${handle}/`,
      priceCurrency: "USD",
      price: lowPrice,
      highPrice: highPrice,
      lowPrice: lowPrice,

      priceValidUntil: "2099-12-31",
      itemCondition: "https://schema.org/NewCondition",
      availability: product.availableForSale
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      weight: {
        "@type": "QuantitativeValue",
        value: variantWeight,
        unitCode: varientWeightUnit,
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: productCategory !== "bread" ? 5.99 : 20.0,
          currency: "USD",
          additionalType:
            "https://schema.org/OfferShippingDetails/ShippingService",
          shippingService:
            productCategory !== "bread"
              ? {
                  "@type": "ShippingService",
                  provider: {
                    "@type": "Organization",
                    name: "USPS",
                  },
                }
              : undefined,
        },
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "US",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: 0,
            maxValue: 3,
            unitCode: "DAY",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 1,
            maxValue: 5,
            unitCode: "DAY",
          },
        },
      },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "US",
        returnPolicyCategory:
          "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 14,
        returnMethod: "https://schema.org/ReturnByMail",
        returnFees: "https://schema.org/FreeReturn",
      },
      //offerCount: 1,
    },
  };

  // productCategoryが"bread"の場合、shippingServiceを追加

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd),
        }}
      />
      <main
        data-categoryname={"Shop"}
        data-categoryslug={"shop"}
        data-product={productCategory}
        data-color={color.bg}
        data-type={"post"}
        className="section"
      >
        <CategoryLine className="z-[10] grid w-full overflow-hidden" />
        <div className="flex flex-col md:gap-[14vw]">
          <div className="relative z-0 flex max-md:top-[-20vw] max-md:mb-[-30vw] max-md:mt-[60px] max-md:flex-col max-md:pt-[12vw] md:top-[-10vw] md:mb-[-10vw] md:pt-[8vw] [html.product-crisps_&]:bg-crisps-color [html.product-zensnack_&]:bg-zensnack-color">
            <div className={`bg-${productCategory} md:w-1/2`}>
              <div className="z-[1] md:hidden">
                <h1
                  className="init-anim font-ob-nar-b text-center font-black uppercase leading-[1] tracking-tight max-md:text-[9vw] md:text-[7vw]"
                  data-animation-from='{"y":"40"}'
                  data-animation-type="chars"
                  data-animation-duration="1"
                  data-animation-delay="-=1"
                  data-animation-to='{"y":"0","ease":"power3.out", "stagger":{"each":"0.025","from":"edges"}}'
                >
                  {post.productName}
                </h1>
                <h4
                  className="init-anim font-ob-nar-b whitespace-nowrap text-center leading-[1] tracking-tight max-md:text-[5.6vw]"
                  data-animation-from='{"y":"40"}'
                  data-animation-type="chars"
                  data-animation-duration="1"
                  data-animation-delay="<"
                  data-animation-to='{"y":"0","ease":"power3.out", "stagger":{"each":"0.025","from":"edges"}}'
                >
                  {variantName}
                </h4>
              </div>
              <div className="product-images max-md:mx-[16px] max-md:mt-8 md:ml-[25px]">
                <div
                  className={`${deviceSize === "lessPab" ? "" : "init-anim space-y-5"}`}
                  data-animation-from='{"y":"100"}'
                  data-animation-type="tween"
                  data-animation-duration="1.4"
                  data-animation-delay="<"
                  data-animation-to='{"y":"0","ease":"power3.out"}'
                >
                  <ProductImages
                    images={images.map((image: any) => ({
                      src: image.url,
                      title: image.title,
                      width: image.width,
                      height: image.height,
                    }))}
                  />
                </div>
              </div>
            </div>

            <ProductDescription
              product={product}
              productId={handle}
              variantName={variantName}
              contentfulData={post}
              isExclusive={isExclusive}
              className="init-anim"
              data-animation-from='{"y":"40"}'
              data-animation-target=".init-anim-desc"
              data-animation-type="tween"
              data-animation-duration="1"
              data-animation-delay="<"
              data-animation-to='{"y":"0","ease":"power3.out", "stagger":{"each":"0.14"}}'
            />
          </div>
          <AddToCart
            amount={lowPrice}
            currencyCode={product.priceRange.minVariantPrice.currencyCode}
            variants={product.variants}
            availableForSale={product.availableForSale}
            isExclusive={isExclusive}
          />
        </div>
        <ReviewSection
          className="[html.product-crisps_&]:bg-crisps-color2 [html.product-zensnack_&]:bg-zensnack-color"
          productId={handle}
        />
        <section>
          {productCategory === "zensnack" ? (
            <ContentZenSnack />
          ) : productCategory === "crisps" ? (
            <ContentCrisps />
          ) : (
            <></>
          )}
        </section>

        <section className="">
          <ProductCategory className="" />
        </section>
        {/* <ReviewSection productId={handle} />

          <section className="md:mt-[20vw]">
            <Organisms.ProductCategory className="max-md:pt-[60px]" />
          </section>*/}
      </main>
    </>
  );
}
