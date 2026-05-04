"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { FAQ_ITEMS, CONTACT } from "@/lib/constants";
import { faqSchema } from "@/lib/schemas";

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-page">
        <JsonLd data={faqSchema} id="faq-jsonld" />

        <div className="max-w-2xl">
          <span className="eyebrow">Preguntas frecuentes</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            Preguntas frecuentes sobre traumatología en Sevilla.
          </h2>
          <p className="mt-4 text-base text-ink-muted sm:text-lg">
            Resolvemos las dudas más habituales antes de tu primera consulta
            con el Dr. Lara.
          </p>
        </div>

        <ul className="mt-8 max-w-3xl divide-y divide-line rounded-2xl bg-surface-muted ring-1 ring-line">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <li key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-display text-base font-semibold text-ink sm:text-lg">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-brand-secondary transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen ? (
                  <div className="px-5 pb-5 text-sm text-ink-muted leading-relaxed sm:text-base">
                    {item.answer}
                  </div>
                ) : null}
              </li>
            );
          })}
        </ul>

        <div className="mt-8 flex justify-center">
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            ¿Otra pregunta? Escríbenos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
