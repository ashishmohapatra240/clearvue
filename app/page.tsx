import { AboutSection } from "./components/AboutSection";
import { Hero } from "./components/Hero";
import { MissionSection } from "./components/MissionSection";
import { StoreLocator } from "./components/StoreLocator";
import { VisionSection } from "./components/VisionSection";
import { ContactSection } from "./components/ContactSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import Vision from "./components/Vision";

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
        <VisionSection />
      </div>
      <div id="mission">
        <MissionSection />
        <Vision/>
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
