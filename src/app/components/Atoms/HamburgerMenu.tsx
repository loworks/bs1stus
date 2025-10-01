import Image from "next/image";

export default function HamburgerMenu({
  className = "",

  ...rest
}: {
  className?: string;
} & React.ComponentProps<"button">) {
  return (
    <button className={`${className} hm-menu`} {...rest}>
      <Image
        className={"w-auto max-md:h-[36px] md:h-[40px]"}
        src="/menu-hamburger.svg"
        alt="hero"
        width={67.97}
        height={76.2}
        priority={true}
      />
    </button>
  );
}
