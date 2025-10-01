"use server";
import { getCart } from "@/Libs/shopify";
import { cookies } from "next/headers";
import CartModal from "./modal";
import type { Cart } from "@/Libs/shopify/types"; // Use 'type' to avoid import conflict

export default async function Cart() {
  const cartId = (await cookies()).get("cartId")?.value;
  let cart: Cart;

  if (cartId) {
    cart = await getCart(cartId);
  }

  return <CartModal cart={cart} />;
}
