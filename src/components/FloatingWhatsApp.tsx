import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export default function FloatingWhatsApp() {
  return (
    <a
      href={CONTACT.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-20 right-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-whatsapp text-white shadow-lg transition-transform hover:scale-105 sm:bottom-24"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}
