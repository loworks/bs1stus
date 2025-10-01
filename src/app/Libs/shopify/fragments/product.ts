import imageFragment from "./image";
import seoFragment from "./seo";

const productFragment = /* GraphQL */ `
  fragment product on Product {
    id
    slug: metafield(namespace: "custom", key: "slug") {
      value
      type
    }
    handle
    availableForSale
    title

    description
    descriptionHtml
    productType

    options {
      id
      name
      values
    }
    priceRange {
      maxVariantPrice {
        amount
        currencyCode
      }
      minVariantPrice {
        amount
        currencyCode
      }
    }
    variants(first: 250) {
      edges {
        node {
          id
          title
          availableForSale
          selectedOptions {
            name
            value
          }
          weight
          weightUnit
          price {
            amount
            currencyCode
          }
        }
      }
    }
    featuredImage {
      ...image
    }
    images(first: 20) {
      edges {
        node {
          ...image
        }
      }
    }
    seo {
      ...seo
    }
    tags
    updatedAt
  }
  ${imageFragment}
  ${seoFragment}
`;

export default productFragment;
