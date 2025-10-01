import Image from "next/image";

export default function Circle96Percent({ className }: { className?: string }) {
  {
    return (
      <div className={`grid items-center justify-center ${className}`}>
        <Image
          className={"col-[1/1] row-[1/1] max-md:w-[22vw] md:w-[12vw]"}
          src="/btb-made-with.webp"
          alt="hero"
          width={800}
          height={800}
        />
        <span className="font-ob-nar-b col-[1/1] row-[1/1] text-center max-md:text-[5.2vw] md:text-[3.5vw]">
          96%
        </span>
      </div>
    );
  }
}
