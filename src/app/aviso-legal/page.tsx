import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { BUSINESS, CONTACT, SITE_INDEXED } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description: `Información legal y términos de uso de ${BUSINESS.name}.`,
  robots: {
    index: SITE_INDEXED,
    follow: SITE_INDEXED,
  },
  alternates: { canonical: "/aviso-legal" },
};

export default function AvisoLegalPage() {
  return (
    <LegalLayout title="Aviso Legal">
      <h2>1. Información general</h2>
      <p>
        En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la
        Sociedad de la Información y Comercio Electrónico (LSSICE), se informa
        de los siguientes datos del titular del sitio web:
      </p>
      <ul>
        <li>
          <strong>Titular:</strong> {BUSINESS.legalName}
        </li>
        <li>
          <strong>Dirección:</strong> {CONTACT.address}
        </li>
        <li>
          <strong>Teléfono:</strong> {CONTACT.phoneDisplay}
        </li>
        <li>
          <strong>Email:</strong> {CONTACT.email}
        </li>
      </ul>

      <h2>2. Objeto</h2>
      <p>
        El presente aviso legal regula el uso del sitio web. La navegación por
        el sitio atribuye la condición de usuario e implica la aceptación
        plena de las condiciones aquí establecidas.
      </p>

      <h2>3. Propiedad intelectual</h2>
      <p>
        Todos los contenidos del sitio (textos, imágenes, logotipos, código
        fuente, etc.) son titularidad del responsable o cuentan con la
        correspondiente autorización para su uso. Queda prohibida cualquier
        reproducción sin autorización expresa.
      </p>

      <h2>4. Responsabilidad</h2>
      <p>
        El titular no se hace responsable del uso indebido que pueda hacerse
        de los contenidos publicados, ni de los daños derivados de la
        utilización de la información disponible en el sitio.
      </p>

      <h2>5. Legislación aplicable</h2>
      <p>
        El presente aviso legal se rige por la legislación española vigente.
      </p>
    </LegalLayout>
  );
}
