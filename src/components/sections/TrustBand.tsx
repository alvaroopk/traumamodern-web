import { Hospital, Shield, Trophy, Star } from "lucide-react";
import { TRUST_PILLS } from "@/lib/constants";

const ICONS = [Hospital, Shield, Trophy, Star];

export default function TrustBand() {
  return (
    <section
      aria-label="Credenciales y centros donde opera el Dr. Lara"
      className="border-y border-line bg-white"
    >
      <div className="container-page py-6">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-ink-muted sm:grid-cols-4">
          {TRUST_PILLS.map((pill, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            return (
              <li
                key={pill}
                className="flex items-start gap-2 leading-snug"
              >
                <Icon
                  className="h-4 w-4 mt-0.5 shrink-0 text-brand-secondary"
                  aria-hidden="true"
                />
                <span className="font-medium">{pill}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
