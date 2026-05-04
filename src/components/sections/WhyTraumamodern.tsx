import Image from "next/image";
import Link from "next/link";
import { ADVANTAGES, type Advantage } from "@/lib/constants";
import {
  Clock,
  Stethoscope,
  ScanLine,
  Users,
  Monitor,
  Heart,
  ArrowRight,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const ICON_MAP: Record<Advantage["icon"], typeof Clock> = {
  clock: Clock,
  stethoscope: Stethoscope,
  scan: ScanLine,
  users: Users,
  monitor: Monitor,
  heart: Heart,
};

export default function WhyTraumamodern() {
  return (
    <section
      id="por-que"
      className="section-padding bg-brand-primary text-white"
    >
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5 space-y-5">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-accent">
              Por qué Traumamodern
            </span>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Por qué pacientes y deportistas eligen Traumamodern.
            </h2>
            <p className="text-base text-white/85 sm:text-lg">
              Lo que encontrarás aquí y no siempre fuera. Diagnóstico el mismo
              día, criterio quirúrgico real y trato personal de principio a
              fin.
            </p>
            <div className="relative mt-4 aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl">
              <Image
                src="/assets/doctor_lara_quirofano.webp"
                alt="Cirugía artroscópica en quirófano realizada por el Dr. Lara y su equipo"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover"
              />
            </div>
          </div>

          <ul className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
            {ADVANTAGES.map((advantage, idx) => {
              const Icon = ICON_MAP[advantage.icon];
              return (
                <Reveal
                  as="li"
                  key={advantage.title}
                  delay={idx * 0.05}
                  className="rounded-xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur"
                >
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-accent/15 text-brand-accent">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-base font-bold text-white">
                    {advantage.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-white/80 leading-relaxed">
                    {advantage.description}
                  </p>
                </Reveal>
              );
            })}
          </ul>
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/#contacto" className="btn-primary">
            Pedir mi primera consulta
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
