import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";
import { BUSINESS, CONTACT, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-primary text-white">
      <div className="container-page py-14 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Columna 1: Marca */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/logo_traumamodern.webp"
                alt={`Logo ${BUSINESS.name}`}
                width={40}
                height={40}
                className="h-10 w-10 rounded-md bg-white object-contain p-1"
              />
              <span className="font-display text-xl font-bold">
                {BUSINESS.name}
              </span>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              Traumatología y cirugía ortopédica en Sevilla — Triana.
              <br />
              {BUSINESS.doctor}.
            </p>
          </div>

          {/* Columna 2: Contacto rápido */}
          <div className="space-y-3">
            <h3 className="font-display text-base font-semibold text-white">
              Contacto
            </h3>
            <ul className="space-y-2 text-sm text-white/85">
              <li className="flex items-start gap-2">
                <MapPin
                  className="h-4 w-4 mt-0.5 shrink-0 text-brand-accent"
                  aria-hidden="true"
                />
                <a
                  href={CONTACT.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {CONTACT.address}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone
                  className="h-4 w-4 mt-0.5 shrink-0 text-brand-accent"
                  aria-hidden="true"
                />
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="hover:text-white transition-colors"
                >
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MessageCircle
                  className="h-4 w-4 mt-0.5 shrink-0 text-brand-accent"
                  aria-hidden="true"
                />
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail
                  className="h-4 w-4 mt-0.5 shrink-0 text-brand-accent"
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Navegación */}
          <div className="space-y-3">
            <h3 className="font-display text-base font-semibold text-white">
              Navegación
            </h3>
            <ul className="space-y-2 text-sm text-white/85">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Legal */}
          <div className="space-y-3">
            <h3 className="font-display text-base font-semibold text-white">
              Legal
            </h3>
            <ul className="space-y-2 text-sm text-white/85">
              <li>
                <Link
                  href="/aviso-legal"
                  className="hover:text-white transition-colors"
                >
                  Aviso Legal
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-privacidad"
                  className="hover:text-white transition-colors"
                >
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-cookies"
                  className="hover:text-white transition-colors"
                >
                  Política de Cookies
                </Link>
              </li>
              <li>
                <a
                  href={CONTACT.doctoraliaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Perfil en Doctoralia
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6 text-xs text-white/70 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p>
            © {year} {BUSINESS.name} · {BUSINESS.doctor} · Sevilla. Todos los
            derechos reservados.
          </p>
          <p>Diseñado y desarrollado con cariño en 2026.</p>
        </div>
      </div>
    </footer>
  );
}
