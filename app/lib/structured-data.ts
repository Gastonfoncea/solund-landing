import { FAQ } from "@/app/lib/faq";
import { PRICING, SITE } from "@/app/lib/site";

/**
 * STE-152: JSON-LD de la home (`SoftwareApplication`, `Organization`,
 * `FAQPage`) en un solo `@graph`.
 *
 * - **Sin `aggregateRating`:** la app no tiene calificaciones que citar.
 * - **El trial va como componente de precio, no como oferta a $0.** Una oferta
 *   con `price: 0` la muestran los buscadores como "Free", y el precio se dice
 *   "7 days free", nunca "free" solo. Por eso el anual es una oferta de
 *   US$29.99 cuyo `priceSpecification` dice: 7 días a $0, y desde el día 7,
 *   US$29.99 por año.
 */
const price = (s: string) => s.replace("$", "");

const ORG_ID = `${SITE.url}/#organization`;
const APP_ID = `${SITE.url}/#app`;

export function homeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORG_ID,
        name: SITE.name,
        url: `${SITE.url}/`,
        logo: `${SITE.url}/apple-icon`,
        email: SITE.supportEmail,
        sameAs: [SITE.appStoreListingUrl, SITE.instagramUrl],
      },
      {
        "@type": "SoftwareApplication",
        "@id": APP_ID,
        name: SITE.name,
        description: SITE.description,
        operatingSystem: "iOS",
        applicationCategory: "LifestyleApplication",
        url: `${SITE.url}/`,
        installUrl: SITE.appStoreListingUrl,
        image: `${SITE.url}/opengraph-image`,
        publisher: { "@id": ORG_ID },
        offers: [
          {
            "@type": "Offer",
            name: "Annual",
            description: `${PRICING.trialDays} days free, then ${PRICING.annual}/year`,
            price: price(PRICING.annual),
            priceCurrency: "USD",
            url: SITE.appStoreListingUrl,
            availability: "https://schema.org/InStock",
            priceSpecification: [
              {
                "@type": "UnitPriceSpecification",
                name: `${PRICING.trialDays} days free`,
                price: "0",
                priceCurrency: "USD",
                billingDuration: `P${PRICING.trialDays}D`,
              },
              {
                "@type": "UnitPriceSpecification",
                name: "Annual subscription",
                price: price(PRICING.annual),
                priceCurrency: "USD",
                billingDuration: "P1Y",
                billingStart: PRICING.trialDays,
                unitCode: "DAY",
              },
            ],
          },
          {
            "@type": "Offer",
            name: "Monthly",
            description: `${PRICING.monthly}/month, no trial`,
            price: price(PRICING.monthly),
            priceCurrency: "USD",
            url: SITE.appStoreListingUrl,
            availability: "https://schema.org/InStock",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: price(PRICING.monthly),
              priceCurrency: "USD",
              billingDuration: "P1M",
            },
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE.url}/#faq`,
        mainEntity: FAQ.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  };
}

/** Serializa para un `<script>`: escapa `<` como pide la guía de JSON-LD de
 *  Next, para que ningún texto pueda cerrar el tag. */
export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
