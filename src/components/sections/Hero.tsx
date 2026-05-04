import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Phone, Calendar } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-hero-gradient pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24"
    >
      <div className="container-page">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="space-y-6">
            <span className="eyebrow">Traumamodern · Triana, Sevilla</span>
            <h1 className="font-display text-4xl font-bold leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
              Traumatólogo en Sevilla.
              <br />
              <span className="text-brand-primary">
                Diagnóstico, cirugía y vuelta a tu vida.
              </span>
            </h1>
            <p className="max-w-xl text-base text-ink-muted sm:text-lg">
              Consulta privada del Dr. Francisco José Lara Pulido en Triana:
              cirugía ortopédica, traumatología deportiva y tratamientos
              avanzados (PRP, artroscopia, ecografía musculoesquelética). Sin
              esperas y con diagnóstico el mismo día.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Pedir cita por WhatsApp
              </a>
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="btn-secondary"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Llamar al {CONTACT.phoneDisplay}
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              <Link
                href={CONTACT.doctoraliaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-brand-secondary hover:text-brand-primary transition-colors"
              >
                <Calendar className="h-4 w-4" aria-hidden="true" />
                También en Doctoralia →
              </Link>
              <span className="text-ink-muted">
                Respondemos en menos de 24 h hábiles.
              </span>
            </div>
          </div>

          <div className="relative">
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
            <div className="absolute -bottom-3 left-3 right-3 rounded-xl bg-white px-4 py-3 shadow-cardHover ring-1 ring-line sm:left-6 sm:right-auto sm:max-w-xs">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-secondary">
                Más de 15 años
              </p>
              <p className="mt-1 text-sm font-medium text-ink">
                Hospital San Juan de Dios · Cajasol Ciencias Rugby
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
