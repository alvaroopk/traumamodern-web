// =============================================================
// Schemas JSON-LD para SEO
// =============================================================
//
// Centralizamos los objetos de schema.org en un único módulo
// para mantener consistencia y facilitar revisión por SEO.
//
// Política conservadora: si un dato no está validado con el
// cliente (horarios, lat/lon, tarifa), NO se incluye. Mejor
// omitir que inventar (Google penaliza datos falsos en
// healthcare/YMYL).

import { BUSINESS, CONTACT, FAQ_ITEMS, HOSPITALS, SITE_URL } from "./constants";

// -------------------------------------------------------------
// MedicalClinic — schema principal del sitio
// -------------------------------------------------------------
// Usamos `MedicalClinic` (subtipo de MedicalBusiness) por ser
// el más preciso para una consulta privada de un especialista.

export const medicalClinicSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": `${SITE_URL}/#clinic`,
  name: BUSINESS.name,
  legalName: BUSINESS.legalName,
  description:
    "Consulta privada de traumatología, cirugía ortopédica y traumatología deportiva en Sevilla (Triana). Diagnóstico el mismo día con ecografía en consulta.",
  url: SITE_URL,
  telephone: CONTACT.phoneRaw,
  email: CONTACT.email,
  image: `${SITE_URL}/assets/doctor_lara.webp`,
  logo: `${SITE_URL}/assets/logo_traumamodern.webp`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle Pagés del Corro 188",
    addressLocality: CONTACT.city,
    addressRegion: CONTACT.region,
    postalCode: CONTACT.postalCode,
    addressCountry: "ES",
  },
  areaServed: [
    { "@type": "City", name: "Sevilla" },
    { "@type": "AdministrativeArea", name: "Andalucía" },
  ],
  medicalSpecialty: ["Orthopedic", "PhysicalTherapy"],
  availableService: [
    {
      "@type": "MedicalProcedure",
      name: "Cirugía artroscópica",
    },
    {
      "@type": "MedicalProcedure",
      name: "Infiltración de plasma rico en plaquetas (PRP)",
    },
    {
      "@type": "MedicalProcedure",
      name: "Infiltración de ácido hialurónico",
    },
    {
      "@type": "MedicalProcedure",
      name: "Ecografía musculoesquelética en consulta",
    },
    {
      "@type": "MedicalProcedure",
      name: "Cirugía de prótesis articular",
    },
  ],
  // Omitidos a propósito por falta de datos validados con el cliente:
  //   - openingHoursSpecification (no hay horarios publicados)
  //   - priceRange (no hay tarifa pública)
  //   - geo (sin lat/lon validadas)
  //   - sameAs RRSS (a confirmar si se crean)
  sameAs: [CONTACT.doctoraliaUrl],
};

// -------------------------------------------------------------
// Physician — Dr. Francisco José Lara Pulido
// -------------------------------------------------------------

export const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "@id": `${SITE_URL}/sobre-el-doctor#physician`,
  name: BUSINESS.doctor,
  alternateName: "Dr. Lara",
  jobTitle: "Traumatólogo y cirujano ortopédico",
  description:
    "Especialista en cirugía ortopédica, traumatología deportiva y tratamientos avanzados (PRP, artroscopia, ecografía musculoesquelética) en Sevilla.",
  url: `${SITE_URL}/sobre-el-doctor`,
  image: `${SITE_URL}/assets/doctor_lara.webp`,
  medicalSpecialty: ["Orthopedic", "PhysicalTherapy"],
  worksFor: HOSPITALS.map((h) => ({
    "@type": "Organization",
    name: h.name,
  })),
  affiliation: HOSPITALS.map((h) => ({
    "@type": "Organization",
    name: h.name,
  })),
  memberOf: {
    "@type": "MedicalClinic",
    "@id": `${SITE_URL}/#clinic`,
    name: BUSINESS.name,
  },
};

// -------------------------------------------------------------
// FAQPage — preguntas frecuentes (genera rich snippets)
// -------------------------------------------------------------

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

// -------------------------------------------------------------
// WebSite — habilita SiteLinks searchbox y mejora knowledge graph
// -------------------------------------------------------------

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: BUSINESS.name,
  inLanguage: "es-ES",
  publisher: {
    "@type": "MedicalClinic",
    "@id": `${SITE_URL}/#clinic`,
  },
};
