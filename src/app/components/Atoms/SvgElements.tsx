import React from "react";

export function Logo({
  className = "",

  ...rest
}: {
  className?: string;
} & React.ComponentProps<"span">) {
  return (
    <span className={`${className} logo`} {...rest}>
      <svg viewBox="0 0 353.85 55.44" preserveAspectRatio="xMinYMin meet">
        <use xlinkHref="#logo" x="0" y="0" />
      </svg>
    </span>
  );
}
export function IconCheck({
  className,

  ...rest
}: {
  className?: string;
} & React.ComponentProps<"div">) {
  return (
    <span className={`${className} inline-block`} {...rest}>
      <svg
        className={"check"}
        viewBox="0 0 9.73 10.07"
        preserveAspectRatio="xMinYMin meet"
      >
        <path d="M9.73,1.04l-1.19-1.04-1.72,1.96H0v7.2l1.17.91h7.59V3.19l-.47-.5,1.44-1.65ZM6.84,8.68H.58V2.43h5.83l-3.1,3.54h-.1l-1.09-1.86-1.36.8,1.54,2.64h1.73l2.81-3.2v4.34Z" />
      </svg>
    </span>
  );
}

export function IconPrev({
  className,

  ...rest
}: {
  className?: string;
} & React.ComponentProps<"div">) {
  return (
    <span className={`${className} `} {...rest}>
      <svg
        className={"arrow"}
        viewBox="0 0 26.58 26.82"
        preserveAspectRatio="xMinYMin meet"
      >
        <use xlinkHref="#arrow" x="0" y="0" />
      </svg>
    </span>
  );
}
export function IconNext({
  className,

  ...rest
}: {
  className?: string;
} & React.ComponentProps<"div">) {
  return (
    <span className={`${className} `} {...rest}>
      <svg
        className={"arrow rotate-180"}
        viewBox="0 0 26.58 26.82"
        preserveAspectRatio="xMinYMin meet"
      >
        <use xlinkHref="#arrow" x="0" y="0" />
      </svg>
    </span>
  );
}
export function HeaderLogo({
  className = "",

  ...rest
}: {
  className?: string;
} & React.ComponentProps<"div">) {
  return (
    <div className={`${className} `} {...rest}>
      <Logo />
    </div>
  );
}

export function FooterLogo({
  className = "",

  ...rest
}: {
  className?: string;
} & React.ComponentProps<"span">) {
  return (
    <span
      className={`${className} logo z-[10000] inline-flex gap-[3%]`}
      {...rest}
    ></span>
  );
}
export function IconIg({ className, ...rest }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 15.9 15.9"
      preserveAspectRatio="xMinYMin meet"
      className={`${className}`}
      {...rest}
    >
      <use xlinkHref="#icon-ig" x="0" y="0" />
    </svg>
  );
}
export function IconGoogle({ className, ...rest }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      preserveAspectRatio="xMinYMin meet"
      className={`${className}`}
      {...rest}
    >
      <use xlinkHref="#icon-google" x="0" y="0" />
    </svg>
  );
}
