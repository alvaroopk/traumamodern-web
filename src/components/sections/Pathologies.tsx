import Link from "next/link";
import { PATHOLOGIES, type Pathology } from "@/lib/constants";
import {
  PersonStanding,
  Activity,
  Bone,
  Spline,
  Hand,
  ArrowRight,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const ICON_MAP: Record<Pathology["icon"], typeof Activity> = {
  knee: PersonStanding,
  shoulder: Activity,
  hip: Bone,
  spine: Spline,
  hand: Hand,
  runner: Activity,
};

export default function Pathologies() {
  return (
    <section
      id="patologias"
      className="section-padding bg-surface-muted"
    >
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Patologías que tratamos</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            ¿Qué te duele? Te ayudamos a recuperarte.
          </h2>
          <p className="mt-4 text-base text-ink-muted sm:text-lg">
            Tratamos las patologías más comunes del aparato locomotor con un
            mismo enfoque: diagnóstico preciso, tratamiento conservador siempre
            que sea posible y cirugía mínimamente invasiva cuando es necesaria.
          </p>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PATHOLOGIES.map((pathology, idx) => {
            const Icon = ICON_MAP[pathology.icon];
            return (
              <Reveal
                as="li"
                key={pathology.slug}
                delay={idx * 0.05}
                className="group rounded-2xl bg-white p-6 ring-1 ring-line shadow-card transition-shadow hover:shadow-cardHover"
              >
                <div
                  id={pathology.slug}
                  className="scroll-mt-24"
                  aria-hidden="true"
                />
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-secondary/10 text-brand-secondary">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-bold text-ink">
                  {pathology.title}
                </h3>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                  {pathology.description}
                </p>
                <Link
                  href="/#contacto"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-secondary hover:text-brand-primary transition-colors"
                >
                  Consulta tu caso
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
