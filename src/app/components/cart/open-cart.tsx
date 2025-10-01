import Image from "next/image";

export default function OpenCart({
  className,
  quantity = 0,
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="relative flex items-center justify-center gap-[.4rem]">
      <div className="">
        <Image
          className={"w-auto max-md:h-[36px] md:h-[40px]"}
          src="/menu-bag.svg"
          alt="hero"
          width={67.97}
          height={76.2}
          priority={true}
        />
      </div>

      <div className="absolute mt-[5px] grid items-center justify-items-center">
        <div className="cart-num font-ob-nar pointer-events-none z-10 col-[1/2] row-[1/2] animate-scaler text-center text-sm leading-[100%] text-white">
          {quantity}
        </div>
      </div>
    </div>
  );
}
