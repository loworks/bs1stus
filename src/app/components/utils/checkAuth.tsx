// components/utils/checkAuth.ts
"use server";

import { headers } from "next/headers";

export const isAuthenticated = async () => {
  const cookie = (await headers()).get("cookie") || "";

  return cookie.includes("auth=1");
};
