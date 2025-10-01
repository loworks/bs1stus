/* eslint-disable react-hooks/exhaustive-deps */
"use client";
/* eslint-disable react/jsx-key */

import { useTransition } from "../../Libs/Transitions/TransitionContext";

export default function TransitionLayout({
  children,
}: {
  children?: React.ReactNode;
} & React.ComponentProps<any>) {
  const { state, dispatch } = useTransition();

  return <div className="">{children}</div>;
}
