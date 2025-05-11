
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import HeroSection from "@/components/sections/HeroSection";
import PricingSection from "@/components/sections/PricingSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import CtaSection from "@/components/sections/CtaSection";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <PricingSection />
      <BenefitsSection />
      <HowItWorks />
      <FAQ />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
