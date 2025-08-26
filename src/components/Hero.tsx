import { Button } from "@/components/ui/button";
import { Shield, Eye, CheckCircle, QrCode } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-primary-foreground/5" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Secure Chain
            <span className="block bg-gradient-premium bg-clip-text text-transparent">
              Trace
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Blockchain-powered supply chain transparency. Track authenticity from source to shelf with immutable records.
          </p>
          
          {/* Key features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-4 bg-primary-foreground/10 rounded-lg backdrop-blur-sm">
              <Shield className="w-8 h-8 text-accent mb-2" />
              <span className="text-primary-foreground font-medium">Tamper-Proof</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-primary-foreground/10 rounded-lg backdrop-blur-sm">
              <Eye className="w-8 h-8 text-accent mb-2" />
              <span className="text-primary-foreground font-medium">Full Transparency</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-primary-foreground/10 rounded-lg backdrop-blur-sm">
              <CheckCircle className="w-8 h-8 text-accent mb-2" />
              <span className="text-primary-foreground font-medium">Verified Authentic</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-primary-foreground/10 rounded-lg backdrop-blur-sm">
              <QrCode className="w-8 h-8 text-accent mb-2" />
              <span className="text-primary-foreground font-medium">QR Tracking</span>
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="premium" size="lg" className="text-lg px-8 py-4">
              Start Tracking
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              View Demo
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;