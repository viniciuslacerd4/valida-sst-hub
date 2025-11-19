import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { ValueProps } from "@/components/landing/ValueProps";
import { Problems } from "@/components/landing/Problems";
import { Solution } from "@/components/landing/Solution";
import { Authority } from "@/components/landing/Authority";
import { StateRegistry } from "@/components/landing/StateRegistry";
import { WhoCanUse } from "@/components/landing/WhoCanUse";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { ServicesTable } from "@/components/landing/ServicesTable";
import { Pricing } from "@/components/landing/Pricing";
import { Benefits } from "@/components/landing/Benefits";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ValueProps />
        <Problems />
        <Solution />
        <Authority />
        <StateRegistry />
        <WhoCanUse />
        <HowItWorks />
        <ServicesTable />
        <Pricing />
        <Benefits />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
