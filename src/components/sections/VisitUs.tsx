import { MapPin, Clock, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export default function VisitUs() {
  return (
    <section id="visitanos" className="section-padding bg-surface-muted">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5 space-y-5">
            <span className="eyebrow">Visítanos</span>
            <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
              Tu traumatólogo en Triana, Sevilla.
            </h2>
            <p className="text-base text-ink-muted sm:text-lg">
              Calle Pagés del Corro 188, 41011 Sevilla. En pleno corazón del
              barrio de Triana, con acceso fácil en transporte público y zona
              de aparcamiento cercana.
            </p>

            <ul className="space-y-3 text-sm text-ink">
              <li className="flex items-start gap-3">
                <MapPin
                  className="h-5 w-5 mt-0.5 shrink-0 text-brand-secondary"
                  aria-hidden="true"
                />
                <a
                  href={CONTACT.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:text-brand-primary transition-colors"
                >
                  {CONTACT.address}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone
                  className="h-5 w-5 mt-0.5 shrink-0 text-brand-secondary"
                  aria-hidden="true"
                />
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="font-medium hover:text-brand-primary transition-colors"
                >
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle
                  className="h-5 w-5 mt-0.5 shrink-0 text-brand-secondary"
                  aria-hidden="true"
                />
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:text-brand-primary transition-colors"
                >
                  WhatsApp · {CONTACT.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock
                  className="h-5 w-5 mt-0.5 shrink-0 text-brand-secondary"
                  aria-hidden="true"
                />
                {/* TODO: validar con cliente — horarios exactos */}
                <span className="font-medium">{CONTACT.schedule}</span>
              </li>
            </ul>

            <a
              href={CONTACT.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex"
            >
              Cómo llegar
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>

          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-2xl ring-1 ring-line shadow-card">
              <iframe
                src={CONTACT.googleMapsEmbed}
                title="Mapa con la ubicación de Traumamodern en Calle Pagés del Corro 188, 41011 Sevilla"
                width="100%"
                height="420"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="block w-full border-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
