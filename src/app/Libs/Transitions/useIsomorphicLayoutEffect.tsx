/* eslint-disable react-hooks/exhaustive-deps */
"use client";
/* eslint-disable react/jsx-key */
import { useEffect, useLayoutEffect } from "react";

const useIsomorphicLayoutEffect =
	typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
