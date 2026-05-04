import type { MetadataRoute } from "next";
import { SITE_INDEXED, SITE_URL } from "@/lib/constants";

// Mientras `SITE_INDEXED` sea false, bloqueamos la indexación
// completa del sitio (demo/staging). Cuando el cliente apruebe
// el lanzamiento se cambia a true en `src/lib/constants.ts`.
export default function robots(): MetadataRoute.Robots {
  if (!SITE_INDEXED) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
      // Aunque bloqueemos, dejamos el sitemap declarado para
      // facilitar la inspección manual.
      sitemap: `${SITE_URL}/sitemap.xml`,
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Las rutas legales no se desindexan, sólo evitamos que
        // canibalicen tráfico de marca.
        disallow: ["/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
