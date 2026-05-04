// =============================================================
// Configuración del proyecto Traumamodern
// =============================================================

// URL de la web original del cliente (usada en el banner de demo)
export const ORIGINAL_URL = "https://traumatologiasevilla.es/";

// Cambiar a true para habilitar la indexación en Google
export const SITE_INDEXED = false;

// URL canónica del sitio.
// Provisional Vercel; cuando el cliente apunte un dominio definitivo
// (ej. "traumamodern.es"), basta con sobrescribirlo via env var
// `NEXT_PUBLIC_SITE_URL` o cambiando la constante de fallback.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://traumamodern-web.vercel.app";

// =============================================================
// Datos del negocio
// =============================================================

export const BUSINESS = {
  name: "Traumamodern",
  legalName: "Traumamodern Sevilla — Doctor Francisco José Lara Pulido",
  doctor: "Dr. Francisco José Lara Pulido",
  shortDoctor: "Dr. Lara",
  tagline:
    "Traumatología y cirugía ortopédica en Sevilla. Diagnóstico, cirugía y vuelta a tu vida.",
} as const;

// =============================================================
// Datos de contacto
// =============================================================

export const CONTACT = {
  phoneDisplay: "620 841 107",
  phoneRaw: "+34620841107",
  whatsappUrl:
    "https://wa.me/34620841107?text=" +
    encodeURIComponent(
      "Hola, me gustaría pedir cita con el Dr. Lara en Traumamodern.",
    ),
  email: "doctorlara@traumamodern.es",
  address: "Calle Pagés del Corro 188, 41011 Sevilla",
  addressShort: "C/ Pagés del Corro 188 · Triana, Sevilla",
  city: "Sevilla",
  district: "Triana",
  postalCode: "41011",
  region: "Andalucía",
  country: "España",
  // TODO: confirmar con cliente
  schedule: "Lunes a viernes — Consulta con cita previa",
  // Perfil verificado en Doctoralia
  doctoraliaUrl:
    "https://www.doctoralia.es/francisco-jose-lara-pulido/traumatologo/sevilla",
  googleMapsUrl: "https://goo.gl/maps/ccmLa8oXpvCAczn46",
  // Iframe de Google Maps embed (Calle Pagés del Corro 188, 41011 Sevilla)
  googleMapsEmbed:
    "https://www.google.com/maps?q=Calle+Pag%C3%A9s+del+Corro+188,+41011+Sevilla&output=embed",
} as const;

// =============================================================
// Navegación principal (header sticky con anclas)
// =============================================================

export const NAV_LINKS = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Patologías", href: "/#patologias" },
  { label: "Tratamientos", href: "/#tratamientos" },
  { label: "Sobre el Dr. Lara", href: "/sobre-el-doctor" },
  { label: "Cómo trabajamos", href: "/#como-trabajamos" },
  { label: "Opiniones", href: "/#opiniones" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contacto", href: "/#contacto" },
] as const;

// =============================================================
// Patologías que tratamos
// =============================================================

export type Pathology = {
  slug: string;
  title: string;
  description: string;
  icon:
    | "knee"
    | "shoulder"
    | "hip"
    | "spine"
    | "hand"
    | "runner";
};

export const PATHOLOGIES: Pathology[] = [
  {
    slug: "rodilla",
    title: "Rodilla",
    description:
      "Rotura de menisco, ligamento cruzado, condropatía y artrosis. Artroscopia, infiltraciones de PRP y prótesis cuando es necesario.",
    icon: "knee",
  },
  {
    slug: "hombro",
    title: "Hombro",
    description:
      "Manguito rotador, luxación recidivante, tendinitis y lesiones del deportista. Artroscopia de hombro mínimamente invasiva.",
    icon: "shoulder",
  },
  {
    slug: "cadera",
    title: "Cadera",
    description:
      "Artrosis, dolor inguinal, prótesis de cadera e infiltraciones guiadas por ecografía.",
    icon: "hip",
  },
  {
    slug: "columna",
    title: "Columna",
    description:
      "Lumbalgia, ciática, hernias discales, valoración quirúrgica.",
    icon: "spine",
  },
  {
    slug: "mano-y-codo",
    title: "Mano y codo",
    description:
      "Túnel carpiano, epicondilitis, rizartrosis, tendinopatías.",
    icon: "hand",
  },
  {
    slug: "traumatologia-deportiva",
    title: "Traumatología deportiva",
    description:
      "Lesiones musculares, ligamentosas y tendinosas del deportista. Vuelta segura al deporte.",
    icon: "runner",
  },
];

// =============================================================
// Tratamientos avanzados
// =============================================================

