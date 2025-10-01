import React from "react";
import Dropdown from "@/Libs/ui/Dropdown";
import { Site } from "../utils";

export default function DropdownAbout({
  className,
  preview,
  post,
  ...rest
}: {
  className?: string;
  preview: boolean;
  post?: any;
} & React.ComponentProps<"div">) {
  const serviceItems = [
    { label: "ABout Us", href: "/about/bs1st/" },
    { label: "Zen Snack Series", href: "/about/zen-snack/" },
    { label: "Crisps Series", href: "/about/crisps/" },
    { label: "Better Than Butter", href: "/about/better-than-butter/" },
  ];

  return (
    <Dropdown
      className={`${className}`}
      label="About"
      slug="about"
      items={serviceItems}
      {...rest}
    />
  );
}
