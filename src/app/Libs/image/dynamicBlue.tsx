import Image from "next/image";
//import { getPlaiceholder } from "plaiceholder";

export default async function blur({
  className = "",
  src,
  width,
  height,
  ...rest
}: {
  className?: string;
  src: string;
  width: number;
  height: number;
}) {
  /*
  const buffer = await fetch(src).then(async (res) => {
    return Buffer.from(await res.arrayBuffer());
  })*/

  //const { base64 } = await getPlaiceholder(buffer);

  return (
    <Image
      className={`${className} after:inline-block after:h-full after:w-full after:bg-slate-500 after:content-[""]`}
      src={src}
      alt="image"
      priority={true}
      //placeholder="blur"
      //blurDataURL={base64}
      width={width}
      height={height}
      {...rest}
    />
  );
}
