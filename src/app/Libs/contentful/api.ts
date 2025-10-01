const MEDIA_ASSET_QUERY = `
	sys {
		id
	}
	__typename
	url
  title
  contentType
	width
	height
	description
`;
const GRID_QUERY = `
	__typename
	title
	itemsCollection {
		items {
			... on Media {
        __typename
				file {
				url
        title
        contentType
				width
				height
				description
				}
			}
			... on Text {
        __typename
				field {
					json
				}
			}
      ... on ContentShop {
        __typename
        slug
        productName
        variantCollection(limit:2) {
          items {
            type
            value
          }
        }
         mediasCollection(limit: 1)  {
          items {
            ${MEDIA_ASSET_QUERY}
          }
        }
      }
		}
	}
	json
`;
const RICHTEXT_QUERY = `
	__typename
	json
	links {
		entries {
        inline {
          sys {
						id
					}
          ...on Button {
              __typename
                href
                label
                type
                className
              }
          ...on ContentShop {
            __typename
            slug
            productName
            variantCollection(limit:2) {
              items {
                type
                value
              }
            }
             mediasCollection(limit: 8)  {
              items {
                ${MEDIA_ASSET_QUERY}
              }
            }
          }
        }
				block {
					sys {
						id
					}
					... on Grid {
						${GRID_QUERY}
					}
				}
			}
		assets {
				block {
          sys {
            id
          }
					${MEDIA_ASSET_QUERY}
				}
			}
		}

`;
const POST_BASE_QUERY = `
  siteTitle
  siteDescription {
    json
  }
	title
	slug
   sys {
    publishedAt
  }
  date
  mediasCollection(limit: 8)  {
    items {
      ${MEDIA_ASSET_QUERY}
    }
  }
`;

const JOURNAL_DETAIL_QUERY = `
	${POST_BASE_QUERY}
  caption {
   json
  }
  siteDescription {
   json
  }
  tagsCollection {
    items {
      slug
      name
      group
    }
  }
body {
   ${RICHTEXT_QUERY}
  }
`;
const ABOUT_DETAIL_QUERY = `
	${POST_BASE_QUERY}
  caption {
   json
  }
  description {
   json
  }
  relatedCollection(limit: 5) {
    items {
      ... on ContentShop {
        slug
        productName
        variantCollection(limit:2) {
          items {
            type
            value
          }
        }
         mediasCollection(limit: 1)  {
          items {
            ${MEDIA_ASSET_QUERY}
          }
        }
      }

    }
  }
`;

const SHOP_QUERY_FOR_MENU = `
	slug
	productCategory
  productName
  variantCollection(limit: 10)  {
    items {
      type
      value
    }
  }
`;
const SHOP_ALL_QUERY = `
  siteTitle
  siteDescription {
  json
}
	slug
  sys {
    publishedAt
    firstPublishedAt
  }
  date
	productCategory
  productName
  variantCollection(limit: 10)  {
    items {
      type
      value
    }
  }
	shopifyId
  thumbnailCollection(limit: 2)  {
      items {
        ${MEDIA_ASSET_QUERY}
      }
    }
 	mediasCollection(limit: 8)  {
        items {
          ${MEDIA_ASSET_QUERY}
        }
      }

`;
const SHOP_QUERY = `
slug
siteTitle
siteDescription {
  json
}
	productCategory
  productName
  productIcon {
    width
    height
    url
  }
  variantCollection(limit: 10)  {
    items {
      type
      value
    }
  }
  relatedCollection(limit: 10) {
    items {
      slug
      productName
      productCategory
      productIcon {
        width
        height
        url
      }
      variantCollection(limit: 10) {
        items {
          type
          value
        }
      }
    }
  }
	shopifyId
 	mediasCollection(limit: 8)  {
        items {
          ${MEDIA_ASSET_QUERY}
        }
      }
  ingredients {
   ${RICHTEXT_QUERY}
  }
	body {
   ${RICHTEXT_QUERY}
  }

`;
const PAGE_QUERY = `
	${POST_BASE_QUERY}
  body {
   ${RICHTEXT_QUERY}
  }
`;

