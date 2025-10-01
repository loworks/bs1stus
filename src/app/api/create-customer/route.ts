import { ensureStartsWith } from "@/Libs/shopify/utils";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, name } = await req.json();

    if (!email || !name) {
      return NextResponse.json(
        { error: "Email and name are required" },
        { status: 400 },
      );
    }

    // 名前を first_name, last_name に分割
    const [first_name, ...last_nameParts] = name.split(" ");
    const last_name = last_nameParts.join(" ") || "";

    const domain = process.env.SHOPIFY_STORE_DOMAIN
      ? ensureStartsWith(process.env.SHOPIFY_STORE_DOMAIN, "https://")
      : "";
    const shopifyApiUrl = `${domain}/admin/api/2024-04/customers.json`;
    const token = process.env.SHOPIFY_APP_PASSWORD;

    const response = await fetch(shopifyApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": token,
      },
      body: JSON.stringify({
        customer: {
          first_name,
          last_name,
          email,
          accepts_marketing: true,
          email_marketing_consent: {
            state: "subscribed",
            opt_in_level: "confirmed_opt_in",
            consent_updated_at: new Date().toISOString(),
          },
        },
      }),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create customer" },
      { status: 500 },
    );
  }
}
