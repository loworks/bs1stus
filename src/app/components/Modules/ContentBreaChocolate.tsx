import React from "react";
import * as Atoms from "../Atoms";
import * as Modules from "@/components/Modules";
import Image from "next/image";
export default function ContentBreadChocolate({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={`${className} `}>
      <div className="relative z-0 max-md:px-[16px] md:px-[25px]">
        <p className="font-ob-nar leading-[0.95] tracking-tight max-md:text-[16vw] md:text-[min(16vw,246px)]">
          Fluffy
        </p>
        <div className="flex">
          <p className="font-ob-nar leading-[0.95] tracking-tighter max-md:text-[16vw] md:text-[min(16vw,246px)]">
            &
          </p>{" "}
          <p className="font-ob-nar leading-[0.95] tracking-tighter max-md:text-[16vw] md:text-[min(16vw,246px)]">
            Sweet
          </p>
        </div>
      </div>
      <div className="grid gap-[2rem] max-md:px-[16px] md:grid-cols-[repeat(24,1fr)] md:px-[25px]">
        <div className="md:col-[-16/-1] md:aspect-square md:overflow-hidden">
          <Image
            className="h-full w-full object-cover"
            src={"/bread-chocolate-03.jpg"}
            alt={"bread-chocolate-03"}
            priority={true}
            width={1600}
            height={2000}
          />
        </div>
        <div className="self-end md:col-[2/10] md:row-[1/2] md:aspect-square md:overflow-hidden">
          <Image
            className="h-full w-full object-cover"
            src={"/bread-chocolate-05.jpg"}
            alt={"bread-chocolate-05"}
            priority={true}
            width={2000}
            height={2000}
          />
        </div>

        <div className="md:col-[2/10] md:aspect-square md:self-end md:overflow-hidden">
          <Image
            className="h-full w-full object-cover"
            src={"/bread-chocolate-04.jpg"}
            alt={"bread-chocolate-04"}
            priority={true}
            width={1600}
            height={2000}
          />
        </div>
        <div className="flex flex-col gap-6 self-end md:col-[15/-1]">
          <p className="font-ob-nar md:text-[min(1.2vw,18px)]">
            Chocolate bread is recommended to be eaten raw at first. On the
            second day, it will be sweeter. After the third day, it should be
            served toasted. You can add butter or whipped cream on top for an
            endless variety of flavors.
          </p>
          <div>
            <Atoms.Buttons.defaultButton
              className="flex items-center justify-between gap-[.5rem]"
              href="/about/almond-milk-bread"
            >
              Almond Milk Bread
            </Atoms.Buttons.defaultButton>
          </div>
        </div>
      </div>
    </div>
  );
}
