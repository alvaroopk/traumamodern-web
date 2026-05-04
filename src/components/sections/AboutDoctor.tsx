import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutDoctor() {
  return (
    <section
      id="sobre-el-doctor"
      className="section-padding bg-surface-muted"
    >
      <div className="container-page">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative order-1 lg:order-1">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-2xl shadow-card lg:max-w-none">
              <Image
                src="/assets/doctor_lara.webp"
                alt="Dr. Francisco José Lara Pulido, traumatólogo en Sevilla, en su consulta de Traumamodern"
                fill
                sizes="(max-width: 1024px) 80vw, 480px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="order-2 lg:order-2 space-y-5">
            <span className="eyebrow">Sobre el Dr. Lara</span>
            <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
              Un especialista que opera, que diagnostica y que escucha.
            </h2>
            <p className="text-base text-ink-muted sm:text-lg">
              El Dr. Francisco José Lara Pulido lleva más de una década
              tratando lesiones del aparato locomotor en hospitales privados
              de referencia y junto a deportistas de élite.
            </p>
            <div className="space-y-3 text-base text-ink-muted">
              <p>
                Especialista en Cirugía Ortopédica y Traumatología, el Dr. Lara
                compagina la consulta privada de Traumamodern con su actividad
                como traumatólogo en el Hospital San Juan de Dios de Nervión y
                la Clínica del Carmen en Huelva. Es médico consultor de
                Cajasol Ciencias Rugby Sevilla.
              </p>
              <p>
                Su enfoque combina criterio quirúrgico real con un trato
                personal y directo: el mismo doctor que hace tu primera
                consulta es el que valora la imagen, indica el tratamiento y,
                si hace falta, te opera.
              </p>
            </div>
            <Link
              href="/sobre-el-doctor"
              className="btn-secondary inline-flex"
            >
              Conocer al Dr. Lara
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
