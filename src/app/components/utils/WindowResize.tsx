"use client"; /* eslint-disable react/no-deprecated */

import { useState, useLayoutEffect } from "react";

function debounce(fn: any, ms?: any) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, 100);
  };
}

export default function useWindowSize() {
  const [size, setSize] = useState([0, 0, false]);

  useLayoutEffect(() => {
    let timeout;
    clearTimeout(timeout);
    function updateSize() {
      const cont = document.querySelector("html");
      cont.classList.add("resize");
      clearTimeout(timeout);

      setSize([window.innerWidth, window.innerHeight, true]);
      timeout = setTimeout(() => {
        setSize([window.innerWidth, window.innerHeight, false]);
      }, 800);
    }
    const debouncedResizeHandler = debounce(() => updateSize());
    window.addEventListener("resize", debouncedResizeHandler);

    setSize([window.innerWidth, window.innerHeight, false]);
    return () => window.removeEventListener("resize", debouncedResizeHandler);
  }, []);
  return size;
}
