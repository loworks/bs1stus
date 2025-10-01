import "./globals.css";

import { draftMode } from "next/headers";

import { Suspense } from "react";
import * as Context from "./components/Context";
import * as Utils from "./components/utils";
import * as Organisms from "./components/Organisms";
import * as Atoms from "./components/Atoms";
import * as Modules from "@/components/Modules";
import GoogleAnalytics from "@/Libs/GoogleAnalytics";
import TransitionLayout from "./components/Organisms/TransitionLayout";
export const viewport = {
  themeColor: "#fff",
};
export const metadata = {
  title: Utils.Site.title,
  description:
    "BROWN SUGAR 1ST offers organic, no sugar added, plant‑based snacks and butters made with trusted ingredients. Sustainable, delicious, and safe for families.",
  keywords: [
    "Brown Sugar 1st, vegan snacks, plant-based butter, no sugar added, organic, sustainable, mindful snacking",
  ],
  icons: "/favicon.png",
  twitter: {
    card: "summary_large_image",
    images: "https://brownsugar1st.store/ogp.png",
  },
  appleMobileWebAppCapable: "yes",
  appleMobileWebAppStatusBarStyle: "black-translucent",
  metadataBase: new URL("https://brownsugar1st.store"), // ← 忘れずに入れる
  alternates: {
    canonical: "/", // ← ホームページなのでパスでOK
  },
  openGraph: {
    title: Utils.Site.title,
    description:
      "BROWN SUGAR 1ST offers organic, no sugar added, plant‑based snacks and butters made with trusted ingredients. Sustainable, delicious, and safe for families.",
    url: "https://brownsugar1st.store",
    siteName:
      "Brown Suger 1st.: Organic, Vegan, No Sugar Added Snacks & Butters for a Mindful Lifestyle",
    images: {
      url: "https://brownsugar1st.store/ogp.png",
      width: 1200,
      height: 600,
    },
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`init-load no-overlay ${Utils.Font.SuisseReg.variable} `}
    >
      <head>
        <GoogleAnalytics />
        <link rel="stylesheet" href="https://use.typekit.net/fya5uxv.css" />
        <Utils.LocalBusiness />
        <Utils.BreadcrumbList />
      </head>
      <body
        className={`bg-site-white text-site-gray font-und-reg2 font-normal`}
      >
        <Atoms.SVG />
        <Context.DeviceSizeProvider>
          <Context.Providers>
            {/*<TransitionElement
						path={"/product/basic-bread"}
						className={"left-[500px]"}
					/>
					<TransitionElement path={"/"} className={""} />*/}
            <Organisms.Scroller>
              <Organisms.Header />
              <Suspense fallback={<p>Loading</p>}>
                <TransitionLayout>{children}</TransitionLayout>
              </Suspense>
              <Organisms.Footer />
            </Organisms.Scroller>
            <Modules.OverlayMenu />
            <Modules.OverlayLogin />
          </Context.Providers>
        </Context.DeviceSizeProvider>
        {(await draftMode()).isEnabled && (
          <p className="fixed bottom-0 bg-orange-200 px-[6vw] py-4">
            Draft mode is on! <Atoms.ExitDraftModeLink className="underline" />
          </p>
        )}

        <div className="initioal-loader pointer-events-none fixed left-0 top-0 z-[10000] h-full w-screen overflow-hidden">
          <Atoms.SvgElements.FooterLogo
            className={`absolute z-[1000] max-md:top-[35px] max-md:ml-[16px] max-md:w-screen max-md:overflow-hidden md:left-[25px] md:top-[calc(48svh+25px+25px)] max-md:[&_svg]:h-[calc((100vw-26px)*0.794)] max-md:[&_svg]:translate-y-[100%] md:[&_svg]:h-[min(calc((100vw-50px)*0.805),calc((100svh-48svh-50px-48px)*1.242349100877087))] md:[&_svg]:translate-y-[90%]`}
          />
          <div className="bg absolute top-[0px] z-[0] h-full w-full bg-white" />
        </div>
      </body>
    </html>
  );
}