export type Treatment = {
  slug: string;
  title: string;
  description: string;
  icon:
    | "syringe"
    | "droplet"
    | "scope"
    | "implant"
    | "ultrasound"
    | "needle";
  image?: string;
  imageAlt?: string;
};

export const TREATMENTS: Treatment[] = [
  {
    slug: "prp",
    title: "Plasma rico en plaquetas (PRP)",
    description:
      "Factores de crecimiento extraídos de tu propia sangre para regenerar tendones, cartílago y articulaciones. Indicado en tendinopatías crónicas, artrosis inicial y lesiones deportivas.",
    icon: "syringe",
  },
  {
    slug: "acido-hialuronico",
    title: "Ácido hialurónico",
    description:
      "Sustancias viscoelásticas que mejoran la lubricación articular y alivian el dolor en artrosis de rodilla, cadera u hombro.",
    icon: "droplet",
  },
  {
    slug: "artroscopia",
    title: "Cirugía artroscópica",
    description:
      "Cirugía mínimamente invasiva con cámara y micro-instrumentos. Menos dolor, menos cicatriz y recuperación más rápida que la cirugía abierta.",
    icon: "scope",
    image: "/assets/doctor_lara_quirofano.webp",
    imageAlt:
      "Cirugía artroscópica de hombro realizada por el Dr. Lara, traumatólogo en Sevilla",
  },
  {
    slug: "protesis",
    title: "Prótesis articular",
    description:
      "Reemplazo de articulación cuando el desgaste impide vivir con normalidad. Indicada en artrosis avanzada de rodilla y cadera.",
    icon: "implant",
  },
  {
    slug: "ecografia",
    title: "Ecografía musculoesquelética en consulta",
    description:
      "Diagnóstico por imagen en el mismo acto: vemos en directo tendones, ligamentos y articulaciones, y guiamos infiltraciones con precisión milimétrica.",
    icon: "ultrasound",
    image: "/assets/ecografia_consulta.webp",
    imageAlt:
      "Ecografía musculoesquelética en consulta del Dr. Lara, Sevilla",
  },
  {
    slug: "infiltraciones",
    title: "Infiltraciones guiadas",
    description:
      "Cuando están indicadas, se aplican corticoides o colágeno con guía ecográfica para máxima precisión y mínimo riesgo.",
    icon: "needle",
  },
];

// =============================================================
// Por qué Traumamodern
// =============================================================

export type Advantage = {
  title: string;
  description: string;
  icon:
    | "clock"
    | "stethoscope"
    | "scan"
    | "users"
    | "monitor"
    | "heart";
};

export const ADVANTAGES: Advantage[] = [
  {
    title: "Sin esperas",
    description:
      "Cita normalmente en menos de 24–72 h. Diagnóstico el mismo día de la consulta.",
    icon: "clock",
  },
  {
    title: "Especialista quirúrgico real",
    description:
      "El mismo doctor que te ve es quien te opera si hace falta. Continuidad asistencial total.",
    icon: "stethoscope",
  },
  {
    title: "Ecografía en consulta",
    description:
      "Diagnóstico por imagen en el mismo acto, sin pedir cita aparte ni esperas.",
    icon: "scan",
  },
  {
    title: "Red propia de fisioterapia",
    description:
      "Coordinación directa con fisios de confianza para tu rehabilitación.",
    icon: "users",
  },
  {
    title: "Centros de RM concertados",
    description:
      "Acceso rápido a resonancia magnética cuando es necesaria.",
    icon: "monitor",
  },
  {
    title: "Atención personal",
    description:
      "Trato directo y cercano. Sin pasar por intermediarios.",
    icon: "heart",
  },
];

// =============================================================
// Cómo trabajamos — proceso en 4 pasos
// =============================================================

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  icon: "phone" | "stethoscope" | "scan" | "heart";
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Contacto",
    description:
      "Llamas, escribes por WhatsApp o reservas en Doctoralia. Te confirmamos cita normalmente en menos de 24 h hábiles.",
    icon: "phone",
  },
  {
    number: "02",
    title: "Primera consulta",
    description:
      "Examen clínico completo y, si procede, ecografía musculoesquelética en el mismo acto. Sales con un diagnóstico inicial.",
    icon: "stethoscope",
  },
  {
    number: "03",
    title: "Diagnóstico definitivo",
    description:
      "Si la lesión lo requiere, derivamos a resonancia magnética en centros concertados. Revisamos juntos los resultados.",
    icon: "scan",
  },
  {
    number: "04",
    title: "Tratamiento y seguimiento",
    description:
      "Conservador (fisioterapia coordinada con nuestra red), infiltración o cirugía. Te acompañamos hasta la recuperación.",
    icon: "heart",
  },
];

