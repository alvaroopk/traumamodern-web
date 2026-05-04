import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { BUSINESS, HOSPITALS, SITE_INDEXED, SITE_URL } from "@/lib/constants";
import { physicianSchema } from "@/lib/schemas";

// Title ~58 char · Description ~159 char
const PAGE_TITLE = "Dr. Lara · Traumatólogo y cirujano ortopédico en Sevilla";
const PAGE_DESCRIPTION =
  "Conoce al Dr. Francisco José Lara Pulido: traumatólogo en Sevilla con más de 15 años en cirugía ortopédica, traumatología deportiva y artroscopia.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "Dr. Francisco José Lara Pulido",
    "traumatólogo Sevilla",
    "cirujano ortopédico Sevilla",
    "traumatólogo deportivo Sevilla",
    "Cajasol Ciencias Rugby",
    "Hospital San Juan de Dios Sevilla",
    "Clínica del Carmen Huelva",
  ],
  alternates: { canonical: "/sobre-el-doctor" },
  robots: {
    index: SITE_INDEXED,
    follow: SITE_INDEXED,
    googleBot: {
      index: SITE_INDEXED,
      follow: SITE_INDEXED,
    },
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${SITE_URL}/sobre-el-doctor`,
    siteName: BUSINESS.name,
    locale: "es_ES",
    type: "profile",
    images: [
      {
        url: "/assets/doctor_lara.webp",
        width: 1200,
        height: 630,
        alt: "Dr. Francisco José Lara Pulido, traumatólogo en Sevilla",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ["/assets/doctor_lara.webp"],
  },
};

const PHILOSOPHY_POINTS = [
  "Tratamiento conservador siempre que sea posible.",
  "Cirugía mínimamente invasiva cuando es necesaria.",
  "El mismo doctor que te ve es el que te opera.",
  "Seguimiento coordinado con red propia de fisioterapia.",
];

export default function SobreElDoctorPage() {
  return (
    <>
      <JsonLd data={physicianSchema} id="physician-jsonld" />

      {/* Hero */}
      <section className="bg-hero-gradient pt-12 pb-12 sm:pt-16 sm:pb-16">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="space-y-5">
              <Link
                href="/"
                className="text-sm font-semibold text-brand-secondary hover:text-brand-primary"
              >
                ← Volver al inicio
              </Link>
              <span className="eyebrow">Sobre el Dr. Lara</span>
              <h1 className="font-display text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
                Dr. Francisco José Lara Pulido
                <span className="block text-brand-primary mt-2">
                  Traumatólogo y cirujano ortopédico en Sevilla.
                </span>
              </h1>
              <p className="text-base text-ink-muted sm:text-lg">
                Más de 15 años tratando lesiones del aparato locomotor en
                hospitales privados de referencia y junto a deportistas de
                élite. Cirugía artroscópica, prótesis articulares y
                tratamientos avanzados como PRP.
              </p>
            </div>

            <div className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-2xl shadow-card">
              <Image
                src="/assets/doctor_lara.webp"
                alt="Dr. Francisco José Lara Pulido, traumatólogo en Sevilla, en consulta de Traumamodern"
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 480px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trayectoria */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5 space-y-4">
              <span className="eyebrow">Trayectoria</span>
              <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
                Hospitales y equipos de referencia.
              </h2>
              <p className="text-base text-ink-muted">
                El Dr. Lara compagina la consulta privada de Traumamodern con
                su actividad en hospitales privados de prestigio y como médico
                consultor de un equipo de rugby de élite.
              </p>
            </div>

            <ul className="lg:col-span-7 space-y-4">
              <li className="rounded-xl bg-surface-muted p-5 ring-1 ring-line">
                <p className="font-display text-lg font-bold text-ink">
                  Especialista en Cirugía Ortopédica y Traumatología
                </p>
                <p className="mt-1 text-sm text-ink-muted">
                  Formación específica en cirugía artroscópica, cirugía
                  protésica y traumatología deportiva.
                </p>
              </li>
              {HOSPITALS.map((h) => (
                <li
                  key={h.name}
                  className="rounded-xl bg-surface-muted p-5 ring-1 ring-line"
                >
                  <p className="font-display text-lg font-bold text-ink">
                    {h.name}
                  </p>
                  <p className="mt-1 text-sm text-ink-muted">{h.location}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Filosofía + foto quirófano */}
      <section className="section-padding bg-surface-muted">
        <div className="container-page">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-card">
              <Image
                src="/assets/doctor_lara_quirofano.webp"
                alt="Dr. Francisco José Lara realizando una cirugía artroscópica de hombro en quirófano"
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                className="object-cover"
              />
              <span className="absolute bottom-3 left-3 rounded-md bg-white/90 px-3 py-1.5 text-xs font-semibold text-ink">
                Cirugía artroscópica de hombro
              </span>
            </div>

            <div className="space-y-5">
              <span className="eyebrow">Filosofía de trabajo</span>
              <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
                Mi objetivo: que vuelvas a tu vida.
              </h2>
              <p className="text-base text-ink-muted sm:text-lg">
                Mi enfoque combina el criterio quirúrgico con el tratamiento
                conservador siempre que sea posible. Mi objetivo es que cada
                paciente vuelva a su vida — al deporte, al trabajo, a sus
                rutinas — con la mejor solución técnica disponible y la menor
                agresión posible.
              </p>
              <ul className="space-y-2.5">
                {PHILOSOPHY_POINTS.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-base text-ink"
                  >
                    <CheckCircle2
                      className="h-5 w-5 mt-0.5 shrink-0 text-brand-accent"
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="section-padding bg-brand-primary text-white">
        <div className="container-page text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            ¿Quieres consultar tu caso?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-white/85 sm:text-lg">
            Pide cita ahora — te respondemos en menos de 24 h hábiles.
          </p>
          <div className="mt-6 flex justify-center">
            <Link href="/#contacto" className="btn-primary">
              Pedir cita ahora
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
