import productFragment from "../fragments/product";

export const getProductQuery = /* GraphQL */ `
  query getProduct($handle: String!, $country: CountryCode!)
  @inContext(country: $country) {
    product(handle: $handle) {
      ...product
    }
  }
  ${productFragment}
`;
export const getProductByIDQuery = /* GraphQL */ `
  query getProduct($id: ID!, $country: CountryCode!)
  @inContext(country: $country) {
    product(id: $id) {
      ...product
    }
  }
  ${productFragment}
`;

export const getProductsQuery = /* GraphQL */ `
  query getProducts(
    $sortKey: ProductSortKeys
    $reverse: Boolean
    $query: String
  ) @inContext(country: US) {
    products(sortKey: $sortKey, reverse: $reverse, query: $query, first: 100) {
      edges {
        node {
          ...product
        }
      }
    }
  }
  ${productFragment}
`;

export const getProductRecommendationsQuery = /* GraphQL */ `
  query getProductRecommendations($productId: ID!) @inContext(country: US) {
    productRecommendations(productId: $productId) {
      ...product
    }
  }
  ${productFragment}
`;
