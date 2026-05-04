import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { BUSINESS, SITE_INDEXED } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: `Información sobre el uso de cookies en ${BUSINESS.name}.`,
  robots: {
    index: SITE_INDEXED,
    follow: SITE_INDEXED,
  },
  alternates: { canonical: "/politica-cookies" },
};

export default function PoliticaCookiesPage() {
  return (
    <LegalLayout title="Política de Cookies">
      <h2>1. ¿Qué son las cookies?</h2>
      <p>
        Las cookies son pequeños archivos que se descargan en el dispositivo
        del usuario al visitar un sitio web y que permiten almacenar y
        recuperar información sobre la navegación.
      </p>

      <h2>2. Cookies utilizadas en este sitio</h2>
      <p>
        Este sitio utiliza únicamente cookies técnicas necesarias para el
        correcto funcionamiento de la web (por ejemplo, recordar la
        aceptación del banner de demo). No se utilizan cookies de
        publicidad de terceros sin consentimiento explícito.
      </p>

      <h2>3. Cookies de terceros</h2>
      <p>
        En caso de incorporar herramientas externas (Google Analytics, mapas
        de Google, etc.), estas pueden instalar cookies propias sujetas a sus
        respectivas políticas de privacidad. El usuario podrá configurar su
        aceptación a través del banner de cookies.
      </p>

      <h2>4. Cómo gestionar las cookies</h2>
      <p>
        El usuario puede configurar su navegador para aceptar, rechazar o
        eliminar las cookies instaladas en su dispositivo. Las instrucciones
        varían según el navegador utilizado (Chrome, Firefox, Safari, Edge).
      </p>

      <h2>5. Actualización de la política</h2>
      <p>
        Esta política puede actualizarse en cualquier momento para adaptarse
        a cambios legislativos o técnicos. Recomendamos revisarla
        periódicamente.
      </p>
    </LegalLayout>
  );
}
