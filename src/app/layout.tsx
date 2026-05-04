import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import DemoBanner from "@/components/DemoBanner";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import JsonLd from "@/components/seo/JsonLd";
import { BUSINESS, SITE_INDEXED, SITE_URL } from "@/lib/constants";
import { medicalClinicSchema, websiteSchema } from "@/lib/schemas";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700"],
});

// Title ~58 char · Description ~158 char (longitudes recomendadas SEO).
const SITE_TITLE = "Traumamodern · Traumatólogo en Sevilla — Dr. Lara";
const SITE_DESCRIPTION =
  "Traumatólogo en Sevilla (Triana). Diagnóstico el mismo día con ecografía en consulta. Cirugía ortopédica, PRP y artroscopia. Pide cita por WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s · ${BUSINESS.name}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: BUSINESS.name,
  keywords: [
    "traumatólogo Sevilla",
    "traumatólogo en Sevilla",
    "traumatología y cirugía ortopédica Sevilla",
    "traumatólogo deportivo Sevilla",
    "cirugía artroscópica Sevilla",
    "PRP rodilla Sevilla",
    "ácido hialurónico rodilla",
    "ecografía musculoesquelética Sevilla",
    "artroscopia hombro Sevilla",
    "prótesis cadera Sevilla",
    "traumatólogo Triana",
    "Dr. Francisco José Lara Pulido",
    "Traumamodern",
  ],
  authors: [{ name: BUSINESS.doctor }],
  creator: BUSINESS.name,
  publisher: BUSINESS.name,
  category: "health",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: SITE_INDEXED,
    follow: SITE_INDEXED,
    googleBot: {
      index: SITE_INDEXED,
      follow: SITE_INDEXED,
    },
  },
  openGraph: {
    title: SITE_TITLE,
    description:
      "Consulta privada del Dr. Lara en Triana, Sevilla. Diagnóstico el mismo día con ecografía en consulta. PRP, artroscopia y traumatología deportiva.",
    url: SITE_URL,
    siteName: BUSINESS.name,
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/assets/doctor_lara.webp",
        width: 1200,
        height: 630,
        alt: "Dr. Francisco José Lara Pulido, traumatólogo en Sevilla — Traumamodern",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description:
      "Traumatólogo en Sevilla. Diagnóstico el mismo día y atención personal con el Dr. Lara. Pide cita por WhatsApp.",
    images: ["/assets/doctor_lara.webp"],
  },
  icons: {
    icon: "/assets/logo_traumamodern.webp",
    apple: "/assets/logo_traumamodern.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface text-ink">
        <JsonLd data={[medicalClinicSchema, websiteSchema]} id="site-jsonld" />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <DemoBanner />
      </body>
    </html>
  );
}
