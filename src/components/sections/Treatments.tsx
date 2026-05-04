import Image from "next/image";
import Link from "next/link";
import { TREATMENTS, type Treatment } from "@/lib/constants";
import {
  Syringe,
  Droplet,
  ScanLine,
  Microscope,
  Activity,
  Pill,
  ArrowRight,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const ICON_MAP: Record<Treatment["icon"], typeof Activity> = {
  syringe: Syringe,
  droplet: Droplet,
  scope: Microscope,
  implant: Pill,
  ultrasound: ScanLine,
  needle: Syringe,
};

export default function Treatments() {
  return (
    <section id="tratamientos" className="section-padding bg-white">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Tratamientos avanzados</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            Tratamientos modernos, recuperación más rápida.
          </h2>
          <p className="mt-4 text-base text-ink-muted sm:text-lg">
            Aplicamos las técnicas más actuales en infiltraciones biológicas,
            cirugía mínimamente invasiva y diagnóstico por imagen en consulta.
          </p>
        </div>

        <ul className="mt-10 grid gap-6 lg:grid-cols-2">
          {TREATMENTS.map((treatment, idx) => {
            const Icon = ICON_MAP[treatment.icon];
            const hasImage = !!treatment.image;
            return (
              <Reveal
                as="li"
                key={treatment.slug}
                delay={idx * 0.05}
                className={`flex flex-col gap-5 rounded-2xl bg-surface-muted p-6 ring-1 ring-line ${
                  hasImage ? "lg:flex-row lg:items-stretch" : ""
                }`}
              >
                {hasImage && treatment.image ? (
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl lg:aspect-auto lg:w-2/5 lg:min-h-[220px]">
                    <Image
                      src={treatment.image}
                      alt={treatment.imageAlt ?? treatment.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                ) : null}

                <div className="flex flex-1 flex-col">
                  <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-ink">
                    {treatment.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                    {treatment.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ul>

        <div className="mt-10 flex justify-center">
          <Link href="/#contacto" className="btn-primary">
            Consulta si tu lesión es candidata
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
