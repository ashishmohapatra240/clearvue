import { AboutSection } from "./components/AboutSection";
import { Hero } from "./components/Hero";
import { MissionSection } from "./components/MissionSection";
import { StoreLocator } from "./components/StoreLocator";
import { ContactSection } from "./components/ContactSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import Vision from "./components/Vision";
import { BentoGrid } from "./components/BentoGrid";

export default function Home() {
  return (
    <>
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="solutions">
        <BentoGrid />
      </div>
      <div id="mission">
        <MissionSection />
        <Vision />
      </div>
      <div id="store-locator">
        <StoreLocator featured={true} />
      </div>
      <TestimonialsSection />
      <div id="contact">
        <ContactSection />
      </div>
    </>
  );
}
