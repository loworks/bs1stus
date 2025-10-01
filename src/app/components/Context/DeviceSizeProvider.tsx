"use client";
import React, { createContext, useState, useEffect, useContext } from "react";

type DeviceSize = "lessPab" | "moreTab" | null;

const DeviceSizeContext = createContext<DeviceSize>(null);

export const DeviceSizeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [deviceSize, setDeviceSize] = useState<DeviceSize>(null);

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      setDeviceSize(width < 780 ? "lessPab" : "moreTab");
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <DeviceSizeContext.Provider value={deviceSize}>
      {children}
    </DeviceSizeContext.Provider>
  );
};

export const useDeviceSize = () => {
  return useContext(DeviceSizeContext);
};
