import React from "react";
import Dropdown from "@/Libs/ui/Dropdown";

export default function ServicesDropdown({
  className,
  post,
  ...rest
}: {
  className?: string;
  post?: any;
} & React.ComponentProps<"div">) {
  const serviceItems = [
    { label: "Zen Snack", href: "/products/zensnack" },
    { label: "Crisps", href: "/products/crisps" },
    { label: "Better Than Butter", href: "/products/better-than-butter" },
  ];
  return (
    <Dropdown
      className={`${className}`}
      label="Products"
      nolink={true}
      slug="products"
      items={serviceItems}
      {...rest}
    />
  );
}
