import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";
import { SITE } from "@/app/lib/site";

/* Una sola familia, como la app: ahí todo es SF Pro y la jerarquía la hace el
   PESO y el ANCHO, no un cambio de tipografía. Archivo es variable en `wght`
   (100-900) y `wdth` (62-125), así que reproduce en web lo que en SwiftUI es
   `.system(weight: .black).fontWidth(.expanded)` — los numerales héroe de
   MissionView. El eje `wdth` hay que pedirlo explícito o no se descarga. */
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
  display: "swap",
});

/* STE-152: lo que vale para todo el sitio. La home pisa título, descripción,
   canonical y `og:url` en `app/page.tsx`; las legales ponen su canonical.
   `og:url` NO va acá: heredado, le decía a `/privacy` que su URL era la home.
   La imagen para compartir sale de `app/opengraph-image.tsx`. */
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  /* Smart App Banner de Safari en iPhone: ofrece abrir o bajar la app. */
  itunes: { appId: SITE.appStoreId },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-night text-ink">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
