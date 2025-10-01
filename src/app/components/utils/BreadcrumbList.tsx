"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const BreadcrumbList = () => {
  const pathname = usePathname();
  const [baseUrl, setBaseUrl] = useState("https://brownsugar1st.store");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setBaseUrl(window.location.origin);
    }
  }, []);

  const pathSegments = pathname.split("/").filter(Boolean);

  if (pathname === "/") {
    return null;
  }

  const breadcrumbList = {
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: pathSegments.map((segment, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: segment.charAt(0).toUpperCase() + segment.slice(1),
      item: `${baseUrl}/${pathSegments.slice(0, index + 1).join("/")}/`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
    />
  );
};

export default BreadcrumbList;
