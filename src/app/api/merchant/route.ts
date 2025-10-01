// pages/api/product-feed.xml.js
import { draftMode } from "next/headers";
import { NextResponse } from "next/server";
import { getAllShop } from "@/Libs/contentful/api";
import { getProductById } from "@/Libs/shopify";

export async function GET() {
  // 商品データを取得
  const preview =
    process.env.NODE_ENV === "development" || (await draftMode()).isEnabled;

  const products: any = await getAllShop(preview);
  const items = products.data.contentShopCollection.items;

  // 非同期処理を並列に処理するために、Promise.allを使用
  const productMap = new Map();

  // 非同期処理を待って、商品データをマップにセット
  await Promise.all(
    items.map(async (item: any) => {
      const shopifyID = item.shopifyId;
      const decodeBase64ShopifyId = shopifyID.includes("gid://")
        ? shopifyID
        : atob(shopifyID);
      const product = await getProductById(decodeBase64ShopifyId, "US");

      // productMapにデータをセット
      productMap.set(item.slug, product);
    }),
  );

  // XMLを構築
  let xmlContent = '<?xml version="1.0" encoding="UTF-8"?>';
  xmlContent += '<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">';
  xmlContent += "<channel>";
  xmlContent += "<title>Brown Sugar 1st</title>";
  xmlContent += "<link>https://brownsugar1st.store</link>";
  xmlContent += "<description>Brown Sugar 1st product feed</description>";

  // 商品データをXMLの形式で追加
  await Promise.all(
    items.map(async (item: any) => {
      const shopifydata = productMap.get(item.slug);
      //console.log("item -- ", shopifydata);
      if (shopifydata) {
        // 商品情報をxml形式で追加
        const variantNameList: string[] = [];
        const variants = item.variantCollection.items;

        for (var i = 0; i < variants.length; i++) {
          const variant = variants[i];

          if (!variant) break;
          variantNameList.push(variant.value);
        }
        const variantName: string = variantNameList.join(" / ");
        const variantWeight = shopifydata.variants[0]["weight"];
        const varientWeightUnit = shopifydata.variants[0]["weightUnit"];
        const weightUnit = varientWeightUnit === "GRAMS" ? "g" : "kg";
        xmlContent += "<item>";
        xmlContent += `<g:id>${item.slug}</g:id>`;
        xmlContent += `<g:title>${escapeXml(shopifydata.title)}</g:title>`;
        xmlContent += `<g:description>${item.siteDescription.json.content[0].content[0].value}</g:description>`;
        xmlContent += `<g:link>https://brownsugar1st.store/shop/${item.slug}/</g:link>`;
        function escapeXml(xmlString) {
          const replacements = {
            "&": "&amp;", // アンパサンドをエスケープ
            "<": "&lt;", // 小なり記号をエスケープ
            ">": "&gt;", // 大なり記号をエスケープ
            '"': "&quot;", // ダブルクォートをエスケープ
            "'": "&apos;", // シングルクォートをエスケープ
          };

          return xmlString.replace(/[&<>"']/g, (char) => replacements[char]);
        }
        item.mediasCollection.items.map((media: any, i: number) => {
          if (i === 0) {
            xmlContent += `<g:image_link>${media.url}</g:image_link>`;
          } else {
            xmlContent += `<g:additional_image_link>${media.url}</g:additional_image_link>`;
          }
        });
        //Bread - 424
        //Cookie = 2229
        //Tea : 2073
        //Miso: 427
        //Soy sauce: 4616
        console.log(
          "shopifydata.description -- ",
          escapeXml(shopifydata.description),
        );
        xmlContent += `<g:product_type>"${escapeXml("Food, Beverages & Tobacco > Food Items > Snack Foods")}"</g:product_type>`;
        xmlContent += `<g:google_product_category>423</g:google_product_category>`;
        const highPrice = shopifydata.priceRange.maxVariantPrice.amount;
        const lowPrice = shopifydata.priceRange.minVariantPrice.amount;
        xmlContent += `<g:price>${lowPrice} USD</g:price>`;
        xmlContent += `<g:availability>${shopifydata.availableForSale ? "in stock" : "out of stock"}</g:availability>`;
        xmlContent += `<g:quantity>10</g:quantity>`;
        xmlContent += `<g:condition>new</g:condition>`;

        xmlContent += `<g:brand>Brown Sugar 1st</g:brand>`;

        xmlContent += `<g:shipping_weight>${variantWeight} ${weightUnit}</g:shipping_weight>`;
        xmlContent += `<g:shipping>`;
        xmlContent += `<g:country>US</g:country>`;
        xmlContent += ` <g:service>Standard</g:service>`;
        /*xmlContent += ` <g:price>${item.productCategory !== "bread" ? 5.99 : 20}  USD</g:price>`;*/
        xmlContent += `</g:shipping>`;

        // 商品のGTIN情報（あれば）
        if (shopifydata.barcode) {
          xmlContent += `<g:gtin>${shopifydata.barcode}</g:gtin>`;
        } else {
          xmlContent += `<g:identifier_exists>no</g:identifier_exists>`;
          xmlContent += `<g:mpn>${item.slug}</g:mpn>`;
        }
        xmlContent += `<g:tax>`;
        xmlContent += `<g:country>US</g:country>`;
        xmlContent += `<g:region>NY</g:region>`;
        xmlContent += `<g:rate>8.875</g:rate>`;
        xmlContent += `<g:tax_ship>n</g:tax_ship>`;
        xmlContent += `</g:tax>`;
        xmlContent += "</item>";
      }
    }),
  );

  xmlContent += "</channel>";
  xmlContent += "</rss>";

  // XMLレスポンスを返す
  return new NextResponse(xmlContent, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
