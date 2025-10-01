/* eslint-disable react/no-unescaped-entities */

import React from "react";
import * as Atoms from "@/components/Atoms";

import Image from "next/image";
import WaveCrisps from "@/(contents)/products/crisps/components/WaveCrisps";
import { AnimatedTextAlongPath } from "@/components/Modules";
import WaveBrownie from "../components/WaveBrownie";
import WaveCoconut from "../components/WaveCoconut";
export default function CrispsProducts({ className }: { className?: string }) {
  return (
    <section>
      <div className="md:grid md:grid-cols-2">
        <div className="">
          <WaveBrownie />
          <div className="bg-crisps-color2 max-md:relative max-md:z-0 max-md:px-[16px] max-md:pb-[25vw]">
            <div className="flex items-center justify-between md:mx-[3vw] md:h-[15vw]">
              <h2 className="font-ob-nar-b leading-[100%] max-md:text-[8vw] md:text-[3.6vw]">
                Rich. <br />
                Crunchy. <br />
                Chocolatey.
              </h2>
              <Image
                className={"h-auto w-[50%] object-contain"}
                src="/chips_choco.jpg"
                alt="hero"
                width={2500}
                height={2500}
              />
            </div>

            <div className="flex gap-x-[40px] md:mx-[40px] md:h-[25vw] [&>div]:flex-1">
              <div className="grid items-center justify-center">
                <p className="font-ob-nar-b z-10 col-[1/-1] row-[1/-1] mt-[2vw] text-center leading-[100%] max-md:text-[4vw] md:text-[2.2vw]">
                  Sweet, delicious <br />
                  and also natural! <br />
                  Great for my <br />
                  sugar cravings!
                </p>
                <Image
                  className={"col-[1/-1] row-[1/-1]"}
                  src="/crisp-voice01.png"
                  alt="hero"
                  width={1200}
                  height={1331}
                />
              </div>
              <div className="grid items-center justify-center">
                <p className="font-ob-nar-b z-10 col-[1/-1] row-[1/-1] mt-[2vw] text-center leading-[100%] max-md:text-[4vw] md:text-[2.2vw]">
                  So simple and <br />
                  yet so tasty. <br />
                  Definitely buying <br />
                  this guilt-free <br />
                  snack again!
                </p>
                <Image
                  className={"col-[1/-1] row-[1/-1]"}
                  src="/crisp-voice01.png"
                  alt="hero"
                  width={1200}
                  height={1331}
                />
              </div>
            </div>
            <div className="space-y-8 pb-[6vw] pt-[3vw]">
              <div className="mx-auto max-md:w-[60vw] md:w-[20vw]">
                <Image
                  className={"col-[1/-1] row-[1/-1]"}
                  src="/chips_brownie.png"
                  alt="hero"
                  width={1200}
                  height={1216}
                />
              </div>
              <Atoms.Buttons.boxLink
                className="mx-auto max-md:w-full md:w-[20vw]"
                href="/shop/organic-brownie-crisps/"
              >
                BUY
              </Atoms.Buttons.boxLink>
            </div>
          </div>
        </div>
        <div className="max-md:relative max-md:mt-[-20vw]">
          <WaveCoconut />
          <div className="bg-crisps-color max-md:px-[16px] max-md:pb-[12vw]">
            <div className="flex items-center justify-between md:mx-[3vw] md:h-[15vw]">
              <h2 className="font-ob-nar-b leading-[100%] max-md:text-[8vw] md:text-[3.6vw]">
                Golden.
                <br />
                Delicate.
                <br />
                Toasty.
              </h2>
              <Image
                className={"w-auto max-md:h-[24vw] md:h-[13vw]"}
                src="/chips_coconut.jpg"
                alt="chips coconut"
                width={2500}
                height={2500}
              />
            </div>
            <div className="flex gap-x-[30px] md:mx-[30px] md:h-[25vw] [&>div]:flex-1">
              <div className="grid items-center justify-center">
                <p className="font-ob-nar-b z-10 col-[1/-1] row-[1/-1] mt-[2vw] text-center leading-[100%] max-md:text-[4vw] md:text-[2.2vw]">
                  Delicious and <br />
                  fiber-rich is <br />a w1n-w1n. <br />
                  It’s joining my kids’ <br />
                  snack rotation!
                </p>
                <Image
                  className={"col-[1/-1] row-[1/-1]"}
                  src="/crisp-voice02.png"
                  alt="hero"
                  width={1200}
                  height={1216}
                />
              </div>
              <div className="grid items-center justify-center">
                <p className="font-ob-nar-b z-10 col-[1/-1] row-[1/-1] mt-[2vw] text-center leading-[100%] max-md:text-[4vw] md:text-[2.2vw]">
                  My taste <br />
                  buds love <br />
                  the sweetness <br />
                  of coconut! <br />I can’t!
                </p>
                <Image
                  className={"col-[1/-1] row-[1/-1]"}
                  src="/crisp-voice02.png"
                  alt="hero"
                  width={1200}
                  height={1216}
                />
              </div>
            </div>
            <div className="space-y-8 pb-[6vw] pt-[3vw]">
              <div className="mx-auto max-md:w-[60vw] md:w-[20vw]">
                <Image
                  className={"col-[1/-1] row-[1/-1]"}
                  src="/chips_coconut.png"
                  alt="hero"
                  width={1200}
                  height={1216}
                />
              </div>
              <Atoms.Buttons.boxLink
                className="mx-auto max-md:w-full md:w-[20vw]"
                href="/shop/organic-coconut-crisps/"
              >
                BUY
              </Atoms.Buttons.boxLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
