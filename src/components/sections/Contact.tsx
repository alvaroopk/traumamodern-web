"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import {
  MessageCircle,
  Phone,
  Calendar,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { CONTACT } from "@/lib/constants";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  reason: string;
  consent: boolean;
  // Honeypot
  website?: string;
};

// NOTA: este formulario no envía a backend.
// Tras "submit" exitoso (validación client-side) se abre un mailto:
// pre-rellenado al doctor para que el cliente cierre la consulta por email.
// Cuando se conecte un servicio (Resend / Formspree), reemplazar la lógica
// dentro de onSubmit por un fetch a /api/contact.
export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      reason: "",
      consent: false,
      website: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // Honeypot — si está relleno, descartamos
    if (data.website) return;

    const subject = `Solicitud de cita — ${data.name}`;
    const body = [
      `Nombre: ${data.name}`,
      `Email: ${data.email}`,
      `Teléfono: ${data.phone}`,
      "",
      "Motivo de consulta:",
      data.reason,
    ].join("\n");

    const mailto = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    if (typeof window !== "undefined") {
      window.location.assign(mailto);
    }

    setSubmitted(true);
    reset();
  };

  return (
    <section id="contacto" className="section-padding bg-white">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Contacto</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            Pide tu primera consulta.
          </h2>
          <p className="mt-4 text-base text-ink-muted sm:text-lg">
            Tres formas de empezar. Elige la que prefieras y te atendemos lo
            antes posible.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl bg-surface-muted p-6 ring-1 ring-line transition-shadow hover:shadow-cardHover"
          >
            <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent">
              <MessageCircle className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="font-display text-lg font-bold text-ink">
              WhatsApp
            </h3>
            <p className="mt-2 text-sm text-ink-muted">
              Mensaje directo, respuesta rápida en horario laboral.
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent">
              Escribir por WhatsApp
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </span>
          </a>

          <a
            href={`tel:${CONTACT.phoneRaw}`}
            className="group rounded-2xl bg-surface-muted p-6 ring-1 ring-line transition-shadow hover:shadow-cardHover"
          >
            <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-secondary/10 text-brand-secondary">
              <Phone className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="font-display text-lg font-bold text-ink">Llamada</h3>
            <p className="mt-2 text-sm text-ink-muted">
              Hablamos contigo y agendamos tu cita.
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-secondary">
              Llamar al {CONTACT.phoneDisplay}
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </span>
          </a>

          <a
            href={CONTACT.doctoraliaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl bg-surface-muted p-6 ring-1 ring-line transition-shadow hover:shadow-cardHover"
          >
            <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary">
              <Calendar className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="font-display text-lg font-bold text-ink">
              Doctoralia
            </h3>
            <p className="mt-2 text-sm text-ink-muted">
              Reserva online con horarios disponibles.
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary">
              Pedir cita en Doctoralia
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </span>
          </a>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5 space-y-3">
            <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">
              ¿Prefieres que te llamemos?
            </h3>
            <p className="text-base text-ink-muted">
              Déjanos tus datos y te contactamos en menos de 24 h hábiles.
            </p>
            <p className="text-sm text-ink-muted">
              También puedes escribirnos directamente a{" "}
              <a
                href={`mailto:${CONTACT.email}`}
                className="font-semibold text-brand-secondary hover:text-brand-primary transition-colors break-all"
              >
                {CONTACT.email}
              </a>
              .
            </p>
          </div>

          <div className="lg:col-span-7">
            {submitted ? (
              <div
                role="status"
                aria-live="polite"
                className="rounded-2xl bg-brand-accent/10 p-6 ring-1 ring-brand-accent/30"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    className="h-6 w-6 mt-0.5 shrink-0 text-brand-accent"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-display text-lg font-bold text-ink">
                      Hemos recibido tu consulta.
                    </p>
                    <p className="mt-1 text-sm text-ink-muted">
                      Te contactamos en menos de 24 h hábiles. Si lo prefieres,
                      puedes escribirnos directamente por WhatsApp.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-3 text-sm font-semibold text-brand-secondary hover:text-brand-primary"
                    >
                      Enviar otra consulta →
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="space-y-4 rounded-2xl bg-surface-muted p-6 ring-1 ring-line sm:p-8"
              >
                {/* Honeypot */}
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                  {...register("website")}
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-ink"
                    >
                      Nombre
                    </label>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      className="mt-1 block w-full rounded-md border border-line bg-white px-3 py-2 text-base text-ink placeholder:text-ink-muted focus:border-brand-secondary focus:outline-none"
                      {...register("name", {
                        required: "Indícanos tu nombre",
                        minLength: { value: 2, message: "Mínimo 2 caracteres" },
                      })}
                      aria-invalid={errors.name ? "true" : "false"}
                    />
                    {errors.name ? (
                      <p className="mt-1 text-xs text-danger">
                        {errors.name.message}
                      </p>
                    ) : null}
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-ink"
                    >
                      Teléfono
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      className="mt-1 block w-full rounded-md border border-line bg-white px-3 py-2 text-base text-ink placeholder:text-ink-muted focus:border-brand-secondary focus:outline-none"
                      {...register("phone", {
                        required: "Necesitamos un teléfono para llamarte",
                        pattern: {
                          value: /^[0-9+\s()-]{6,}$/,
                          message: "Formato no válido",
                        },
                      })}
                      aria-invalid={errors.phone ? "true" : "false"}
                    />
                    {errors.phone ? (
                      <p className="mt-1 text-xs text-danger">
                        {errors.phone.message}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-ink"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    className="mt-1 block w-full rounded-md border border-line bg-white px-3 py-2 text-base text-ink placeholder:text-ink-muted focus:border-brand-secondary focus:outline-none"
                    {...register("email", {
                      required: "Indícanos tu email",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Email no válido",
                      },
                    })}
                    aria-invalid={errors.email ? "true" : "false"}
                  />
                  {errors.email ? (
                    <p className="mt-1 text-xs text-danger">
                      {errors.email.message}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor="reason"
                    className="block text-sm font-semibold text-ink"
                  >
                    Motivo de consulta
                  </label>
                  <textarea
                    id="reason"
                    rows={4}
                    className="mt-1 block w-full rounded-md border border-line bg-white px-3 py-2 text-base text-ink placeholder:text-ink-muted focus:border-brand-secondary focus:outline-none"
                    placeholder="Cuéntanos brevemente qué te ocurre y desde cuándo."
                    {...register("reason", {
                      required: "Cuéntanos qué te ocurre",
                      minLength: {
                        value: 10,
                        message: "Mínimo 10 caracteres",
                      },
                    })}
                    aria-invalid={errors.reason ? "true" : "false"}
                  />
                  {errors.reason ? (
                    <p className="mt-1 text-xs text-danger">
                      {errors.reason.message}
                    </p>
                  ) : null}
                </div>

                <label className="flex items-start gap-3 text-sm text-ink-muted">
                  <input
                    type="checkbox"
                    className="mt-0.5 h-4 w-4 rounded border-line accent-brand-secondary"
                    {...register("consent", {
                      required:
                        "Debes aceptar la política de privacidad para continuar",
                    })}
                    aria-invalid={errors.consent ? "true" : "false"}
                  />
                  <span>
                    He leído y acepto la{" "}
                    <a
                      href="/politica-privacidad"
                      className="font-semibold text-brand-secondary hover:text-brand-primary underline-offset-2 hover:underline"
                    >
                      política de privacidad
                    </a>
                    .
                  </span>
                </label>
                {errors.consent ? (
                  <p className="-mt-2 text-xs text-danger">
                    {errors.consent.message}
                  </p>
                ) : null}

                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full sm:w-auto"
                  >
                    Solicitar contacto
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <p className="text-xs text-ink-muted">
                    Te respondemos en menos de 24 h hábiles.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
