/* eslint-disable @next/next/next-script-for-ga */
"use client";

import Script from "next/script";

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-6PH5638BT9"
        strategy="lazyOnload"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-6PH5638BT9');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
