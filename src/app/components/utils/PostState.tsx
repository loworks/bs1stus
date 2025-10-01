/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import * as Transitions from "@/Libs/Transitions";
import { useRouter } from "next/navigation";
import { useTransition } from "@/Libs/Transitions/TransitionContext";
import { useCallback, useEffect } from "react";
export default function PostState() {
  const router = useRouter();
  const { dispatch } = useTransition();
  const blockBrowserBack = useCallback(() => {
    console.log("aaa");
    const transition: Transitions.types.Transition =
      Transitions.Transition.getTransition();

    window.history.go(1);

    transition.Execute("/shop", router, dispatch, { popstate: "back" });
  }, []);

  useEffect(() => {
    // 直前の履歴に現在のページを追加

    // 直前の履歴と現在のページのループ
    window.addEventListener("popstate", blockBrowserBack);

    // クリーンアップは忘れない
    return () => {
      window.removeEventListener("popstate", blockBrowserBack);
    };
  }, [blockBrowserBack]);
  return <></>;
}
