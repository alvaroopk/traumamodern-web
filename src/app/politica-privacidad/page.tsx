import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { BUSINESS, CONTACT, SITE_INDEXED } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: `Política de privacidad y tratamiento de datos personales en ${BUSINESS.name}.`,
  robots: {
    index: SITE_INDEXED,
    follow: SITE_INDEXED,
  },
  alternates: { canonical: "/politica-privacidad" },
};

export default function PoliticaPrivacidadPage() {
  return (
    <LegalLayout title="Política de Privacidad">
      <h2>1. Responsable del tratamiento</h2>
      <p>
        El responsable del tratamiento de los datos personales recogidos en
        este sitio web es <strong>{BUSINESS.legalName}</strong>, con dirección
        en {CONTACT.address} y email de contacto {CONTACT.email}.
      </p>

      <h2>2. Datos recogidos y finalidad</h2>
      <p>
        Recogemos los datos que el usuario nos facilita voluntariamente a
        través del formulario de contacto (nombre, email, teléfono y motivo
        de consulta) con la única finalidad de gestionar su solicitud de cita
        o información médica.
      </p>

      <h2>3. Base jurídica</h2>
      <p>
        El tratamiento se basa en el consentimiento expreso del usuario al
        marcar la casilla correspondiente en el formulario.
      </p>

      <h2>4. Conservación de los datos</h2>
      <p>
        Los datos se conservarán mientras dure la relación asistencial y, en
        cualquier caso, durante los plazos legalmente establecidos para la
        documentación clínica.
      </p>

      <h2>5. Destinatarios</h2>
      <p>
        Los datos no se cederán a terceros salvo obligación legal o cuando
        sea necesario para la prestación del servicio sanitario (por ejemplo,
        centros concertados de imagen).
      </p>

      <h2>6. Derechos del usuario</h2>
      <p>
        El usuario puede ejercer sus derechos de acceso, rectificación,
        supresión, oposición, limitación y portabilidad enviando un correo a{" "}
        {CONTACT.email}. También puede presentar reclamación ante la Agencia
        Española de Protección de Datos (www.aepd.es).
      </p>
    </LegalLayout>
  );
}
