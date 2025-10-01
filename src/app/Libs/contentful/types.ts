export const GridComponent: string = "Grid";
export type Media = {
  sys: {
    id: string;
  };
  __typename: string;
  file: Asset;
};
export type Asset = {
  contentType: string;
  sys: {
    id: string;
  };
  __typename: string;
  title: string;
  width: number;
  height: number;
  url: string;
  description: string;
};
export type Text = {
  sys: {
    id: string;
  };
  __typename: string;
  field: TextField;
};
export type TextField = {
  __typename: string;
  json: any;
};
export type Grid = {
  sys: {
    id: string;
  };
  __typename: string;
  itemsCollection: GridItemsCollection;
  json: Object;
};
export type ContentShop = {
  sys: {
    id: string;
  };
  __typename: string;
  slug: string;
};
export type GridItemsCollection = {
  items: (Media | Text)[];
};