async function fetchGraphQL(
  query: string,
  preview = false,
  tag = "posts",
): Promise<any> {
  const fetchOptions: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${
        preview
          ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
          : process.env.CONTENTFUL_ACCESS_TOKEN
      }`,
    },
    body: JSON.stringify({ query }),
  };

  if (!preview) {
    (fetchOptions as any).next = {
      tags: [tag],
      revalidate: 86400,
    };
  } else {
    (fetchOptions as any).cache = "no-store"; // プレビュー時はキャッシュせず
  }

  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    fetchOptions,
  ).then((response) => response.json());
}

function extractShop(fetchResponse: any): any {
  return fetchResponse?.data?.contentShopCollection?.items?.[0];
}

function extractShopEntries(fetchResponse: any): any[] {
  return fetchResponse?.data?.contentShopCollection?.items;
}
export async function getTag(slug: string, preview: boolean): Promise<any[]> {
  const tag = await fetchGraphQL(
    `{
      tagsCollection (where: { slug: "${slug}" }, preview: ${preview ? "true" : "false"}){
        items {
          slug
          siteTitle
          group
          siteDescription{
            json
          }
          name
          description {
            json
          }
        }
      }
    }`,
    preview,
  );

  return tag?.data?.tagsCollection?.items[0];
}
export async function getAllTags(preview: boolean): Promise<any[]> {
  const tags = await fetchGraphQL(
    `{
      tagsCollection {
        items {
          slug
          name
          group
          description {
            json
          }
          sys {
            publishedAt
            firstPublishedAt
          }
        }
      }
    }`,
    preview,
  );

  return tags?.data?.tagsCollection?.items;
}
export async function getContentsByTag(
  slug: string,
  preview: boolean,
): Promise<{
  shopItems: [];
  journalItems: [];
}> {
  const entries = await fetchGraphQL(
    `{
       contentShopCollection(where: {tags: {slug:"${slug}"}, slug_not_in: ["zensnack-for-buyer"] }, preview: ${preview ? "true" : "false"}) {
        items {
          ${SHOP_ALL_QUERY}
        }
      }
      contentJournalCollection(where: {tags: {slug:"${slug}"}}, preview: ${preview ? "true" : "false"}) {
        items {
          ${POST_BASE_QUERY}
        }
       }
    }`,
    preview,
  );

  return {
    shopItems: entries?.data?.contentShopCollection?.items || [],
    journalItems: entries?.data?.contentJournalCollection?.items || [],
  };
}
export async function getPreviewPostBySlug(
  slug: string,
  preview: boolean,
): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      contentShopCollection(where: { slug: "${slug}" }, preview: ${preview ? "true" : "false"}, limit: 1) {
        items {
          ${SHOP_QUERY}
        }
      }
    }`,
    preview,
  );
  return extractShop(entry);
}
export async function getPreviewPostByShipifyId(
  shopifyId: string,
): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      contentShopCollection(where: { shopifyId: "${shopifyId}" }, preview: true, limit: 1) {
        items {
          ${SHOP_QUERY}
        }
      }
    }`,
    true,
  );
  return extractShop(entry);
}
export async function getShopForMenu(isDraftMode: boolean): Promise<any[]> {
  const entries = await fetchGraphQL(
    ` {
  contentShopCollection{
    items {
      ${SHOP_QUERY_FOR_MENU}
    }
  }
}`,
  );

  return entries;
}
export async function getProductsByCategory(
  category: string,
  preview: boolean,
  limit: number = 0,
): Promise<any[]> {
  const entries = await fetchGraphQL(
    ` {
  contentShopCollection( where: { productCategory: "${category}", slug_not_in: ["zensnack-for-buyer"] }, preview: ${preview ? "true" : "false"}, limit: ${limit}) {
    items {
      ${SHOP_ALL_QUERY}
    }
  }
}`,
    preview,
  );

  return entries;
}

export async function getAllShop(
  preview: boolean,
  limit: number = 0,
  excludeForBuyer: boolean = false,
): Promise<any[]> {
  const whereClause = excludeForBuyer
    ? `where: { slug_not_in: ["zensnack-for-buyer"]},`
    : "";

  const entries = await fetchGraphQL(
    `{
      contentShopCollection(
        preview: ${preview ? "true" : "false"},
        limit: ${limit},
        ${whereClause}
      ) {
        items {
          ${SHOP_ALL_QUERY}
        }
      }
    }`,
    preview,
  );

  return entries;
}

export async function getProductByShipifyId(
  shopifyId: string,
  preview: boolean,
): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      contentShopCollection(where: { shopifyId: "${shopifyId}" }, preview: ${
        preview ? "true" : "false"
      }, limit: 1) {
        items {
          ${SHOP_QUERY}
        }
      }
    }`,
    preview,
  );

  return extractShop(entry);
}
export async function getPostsByCategory(
  category: string,
  preview: boolean,
): Promise<any> {
  const entries: any = await fetchGraphQL(
    `query {
      contentAboutCollection( preview: ${preview ? "true" : "false"}) {
        items {
          ${POST_BASE_QUERY}
        }
      }
    }`,
    preview,
  );

  return entries.data.contentAboutCollection.items;
}
export async function getAllAbout(preview: boolean): Promise<any> {
  const entries: any = await fetchGraphQL(
    `query {
      contentAboutCollection( preview: ${preview ? "true" : "false"}) {
        items {
          ${POST_BASE_QUERY}
        }
      }
    }`,
    preview,
  );

  return entries.data.contentAboutCollection.items;
}
export async function getAboutBySlug(
  slug: string,
  preview: boolean,
): Promise<any> {
  const entries: any = await fetchGraphQL(
    `query {
      contentAboutCollection(where: { slug: "${slug}" }, preview: ${
        preview ? "true" : "false"
      }) {
        items {
           ${ABOUT_DETAIL_QUERY}
        }
      }
    }`,
    preview,
  );

  return entries.data.contentAboutCollection.items[0];
}

