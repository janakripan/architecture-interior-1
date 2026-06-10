import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LatestProjects from "@/components/LatestProjects";
import ProfessionalService from "@/components/ProfessionalService";
import StatementBanner from "@/components/StatementBanner";
import ResidentialHome from "@/components/ResidentialHome";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <Hero />
      <LatestProjects />
      <ProfessionalService />
      <StatementBanner />
      <ResidentialHome />
      <CTASection />
      <Footer />
    </main>
  );
}
