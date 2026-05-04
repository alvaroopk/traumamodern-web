import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import TrustBand from "@/components/sections/TrustBand";
import Pathologies from "@/components/sections/Pathologies";
import Treatments from "@/components/sections/Treatments";
import AboutDoctor from "@/components/sections/AboutDoctor";
import HowWeWork from "@/components/sections/HowWeWork";
import WhyTraumamodern from "@/components/sections/WhyTraumamodern";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import VisitUs from "@/components/sections/VisitUs";
import Contact from "@/components/sections/Contact";

// La home hereda title/description del layout (default) — añadimos
// canonical explícito por seguridad y refinamos OG/Twitter para que
// el snippet sea idéntico al que devuelve la raíz.
export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBand />
      <Pathologies />
      <Treatments />
      <AboutDoctor />
      <HowWeWork />
      <WhyTraumamodern />
      <Testimonials />
      <Faq />
      <VisitUs />
      <Contact />
    </>
  );
}
