import type { MetadataRoute } from "next";
import { SITE } from "@/app/lib/site";

/* STE-152: las tres rutas del sitio, con la URL canónica (www). `/privacy` y
   `/terms` entran aunque no venden nada: son las que linkea la App Store. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE.url}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE.url}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE.url}/terms`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
