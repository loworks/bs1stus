"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Buttons } from "../Atoms";
import ReviewForm from "./ReviewForm";

export default function ReviewFormModal({
  productId,
  className,
}: {
  productId: string;
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const openReviewForm = () => {
    setIsOpen(true);
    const cont = document.querySelector("html");
    cont.classList.add("is-modal");
  };

  const closeReviewForm = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Buttons.boxButton
        aria-label="Leave a review"
        onClick={openReviewForm}
        className={`${className} font-ob-nar uppercase max-md:min-w-[200px]`}
      >
        Create Review
      </Buttons.boxButton>

      <Transition show={isOpen}>
        <Dialog onClose={closeReviewForm} className="relative z-[1000]">
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
            <Dialog.Panel className="fixed bottom-0 right-0 top-0 flex h-full w-[80vw] flex-col bg-[#fff] text-black max-md:overflow-scroll md:w-[40vw]">
              <div className="font-ob-nar absolute right-[16px] top-[12px] max-md:text-[5vw] md:text-[2vw]">
                <button
                  aria-label="Close review form"
                  onClick={closeReviewForm}
                  className="tracking-tight"
                >
                  CLOSE
                </button>
              </div>

              <div className="mx-[16px] mt-20 flex flex-col">
                <h2 className="font-ob-nar mb-4 text-center text-2xl uppercase tracking-tight">
                  Create Review
                </h2>
                <ReviewForm productId={productId} onSuccess={closeReviewForm} />
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
