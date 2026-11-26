/**
 * Datos del sitio en un solo lugar.
 *
 * ⚠️ `legalEntity` y `jurisdiction` son los que hay que confirmar antes de
 * publicar: los textos legales los citan. El resto sale del copy deck de la
 * app (docs/brand/copy.md en el repo de iOS).
 */
export const SITE = {
  name: "Solund",
  tagline: "Mornings aren't for scrolling.",
  /** STE-152: el `<title>` de la home. Nombra la categoría ("app blocker"). */
  title: "Solund: The App Blocker That Gets You Out of Bed",
  description:
    "Solund keeps Instagram, TikTok and other distracting apps locked every morning until you get out of bed and walk. Your alarm turns off normally. 7 days free.",
  /** STE-152: la URL canónica es `www`. Vercel redirige `solund.app` → `www`
   *  con un 308, así que canonical, `og:url` y sitemap apuntan acá. */
  url: "https://www.solund.app",
  supportEmail: "hola@solund.app",
  instagramUrl: "https://www.instagram.com/solund.app/",

  /** La app en el App Store, con link de campaña `ct=web` para que App Store
   *  Connect atribuya las descargas que vienen de la landing (STE-152; el
   *  link sale de `distribution/usa/DATOS.md`). */
  appStoreUrl:
    "https://apps.apple.com/app/apple-store/id6794460644?pt=126821892&ct=web&mt=8",
  /** La ficha sin parámetros de campaña: es la que va en los datos
   *  estructurados, que identifican la app, no una visita. */
  appStoreListingUrl: "https://apps.apple.com/us/app/solund/id6794460644",
  appStoreId: "6794460644",

  /** Quién responde legalmente por la app. Confirmar antes de publicar. */
  legalEntity: "Gastón Foncea",
  /** Ley aplicable de los términos. Confirmar antes de publicar. */
  jurisdiction: "Argentina",

  /** Última revisión de los textos legales. Actualizar al editarlos. */
  legalUpdated: "November 11, 2026",
} as const;

/** Precios de referencia, en USD. El precio real lo define el storefront. */
export const PRICING = {
  trialDays: 7,
  annual: "$29.99",
  monthly: "$4.99",
} as const;
