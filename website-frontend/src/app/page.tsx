import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />

      {/* Solutions Section */}
      <section
        id="solutions"
        className="py-16 md:py-24 bg-zooft-light bg-opacity-30"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to <span className="gradient-text">Transform</span> Your
            Business?
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            Partner with Zooft Technologies and experience the difference our
            innovative solutions can make for your business. From custom software
            development to cybersecurity, we have the expertise to help you
            succeed.
          </p>
          <a
            href="#contact"
            className="inline-block bg-zooft-primary hover:bg-zooft-dark text-white font-medium px-8 py-4 rounded-lg transition-colors"
          >
            Start Your Project Today
          </a>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
