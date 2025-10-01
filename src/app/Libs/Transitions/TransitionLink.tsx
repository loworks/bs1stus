/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { useTransition } from "./TransitionContext";
import * as Transitions from "@/Libs/Transitions";
export default function TransitionLink({
  className = "",
  href,
  cleckHandler,
  children,
  useActiveLink = false,
  ...rest
}: {
  className: string;
  href: string;
  cleckHandler: Function;
  useActiveLink: boolean;
  children?: React.ReactNode;
} & React.ComponentProps<any>) {
  const router = useRouter();
  const pathname = usePathname();
  const { dispatch } = useTransition();
  const handleClick = async (e: Event) => {
    if (useActiveLink) {
      if (
        (href !== "/" &&
          pathname.includes(href) &&
          pathname.slice(0, -1).split("/").length ===
            href.slice(0, -1).split("/").length) ||
        href === pathname
      )
        return;
    }
    if (cleckHandler) cleckHandler();
    const transition: Transitions.types.Transition =
      Transitions.Transition.getTransition();
    e.stopPropagation();
    e.preventDefault();
    transition.Execute(href, router, dispatch, { ...rest });
    //pageTransAnimCallbyNorm(router, href);
  };

  return (
    <Link
      className={`${className} `}
      {...rest}
      href={href}
      scroll={false}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}
