import type { MetadataRoute } from "next";
import { SITE } from "@/app/lib/site";

/* STE-152: todo el sitio es público. El sitemap va con la URL canónica (www). */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
