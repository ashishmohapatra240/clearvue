import { AboutSection } from "./components/AboutSection";
import { Hero } from "./components/Hero";
import { MissionSection } from "./components/MissionSection";
import { Navbar } from "./components/Navbar";
import { StoreLocator } from "./components/StoreLocator";
import { VisionSection } from "./components/VisionSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { TestimonialsSection } from "./components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <TestimonialsSection />
      <div id="about">
        <AboutSection />
      </div>
      <div id="vision">
        <VisionSection />
      </div>
      <div id="mission">
        <MissionSection />
      </div>
      <div id="store-locator">
        <StoreLocator />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </>
  );
}
