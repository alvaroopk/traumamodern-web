import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

// Sitemap estático con las rutas reales del sitio.
// `lastModified` se sella en build time (suficiente para una
// web institucional sin contenido dinámico).
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/sobre-el-doctor`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/aviso-legal`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${SITE_URL}/politica-privacidad`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${SITE_URL}/politica-cookies`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
