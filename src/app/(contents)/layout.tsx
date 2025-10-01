/* eslint-disable react-hooks/exhaustive-deps */
"use client";
/* eslint-disable react/jsx-key */
import { usePathname } from "next/navigation";
import { useTransition } from "@/Libs/Transitions/TransitionContext";
import * as Transition from "@/components/Transition";

export default function ContentsLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  const { state, dispatch } = useTransition();
  const pathname = usePathname();
  Transition.TransitionManager.setDispatch(dispatch);
  return <>{children}</>;
}
