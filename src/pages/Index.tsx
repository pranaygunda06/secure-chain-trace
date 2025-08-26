import Hero from "@/components/Hero";
import SupplyChainFlow from "@/components/SupplyChainFlow";
import QRScanner from "@/components/QRScanner";
import Benefits from "@/components/Benefits";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <SupplyChainFlow />
      <QRScanner />
      <Benefits />
    </main>
  );
};

export default Index;
