import Link from "next/link";
import type { ReactNode } from "react";

type LegalLayoutProps = {
  title: string;
  lastUpdated?: string;
  children: ReactNode;
};

export default function LegalLayout({
  title,
  lastUpdated = "Mayo 2026",
  children,
}: LegalLayoutProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-page max-w-3xl">
        <Link
          href="/"
          className="text-sm font-semibold text-brand-secondary hover:text-brand-primary"
        >
          ← Volver al inicio
        </Link>
        <h1 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl">
          {title}
        </h1>
        <p className="mt-2 text-sm text-ink-muted">
          Última actualización: {lastUpdated}
        </p>
        <div className="prose prose-slate mt-8 max-w-none text-ink-muted [&_a]:text-brand-secondary [&_a:hover]:text-brand-primary [&_h2]:font-display [&_h2]:text-ink [&_h2]:text-2xl [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:font-bold [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_ul]:mb-4 [&_strong]:text-ink">
          {children}
        </div>
        <p className="mt-10 rounded-xl bg-surface-muted p-4 text-xs text-ink-muted ring-1 ring-line">
          <strong>Aviso:</strong> Este texto es una plantilla genérica para
          clínica privada en España y debe ser revisado y validado por un
          asesor legal antes de la publicación oficial.
        </p>
      </div>
    </section>
  );
}
