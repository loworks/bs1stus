"use server";

import {
  addToCart,
  createCart,
  getCart,
  removeFromCart,
  updateCart,
} from "@/Libs/shopify";
import { cookies } from "next/headers";

export const addItem = async (
  variantId: string | undefined,
): Promise<String | undefined> => {
  let cartId = (await cookies()).get("cartId")?.value;
  let cart;

  if (cartId) {
    console.log("getCart");
    cart = await getCart(cartId);
  }

  if (!cartId || !cart) {
    console.log("createCart");
    cart = await createCart();
    cartId = cart.id;
    (await cookies()).set("cartId", cartId);
  }

  if (!variantId) {
    return "Missing product variant ID";
  }

  try {
    console.log("addToCart");

    await addToCart(cartId, [{ merchandiseId: variantId, quantity: 1 }]);
  } catch (e) {
    return "Error adding item to cart";
  }
};

export const removeItem = async (
  lineId: string,
): Promise<String | undefined> => {
  const cartId = (await cookies()).get("cartId")?.value;

  if (!cartId) {
    return "Missing cart ID";
  }
  try {
    await removeFromCart(cartId, [lineId]);
  } catch (e) {
    return "Error removing item from cart";
  }
};

export const updateItemQuantity = async ({
  lineId,
  variantId,
  quantity,
}: {
  lineId: string;
  variantId: string;
  quantity: number;
}): Promise<String | undefined> => {
  const cartId = (await cookies()).get("cartId")?.value;

  if (!cartId) {
    return "Missing cart ID";
  }
  try {
    await updateCart(cartId, [
      {
        id: lineId,
        merchandiseId: variantId,
        quantity,
      },
    ]);
  } catch (e) {
    return "Error updating item quantity";
  }
};
