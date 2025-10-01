import Image from "next/image";

export default function Certifocations({ className }: { className?: string }) {
  {
    return (
      <ul
        className={`${className} {&_li}:w-[30px] flex max-md:space-x-1 md:space-x-4 [&_img]:rounded-full [&_img]:border-[1px] [&_img]:border-[#ccc]`}
      >
        <li>
          <Image
            src="/icon-halal.webp"
            className="h-auto md:w-[60px]"
            alt="hero"
            width={300}
            height={300}
          />
        </li>
        <li>
          <Image
            src="/icon-leto.webp"
            className="h-auto md:w-[60px]"
            alt="hero"
            width={300}
            height={300}
          />
        </li>
        <li>
          <Image
            src="/icon-vege.webp"
            className="h-auto md:w-[60px]"
            alt="hero"
            width={300}
            height={300}
          />
        </li>{" "}
        <li>
          <Image
            src="/idon-usda.webp"
            className="h-auto md:w-[60px]"
            alt="hero"
            width={300}
            height={300}
          />
        </li>
      </ul>
    );
  }
}
