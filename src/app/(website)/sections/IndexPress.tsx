/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import Link from "next/link";

import React from "react";
import IndexPressTitle from "./IndexPressTitle";

export default function IndexPress({
  className,
  ...props
}: {
  className?: string;
} & React.ComponentProps<"div">) {
  return (
    <>
      <section className={`${className} relative !mt-0 overflow-x-hidden`}>
        <div className="relative z-10 max-md:mx-[16px] max-md:space-y-[12vw] md:mx-[25px]">
          <IndexPressTitle />
          <div className="max-md:space-y-[18vw] md:space-y-[6vw]">
            <p className={`mx-auto md:w-[50vw] md:leading-[125%]`}>
              BROWN SUGAR 1ST and its CEO, Midori Ogino, are recognized
              entrepreneurs in Japan, frequently featured in major media,
              including TV and top publications, for their vision of the future
              of food and their success in turning it into a thriving business.
              <a
                className="underline"
                href="https://woman.nikkei.com/atcl/aria/column/19/010400021/012500002/"
                target="_blank"
              >
                Read More
              </a>
            </p>{" "}
            <div className="grid">
              <ul className="col-[1/2] row-[1/2] flex h-[10vw] animate-marqueereverse items-center [&_img]:h-full [&_img]:w-auto [&_img]:max-w-none [&_img]:object-contain [&_li]:max-md:h-[24px] [&_li]:max-md:px-[10vw] [&_li]:md:h-[50px] [&_li]:md:px-[5vw]">
                <li>
                  <Link
                    href={
                      "https://www.vogue.co.jp/lifestyle/interview/2019-03-13/midori-ogino"
                    }
                    target="_new"
                  >
                    <Image
                      className={""}
                      src="/logo-vogue.svg"
                      alt="vogue-logo"
                      width={2500}
                      height={669}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href={
                      "https://www.elle.com/jp/culture/maman/g62834/mpi-kanako16-0929/"
                    }
                    target="_new"
                  >
                    <Image
                      className={""}
                      src="/logo-elle.svg"
                      alt="elle-logo"
                      width={80}
                      height={30}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"  https://www.wwdjapan.com/articles/671590"}
                    target="_new"
                  >
                    <Image
                      className={""}
                      src="/logo-wwd.svg"
                      alt="wwe-logo"
                      width={600}
                      height={76}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href={
                      "https://www.vogue.co.jp/lifestyle/interview/2019-03-13/midori-ogino"
                    }
                    target="_new"
                  >
                    <Image
                      className={""}
                      src="/logo-vogue.svg"
                      alt="vogue-logo"
                      width={2500}
                      height={669}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href={
                      "https://www.elle.com/jp/culture/maman/g62834/mpi-kanako16-0929/"
                    }
                    target="_new"
                  >
                    <Image
                      className={""}
                      src="/logo-elle.svg"
                      alt="elle-logo"
                      width={80}
                      height={30}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"  https://www.wwdjapan.com/articles/671590"}
                    target="_new"
                  >
                    <Image
                      className={""}
                      src="/logo-wwd.svg"
                      alt="wwe-logo"
                      width={600}
                      height={76}
                    />
                  </Link>
                </li>
              </ul>
              <ul className="col-[1/2] row-[1/2] flex animate-marquee2reverse items-center [&_img]:h-full [&_img]:w-auto [&_img]:max-w-none [&_img]:object-contain [&_li]:max-md:h-[24px] [&_li]:max-md:px-[10vw] [&_li]:md:h-[50px] [&_li]:md:px-[5vw]">
                <li>
                  <Link
                    href={
                      "https://www.vogue.co.jp/lifestyle/interview/2019-03-13/midori-ogino"
                    }
                    target="_new"
                  >
                    <Image
                      className={""}
                      src="/logo-vogue.svg"
                      alt="vogue-logo"
                      width={2500}
                      height={669}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href={
                      "https://www.elle.com/jp/culture/maman/g62834/mpi-kanako16-0929/"
                    }
                    target="_new"
                  >
                    <Image
                      className={""}
                      src="/logo-elle.svg"
                      alt="elle-logo"
                      width={80}
                      height={30}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"  https://www.wwdjapan.com/articles/671590"}
                    target="_new"
                  >
                    <Image
                      className={""}
                      src="/logo-wwd.svg"
                      alt="wwe-logo"
                      width={600}
                      height={76}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href={
                      "https://www.vogue.co.jp/lifestyle/interview/2019-03-13/midori-ogino"
                    }
                    target="_new"
                  >
                    <Image
                      className={""}
                      src="/logo-vogue.svg"
                      alt="vogue-logo"
                      width={2500}
                      height={669}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href={
                      "https://www.elle.com/jp/culture/maman/g62834/mpi-kanako16-0929/"
                    }
                    target="_new"
                  >
                    <Image
                      className={""}
                      src="/logo-elle.svg"
                      alt="elle-logo"
                      width={80}
                      height={30}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"  https://www.wwdjapan.com/articles/671590"}
                    target="_new"
                  >
                    <Image
                      className={""}
                      src="/logo-wwd.svg"
                      alt="wwe-logo"
                      width={600}
                      height={76}
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
