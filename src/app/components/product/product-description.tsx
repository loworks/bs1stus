/* eslint-disable react/jsx-key */
import { Product } from "@/Libs/shopify/types";
import { VariantSelector } from "./variant-selector";
import * as contentful from "@/Libs/contentful";
import Image from "next/image";
import * as Modules from "@/components/Modules";
import { TransitionLink } from "@/Libs/Transitions";
import React from "react";
export function ProductDescription({
  className,
  product,
  contentfulData,
  isExclusive,
  variantName,
  productId,
  ...rest
}: {
  className?: string;
  product: Product;
  isExclusive: boolean;
  contentfulData: any;
  variantName: string;
  productId: string;
}) {
  const related: object[] = contentfulData.relatedCollection.items;

  return (
    <div
      className={`${className} product-description max-md:mt-[20vw] max-md:px-[16px] max-md:pb-[14vh] md:h-[calc(100svh-100px)] md:w-1/2 md:space-y-[3.6vw] md:px-[40px]`}
      {...rest}
    >
      {/*<h1 className=" mb-12 text-center text-6xl  font-bold leading-tight tracking-tighter md:text-left md:text-7xl md:leading-none lg:text-8xl ">
				{product.title}
			</h1>
			<contentful.RichText content={contentfulData.description} />*/}
      <div className="product-description-inner">
        <div className="mt-[-12px] space-y-4">
          <div className="init-anim-desc ml-[-2px] space-y-4">
            <h3 className="font-ob-nar-b leading-[90%] tracking-tight max-md:text-[14.5vw] md:text-[5vw]">
              {contentfulData.productName}
            </h3>
            <h3 className="font-ob-nar-b leading-[1] tracking-tight max-md:text-[7.5vw] md:text-[2.4vw]">
              {variantName}
            </h3>
          </div>

          {contentfulData.ingredients ? (
            <contentful.RichText
              className={`init-anim-desc prose-headings:font-ob-nar-b prose prose-headings:leading-[100%] prose-p:leading-tight max-md:text-[14px]/tight md:w-[60%] md:text-[14px]/tight [&_ul]:pl-[14px] [&_ul_li]:relative [&_ul_li]:list-none [&_ul_li]:!pl-0 before:[&_ul_li]:absolute before:[&_ul_li]:ml-[-14px] before:[&_ul_li]:block before:[&_ul_li]:h-[3px] before:[&_ul_li]:w-[8px] before:[&_ul_li]:bg-[#000] before:[&_ul_li]:content-[""] max-md:before:[&_ul_li]:top-[2vw] md:before:[&_ul_li]:top-[0.6vw] [&_ul_li_>*]:w-[95%] [&_ul_li_p]:!my-0 max-md:[&_ul_li_p]:text-[4vw]/tight md:[&_ul_li_p]:text-[min(1.2vw,20px)]/tight`}
              content={contentfulData.ingredients}
            />
          ) : (
            <></>
          )}
          <Modules.ReviewSummary productId={productId} isDescription={true} />
        </div>

        {/*
        <p className=" max-md:text-[5.4vw]/tight md:text-[1.75vw]/tight">
          Our premium white loaf bread shokupan is made of fresh cream, butter,
          honey, alkaline ionized water, and the finest Japanese blended
          flour.The ingredients make for a soft, light, and slightly sweet
          combination in texture and taste.
        </p>
        <div className=" md:self-end">
          <h3 className=" font-ob-nar tracking-tight">NOTE</h3>
          <p className="max-md:text-[3.6vw]/tight md:text-[1vw]/tight">
            Bread may be stored at room temperature for 3 days or in the freezer
            for up to 2 weeks.
            <br />
            Read More How To Eat
            <br /> Products are shipped on the day of manufacture and basically
            delivered the day after the day of manufacture. However, arrival may
            be delayed due to delays by delivery companies or disasters.
            <br />
            Read More FAQs
          </p>
        </div>*/}
      </div>

      <div className="varient init-anim-desc flex flex-col max-md:gap-[10vw] md:gap-[1.2vw]">
        {related.length < 1 ? (
          ""
        ) : (
          <div>
            {/* <Image
              className={"h-[24px] object-cover md:mb-[1vw]"}
              src={
                contentfulData.slug === "crunchy-jujube-zen-snack"
                  ? "/zen-line02.png"
                  : contentfulData.slug === "lotus-seeds-zen-snack"
                    ? "/zen-line03.png"
                    : contentfulData.slug ===
                        "crunchy-jujube-goji-berries-zen-snack"
                      ? "/zen-line01.png"
                      : "/zen-line01.png"
              }
              alt="hero"
              width={2777}
              height={1600}
              priority={true}
            />*/}
            <h3 className="font-ob-nar-b text-[36px] uppercase">Variants</h3>
            <div className="flex items-start justify-between gap-12">
              <div className="pointer-events-auto flex w-full basis-[auto] flex-col items-start gap-2 py-2">
                <div className="border-b-[2px] pb-2">
                  <Image
                    className={"h-[30px] object-cover"}
                    src={
                      contentfulData.slug === "crunchy-jujube-zen-snack"
                        ? "/zen-line02.png"
                        : contentfulData.slug === "lotus-seeds-zen-snack"
                          ? "/zen-line03.png"
                          : contentfulData.slug ===
                              "crunchy-jujube-goji-berries-zen-snack"
                            ? "/zen-line01.png"
                            : contentfulData.slug === "organic-coconut-crisps"
                              ? "/crisps-line02.png"
                              : "/crisps-line01.png"
                    }
                    alt="hero"
                    width={1600}
                    height={60}
                    priority={true}
                  />
                </div>
                {contentfulData.productIcon ? (
                  <Image
                    className="h-[40px] w-[auto]"
                    width={contentfulData.productIcon.width}
                    height={contentfulData.productIcon.height}
                    alt={""}
                    src={contentfulData.productIcon.url}
                  />
                ) : (
                  ""
                )}
                <div className="leading-[1]">
                  <span className="text-[11px]">
                    {contentfulData.productName}
                  </span>
                  <br />
                  <span className="font-ob-nar text-[14px] leading-[1]">
                    {variantName}
                  </span>
                </div>
              </div>

              {related.length >= 1 &&
                related.map((product: any, j) => {
                  const variantNameList: string[] = [];
                  const variants = product.variantCollection.items;
                  for (var i = 0; i < variants.length; i++) {
                    const variant = variants[i];

                    if (!variant) break;
                    variantNameList.push(variant.value);
                  }
                  const variantName: string = variantNameList.join(" / ");

                  return (
                    <React.Fragment key={product.slug}>
                      {/*j === 0 ? (
                  <div className="h-[80px] w-[1px] bg-[#444]"></div>
                ) : (
                  ""
                )*/}

                      <TransitionLink
                        className="pointer-events-auto flex w-full basis-[auto] flex-col items-start gap-2 border-black py-2"
                        data-poductcategory={product.productCategory}
                        href={`/shop/${product.slug}`}
                        key={product.slug}
                      >
                        <div className="border-b-[2px] border-dashed pb-2">
                          <Image
                            className={"h-[30px] object-cover"}
                            src={
                              product.slug === "crunchy-jujube-zen-snack"
                                ? "/zen-line02.png"
                                : product.slug === "lotus-seeds-zen-snack"
                                  ? "/zen-line03.png"
                                  : product.slug ===
                                      "crunchy-jujube-goji-berries-zen-snack"
                                    ? "/zen-line01.png"
                                    : product.slug === "organic-coconut-crisps"
                                      ? "/crisps-line02.png"
                                      : "/crisps-line01.png"
                            }
                            alt="hero"
                            width={2777}
                            height={1600}
                            priority={true}
                          />
                        </div>
                        {product.productIcon ? (
                          <Image
                            className="h-[40px] w-[auto]"
                            width={product.productIcon.width}
                            height={product.productIcon.height}
                            alt={""}
                            src={product.productIcon.url}
                          />
                        ) : (
                          ""
                        )}
                        <div className="leading-[1] max-md:h-[70px]">
                          <span className="text-[11px]">
                            {product.productName}
                          </span>
                          <br />
                          <span className="font-ob-nar text-[14px] leading-[1]">
                            {variantName}
                          </span>
                        </div>
                      </TransitionLink>
                      {/*j !== related.length - 1 ? (
                  <div className="h-[80px] w-[1px] bg-[#444]"></div>
                ) : (
                  ""
                )*/}
                    </React.Fragment>
                  );
                })}
            </div>
          </div>
        )}
        <VariantSelector
          options={product.options}
          variants={product.variants}
        />
        {contentfulData.body ? (
          <div className="">
            <contentful.RichText
              className={`init-anim-desc prose-headings:font-ob-nar-b prose prose-headings:leading-[100%] prose-p:leading-tight prose-a:pointer-events-auto max-md:text-[4.2vw]/tight md:text-[min(1.6vw,20px)]/tight [&_ul]:pl-[14px] [&_ul_li]:relative [&_ul_li]:list-none [&_ul_li]:!pl-0 before:[&_ul_li]:absolute before:[&_ul_li]:ml-[-14px] before:[&_ul_li]:block before:[&_ul_li]:h-[3px] before:[&_ul_li]:w-[8px] before:[&_ul_li]:bg-[#000] before:[&_ul_li]:content-[""] max-md:before:[&_ul_li]:top-[2vw] md:before:[&_ul_li]:top-[0.6vw] [&_ul_li_>*]:w-[95%] [&_ul_li_p]:!my-0 max-md:[&_ul_li_p]:text-[14px]/tight md:[&_ul_li_p]:text-[min(1.2vw,20px)]/tight`}
              content={contentfulData.body}
            />
          </div>
        ) : null}
      </div>

      {/*
			<Price
				amount={product.priceRange.maxVariantPrice.amount}
				currencyCode={product.priceRange.maxVariantPrice.currencyCode}
			/>

			<VariantSelector options={product.options} variants={product.variants} />

			{product.descriptionHtml ? (
				<Prose
					className="mb-6 text-sm leading-tight dark:text-white/[60%]"
					html={product.descriptionHtml}
				/>
			) : null}*/}
    </div>
  );
}
