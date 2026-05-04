// =============================================================
// JSON-LD reutilizable
// =============================================================
//
// Renderiza un <script type="application/ld+json"> con el objeto
// de schema.org pasado por props. Acepta uno o varios schemas.
//
// Uso:
//   <JsonLd data={medicalClinicSchema} />
//   <JsonLd data={[faqSchema, physicianSchema]} />
//
// Mantiene el HTML estable entre SSR y client (los objetos se
// serializan con JSON.stringify) por lo que no provoca hydration
// mismatches.

type SchemaObject = Record<string, unknown>;

type JsonLdProps = {
  data: SchemaObject | SchemaObject[];
  /**
   * id opcional para el <script>. Útil cuando hay múltiples
   * bloques de structured data en la misma página y queremos
   * inspeccionarlos por separado.
   */
  id?: string;
};

export default function JsonLd({ data, id }: JsonLdProps) {
  const payload = Array.isArray(data) ? data : [data];

  return (
    <>
      {payload.map((schema, idx) => (
        <script
          key={id ? `${id}-${idx}` : idx}
          id={id ? `${id}-${idx}` : undefined}
          type="application/ld+json"
          // JSON-LD es de solo lectura para el parser de Google;
          // dangerouslySetInnerHTML es la forma estándar y segura
          // de inyectarlo desde React (no se interpreta como HTML).
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
