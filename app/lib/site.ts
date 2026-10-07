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
  description:
    "An alarm that locks your apps until you get up and walk. No willpower required — just friction, at the exact moment you need it.",
  url: "https://solund.app",
  supportEmail: "hola@solund.app",

  /** La app en el App Store (storefront de US). */
  appStoreUrl: "https://apps.apple.com/us/app/solund/id6794460644",
  appStoreId: "6794460644",

  /** Quién responde legalmente por la app. Confirmar antes de publicar. */
  legalEntity: "Gastón Foncea",
  /** Ley aplicable de los términos. Confirmar antes de publicar. */
  jurisdiction: "Argentina",

  /** Última revisión de los textos legales. Actualizar al editarlos. */
  legalUpdated: "July 28, 2026",
} as const;

/** Precios de referencia, en USD. El precio real lo define el storefront. */
export const PRICING = {
  trialDays: 7,
  annual: "$29.99",
  monthly: "$4.99",
} as const;
