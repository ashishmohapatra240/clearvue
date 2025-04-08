import { AboutSection } from "./components/AboutSection";
import { Hero } from "./components/Hero";
import { MissionSection } from "./components/MissionSection";
import { Navbar } from "./components/Navbar";
import { StoreLocator } from "./components/StoreLocator";
import { VisionSection } from "./components/VisionSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <VisionSection />
      <MissionSection />
      <StoreLocator />
      <ContactSection />
      <Footer />
    </>
  );
}
