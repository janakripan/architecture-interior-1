import Hero from "@/components/Hero";
import LatestProjects from "@/components/LatestProjects";
import ProfessionalService from "@/components/ProfessionalService";
import StatementBanner from "@/components/StatementBanner";
import ResidentialHome from "@/components/ResidentialHome";
import TestimonialsSection from "@/components/home/testimonials/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <PageTransition>
        <Hero />
        <LatestProjects />
        <ProfessionalService />
        <StatementBanner />
        <ResidentialHome />
        <TestimonialsSection />
        <CTASection />
        <Footer />
      </PageTransition>
    </main>
  );
}