export async function getAllJournal(
  preview: boolean,
  limit: number = 0,
): Promise<any> {
  const entries: any = await fetchGraphQL(
    `query {
      contentJournalCollection( preview: ${preview ? "true" : "false"}, order: date_DESC, limit: ${limit}) {
        items {
          ${POST_BASE_QUERY}
          tagsCollection {
            items {
              slug
              name
              group
            }
          }
        }
      }
    }`,
    preview,
  );

  return entries.data.contentJournalCollection.items;
}
export async function getJournalBySlug(
  slug: string,
  preview: boolean,
): Promise<any> {
  const entry: any = await fetchGraphQL(
    `query {
      contentJournalCollection(where: { slug: "${slug}" }, preview: ${
        preview ? "true" : "false"
      }, limit: 1) {
        items {
          ${JOURNAL_DETAIL_QUERY}
        }
      }
    }`,
    preview,
  );
  const entries: any = await fetchGraphQL(
    `query {
      contentJournalCollection( preview: ${preview ? "true" : "false"}) {
        items {
          ${POST_BASE_QUERY}
        }
      }
    }`,
    preview,
  );

  const post = entry.data.contentJournalCollection.items[0];
  const posts = entries.data.contentJournalCollection.items;
  posts.sort(function (a, b) {
    a = new Date(a.date);
    b = new Date(b.date);
    return a > b ? -1 : a < b ? 1 : 0;
  });

  let passIndex = posts.findIndex(function (element: any) {
    return element.slug === post.slug;
  });
  const len = posts.length - 1;
  const prev = passIndex === 0 ? posts[len] : posts[passIndex - 1];
  const next = passIndex === len ? posts[0] : posts[passIndex + 1];

  return {
    post: post,
    paging: { prev: prev, next: next },
  };
  return entry.data.contentJournalCollection.items[0];
}
export async function getAllRecipes(preview: boolean): Promise<any> {
  const entries: any = await fetchGraphQL(
    `query {
      contentRecipesCollection( preview: ${preview ? "true" : "false"}) {
        items {
          ${POST_BASE_QUERY}
        }
      }
    }`,
    preview,
  );

  return entries.data.contentRecipesCollection.items;
}

export async function getProductByCategory(
  category: string,
  preview: boolean,
): Promise<any> {
  const entries: any = await fetchGraphQL(
    `query {
      contentShopCollection(where: { productCategory: "${category}" }, preview: ${
        preview ? "true" : "false"
      }) {
        items {
          ${SHOP_ALL_QUERY}
        }
      }
    }`,
    preview,
  );

  return entries;
}
export async function getPostAndMorePosts(
  slug: string,
  preview: boolean,
): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      contentShopCollection(where: { slug: "${slug}" }, preview: ${
        preview ? "true" : "false"
      }, limit: 1) {
        items {
          ${SHOP_QUERY}
        }
      }
    }`,
    preview,
  );
  const entries = await fetchGraphQL(
    `query {
      contentShopCollection(where: { slug_not_in: "${slug}" }, order: date_DESC, preview: ${
        preview ? "true" : "false"
      }, limit: 2) {
        items {
          ${SHOP_QUERY}
        }
      }
    }`,
    preview,
  );
  return {
    post: extractShop(entry),
    morePosts: extractShopEntries(entries),
  };
}
export async function gePageBySlug(
  slug: string,
  preview: boolean,
): Promise<any> {
  const entry: any = await fetchGraphQL(
    `query {
      pageCollection(where: { slug: "${slug}" }, preview: ${
        preview ? "true" : "false"
      }, limit: 1) {
        items {
          ${PAGE_QUERY}
        }
      }
    }`,
    preview,
  );
  return entry.data.pageCollection.items[0];
}
