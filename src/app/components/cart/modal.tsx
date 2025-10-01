"use client";

import { Dialog, Transition } from "@headlessui/react";
import Price from "./price";
import { DEFAULT_OPTION } from "@/Libs/shopify/constants";
import type { Cart } from "@/Libs/shopify/types";
import { createUrl } from "@/Libs/shopify/utils";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import DeleteItemButton from "./delete-item-button";
import EditItemQuantityButton from "./edit-item-quantity-button";
import OpenCart from "./open-cart";
import { TransitionLink } from "@/Libs/Transitions";
type MerchandiseSearchParams = {
  [key: string]: string;
};

export default function CartModal({ cart }: { cart: Cart | undefined }) {
  const [isOpen, setIsOpen] = useState(false);
  const quantityRef = useRef(cart?.totalQuantity);
  const openCart = () => {
    // IndexScrollTrigger.cleanup();

    setIsOpen(true);
    const cont = document.querySelector("html");
    cont.classList.add("is-modal");
  };
  const closeCart = () => {
    // IndexScrollTrigger.IndexInitScrollTrigger();
    setIsOpen(false);
  };

  useEffect(() => {
    // Open cart modal when quantity changes.
    if (cart?.totalQuantity !== quantityRef.current) {
      // But only if it's not already open (quantity also changes when editing items in cart).
      if (!isOpen) {
        setIsOpen(true);
      }

      // Always update the quantity reference
      quantityRef.current = cart?.totalQuantity;
    }
  }, [isOpen, cart?.totalQuantity, quantityRef]);

  return (
    <>
      <button aria-label="Open cart" onClick={openCart}>
        <OpenCart quantity={cart?.totalQuantity} />
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={closeCart} className="relative z-[1000]">
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-500"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="fixed bottom-0 right-0 top-0 flex h-full w-[80vw] flex-col bg-[#fefefe] text-black md:w-[30vw]">
              <div className="font-ob-nar absolute right-[16px] top-[12px] max-md:text-[5vw] md:text-[2vw]">
                <button
                  aria-label="Close cart"
                  onClick={closeCart}
                  className="tracking-tight"
                >
                  CLOSE
                </button>
              </div>

              {!cart || cart.lines.length === 0 ? (
                <div className="mx-[16px] mb-3 mt-20 flex h-[calc(100svh-5rem)] flex-col">
                  <div
                    style={{ textAlignLast: "justify" }}
                    className="flex w-full flex-col justify-center"
                  >
                    <p className="font-ob-nar mt-6 whitespace-nowrap text-justify uppercase leading-[0.5] tracking-tighter max-md:text-[8vw] md:text-[3vw]">
                      Your Cart is
                    </p>
                    <p className="font-ob-nar tracking-tighter max-md:ml-[-5px] max-md:text-[23vw]/tight md:ml-[-7.5px] md:text-[8vw]/tight">
                      Empty
                    </p>
                  </div>
                  <div className="mt-6 flex flex-col gap-[0.25rem]">
                    <TransitionLink
                      cleckHandler={() => {
                        closeCart();
                      }}
                      useActiveLink={true}
                      href={"/shop"}
                      className="font-ob-nar tracking-tight max-md:text-[18px] md:text-[22px]"
                    >
                      GO SHOPPING
                    </TransitionLink>
                    {/* <TransitionLink
                      cleckHandler={() => {
                        closeCart();
                      }}
                      useActiveLink={true}
                      href={"/about"}
                      className="font-ob-nar tracking-tight max-md:text-[18px] md:text-[22px]"
                    >
                      ABOUT OUR PRODUCTS
                    </TransitionLink>

                    <div className="leading-tight">
                      Breads and pastries will be shipped the same day they are
                      made. The earliest shipping is two days after the order is
                      placed.
                    </div>
                    <TransitionLink
                      cleckHandler={() => {
                        closeCart();
                      }}
                      useActiveLink={true}
                      href={"/faq"}
                      className="font-ob-nar tracking-tight max-md:text-[18px] md:text-[22px]"
                    >
                      Read More FAQ
                    </TransitionLink>*/}
                  </div>
                </div>
              ) : (
                <div className="flex h-full flex-col justify-between overflow-hidden">
                  <ul className="flex-grow overflow-auto pb-4 pt-[4rem]">
                    {cart.lines.map((item, i) => {
                      const merchandiseSearchParams =
                        {} as MerchandiseSearchParams;

                      item.merchandise.selectedOptions.forEach(
                        ({ name, value }) => {
                          if (value !== DEFAULT_OPTION) {
                            merchandiseSearchParams[name.toLowerCase()] = value;
                          }
                        },
                      );

                      const merchandiseUrl = createUrl(
                        `/product/${item.merchandise.product.handle}`,
                        new URLSearchParams(merchandiseSearchParams),
                      );

                      return (
                        <li
                          key={i}
                          className="flex w-full flex-col border-b first:border-t"
                        >
                          <div className="relative flex w-full flex-row justify-between px-[16px] py-4">
                            <div className="absolute z-40 -mt-2 ml-[55px]">
                              <DeleteItemButton item={item} />
                            </div>
                            <Link
                              href={merchandiseUrl}
                              onClick={closeCart}
                              className="z-30 flex flex-row space-x-4"
                            >
                              <div className="relative h-16 w-16 cursor-pointer overflow-hidden">
                                <Image
                                  className="h-full w-full object-cover"
                                  width={64}
                                  height={64}
                                  alt={
                                    item.merchandise.product.featuredImage
                                      .altText || item.merchandise.product.title
                                  }
                                  src={
                                    item.merchandise.product.featuredImage.url
                                  }
                                />
                              </div>

                              <div className="flex flex-1 flex-col text-base">
                                <span className="font-ob-nar leading-tight tracking-tight">
                                  {item.merchandise.product.title}
                                </span>
                                {item.merchandise.title !== DEFAULT_OPTION ? (
                                  <p className="text-sm">
                                    {item.merchandise.title}
                                  </p>
                                ) : null}
                              </div>
                            </Link>
                            <div className="font-ob-nar flex h-16 flex-col justify-between">
                              <Price
                                className="flex justify-end space-y-2 text-right text-sm"
                                amount={item.cost.totalAmount.amount}
                                currencyCode={
                                  item.cost.totalAmount.currencyCode
                                }
                              />
                              <div className="ml-auto flex h-9 flex-row items-center border">
                                <EditItemQuantityButton
                                  item={item}
                                  type="minus"
                                />
                                <p className="w-6 text-center">
                                  <span className="w-full text-sm">
                                    {item.quantity}
                                  </span>
                                </p>
                                <EditItemQuantityButton
                                  item={item}
                                  type="plus"
                                />
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="text-sm">
                    <div className="flex items-center justify-between border-b border-t px-[16px] max-md:h-[40px] md:h-[60px]">
                      <p>Taxes</p>
                      <Price
                        className="text-right text-base text-black"
                        amount={cart.cost.totalTaxAmount.amount}
                        currencyCode={cart.cost.totalTaxAmount.currencyCode}
                      />
                    </div>
                    <div className="flex items-center justify-between border-b px-[16px] max-md:h-[40px] md:h-[60px]">
                      <p>Shipping</p>
                      <p className="text-right">Calculated at checkout</p>
                    </div>
                    <div className="font-ob-nar flex items-center justify-between border-b px-[16px] tracking-tight max-md:h-[40px] md:h-[60px] md:text-[22px]">
                      <p>Total</p>
                      <Price
                        className="text-right text-black"
                        amount={cart.cost.totalAmount.amount}
                        currencyCode={cart.cost.totalAmount.currencyCode}
                      />
                    </div>
                  </div>

                  <a
                    href={`${cart.checkoutUrl}&locale=en-US`}
                    className="font-ob-nar block w-full bg-[#000] p-4 text-center uppercase tracking-tight text-white max-md:text-[16px] md:text-[2vw]"
                  >
                    Proceed to Checkout
                  </a>
                </div>
              )}
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
