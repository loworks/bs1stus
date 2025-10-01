"use client";

const LocalBusiness = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CafeOrCoffeeShop",
            name: "brownsugar1st",
            image: "https://brownsugar1st.store/logo.jpg",
            "@id": "https://brownsugar1st.store",
            url: "https://brownsugar1st.store",
            telephone: "+1-929-337-1172",
            address: {
              "@type": "PostalAddress",
              streetAddress: "141 India St",
              addressLocality: "Brooklyn",
              addressRegion: "NY",
              postalCode: "11222",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 40.732619669760936,
              longitude: -73.95426928656963,
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "09:00",
                closes: "17:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Thursday", "Friday"],
                opens: "12:00",
                closes: "17:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Saturday", "Sunday"],
                opens: "09:00",
                closes: "15:00",
              },
            ],
            //menu: "https://brownsugar1st.store/menu",
            servesCuisine: ["Japanese", "Bakery", "Matcha", "Japanese Tea"],
            sameAs: [
              "https://www.facebook.com/und_ny",
              "https://www.instagram.com/und_ny",
            ],
          }),
        }}
      />
    </>
  );
};

export default LocalBusiness;