// =============================================================
// Banda de confianza
// =============================================================

export const TRUST_PILLS = [
  "Traumatólogo en Hospital San Juan de Dios (Sevilla)",
  "Clínica del Carmen (Huelva)",
  "Médico consultor de Cajasol Ciencias Rugby",
  "Perfil verificado en Doctoralia",
] as const;

// =============================================================
// Testimonios — TODO: validar con cliente
// =============================================================

export type Testimonial = {
  quote: string;
  author: string;
  context?: string;
};

// TODO: validar con cliente — testimonios placeholder, idealmente importar
// de Doctoralia con permiso del paciente
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Llevaba meses con dolor de rodilla y nadie me daba un diagnóstico claro. En la primera consulta el Dr. Lara me hizo ecografía y supe exactamente qué tenía. Operado por artroscopia, en seis semanas volví a correr.",
    author: "M. R.",
    context: "42 años · Lesión de menisco",
  },
  {
    quote:
      "Llegué con un manguito rotador roto. Me explicó las opciones, decidí operar, y el seguimiento con su fisio fue impecable. Trato cercanísimo.",
    author: "J. L.",
    context: "56 años · Cirugía de hombro",
  },
  {
    quote:
      "Como traumatólogo del equipo nos saca de muchos apuros. Diagnóstico rápido y criterio claro, lo que necesita un deportista.",
    author: "Cuerpo técnico Cajasol Ciencias Rugby",
    context: "Equipo profesional",
  },
  {
    quote:
      "Infiltración con PRP en el codo después de probar de todo. A los dos meses sin dolor. Volveré sin dudarlo.",
    author: "A. G.",
    context: "38 años · Epicondilitis",
  },
];

// =============================================================
// FAQ — TODO: validar con cliente (especialmente seguros y precios)
// =============================================================

export type FaqItem = {
  question: string;
  answer: string;
};

// TODO: validar con cliente — algunas respuestas son placeholder
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "¿Cuándo necesito ir al traumatólogo y no al médico de cabecera?",
    answer:
      "Si tienes dolor articular, muscular o tendinoso que no remite, una limitación de movimiento que afecta a tu día a día o una lesión deportiva, una valoración del traumatólogo te ahorrará tiempo de derivaciones.",
  },
  {
    question: "¿Qué es exactamente el PRP y para qué sirve?",
    answer:
      "El plasma rico en plaquetas se obtiene de tu propia sangre concentrando los factores de crecimiento. Se infiltra en la zona lesionada para acelerar la regeneración del tejido. Es muy útil en tendinopatías crónicas, artrosis inicial y algunas lesiones deportivas.",
  },
  {
    question: "¿Necesito derivación de mi médico de cabecera?",
    answer:
      "No. Al ser una consulta privada puedes pedir cita directamente sin pasar por tu médico de atención primaria.",
  },
  {
    question: "¿Qué pasa en la primera consulta?",
    answer:
      "Hacemos historia clínica, exploración física y, si la lesión lo requiere, ecografía musculoesquelética en el mismo acto. Sales con un diagnóstico inicial y un plan de actuación.",
  },
  {
    question: "¿Trabajáis con seguros médicos o mutuas?",
    answer:
      "Consulta tu caso por WhatsApp y te informamos. Trabajamos con varias compañías; las condiciones pueden variar según el procedimiento.",
  },
  {
    question: "¿Cuánto cuesta la primera consulta?",
    answer:
      "Te informamos del coste exacto al pedir cita. Pregúntanos por WhatsApp o llamando al 620 841 107.",
  },
  {
    question: "¿Operáis en la propia clínica?",
    answer:
      "La clínica es para consulta y diagnóstico. Las cirugías se realizan en quirófanos de hospitales privados con los que el Dr. Lara colabora habitualmente (Hospital San Juan de Dios y Clínica del Carmen).",
  },
  {
    question:
      "¿Cómo es el seguimiento después de una cirugía o infiltración?",
    answer:
      "Coordinamos el seguimiento contigo y con nuestra red de fisioterapeutas hasta que estás recuperado. No te dejamos a medio camino.",
  },
];

// =============================================================
// Hospitales / centros donde opera el Dr. Lara
// =============================================================

export const HOSPITALS = [
  {
    name: "Hospital San Juan de Dios",
    location: "Nervión, Sevilla",
  },
  {
    name: "Clínica del Carmen",
    location: "Huelva",
  },
  {
    name: "Cajasol Ciencias Rugby Sevilla",
    location: "Médico consultor",
  },
] as const;
