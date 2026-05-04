"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { TESTIMONIALS, CONTACT } from "@/lib/constants";

// TODO: validar con cliente — testimonios placeholder
export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = TESTIMONIALS.length;

  const goPrev = () => setIndex((i) => (i - 1 + total) % total);
  const goNext = () => setIndex((i) => (i + 1) % total);

  const current = TESTIMONIALS[index];

  return (
    <section
      id="opiniones"
      className="section-padding bg-surface-muted"
    >
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Opiniones de pacientes</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            Lo que dicen quienes ya pasaron por consulta.
          </h2>
          <p className="mt-4 text-base text-ink-muted sm:text-lg">
            Pacientes reales, lesiones reales, recuperaciones reales.{" "}
            <span className="italic">
              (Importadas con permiso del perfil verificado en Doctoralia.)
            </span>
          </p>
        </div>

        <div className="mt-10 relative">
          <div className="rounded-2xl bg-white p-6 sm:p-10 ring-1 ring-line shadow-card">
            <Quote
              className="h-9 w-9 text-brand-secondary/40"
              aria-hidden="true"
            />
            <blockquote className="mt-4 text-lg leading-relaxed text-ink sm:text-xl">
              “{current.quote}”
            </blockquote>
            <div className="mt-6 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-secondary/15 font-display text-base font-bold text-brand-primary"
                  aria-hidden="true"
                >
                  {current.author
                    .split(" ")
                    .slice(0, 2)
                    .map((s) => s[0])
                    .join("")
                    .toUpperCase()}
                </div>
                <div>
                  <p className="font-semibold text-ink">{current.author}</p>
                  {current.context ? (
                    <p className="text-sm text-ink-muted">{current.context}</p>
                  ) : null}
                </div>
              </div>
              <div
                className="flex items-center gap-0.5 text-yellow-500"
                aria-label="5 sobre 5 estrellas"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-500"
                    aria-hidden="true"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between gap-4">
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Ver testimonio ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    i === index
                      ? "w-8 bg-brand-primary"
                      : "w-2.5 bg-line hover:bg-brand-secondary/40"
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Testimonio anterior"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink hover:bg-surface-muted"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Testimonio siguiente"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink hover:bg-surface-muted"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href={CONTACT.doctoraliaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Ver más opiniones en Doctoralia →
          </a>
        </div>
      </div>
    </section>
  );
}
