import Link from "next/link";
import { PROCESS_STEPS, type ProcessStep } from "@/lib/constants";
import { Phone, Stethoscope, ScanLine, Heart, ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const ICON_MAP: Record<ProcessStep["icon"], typeof Phone> = {
  phone: Phone,
  stethoscope: Stethoscope,
  scan: ScanLine,
  heart: Heart,
};

export default function HowWeWork() {
  return (
    <section
      id="como-trabajamos"
      className="section-padding bg-white"
    >
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Cómo trabajamos</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            Así te atendemos, paso a paso.
          </h2>
          <p className="mt-4 text-base text-ink-muted sm:text-lg">
            Sin laberinto burocrático. Resolvemos tu caso con criterio y
            rapidez.
          </p>
        </div>

        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = ICON_MAP[step.icon];
            return (
              <Reveal
                as="li"
                key={step.number}
                delay={idx * 0.08}
                className="relative rounded-2xl bg-surface-muted p-6 ring-1 ring-line"
              >
                <span className="font-display text-3xl font-bold text-brand-secondary/30">
                  {step.number}
                </span>
                <div className="mt-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-3 font-display text-lg font-bold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                  {step.description}
                </p>
              </Reveal>
            );
          })}
        </ol>

        <div className="mt-10 flex justify-center">
          <Link href="/#contacto" className="btn-secondary">
            Empezar mi proceso
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
