"use client";
import React, { Fragment, useState } from "react";

import { Dialog, Transition } from "@headlessui/react";
import { TransitionLink } from "@/Libs/Transitions";
export default function TagNavigationModal({
  groupedTags,
  groupNames,
}: {
  groupedTags: Record<string, any[]>;
  groupNames: string[];
}) {
  const [isModalOpen, setIsModalOpen] = useState(false); // モーダルの開閉状態を管理

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const closeCart = () => {
    // IndexScrollTrigger.IndexInitScrollTrigger();
    toggleModal();
  };
  return (
    <>
      <div className="md:hidden">
        <button
          onClick={toggleModal}
          className="font-ob-nar-b block rounded-md bg-[#eee] p-3 text-center"
        >
          Categories
        </button>
      </div>
      <Transition show={isModalOpen}>
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
              <div className="font-und absolute right-[16px] top-[12px] max-md:text-[5vw] md:text-[2vw]">
                <button
                  aria-label="Close cart"
                  onClick={closeCart}
                  className="font-ob-nar-b tracking-tight"
                >
                  CLOSE
                </button>
              </div>
              <div className="max-md:pt-[75px]">
                <div className="space-y-4 max-md:px-[16px]">
                  {groupNames.map((group) => (
                    <div key={group} className="space-y-1">
                      <h2 className="font-ob-nar">{group}</h2>
                      <ul>
                        {groupedTags[group].map((tag: any) => (
                          <li key={tag.slug} className="!leading-[1.2]">
                            <TransitionLink
                              href={`/${group}/${tag.slug}`}
                              useActiveLink={true}
                              className="font-und max-md:text-[min(5.5vw,2.5vh)] md:text-[min(3vw,3.5vh)]"
                            >
                              <span className="font-ob-nar-b"> {tag.name}</span>
                            </TransitionLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
