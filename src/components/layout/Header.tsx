"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { BUSINESS, CONTACT, NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-line bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          aria-label={`${BUSINESS.name} · Inicio`}
          className="flex items-center gap-2"
        >
          <Image
            src="/assets/logo_traumamodern.webp"
            alt={`Logo ${BUSINESS.name}`}
            width={40}
            height={40}
            className="h-9 w-9 rounded-md object-contain"
            priority
          />
          <span className="font-display text-lg font-bold text-brand-primary">
            {BUSINESS.name}
          </span>
        </Link>

        <nav
          className="hidden lg:flex items-center gap-6"
          aria-label="Navegación principal"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-muted hover:text-brand-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${CONTACT.phoneRaw}`}
            className="text-sm font-semibold text-brand-primary hover:text-brand-secondary transition-colors flex items-center gap-1.5"
            aria-label={`Llamar al ${CONTACT.phoneDisplay}`}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {CONTACT.phoneDisplay}
          </a>
          <Link
            href="/#contacto"
            className="btn-primary text-sm py-2.5 px-4"
          >
            Pedir cita
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-ink hover:bg-surface-muted"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line bg-white">
          <nav
            className="container-page flex flex-col gap-1 py-3"
            aria-label="Navegación móvil"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-base font-medium text-ink hover:bg-surface-muted"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2 px-3 pb-2">
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="btn-outline text-sm w-full"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {CONTACT.phoneDisplay}
              </a>
              <Link
                href="/#contacto"
                onClick={() => setOpen(false)}
                className="btn-primary text-sm w-full"
              >
                Pedir cita
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
