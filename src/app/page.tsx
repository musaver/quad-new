import Preloader from "./components/Preloader";
import Offcanvas from "./components/Offcanvas";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import FeaturesSection from "./components/sections/FeaturesSection";
import ProcessSection from "./components/sections/ProcessSection";
import H2ServiceSection from "./components/sections/H2ServiceSection";
import ProjectSection from "./components/sections/ProjectSection";
import TestimonialSection from "./components/sections/TestimonialSection";
import ServicesSection from "./components/sections/ServicesSection";
import ClientsSection from "./components/sections/ClientsSection";
import BlogSection from "./components/sections/BlogSection";
import CTASection from "./components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Preloader />
      <Offcanvas />
      <div className="has-smooth" id="has_smooth"></div>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Header />
          <main>
            <HeroSection />
            <AboutSection />
            <FeaturesSection />
            <H2ServiceSection />
            <ProjectSection />
            <ProcessSection />
            <TestimonialSection />
            <ServicesSection />
            <ClientsSection />
            <BlogSection />
            <CTASection />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
